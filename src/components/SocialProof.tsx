import { Star, Image as ImageIcon } from "lucide-react";

const SocialProof = () => {
  return (
    <section className="bg-background-secondary py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Rating Column */}
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-orange-100 p-3 rounded-full text-orange-500">
              <Star className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold">Avaliação 4.9/5</h3>
            <p className="text-muted-foreground">+500 Clientes Satisfeitos</p>
          </div>

          {/* Volume Column */}
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-blue-100 p-3 rounded-full text-blue-500">
              <ImageIcon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold">Mais de 12.500 Fotos Geradas</h3>
            <p className="text-muted-foreground">Resultados Profissionais</p>
          </div>

          {/* Authority Column */}
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-purple-100 p-3 rounded-full text-purple-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold">Destaque em Publicações</h3>
            <div className="flex items-center justify-center space-x-6 grayscale opacity-80">
              <span className="font-bold text-lg">Forbes</span>
              <span className="font-bold text-lg">Exame</span>
              <span className="font-bold text-lg">Época</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
