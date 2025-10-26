import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { menuItems, MenuItem } from "@/data/menuData";
import { MenuDetailDialog } from "@/components/MenuDetailDialog";

export const MenuSection = () => {
  const [selectedMenu, setSelectedMenu] = useState<MenuItem | null>(null);
  const [showAllMenu, setShowAllMenu] = useState(false);
  
  const displayedItems = showAllMenu ? menuItems : menuItems.slice(0, 3);

  return (
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
          {displayedItems.map((item, index) => (
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
          <div className="text-center mt-12 observe-scroll">
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

      <MenuDetailDialog 
        selectedMenu={selectedMenu} 
        onClose={() => setSelectedMenu(null)} 
      />
    </section>
  );
};
