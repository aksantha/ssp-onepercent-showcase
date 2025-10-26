import menuLatte from "@/assets/menu-latte.jpg";
import menuColdBrew from "@/assets/menu-coldbrew.jpg";
import menuCappuccino from "@/assets/menu-cappuccino.jpg";
import menuFlatWhite from "@/assets/menu-flatwhite.jpg";
import menuEspresso from "@/assets/menu-espresso.jpg";
import menuMatcha from "@/assets/menu-matcha.jpg";

export interface MenuItem {
  name: string;
  shortDesc: string;
  fullDesc: string;
  price: string;
  category: string;
  image: string;
  ingredients: string[];
  brewTime: string;
}

export const menuItems: MenuItem[] = [
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
