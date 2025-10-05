import { useState } from "react";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Transformation from "@/components/Transformation";
import PricingFaq from "@/components/PricingFaq";
import UploadSection from "@/components/UploadSection";

const Index = () => {
  const [images, setImages] = useState<File[]>([]);
  

  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Transformation />
      <UploadSection onImagesChange={setImages} />
      <PricingFaq />
    </div>
  );
};

export default Index;
