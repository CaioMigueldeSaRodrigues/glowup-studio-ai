import { useEffect } from "react";
import { CheckCircle, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useSearchParams } from "react-router-dom";

const Obrigado = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email") || "seu e-mail";

  useEffect(() => {
    // Add confetti effect or celebration animation
    document.title = "Pagamento Confirmado - You Studio";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Success Card */}
        <div className="glass rounded-2xl p-8 md:p-12 text-center space-y-6 animate-scale-in">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center animate-glow-pulse">
              <CheckCircle className="w-12 h-12 text-primary" />
            </div>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Pagamento Recebido!
            </h1>
            <p className="text-lg text-muted-foreground">
              Sua sessão de fotos com IA já começou
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/20 border border-border">
              <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-sm text-foreground">E-mail de entrega</p>
                <p className="text-sm text-muted-foreground mt-1 break-all">{email}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/20 border border-border">
              <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-sm text-foreground">Tempo estimado</p>
                <p className="text-sm text-muted-foreground mt-1">Aproximadamente 10 minutos</p>
              </div>
            </div>
          </div>

          {/* Important Message */}
          <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
            <p className="text-sm text-foreground">
              <span className="font-semibold">Importante:</span> Você receberá suas imagens no
              e-mail <span className="font-medium text-primary">{email}</span> em aproximadamente
              10 minutos. Fique de olho na sua caixa de entrada e também na pasta de spam!
            </p>
          </div>

          {/* What's Next */}
          <div className="space-y-3 pt-4">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Enquanto isso...
            </h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>✨ Nossa IA está criando variações profissionais das suas fotos</li>
              <li>🎨 Aplicando diferentes estilos e fundos de estúdio</li>
              <li>🔍 Otimizando iluminação e detalhes faciais</li>
              <li>📧 Preparando tudo para envio ao seu e-mail</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <Button
              onClick={() => navigate("/")}
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              Voltar para o Início
            </Button>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          Alguma dúvida? Entre em contato conosco pelo e-mail{" "}
          <a href="mailto:suporte@youstudio.com" className="text-primary hover:underline">
            suporte@youstudio.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Obrigado;
