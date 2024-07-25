import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db, storage, auth, onAuthStateChanged } from '../components/firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import NavAnimalShelter from '../components/NavAnimalShelter';
import { allowedEmails } from '../constants';

const AddPets = () => {
  const [petName, setPetName] = useState('');
  const [petAge, setPetAge] = useState('');
  const [petAnimal, setPetAnimal] = useState('');
  const [petBreed, setPetBreed] = useState('');
  const [petAnimalShelter, setPetAnimalShelter] = useState('');
  const [petGender, setPetGender] = useState('');
  const [petDescription, setPetDescription] = useState('');
  const [petImg, setPetImg] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isAllowed, setIsAllowed] = useState(false);

  const navigate = useNavigate();
  const types = ['image/png', 'image/jpeg'];

  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (allowedEmails.includes(user.email)) {
          setIsAllowed(true);
        } else {
          navigate("/not-authorized"); // Redirect to a not-authorized page
        }
      } else {
        navigate("/sign-in"); // Redirect to sign-in page if not logged in
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const petImgHandler = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setPetImg(selectedFile);
      setError('');
    } else {
      setPetImg(null);
      setError('Please select a valid image type png or jpeg');
    }
  };

  const addPet = async (e) => {
    e.preventDefault();

    if (!petImg) {
      setError('Please select an image');
      return;
    }

    const storageRef = ref(storage, `pet-images/${petImg.name}`);
    const uploadTask = uploadBytesResumable(storageRef, petImg);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      },
      (error) => {
        setError(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
          try {
            await addDoc(collection(db, 'pets'), {
              Name: petName,
              Age: petAge,
              Gender: petGender,
              Animal: petAnimal,
              Breed: petBreed,
              AnimalShelter: petAnimalShelter,
              Description: petDescription,
              Img: url,
            });
            setPetName('');
            setPetAge('');
            setPetAnimal('');
            setPetBreed('');
            setPetAnimalShelter('');
            setPetGender('');
            setPetDescription('');
            setPetImg(null);
            setError('');
            setSuccess(true);
            document.getElementById('file').value = '';
            setTimeout(() => setSuccess(false), 3000); // Hide after 3 seconds
          } catch (err) {
            setError(err.message);
          }
        });
      }
    );
  };

  if (!isAllowed) {
    return <div>Checking authorization...</div>; 
  }

  return (
    <div className='container'>
      <section className='pb-5'> <NavAnimalShelter /> </section>
      <section className='m-5 w-full'>
        <h1 className='text-purple-900 flex justify-center font-palanquin text-4xl capitalize font-bold'> Add Pets </h1>
      </section>

      <section className='padding flex flex-col gap-4 pb-10'>
        <form autoComplete="off" className='form-group' onSubmit={addPet}>
          <label htmlFor="pet-name"> Name </label>
          <br />
          <input type='text' className='form-control pb-2 pt-2' required
            //in the onChange event, we are setting the state as to whatever the user enters in that field
            onChange={(e) => setPetName(e.target.value)} value={petName} />
          <br />
          <label htmlFor="pet-age"> Age (please specify how many months/ years) </label>
          <br />
          <input type='text' className='form-control pb-2 pt-2' required
            onChange={(e) => setPetAge(e.target.value)} value={petAge} />
          <br />
          <label htmlFor="pet-gender"> Gender </label>
          <br />
          <input type='text' className='form-control pb-2 pt-2' required
            onChange={(e) => setPetGender(e.target.value)} value={petGender} />
          <br />
          <label htmlFor="pet-animal"> Animal </label>
          <br />
          <input type='text' className='form-control pb-2 pt-2' required
            onChange={(e) => setPetAnimal(e.target.value)} value={petAnimal} />
          <br />
          <label htmlFor='pet-breed'> Breed</label>
          <br />
          <input type='text' className='form-control pb-2 pt-2' required
            onChange={(e) => setPetBreed(e.target.value)} value={petBreed} />
          <br />
          <label htmlFor="pet-animalshelter"> Animal Shelter </label>
          <br />
          <input type='text' className='form-control pb-2 pt-2' required
            onChange={(e) => setPetAnimalShelter(e.target.value)} value={petAnimalShelter} />
          <br />
          <label htmlFor="pet-gender"> Description </label>
          <br />
          <input type='text' className='form-control pt-2 pb-5' required
            onChange={(e) => setPetDescription(e.target.value)} value={petDescription} />
          <br />
          <label htmlFor='pet-img'> Picture of Pet (format: png/jpeg) </label>
          <br />
          <input type='file' className='form-control'
            onChange={petImgHandler} id='file' />
          <br />
          <button className='btn btn-success btn-md mybtn'> ADD </button>
          <p className='mt-1'> * Details might take a while to upload. Please wait until you see the message 'Pet added successfully!'</p>
        </form>
        {error && <span>{error}</span>}
        {success && <span className='success'>Pet added successfully!</span>}
      </section>
    </div>
  );
};

export default AddPets;
