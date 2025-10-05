import React from "react";
import { Lightbulb } from "lucide-react";
import { UploadArea } from "@/components/UploadArea";
import { Input } from "@/components/ui/input";

interface UploadSectionProps {
  email: string;
  onEmailChange: (value: string) => void;
  onImagesChange: (images: File[]) => void;
}

const UploadSection: React.FC<UploadSectionProps> = ({ email, onEmailChange, onImagesChange }) => {
  return (
    <section className="bg-gray-900 py-20 text-white">
      <div className="max-w-4xl mx-auto space-y-8 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Crie Suas Fotos Profissionais</h2>

        {/* Upload Area (accepts up to 2 images of up to 5MB each by internal validation) */}
        <UploadArea onImagesChange={onImagesChange} />

        {/* Tips Box */}
        <div className="flex items-start gap-3 p-4 rounded-lg border border-white/10 bg-white/5">
          <Lightbulb className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-medium text-foreground">Dicas para melhores resultados:</p>
            <ul className="mt-2 space-y-1 text-gray-300 list-disc list-inside">
              <li>Use fotos com boa iluminação natural</li>
              <li>Rosto visível e centralizado</li>
              <li>Fundo simples e limpo</li>
              <li>Sem óculos escuros ou filtros</li>
            </ul>
          </div>
        </div>

        {/* Email Input */}
        <Input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          className="glass"
        />
      </div>
    </section>
  );
};

export default UploadSection;
