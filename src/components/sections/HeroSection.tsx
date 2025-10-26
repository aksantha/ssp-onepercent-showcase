import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-coffee.jpg";

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
          Satu Persen Lebih Baik
          <br />
          <span className="text-primary">Setiap Hari</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Nikmati kopi berkualitas premium di ruang yang dirancang untuk
          menginspirasi dan menenangkan
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="shadow-card hover:shadow-hover transition-smooth hover:scale-105"
            onClick={() => scrollToSection('menu')}
          >
            Lihat Menu
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-card transition-smooth hover:scale-105"
            onClick={() => scrollToSection('contact')}
          >
            Kunjungi Kami
          </Button>
        </div>
      </div>
    </section>
  );
};
