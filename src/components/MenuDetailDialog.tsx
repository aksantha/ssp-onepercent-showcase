import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import { MenuItem } from "@/data/menuData";

interface MenuDetailDialogProps {
  selectedMenu: MenuItem | null;
  onClose: () => void;
}

export const MenuDetailDialog = ({ selectedMenu, onClose }: MenuDetailDialogProps) => {
  return (
    <Dialog open={!!selectedMenu} onOpenChange={onClose}>
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
                onClick={onClose}
              >
                Tutup
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
