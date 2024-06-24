import React, {useState} from 'react'
import { db } from '../Config';
import { storage } from '../Config';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const AddPets = () => {

  const [petName, setPetName] = useState('');
  const [petAge, setPetAge] = useState('');
  const [petAnimal, setPetAnimal] = useState('');
  const [petBreed, setPetBreed] = useState('');
  const [petAnimalShelter, setPetAnimalShelter] = useState('');
  const [petImg, setPetImg] = useState(null);
  const [error, setError] = useState('');

  const types = ['image/png', 'image/jpeg']

  const petImgHandler = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)){
      setPetImg(selectedFile);
      setError('');
    } else {
      setPetImg(null);
      setError('Please select a valid image type png or jpeg');
    }
  }
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
              Animal: petAnimal,
              Breed: petBreed,
              AnimalShelter: petAnimalShelter,
              Img: url,
            });
            setPetName('');
            setPetAge('');
            setPetAnimal('');
            setPetBreed('');
            setPetAnimalShelter('');
            setPetImg(null);
            setError('');
            document.getElementById('file').value = '';
          } catch (err) {
            setError(err.message);
          }
        });
      }
    );
  };


/*

  // add pet form submit event
  const addPet = (e) => {
    e.preventDefault();
    // console.log(petName, petAge, petAnimal, petBreed, petAnimalShelter, petImg);
    // storing the image
    const uploadTask = storage.ref(`pet-images/${petImg.name}`).put(petImg);
    uploadTask.on('state_changed', snapshot => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(progress);
    }, err => {
      setError(err.message)
    }, () => {
      // getting the pet url and if successful, then storing the pet in db
      storage.ref('pet-images').child(petImg.name).getDownloadURL().then(url => {
        db.collection('pets').add({
          Name: petName,
          Age: petAge,
          Animal: petAnimal,
          Breed: petBreed,
          AnimalShelter: petAnimalShelter,
          Img: url
        }).then(() => {
          // if successfully added, empty the state for clearing input fields
          setPetName('');
          setPetAge('');
          setPetAnimal('');
          setPetBreed('');
          setPetAnimalShelter('');
          setPetImg('');
          setError('');
          document.getElementById('file').value = '';
        }).catch(err => setError(err.message));

      })
    })
  } 

  */
  return (
    <div className = 'container'>
       <a href='/'>
          <img
            src= "denovo.png"
            alt='logo'
            width={130}
            height={29}
            className='m-5 w-[200px] h-[50px]'
          />
        </a>
      <section className = 'm-0 w-full'> 
      <h1 className = 'text-purple-900 flex justify-center font-palanquin text-4xl capitalize font-bold'> Add Pets </h1>
      </section>

      <section className = 'padding flex flex-col gap-4 pt-10 pb-10'> 
      <form autoComplete = "off" className = 'form-group' onSubmit = {addPet}> 
      <label htmlFor = "pet-name"> Name </label>
      <br/>
      <input type= 'text' className = 'form-control pb-2 pt-2' required 
        //in the onChange event, we are setting the state as to whatever the user enters in that field
      onChange={(e) => setPetName(e.target.value)} value={petName}/>
      <br/>
      <label htmlFor = "pet-age"> Age (please specify how many months/ years) </label>
      <br/>
      <input type= 'text' className = 'form-control pb-2 pt-2' required
      onChange={(e) => setPetAge(e.target.value)} value={petAge}/>
      <br/>
      <label htmlFor = "pet-animal"> Animal </label>
      <br/>
      <input type= 'text' className = 'form-control pb-2 pt-2' required
      onChange={(e) => setPetAnimal(e.target.value)} value={petAnimal}/>
      <br/>
      <label htmlFor = 'pet-breed'> Breed</label>
      <br/>
      <input type ='text' className = 'form-control pb-2 pt-2' required
      onChange={(e) => setPetBreed(e.target.value)} value={petBreed}/>
      <br/>
      <label htmlFor = "pet-animalshelter"> Animal Shelter </label>
      <br/>
      <input type= 'text' className = 'form-control pb-2 pt-2' required
      onChange={(e) => setPetAnimalShelter(e.target.value)} value={petAnimalShelter}/>
      <br/>
      <label htmlFor = 'pet-img'> Picture of Pet (format: png/jpeg) </label>
      <br/>
      <input type = 'file' className = 'form-control'
      onChange={petImgHandler} id = 'file'/>
      <br/>
      <button className = 'btn btn-success btn-md mybtn'> ADD </button>
      </form>
      {error && <span>{error}</span>}
      </section>
      
      </div>
  )
}

export default AddPets