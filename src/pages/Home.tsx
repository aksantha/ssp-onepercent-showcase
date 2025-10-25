import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coffee, Heart, Sparkles, MapPin, Instagram, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-coffee.jpg";
import coffeeCup from "@/assets/coffee-cup.jpg";
import storefront from "@/assets/storefront.jpg";

const Home = () => {
  const [showAllMenu, setShowAllMenu] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".observe-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
  
  const popularMenu = [
    {
      name: "SatuPersen Latte",
      description: "Espresso lembut dengan susu steamed, signature blend kami",
      price: "35.000",
      category: "Hot Coffee",
    },
    {
      name: "Cold Brew Original",
      description: "Kopi dingin dengan ekstraksi 12 jam, smooth dan bold",
      price: "35.000",
      category: "Cold Coffee",
    },
    {
      name: "Flat White",
      description: "Espresso ganda dengan microfoam susu yang halus",
      price: "36.000",
      category: "Hot Coffee",
    },
    {
      name: "Caramel Macchiato",
      description: "Espresso, susu, vanilla, dan caramel yang manis",
      price: "38.000",
      category: "Hot Coffee",
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
          <div className="text-center mb-16 observe-scroll">
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
                className="p-8 text-center gradient-card shadow-card hover-lift observe-scroll"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-smooth group-hover:scale-110">
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
      
      {/* Menu Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 observe-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Menu Favorit
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pilihan terbaik dari barista kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {(showAllMenu ? popularMenu : popularMenu.slice(0, 4)).map((item, index) => (
              <Card
                key={index}
                className="p-6 gradient-card shadow-soft hover-lift observe-scroll group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full transition-smooth group-hover:scale-150" />
                  <div className="relative flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-smooth">
                          {item.name}
                        </h3>
                        <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                          {item.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="relative flex justify-end mt-4">
                    <span className="text-xl font-bold text-primary">
                      Rp {item.price}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center observe-scroll">
            <Link to="/menu">
              <Button size="lg" className="shadow-card hover:shadow-hover transition-smooth hover:scale-105">
                Lihat Menu Lengkap
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                dari espresso klasik hingga specialty drink yang unik.
              </p>
              <Link to="/about">
                <Button size="lg" className="shadow-card hover:shadow-hover transition-smooth hover:scale-105">
                  Tentang Kami
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Location Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 observe-scroll">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Kunjungi Kami
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Temukan kami di lokasi yang nyaman dan mudah diakses. 
                Rasakan suasana tenang dan inspiratif untuk bekerja atau bersantai.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-card shadow-soft hover-lift">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Alamat</h3>
                    <p className="text-muted-foreground">
                      Jl. Sudirman No. 123, Jakarta Selatan
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-lg bg-card shadow-soft hover-lift">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Telepon</h3>
                    <p className="text-muted-foreground">+62 812 3456 7890</p>
                  </div>
                </div>
              </div>
              
              <Link to="/contact">
                <Button size="lg" className="shadow-card hover:shadow-hover transition-smooth hover:scale-105">
                  Informasi Lengkap
                </Button>
              </Link>
            </div>
            
            <div className="observe-scroll">
              <img
                src={storefront}
                alt="SatuPersen Coffee Storefront"
                className="rounded-2xl shadow-card w-full hover:shadow-hover transition-smooth"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8 observe-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Mulai Hari dengan Secangkir Inspirasi
            </h2>
            <p className="text-lg text-muted-foreground">
              Kunjungi SatuPersen Coffee dan rasakan perbedaannya
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="shadow-card hover:shadow-hover transition-smooth hover:scale-105"
                >
                  Temukan Lokasi Kami
                </Button>
              </Link>
              <a 
                href="https://instagram.com/satupersen.coffee" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-card transition-smooth hover:scale-105"
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  Follow Instagram
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
