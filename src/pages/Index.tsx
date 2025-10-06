import { useState, useRef } from "react";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Transformation from "@/components/Transformation";
import { UploadArea } from "@/components/UploadArea";
import SocialProof from "@/components/SocialProof";

const Index = () => {
  const [images, setImages] = useState<File[]>([]);
  const [email, setEmail] = useState("");
  const uploadSectionRef = useRef<HTMLDivElement>(null);

  const handleScrollToUpload = () => {
    uploadSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Hero onCtaClick={handleScrollToUpload} />
      <SocialProof />
      <HowItWorks />
      <Transformation />
      <div ref={uploadSectionRef}>
        <UploadArea
          email={email}
          onEmailChange={setEmail}
          onImagesChange={setImages}
        />
      </div>
    </div>
  );
};

export default Index;