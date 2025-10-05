import React from "react";
import { Button } from "@/components/ui/button";

export const Hero: React.FC = () => {
  return (
    <section className="h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto h-full flex flex-col items-center justify-center text-center space-y-6 px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Transforme sua selfie em uma {""}
          <span className="text-orange-500">foto de perfil de estúdio</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
          Use nossa Inteligência Artificial para gerar mais de 25 fotos profissionais em minutos. Impressione no LinkedIn, em seu portfólio e em suas redes.
        </p>
        <Button size="lg" className="text-lg px-12 py-6 bg-orange-500 hover:bg-orange-600 text-white rounded-lg h-auto">
          Gerar Minhas Fotos Agora
        </Button>
      </div>
    </section>
  );
};

export default Hero;
