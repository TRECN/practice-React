import Hero from "./Hero";
import { useParams } from "react-router-dom";
const AboutView = () => {
    const {id}=useParams();
    console.log(id)
  return (
    <>
      <Hero text="Movie details" />
      
    </>
  );
};

export default AboutView;
