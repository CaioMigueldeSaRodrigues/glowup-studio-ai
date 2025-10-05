import React from "react";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";
import before3 from "@/assets/before-3.jpg";
import after3 from "@/assets/after-3.jpg";

const Transformation: React.FC = () => {
  return (
    <section className="bg-gray-900 py-20 text-white">
      <div className="max-w-6xl mx-auto space-y-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Veja a Transformação</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <BeforeAfterSlider beforeImage={before1} afterImage={after1} alt="Exemplo 1" />
          <BeforeAfterSlider beforeImage={before2} afterImage={after2} alt="Exemplo 2" />
          <BeforeAfterSlider beforeImage={before3} afterImage={after3} alt="Exemplo 3" />
        </div>
      </div>
    </section>
  );
};

export default Transformation;
