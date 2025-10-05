import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { UploadArea } from "@/components/UploadArea";
import { PricingCard } from "@/components/PricingCard";
import { Sparkles, Upload, Zap, Mail, ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";
import before3 from "@/assets/before-3.jpg";
import after3 from "@/assets/after-3.jpg";

const Index = () => {
  const [images, setImages] = useState<File[]>([]);
  const [email, setEmail] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<"basico" | "premium" | null>(null);
  const [showUploadSection, setShowUploadSection] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handlePayment = async () => {
    if (images.length !== 2) {
      toast({ title: "Atenção", description: "Envie 2 fotos para continuar.", variant: "destructive" });
      return;
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast({ title: "Atenção", description: "E-mail inválido.", variant: "destructive" });
      return;
    }
    if (!selectedPlan) {
      toast({ title: "Atenção", description: "Selecione um plano.", variant: "destructive" });
      return;
    }

    toast({ title: "Processando", description: "Conectando ao sistema de pagamento..." });
    
    // Simular pagamento bem-sucedido e redirect
    setTimeout(() => {
      navigate(`/obrigado?email=${encodeURIComponent(email)}`);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Transforme sua selfie em uma{" "}
            <span className="text-primary glow-text">foto de perfil de estúdio</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Use nossa Inteligência Artificial para gerar mais de 25 fotos profissionais em minutos.
            Impressione no LinkedIn, em seu portfólio e em suas redes.
          </p>
          <Button variant="hero" size="lg" onClick={() => setShowUploadSection(true)} className="text-lg px-12 py-6 h-auto">
            <Sparkles className="w-6 h-6" />
            Gerar Minhas Fotos Agora
          </Button>
        </div>
        <ChevronDown className="absolute bottom-8 left-1/2 -translate-x-1/2 w-8 h-8 text-muted-foreground animate-bounce" />
      </section>

      {/* Before/After Gallery */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Veja a Transformação</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <BeforeAfterSlider beforeImage={before1} afterImage={after1} alt="Exemplo 1" />
            <BeforeAfterSlider beforeImage={before2} afterImage={after2} alt="Exemplo 2" />
            <BeforeAfterSlider beforeImage={before3} afterImage={after3} alt="Exemplo 3" />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Como Funciona</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Upload, title: "Faça o Upload", desc: "Envie 2 fotos do seu rosto com boa iluminação." },
              { icon: Sparkles, title: "Escolha seu Plano", desc: "Selecione o pacote de fotos que desejar." },
              { icon: Mail, title: "Receba por E-mail", desc: "Suas imagens chegam em até 10 minutos." },
            ].map((step, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upload & Pricing */}
      {showUploadSection && (
        <section id="upload" className="py-20 px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Crie Suas Fotos Profissionais</h2>
            <UploadArea onImagesChange={setImages} />
            <Input type="email" placeholder="Seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} className="glass" />
            <div className="grid md:grid-cols-2 gap-6">
              <PricingCard title="Plano Básico" price="R$ 7,00" photosCount={25} isSelected={selectedPlan === "basico"} onSelect={() => setSelectedPlan("basico")} disabled={images.length !== 2} />
              <PricingCard title="Plano Premium" price="R$ 12,00" photosCount={45} isPopular isSelected={selectedPlan === "premium"} onSelect={() => setSelectedPlan("premium")} disabled={images.length !== 2} />
            </div>
            <Button variant="hero" size="lg" className="w-full text-lg" onClick={handlePayment} disabled={!selectedPlan || images.length !== 2}>
              <Zap className="w-5 h-5" />
              Pagar com Cartão e Gerar
            </Button>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto space-y-8">
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
      </section>
    </div>
  );
};

export default Index;
