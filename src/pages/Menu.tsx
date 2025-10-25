import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Menu = () => {
  const menuCategories = [
    {
      category: "Signature Coffee",
      items: [
        {
          name: "SatuPersen Latte",
          description: "Espresso lembut dengan susu steamed, signature blend kami",
          price: "35.000",
          popular: true,
        },
        {
          name: "Caramel Macchiato",
          description: "Espresso, susu, vanilla, dan caramel yang manis",
          price: "38.000",
        },
        {
          name: "Cappuccino",
          description: "Espresso klasik dengan foam susu yang sempurna",
          price: "32.000",
        },
        {
          name: "Flat White",
          description: "Espresso ganda dengan microfoam susu yang halus",
          price: "36.000",
          popular: true,
        },
      ],
    },
    {
      category: "Cold Brew & Iced",
      items: [
        {
          name: "Cold Brew Original",
          description: "Kopi dingin dengan ekstraksi 12 jam, smooth dan bold",
          price: "35.000",
          popular: true,
        },
        {
          name: "Iced Americano",
          description: "Espresso dengan air dingin dan es batu",
          price: "30.000",
        },
        {
          name: "Iced Caffe Latte",
          description: "Espresso dengan susu dingin yang creamy",
          price: "34.000",
        },
        {
          name: "Iced Mocha",
          description: "Espresso, cokelat, dan susu dengan es",
          price: "38.000",
        },
      ],
    },
    {
      category: "Manual Brew",
      items: [
        {
          name: "V60 Pour Over",
          description: "Single origin beans, clean dan bright",
          price: "40.000",
        },
        {
          name: "French Press",
          description: "Full-bodied coffee dengan rich flavor",
          price: "38.000",
        },
        {
          name: "Aeropress",
          description: "Smooth dan versatile, pilihan barista",
          price: "38.000",
        },
      ],
    },
    {
      category: "Non Coffee",
      items: [
        {
          name: "Matcha Latte",
          description: "Premium matcha dengan susu creamy",
          price: "38.000",
        },
        {
          name: "Chocolate",
          description: "Cokelat premium dengan susu",
          price: "32.000",
        },
        {
          name: "Lemon Tea",
          description: "Teh segar dengan lemon",
          price: "25.000",
        },
      ],
    },
    {
      category: "Pastries & Snacks",
      items: [
        {
          name: "Croissant",
          description: "Croissant butter yang renyah",
          price: "25.000",
        },
        {
          name: "Banana Bread",
          description: "Homemade banana bread yang lembut",
          price: "28.000",
        },
        {
          name: "Cookies",
          description: "Chocolate chip cookies segar",
          price: "20.000",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Menu Kami
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Setiap minuman dibuat dengan biji kopi pilihan dan keahlian barista profesional
          </p>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {menuCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-8 pb-3 border-b-2 border-primary">
                  {category.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Card
                      key={itemIndex}
                      className="p-6 gradient-card shadow-soft hover:shadow-card transition-smooth"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-semibold text-foreground">
                              {item.name}
                            </h3>
                            {item.popular && (
                              <Badge className="bg-primary text-primary-foreground">
                                Popular
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <span className="text-lg font-semibold text-primary">
                          Rp {item.price}
                        </span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-12 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">
            *Harga dapat berubah sewaktu-waktu. Untuk informasi lebih lanjut, hubungi kami.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Menu;
