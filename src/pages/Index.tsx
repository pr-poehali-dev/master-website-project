import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WorkingAreas from "@/components/WorkingAreas";
import Guarantee from "@/components/Guarantee";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <WorkingAreas />
      <Guarantee />
      <Contact />
    </div>
  );
};

export default Index;
