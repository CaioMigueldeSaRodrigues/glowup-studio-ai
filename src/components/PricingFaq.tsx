import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CreditCard, QrCode, Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  photosCount: number;
  features: string[];
  isPopular?: boolean;
  onSelect: () => void;
}

interface PricingFaqProps {
  onPayment: (method: 'card' | 'pix') => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  photosCount,
  features,
  isPopular = false,
  onSelect
}) => (
  <div className={`relative bg-white p-8 rounded-xl shadow-sm border-2 transition-all duration-200 ${
    isPopular 
      ? 'border-blue-500 transform -translate-y-1 shadow-lg' 
      : 'border-gray-200 hover:border-gray-300'
  }`}>
    {isPopular && (
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
        MAIS POPULAR
      </div>
    )}
    <h3 className="text-2xl font-bold text-center mb-2">{title}</h3>
    <div className="text-center mb-6">
      <span className="text-4xl font-bold">{price}</span>
      <span className="text-gray-500">/foto</span>
    </div>
    <div className="text-center text-blue-600 font-medium mb-6">
      {photosCount} fotos profissionais
    </div>
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Button 
      onClick={onSelect}
      className={`w-full py-6 text-lg ${
        isPopular 
          ? 'bg-blue-600 hover:bg-blue-700' 
          : 'bg-gray-800 hover:bg-gray-900'
      }`}
    >
      Selecionar Plano
    </Button>
  </div>
);

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
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Escolha o melhor plano para você</h2>
          <p className="text-lg text-gray-600">Fotos profissionais que destacam seu perfil no LinkedIn</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <PricingCard
            title="Plano Básico"
            price="R$ 9,90"
            photosCount={25}
            features={[
              "25 fotos de alta resolução",
              "3 estilos diferentes",
              "Ajustes profissionais",
              "Download imediato"
            ]}
            onSelect={() => handlePlanSelect('basic')}
          />
          <PricingCard
            title="Plano Premium"
            price="R$ 11,90"
            photosCount={45}
            features={[
              "45 fotos de alta resolução",
              "5 estilos diferentes",
              "Ajustes profissionais premium",
              "Download imediato",
              "Suporte prioritário"
            ]}
            isPopular
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
              <div className={`bg-white p-8 rounded-xl shadow-sm border-2 transition-all ${
                selectedMethod === 'card' ? 'border-blue-500' : 'border-gray-200 hover:border-gray-300'
              }`}>
                <div className="flex items-center justify-center mb-6">
                  <div className="p-3 bg-blue-50 rounded-full">
                    <CreditCard className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">Cartão de Crédito</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Até 12x no cartão</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Processamento seguro</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Aprovação em segundos</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => handlePaymentMethod('card')}
                  variant={selectedMethod === 'card' ? 'default' : 'outline'}
                  className="w-full py-6 text-lg"
                >
                  <CreditCard className="w-5 h-5 mr-2" />
                  Pagar com Cartão
                </Button>
              </div>

              {/* PIX Payment Option */}
              <div className={`bg-white p-8 rounded-xl shadow-sm border-2 transition-all ${
                selectedMethod === 'pix' ? 'border-green-500' : 'border-gray-200 hover:border-gray-300'
              }`}>
                <div className="flex items-center justify-center mb-6">
                  <div className="p-3 bg-green-50 rounded-full">
                    <QrCode className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">PIX</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>5% de desconto</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Pagamento instantâneo</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Sem juros</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => handlePaymentMethod('pix')}
                  variant={selectedMethod === 'pix' ? 'default' : 'outline'}
                  className="w-full py-6 text-lg border-green-600 text-green-600 hover:bg-green-50"
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
