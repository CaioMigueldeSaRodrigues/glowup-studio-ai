import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CreditCard, QrCode, Check } from 'lucide-react';
import { PricingCard } from './PricingCard';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface PricingFaqProps {
  onPayment: (method: 'card' | 'pix', selectedPlan?: string) => void;
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
    onPayment(method, selectedPlan || '');
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
              <div className={`bg-background-secondary p-6 rounded-xl border transition-all ${
                selectedMethod === 'card' 
                  ? 'border-primary ring-2 ring-primary' 
                  : 'border-slate-800 hover:border-primary/50'
              }`}>
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <CreditCard className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-foreground">Cartão de Crédito</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    <span className="text-foreground/90 text-sm">Até 12x no cartão</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    <span className="text-foreground/90 text-sm">Processamento seguro</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    <span className="text-foreground/90 text-sm">Aprovação em segundos</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => handlePaymentMethod('card')}
                  variant={selectedMethod === 'card' ? 'default' : 'outline'}
                  className="w-full py-4 text-md"
                  disabled={!selectedPlan}
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  Pagar com Cartão
                </Button>
              </div>

              {/* PIX Payment Option */}
              <div className={`bg-background-secondary p-6 rounded-xl border-2 transition-all ${
                selectedMethod === 'pix' 
                  ? 'border-green-500 ring-2 ring-green-500/30' 
                  : 'border-green-500/50 hover:border-green-500/80'
              }`}>
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-green-50 rounded-full">
                    <QrCode className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-foreground">PIX</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-foreground/90 text-sm">5% de desconto</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-foreground/90 text-sm">Pagamento instantâneo</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-foreground/90 text-sm">Sem juros</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => handlePaymentMethod('pix')}
                  variant={selectedMethod === 'pix' ? 'default' : 'outline'}
                  className="w-full py-4 text-md bg-green-600 hover:bg-green-700 text-white border-green-600 hover:border-green-700"
                  disabled={!selectedPlan}
                >
                  <QrCode className="w-4 h-4 mr-2" />
                  Pagar com PIX
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  Quais tipos de fotos devo enviar?
                </AccordionTrigger>
                <AccordionContent>
                  Para garantir os melhores resultados, envie 2 fotos tipo selfie onde seu rosto esteja bem iluminado (luz natural é ideal), visível e centralizado. Evite óculos escuros, chapéus ou filtros que alterem suas feições. Fundos simples funcionam melhor.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  Em quanto tempo recebo as imagens?
                </AccordionTrigger>
                <AccordionContent>
                  Quase instantaneamente. Nosso processo é 100% automatizado. Assim que o pagamento for confirmado, nossa IA começa a trabalhar, e você receberá um e-mail com o link para suas novas fotos em até 10 minutos.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  Meus dados estão seguros?
                </AccordionTrigger>
                <AccordionContent>
                  Sim, segurança e privacidade são nossa prioridade máxima. Suas fotos são usadas apenas para a geração das imagens e são deletadas permanentemente dos nossos servidores após 24 horas. Não vendemos nem compartilhamos seus dados com terceiros.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingFaq;
