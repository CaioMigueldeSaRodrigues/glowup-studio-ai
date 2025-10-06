import { useState, useRef } from "react";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Transformation from "@/components/Transformation";
import { UploadArea } from "@/components/UploadArea";
import SocialProof from "@/components/SocialProof";
import PricingFaq from "@/components/PricingFaq";

const Index = () => {
  const [images, setImages] = useState<File[]>([]);
  const [email, setEmail] = useState("");
  const uploadSectionRef = useRef<HTMLDivElement>(null);

  const handleScrollToUpload = () => {
    uploadSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePayment = async (method: 'card' | 'pix') => {
    console.log("Método de pagamento selecionado:", method);
    // ... rest of the validation function ...
    
    if (images.length !== 2) {
      // Show error toast
      return;
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      // Show error toast
      return;
    }
    
    // Proceed with payment based on method
    if (method === 'pix') {
      // Handle PIX payment
    } else {
      // Handle card payment
    }
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
        <PricingFaq onPayment={handlePayment} />
      </div>
    </div>
  );
};

export default Index;