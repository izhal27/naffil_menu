import Image from "next/image";
import { WhyChooseItem } from "./data";

type WhyChooseSectionProps = {
  isLight: boolean;
  displayFontClass: string;
  whyChoose: WhyChooseItem[];
};

export function WhyChooseSection({
  isLight,
  displayFontClass,
  whyChoose,
}: WhyChooseSectionProps) {
  return (
    <section className={`py-16 ${isLight ? "bg-[#2f725e]" : "bg-[#071915]"}`}>
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <h2 className={`${displayFontClass} text-center text-3xl ${isLight ? "text-[#fff8df]" : "text-[#fff8df]"} md:text-4xl`}>
          Kenapa Memilih Naffil
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {whyChoose.map((item) => (
            <div
              key={item.text}
              className={`rounded border p-4 text-center transition duration-300 hover:-translate-y-1 ${isLight ? "border-[#fff8df]/20 bg-[#fff8df]/10" : "border-[#dfff6f]/15 bg-[#10241d]"}`}
            >
              <div
                className={`mx-auto mb-3 inline-flex h-[52px] w-[52px] items-center justify-center rounded-full border ${isLight ? "border-[#dfff6f]/70 bg-[#dfff6f] text-[#15372f]" : "border-[#dfff6f]/50 bg-[#dfff6f]/15 text-[#dfff6f]"}`}
              >
                <Image
                  src={isLight ? item.iconLight : item.iconDark}
                  alt=""
                  width={26}
                  height={26}
                  className="h-[26px] w-[26px]"
                />
              </div>
              <p className={`text-base leading-snug ${isLight ? "text-[#fff8df]" : "text-[#fff8df]/90"}`}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
