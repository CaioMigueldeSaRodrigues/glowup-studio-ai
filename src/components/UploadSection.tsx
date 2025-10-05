import React from "react";
import { Lightbulb } from "lucide-react";
import { UploadArea } from "@/components/UploadArea";

interface UploadSectionProps {
  onImagesChange: (images: File[]) => void;
}

const UploadSection: React.FC<UploadSectionProps> = ({ onImagesChange }) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">Crie Suas Fotos Profissionais</h2>

        <UploadArea onImagesChange={onImagesChange} />

        <div className="flex items-start gap-3 p-4 rounded-lg bg-background-secondary">
          <Lightbulb className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-medium text-foreground">Dicas para melhores resultados:</p>
            <ul className="mt-2 space-y-1 text-muted-foreground list-disc list-inside">
              <li>Use fotos com boa iluminação natural</li>
              <li>Rosto visível e centralizado</li>
              <li>Fundo simples e limpo</li>
              <li>Sem óculos escuros ou filtros</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;
