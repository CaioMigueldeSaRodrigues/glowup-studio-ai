import React from 'react';
import { Button } from '@/components/ui/button';
import { CreditCard, QrCode } from 'lucide-react';

interface PricingFaqProps {
  onPayment: (method: 'card' | 'pix') => void;
}

const PricingFaq: React.FC<PricingFaqProps> = ({ onPayment }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Escolha a melhor opção para você</h2>
          <p className="text-lg text-gray-600">Pague com segurança e tenha acesso imediato</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card Payment Option */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-blue-50 rounded-full">
                <CreditCard className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">Cartão de Crédito</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Até 12x no cartão</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Processamento seguro</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Aprovação em segundos</span>
              </li>
            </ul>
            <Button 
              onClick={() => onPayment('card')}
              className="w-full py-6 text-lg bg-blue-600 hover:bg-blue-700"
            >
              <CreditCard className="w-5 h-5 mr-2" />
              Pagar com Cartão
            </Button>
          </div>

          {/* PIX Payment Option */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-green-50 rounded-full">
                <QrCode className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">PIX</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>5% de desconto</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Pagamento instantâneo</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Sem juros</span>
              </li>
            </ul>
            <Button 
              onClick={() => onPayment('pix')}
              variant="outline"
              className="w-full py-6 text-lg border-2 border-green-600 text-green-600 hover:bg-green-50"
            >
              <QrCode className="w-5 h-5 mr-2" />
              Pagar com PIX
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingFaq;
