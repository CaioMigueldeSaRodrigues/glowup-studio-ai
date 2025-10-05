import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { PricingCard } from "@/components/PricingCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const PricingFaq: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<"basico" | "premium" | null>(null);

  return (
    <section className="bg-gray-900 py-20 text-white">
      <div className="max-w-5xl mx-auto px-4 space-y-12">
        {/* Pricing */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <PricingCard
                title="Plano Básico"
                price="R$ 7,00"
                photosCount={25}
                isSelected={selectedPlan === "basico"}
                onSelect={() => setSelectedPlan("basico")}
              />
            </div>
            <div className="flex-1">
              {/* Selo de MAIS POPULAR já é suportado por isPopular */}
              <PricingCard
                title="Plano Premium"
                price="R$ 12,00"
                photosCount={45}
                isPopular
                isSelected={selectedPlan === "premium"}
                onSelect={() => setSelectedPlan("premium")}
              />
            </div>
          </div>

          {/* Payment Buttons */}
          <div className="flex flex-col md:flex-row gap-4">
            <Button className="w-full text-lg h-auto py-3">Pagar com Cartão</Button>
            <Button
              className="w-full text-lg bg-green-100 text-green-800 hover:bg-green-200 px-6 py-3 rounded-lg h-auto flex items-center justify-center"
            >
              <span className="mr-2">🅿️</span>
              Pagar com PIX
            </Button>
          </div>
        </div>

        {/* FAQ */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="1" className="glass px-6 rounded-lg border-none">
              <AccordionTrigger>Quais tipos de fotos devo enviar?</AccordionTrigger>
              <AccordionContent>Envie fotos com boa iluminação, rosto centralizado e fundo simples.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="2" className="glass px-6 rounded-lg border-none">
              <AccordionTrigger>Em quanto tempo recebo as imagens?</AccordionTrigger>
              <AccordionContent>Em até 10 minutos após a confirmação do pagamento.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="3" className="glass px-6 rounded-lg border-none">
              <AccordionTrigger>Meus dados estão seguros?</AccordionTrigger>
              <AccordionContent>Sim, usamos criptografia e não compartilhamos suas informações.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default PricingFaq;
