export type MenuCard = {
  name: string;
  desc: string;
  image: string;
};

export type WhyChooseItem = {
  text: string;
  iconDark: string;
  iconLight: string;
};

export type ServiceCard = {
  title: string;
  text: string;
  image: string;
};

export const menuCards: MenuCard[] = [
  {
    name: "Kombo Spesial Naffil",
    desc: "Paket favorit untuk dinikmati bersama",
    image: "/images/spesial_combo_naffil.png",
  },
  {
    name: "Ayam Bakar Bumbu Iloni",
    desc: "Rempah khas dengan aroma bakaran",
    image: "/images/ayam_bakar_bumbu_iloni.png",
  },
  {
    name: "Dabu-Dabu Goreng Mujair",
    desc: "Pedas segar dengan rasa gurih",
    image: "/images/dabu_dabu_goreng_mujair.png",
  },
  {
    name: "Sop Buah Segar",
    desc: "Manis dingin untuk penutup",
    image: "/images/sop_buah.png",
  },
];

export const whyChoose: WhyChooseItem[] = [
  {
    text: "Bahan segar dipilih setiap hari",
    iconDark: "/icons/why-fresh.svg",
    iconLight: "/icons/why-fresh-light.svg",
  },
  {
    text: "Racikan rasa Nusantara yang konsisten",
    iconDark: "/icons/why-nusantara.svg",
    iconLight: "/icons/why-nusantara-light.svg",
  },
  {
    text: "Pelayanan ramah untuk keluarga dan komunitas",
    iconDark: "/icons/why-friendly.svg",
    iconLight: "/icons/why-friendly-light.svg",
  },
  {
    text: "Tempat nyaman untuk makan dan berkumpul",
    iconDark: "/icons/why-comfy.svg",
    iconLight: "/icons/why-comfy-light.svg",
  },
];

export const serviceCards: ServiceCard[] = [
  {
    title: "Koki Profesional",
    text: "Pengalaman bertahun-tahun menghadirkan cita rasa istimewa di setiap hidangan.",
    image: "/images/feature-chef-image.png",
  },
  {
    title: "Pelayanan yang Harmonis",
    text: "Kami mengutamakan kenyamanan dan kepuasan Anda seperti keluarga sendiri.",
    image: "/images/feature-waiter-image.png",
  },
  {
    title: "Area Parkir Luas",
    text: "Area parkir yang nyaman untuk keluarga maupun acara kantor.",
    image: "/images/feature-parking-image.png",
  },
];

export const gallery = [
  "/images/gallery/image-a.jpg",
  "/images/gallery/image-b.jpg",
  "/images/gallery/image-c.jpg",
  "/images/gallery/image-d.jpg",
  "/images/gallery/image-e.jpg",
  "/images/gallery/image-f.jpg",
];
