import Button from "../components/Button";
import { aboutus } from "../assets/images";

const AboutUs = () => {
  return (
    <section id="about-us"
    className = "flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className = "flex flex-1 flex-col">
        <h2 className='mt-2 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          <span className='text-purple-900'>Who </span> Are We?
        </h2>
        <p className='mt-5 lg:max-w-lg info-text'>
        Our platform serves as a centralized hub, allowing individuals to easily discover pets available for adoption, as well as volunteer opportunities across all animal shelters in Singapore.
        </p>
        <p className = "mt-6 lg:max-w-lg info-text">
        Through simplifying the adoption process, we aim to connect these deserving pets with caring families, providing them with the love and care they deserve for a second chance at happiness.
        </p>
        <div className = "mt-10">
          <a href = '/about' className = 'no-underline'> 
        <Button label='View more'/> 
        </a>
        </div>
      </div>
      <div className = "flex-1 flex justify-center items-center">
        <img 
        src = {aboutus}
        alt = "dog up for adoption"
        width={570}
        height = {522}
        className = "object-contain"/>
      </div>
    </section>
  )
}

export default AboutUs