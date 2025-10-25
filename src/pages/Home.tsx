import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Coffee, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-coffee.jpg";
import coffeeCup from "@/assets/coffee-cup.jpg";

const Home = () => {
  const features = [
    {
      icon: Coffee,
      title: "Kopi Premium",
      description: "Biji kopi pilihan dari petani lokal, disangrai dengan sempurna",
    },
    {
      icon: Heart,
      title: "Suasana Tenang",
      description: "Ruang nyaman dengan desain minimalis untuk bekerja atau bersantai",
    },
    {
      icon: Sparkles,
      title: "Pengalaman Inspiratif",
      description: "Setiap cangkir adalah cerita, setiap kunjungan adalah inspirasi",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
            <Link to="/menu">
              <Button size="lg" className="shadow-card hover:shadow-hover transition-smooth">
                Lihat Menu
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-card transition-smooth"
              >
                Kunjungi Kami
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Kenapa SatuPersen?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kami percaya bahwa peningkatan kecil setiap hari membawa perubahan besar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 text-center gradient-card shadow-card hover:shadow-hover transition-smooth animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src={coffeeCup}
                alt="SatuPersen Coffee"
                className="rounded-2xl shadow-card w-full"
              />
            </div>
            <div className="space-y-6 animate-slide-in-right">
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
                dari espresso klasik hingga specialty drink yang unik.
              </p>
              <Link to="/menu">
                <Button size="lg" className="shadow-card hover:shadow-hover transition-smooth">
                  Eksplor Menu Lengkap
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Mulai Hari dengan Secangkir Inspirasi
            </h2>
            <p className="text-lg text-muted-foreground">
              Kunjungi SatuPersen Coffee dan rasakan perbedaannya
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="shadow-card hover:shadow-hover transition-smooth"
              >
                Temukan Lokasi Kami
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
