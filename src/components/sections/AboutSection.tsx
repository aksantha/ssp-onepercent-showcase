import coffeeCup from "@/assets/coffee-cup.jpg";
import { FeaturesSection } from "./FeaturesSection";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-accent/30 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 observe-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Kenapa SatuPersen?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami percaya bahwa peningkatan kecil setiap hari membawa perubahan besar
          </p>
        </div>

        <FeaturesSection />

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="observe-scroll">
            <img
              src={coffeeCup}
              alt="SatuPersen Coffee"
              className="rounded-2xl shadow-card w-full hover:shadow-hover transition-smooth"
            />
          </div>
          <div className="space-y-6 observe-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Craft Coffee dengan Cinta
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Setiap cangkir kopi kami dibuat dengan perhatian penuh terhadap detail.
              Dari pemilihan biji kopi terbaik hingga proses penyajian yang sempurna,
              kami memastikan pengalaman kopi yang tak terlupakan.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Barista kami yang berpengalaman siap menghadirkan berbagai varian kopi,
              dari espresso klasik hingga specialty drink yang unik. Kami berkomitmen
              untuk terus berkembang 1% lebih baik setiap harinya, sama seperti filosofi
              yang kami bagikan kepada setiap pengunjung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
