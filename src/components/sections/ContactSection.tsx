import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Instagram, Phone, Mail, Clock } from "lucide-react";
import storefront from "@/assets/storefront.jpg";

export const ContactSection = () => {
  return (
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
  );
};
