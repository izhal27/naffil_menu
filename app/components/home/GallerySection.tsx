import Image from "next/image";

type GallerySectionProps = {
  isLight: boolean;
  displayFontClass: string;
  gallery: string[];
  onOpenImage: (index: number) => void;
};

export function GallerySection({
  isLight,
  displayFontClass,
  gallery,
  onOpenImage,
}: GallerySectionProps) {
  return (
    <section id="gallery" className={`py-16 ${isLight ? "bg-[#f7f2ea]" : "bg-[#0f1012]"}`}>
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <h2 className={`${displayFontClass} text-center text-3xl ${isLight ? "text-[#1d1915]" : "text-white"} md:text-4xl`}>
          Galeri Kami
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
          {gallery.map((src, index) => (
            <button
              key={`${src}-${index}`}
              type="button"
              aria-label={`Buka galeri ${index + 1}`}
              onClick={() => onOpenImage(index)}
              className={`relative aspect-[4/3] overflow-hidden rounded border text-left ${isLight ? "border-[#b99762]/35" : "border-white/10"}`}
            >
              <Image
                src={src}
                alt={`Galeri ${index + 1}`}
                fill
                className="object-cover transition duration-500 hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
