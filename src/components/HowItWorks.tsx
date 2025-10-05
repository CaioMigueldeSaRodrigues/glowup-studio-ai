import React from "react";
import { Upload, Sparkles, Mail } from "lucide-react";

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Upload,
      title: "Faça o Upload",
      desc: "Envie 2 fotos do seu rosto com boa iluminação.",
    },
    {
      icon: Sparkles,
      title: "Escolha seu Plano",
      desc: "Selecione o pacote de fotos que desejar.",
    },
    {
      icon: Mail,
      title: "Receba por E-mail",
      desc: "Suas imagens chegam em até 10 minutos.",
    },
  ];

  return (
    <section className="bg-gray-900 py-20 text-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Como Funciona</h2>
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex-1 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-orange-500/15 flex items-center justify-center">
                <step.icon className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-gray-300">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
