import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CreditCard, QrCode, Check } from 'lucide-react';
import { PricingCard } from './PricingCard';

interface PricingFaqProps {
  onPayment: (method: 'card' | 'pix') => void;
}

const PricingFaq: React.FC<PricingFaqProps> = ({ onPayment }) => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [selectedMethod, setSelectedMethod] = useState<'card' | 'pix' | null>(null);
  
  const handlePlanSelect = (plan: string) => {
    setSelectedPlan(plan);
    setSelectedMethod(null);
  };

  const handlePaymentMethod = (method: 'card' | 'pix') => {
    setSelectedMethod(method);
    onPayment(method);
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Escolha o melhor plano para você</h2>
          <p className="text-lg text-foreground/80">Fotos profissionais que destacam seu perfil no LinkedIn</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <PricingCard
            title="Plano Básico"
            price="R$ 9,90"
            photosCount={25}
            isPopular={false}
            isSelected={selectedPlan === 'basic'}
            onSelect={() => handlePlanSelect('basic')}
          />
          <PricingCard
            title="Plano Premium"
            price="R$ 11,90"
            photosCount={45}
            isPopular={true}
            isSelected={selectedPlan === 'premium'}
            onSelect={() => handlePlanSelect('premium')}
          />
        </div>

        {selectedPlan && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">
              Selecione a forma de pagamento
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Card Payment Option */}
              <div className={`bg-background-secondary p-8 rounded-xl shadow-sm border-2 transition-all ${
                selectedMethod === 'card' 
                  ? 'border-primary ring-2 ring-primary' 
                  : 'border-slate-800 hover:border-primary/50'
              }`}>
                <div className="flex items-center justify-center mb-6">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <CreditCard className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4 text-foreground">Cartão de Crédito</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                    <span className="text-foreground/90">Até 12x no cartão</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                    <span className="text-foreground/90">Processamento seguro</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                    <span className="text-foreground/90">Aprovação em segundos</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => handlePaymentMethod('card')}
                  variant={selectedMethod === 'card' ? 'default' : 'outline'}
                  className="w-full py-6 text-lg bg-slate-800 hover:bg-slate-700"
                >
                  <CreditCard className="w-5 h-5 mr-2" />
                  Pagar com Cartão
                </Button>
              </div>

              {/* PIX Payment Option */}
              <div className={`bg-background-secondary p-8 rounded-xl shadow-sm border-2 transition-all ${
                selectedMethod === 'pix' 
                  ? 'border-primary ring-2 ring-primary' 
                  : 'border-slate-800 hover:border-primary/50'
              }`}>
                <div className="flex items-center justify-center mb-6">
                  <div className="p-3 bg-green-50 rounded-full">
                    <QrCode className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4 text-foreground">PIX</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                    <span className="text-foreground/90">5% de desconto</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                    <span className="text-foreground/90">Pagamento instantâneo</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                    <span className="text-foreground/90">Sem juros</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => handlePaymentMethod('pix')}
                  variant={selectedMethod === 'pix' ? 'default' : 'outline'}
                  className="w-full py-6 text-lg bg-slate-800 hover:bg-slate-700 text-foreground"
                >
                  <QrCode className="w-5 h-5 mr-2" />
                  Pagar com PIX
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingFaq;
