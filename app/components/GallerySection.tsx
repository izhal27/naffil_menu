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
    <section id="gallery" className={`py-16 ${isLight ? "bg-[#fff7df]" : "bg-[#06110f]"}`}>
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <h2 className={`${displayFontClass} text-center text-3xl ${isLight ? "text-[#15372f]" : "text-[#fff8df]"} md:text-4xl`}>
          Galeri Kami
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
          {gallery.map((src, index) => (
            <button
              key={`${src}-${index}`}
              type="button"
              aria-label={`Buka galeri ${index + 1}`}
              onClick={() => onOpenImage(index)}
              className={`relative aspect-[4/3] overflow-hidden rounded border text-left shadow-sm transition duration-300 hover:-translate-y-1 ${isLight ? "border-[#2f725e]/20 shadow-[#2f725e]/10" : "border-[#dfff6f]/15 shadow-black/20"}`}
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
