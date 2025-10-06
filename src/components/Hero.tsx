import React from "react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto h-full flex flex-col items-center justify-center text-center space-y-6 px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Transforme sua selfie em uma {""}
          <span className="text-orange-500">foto de perfil de estúdio</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
          Impressione recrutadores, clientes e colegas com uma foto de perfil profissional que projeta a autoridade que sua carreira merece. Otimizado para o LinkedIn.
        </p>
        <div className="flex flex-col items-center space-y-4">
          <Button 
            size="lg" 
            className="text-lg px-12 py-6 bg-orange-500 hover:bg-orange-600 text-white rounded-lg h-auto"
            onClick={onCtaClick}
          >
            Gerar minha foto para o LinkedIn
          </Button>
          <p className="text-sm text-gray-400">
            Junte-se a mais de 10.000 profissionais que já transformaram seu perfil.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
