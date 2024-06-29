import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const HelpUs = () => {
  return (
    <section
    id = "help-us"
    className = "max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  )
}

export default HelpUs