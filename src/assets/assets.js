import makanan from "./makanan.webp";
import minuman from "./minuman.webp";
import ayam from "./ayam.jpg";
import krecek from "./krecek.jpg";
import gudeg from "./gudeg.jpg";
import tempe from "./tempe.jpg";
import esjeruk from "./esjeruk.jpg";
import esteh from "./estea.jpg";
import lecitea from "./lecitea.jpg";
import lemontea from "./lemontea.jpg";
import add_icon_green from "./add_icon_green.png";
import remove_icon_red from "./remove_icon_red.png";

export const assets = {
  add_icon_green,
  remove_icon_red,
};

export const menu_list = [
  {
    menu_name: "Makanan",
    image: makanan,
  },
  {
    menu_name: "Minuman",
    image: minuman,
  },
];

export const all_menu = [
  {
    _id: "1",
    name: "Ayam Bakar",
    image: ayam,
    description: "Ini adalah deskripsi menu sesuai dengan pilihannya.",
    price: 10000,
    category: "Makanan",
  },
  {
    _id: "2",
    name: "Krecek",
    image: krecek,
    description: "Ini adalah deskripsi menu sesuai dengan pilihannya.",
    price: 15000,
    category: "Makanan",
  },
  {
    _id: "3",
    name: "Gudeg",
    image: gudeg,
    description: "Ini adalah deskripsi menu sesuai dengan pilihannya.",
    price: 15000,
    category: "Makanan",
  },
  {
    _id: "4",
    name: "Tempe Bacem",
    image: tempe,
    description: "Ini adalah deskripsi menu sesuai dengan pilihannya.",
    price: 3000,
    category: "Makanan",
  },
  {
    _id: "5",
    name: "Es Jeruk",
    image: esjeruk,
    description: "Ini adalah deskripsi menu sesuai dengan pilihannya.",
    price: 5000,
    category: "Minuman",
  },
  {
    _id: "6",
    name: "Es Teh Manis",
    image: esteh,
    description: "Ini adalah deskripsi menu sesuai dengan pilihannya.",
    price: 3000,
    category: "Minuman",
  },
  {
    _id: "7",
    name: "Lemon Tea",
    image: lemontea,
    description: "Ini adalah deskripsi menu sesuai dengan pilihannya.",
    price: 5000,
    category: "Minuman",
  },
  {
    _id: "8",
    name: "Leci Tea",
    image: lecitea,
    description: "Ini adalah deskripsi menu sesuai dengan pilihannya.",
    price: 7000,
    category: "Minuman",
  },
];
