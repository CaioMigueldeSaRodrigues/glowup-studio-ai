import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  title: string;
  price: string;
  photosCount: number;
  isPopular?: boolean;
  isSelected: boolean;
  onSelect: () => void;
  disabled?: boolean;
}

export const PricingCard = ({
  title,
  price,
  photosCount,
  isPopular,
  isSelected,
  onSelect,
  disabled,
}: PricingCardProps) => {
  return (
    <div
      onClick={!disabled ? onSelect : undefined}
      className={`relative p-6 rounded-xl transition-all cursor-pointer ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : isSelected
          ? "glass glow-border scale-105"
          : "glass hover:scale-105 hover:border-primary/50"
      }`}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
            Mais Popular
          </div>
        </div>
      )}

      {/* Selected Checkmark */}
      {isSelected && (
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center glow-border">
          <Check className="w-5 h-5 text-primary-foreground" />
        </div>
      )}

      <div className="space-y-4">
        {/* Title */}
        <div>
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{photosCount} Fotos Profissionais</p>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-foreground">{price}</span>
        </div>

        {/* Features */}
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-primary flex-shrink-0" />
            <span>{photosCount} fotos em alta resolução</span>
          </li>
          <li className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-primary flex-shrink-0" />
            <span>Processamento em até 10 minutos</span>
          </li>
          <li className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-primary flex-shrink-0" />
            <span>Diversos estilos profissionais</span>
          </li>
          <li className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-primary flex-shrink-0" />
            <span>Entrega por e-mail</span>
          </li>
        </ul>

        {/* CTA Button */}
        <Button
          variant={isSelected ? "default" : "outline"}
          className="w-full"
          onClick={!disabled ? onSelect : undefined}
          disabled={disabled}
        >
          {isSelected ? "Plano Selecionado" : "Selecionar Plano"}
        </Button>
      </div>
    </div>
  );
};
