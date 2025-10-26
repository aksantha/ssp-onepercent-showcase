import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Coffee, Heart, Sparkles, MapPin, Instagram, Phone, Mail, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-coffee.jpg";
import coffeeCup from "@/assets/coffee-cup.jpg";
import storefront from "@/assets/storefront.jpg";
import menuLatte from "@/assets/menu-latte.jpg";
import menuColdBrew from "@/assets/menu-coldbrew.jpg";
import menuCappuccino from "@/assets/menu-cappuccino.jpg";
import menuFlatWhite from "@/assets/menu-flatwhite.jpg";
import menuEspresso from "@/assets/menu-espresso.jpg";
import menuMatcha from "@/assets/menu-matcha.jpg";

const Home = () => {
  const [selectedMenu, setSelectedMenu] = useState<any>(null);
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
  
  const menuItems = [
    {
      name: "SatuPersen Latte",
      shortDesc: "Espresso lembut dengan susu steamed",
      fullDesc: "Signature blend kami yang dibuat dengan espresso double shot berkualitas premium, dicampur dengan susu steamed yang lembut dan creamy. Disajikan dengan latte art yang cantik, menciptakan pengalaman kopi yang sempurna untuk memulai hari Anda.",
      price: "35.000",
      category: "Hot Coffee",
      image: menuLatte,
      ingredients: ["Double shot espresso", "Steamed milk", "Micro foam"],
      brewTime: "3-4 menit",
    },
    {
      name: "Cold Brew Original",
      shortDesc: "Kopi dingin dengan ekstraksi 12 jam",
      fullDesc: "Kopi dingin yang diekstraksi selama 12 jam menghasilkan rasa yang smooth, bold, dan rendah asam. Disajikan dengan es untuk kesegaran maksimal, sempurna untuk hari yang panas atau sebagai boost energi saat bekerja.",
      price: "35.000",
      category: "Cold Coffee",
      image: menuColdBrew,
      ingredients: ["Cold brew concentrate", "Ice cubes", "Filtered water"],
      brewTime: "12 jam ekstraksi",
    },
    {
      name: "Cappuccino",
      shortDesc: "Espresso klasik dengan foam sempurna",
      fullDesc: "Minuman klasik Italia yang dibuat dengan espresso shot yang kuat, steamed milk, dan topped dengan thick milk foam yang creamy. Rasio sempurna antara espresso, susu, dan foam menciptakan keseimbangan rasa yang luar biasa.",
      price: "32.000",
      category: "Hot Coffee",
      image: menuCappuccino,
      ingredients: ["Single shot espresso", "Steamed milk", "Milk foam"],
      brewTime: "3-4 menit",
    },
    {
      name: "Flat White",
      shortDesc: "Espresso ganda dengan microfoam halus",
      fullDesc: "Minuman specialty coffee asal Australia dengan double shot espresso yang strong, dicampur dengan velvety microfoam susu yang sangat halus. Lebih creamy dari latte namun lebih strong dari cappuccino, menciptakan pengalaman rasa kopi yang intens namun smooth.",
      price: "36.000",
      category: "Hot Coffee",
      image: menuFlatWhite,
      ingredients: ["Double shot ristretto", "Microfoam milk", "Latte art"],
      brewTime: "3-4 menit",
    },
    {
      name: "Espresso",
      shortDesc: "Shot espresso murni dan kuat",
      fullDesc: "Pure espresso shot yang diekstrak dengan tekanan tinggi dari biji kopi pilihan kami. Menghasilkan crema yang kaya, body yang full, dan flavor yang complex. Sempurna untuk penikmat kopi sejati yang menghargai rasa kopi murni tanpa tambahan.",
      price: "28.000",
      category: "Hot Coffee",
      image: menuEspresso,
      ingredients: ["Single/Double shot espresso", "Crema layer"],
      brewTime: "25-30 detik",
    },
    {
      name: "Matcha Latte",
      shortDesc: "Premium matcha dengan susu creamy",
      fullDesc: "Matcha premium grade dari Jepang yang diblend dengan steamed milk yang creamy. Kaya akan antioksidan dan memberikan energi yang stabil tanpa jitters. Rasa earthy yang khas dari matcha berpadu sempurna dengan creamy milk, menghasilkan minuman yang sehat dan lezat.",
      price: "38.000",
      category: "Non Coffee",
      image: menuMatcha,
      ingredients: ["Premium matcha powder", "Steamed milk", "Optional: honey"],
      brewTime: "2-3 menit",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              Lihat Menu
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-card transition-smooth hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              Kunjungi Kami
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 text-center gradient-card shadow-card hover-lift observe-scroll group"
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
      
      {/* Menu Section */}
      <section id="menu" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 observe-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Menu Favorit Kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pilihan terbaik dari barista kami untuk pengalaman kopi yang sempurna
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(showAllMenu ? menuItems : menuItems.slice(0, 3)).map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden gradient-card shadow-card hover-lift observe-scroll group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-smooth">
                      {item.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {item.shortDesc}
                    </p>
                    <p className="text-2xl font-bold text-primary">
                      Rp {item.price}
                    </p>
                  </div>
                  <Button 
                    className="w-full shadow-soft hover:shadow-card transition-smooth"
                    onClick={() => setSelectedMenu(item)}
                  >
                    Lihat Selengkapnya
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {!showAllMenu && menuItems.length > 3 && (
            <div className="text-center mt-12">
              <Button 
                size="lg"
                variant="outline"
                className="bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-card transition-smooth hover:scale-105"
                onClick={() => setShowAllMenu(true)}
              >
                Lihat Lebih Banyak Menu
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-accent/30 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 observe-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Kunjungi Kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Temukan kami di lokasi yang nyaman dan mudah diakses
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 observe-scroll">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="p-6 gradient-card shadow-soft hover-lift group">
                  <MapPin className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-smooth" />
                  <h3 className="font-semibold text-foreground mb-2">Alamat</h3>
                  <p className="text-sm text-muted-foreground">
                    Jl. Sudirman No. 123<br />Jakarta Selatan, 12190
                  </p>
                </Card>
                
                <Card className="p-6 gradient-card shadow-soft hover-lift group">
                  <Phone className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-smooth" />
                  <h3 className="font-semibold text-foreground mb-2">Telepon</h3>
                  <p className="text-sm text-muted-foreground">
                    +62 812 3456 7890
                  </p>
                </Card>
                
                <Card className="p-6 gradient-card shadow-soft hover-lift group">
                  <Mail className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-smooth" />
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <p className="text-sm text-muted-foreground">
                    hello@satupersen.coffee
                  </p>
                </Card>
                
                <Card className="p-6 gradient-card shadow-soft hover-lift group">
                  <Clock className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-smooth" />
                  <h3 className="font-semibold text-foreground mb-2">Jam Buka</h3>
                  <p className="text-sm text-muted-foreground">
                    Senin - Minggu<br />08:00 - 22:00
                  </p>
                </Card>
              </div>
              
              <Card className="p-6 gradient-card shadow-soft hover-lift group">
                <Instagram className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-smooth" />
                <h3 className="font-semibold text-foreground mb-2">Follow Instagram Kami</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  @satupersen.coffee - Update menu terbaru dan promo menarik
                </p>
                <a 
                  href="https://instagram.com/satupersen.coffee" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="hover:scale-105 transition-smooth">
                    <Instagram className="w-4 h-4 mr-2" />
                    Kunjungi Instagram
                  </Button>
                </a>
              </Card>
            </div>
            
            <div className="observe-scroll">
              <img
                src={storefront}
                alt="SatuPersen Coffee Storefront"
                className="rounded-2xl shadow-card w-full hover:shadow-hover transition-smooth"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center observe-scroll">
            <Card className="p-12 gradient-card shadow-card max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Mulai Hari dengan Secangkir Inspirasi
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Kunjungi SatuPersen Coffee dan rasakan perbedaannya
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="shadow-card hover:shadow-hover transition-smooth hover:scale-105">
                    <MapPin className="w-5 h-5 mr-2" />
                    Buka di Maps
                  </Button>
                </a>
                <a 
                  href="tel:+6281234567890"
                >
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-card transition-smooth hover:scale-105"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Hubungi Kami
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Menu Detail Dialog */}
      <Dialog open={!!selectedMenu} onOpenChange={() => setSelectedMenu(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedMenu && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold text-foreground mb-2">
                  {selectedMenu.name}
                </DialogTitle>
                <DialogDescription className="text-primary text-xl font-semibold">
                  Rp {selectedMenu.price}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img 
                    src={selectedMenu.image} 
                    alt={selectedMenu.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Deskripsi</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedMenu.fullDesc}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Bahan-bahan</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {selectedMenu.ingredients.map((ingredient: string, idx: number) => (
                      <li key={idx}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Waktu penyajian: {selectedMenu.brewTime}</span>
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full shadow-card hover:shadow-hover transition-smooth"
                  onClick={() => setSelectedMenu(null)}
                >
                  Tutup
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Home;
