const PetCard = ({imgURL, changeBigPetImage, bigPetImg}) => {
    const handleClick = () => {
        if (bigPetImg !== imgURL.bigPet) 
      {
        changeBigPetImage(imgURL.bigPet)
      }
    }

  return (
    <div className  = {`border-2 rounded-xl 
    ${bigPetImg === imgURL.bigPet
          ? "border-purple-900"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
        <div>
            <img 
            src = {imgURL.thumbnail}
            alt = "pets"
            width = {127}
            height = {103}
            className = "object-contain flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:mp-4"/>
        </div>
    </div>
  )
}

export default PetCard