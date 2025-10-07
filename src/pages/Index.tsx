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

  const handlePayment = async (method: 'card' | 'pix', selectedPlan?: string) => {
    console.log("Método de pagamento selecionado:", method);
    
    if (images.length !== 2) {
      // Show error toast
      return;
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      // Show error toast
      return;
    }
    
    try {
      const response = await fetch('https://n8n.ampliview.com.br/webhook-test/25173d82-f193-4f6b-ab71-d7ea46ca2d4c', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          selectedPlan,
          paymentMethod: method
        })
      });

      if (response.ok) {
        window.location.href = '/obrigado';
      } else {
        throw new Error('Falha na requisição');
      }
    } catch (error) {
      console.error('Erro ao processar pagamento:', error);
      // Show error toast
      // toast.error('Falha ao conectar com o servidor. Tente novamente.');
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