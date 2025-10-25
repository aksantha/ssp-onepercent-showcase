import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Lokasi",
      content: "Jl. Inspirasi No. 99, Jakarta Selatan 12150",
    },
    {
      icon: Phone,
      title: "Telepon",
      content: "+62 812 3456 7890",
    },
    {
      icon: Mail,
      title: "Email",
      content: "hello@satupersen.coffee",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      content: "Senin - Minggu: 08.00 - 22.00 WIB",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Kunjungi Kami
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kami senang mendengar dari Anda. Mari bertemu untuk secangkir kopi!
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="p-6 gradient-card shadow-card hover:shadow-hover transition-smooth animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {info.title}
                </h3>
                <p className="text-sm text-muted-foreground">{info.content}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Temukan Kami di Maps
            </h2>
            <p className="text-lg text-muted-foreground">
              Lokasi strategis dan mudah diakses
            </p>
          </div>

          <Card className="overflow-hidden shadow-card animate-fade-in">
            <div className="aspect-video bg-accent/50 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground mb-4">
                  Integrasi Google Maps akan ditampilkan di sini
                </p>
                <p className="text-sm text-muted-foreground">
                  Jl. Inspirasi No. 99, Jakarta Selatan 12150
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Follow Us
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ikuti perjalanan kopi kami di Instagram dan dapatkan update terbaru
              tentang menu spesial, event, dan inspirasi harian.
            </p>

            <div className="flex flex-col items-center gap-6">
              <a
                href="https://instagram.com/satupersencoffee"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Button
                  size="lg"
                  className="gap-3 shadow-card hover:shadow-hover transition-smooth"
                >
                  <Instagram className="w-5 h-5" />
                  @satupersencoffee
                </Button>
              </a>

              <div className="grid grid-cols-3 gap-4 w-full max-w-xl">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-accent rounded-lg shadow-soft hover:shadow-card transition-smooth animate-scale-in"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <Instagram className="w-8 h-8 text-muted-foreground" />
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-sm text-muted-foreground">
                Feed Instagram kami - Coming Soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Siap untuk Secangkir Inspirasi?
            </h2>
            <p className="text-lg text-muted-foreground">
              Kunjungi kami hari ini dan rasakan perbedaan SatuPersen Coffee
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="tel:+6281234567890">
                <Button size="lg" className="shadow-card hover:shadow-hover transition-smooth">
                  <Phone className="w-5 h-5 mr-2" />
                  Hubungi Kami
                </Button>
              </a>
              <a href="mailto:hello@satupersen.coffee">
                <Button
                  size="lg"
                  variant="outline"
                  className="shadow-soft hover:shadow-card transition-smooth"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Kirim Email
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
