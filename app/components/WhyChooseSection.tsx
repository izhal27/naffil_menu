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
    <section className={`py-16 ${isLight ? "bg-[#efe4d2]" : "bg-[#202124]"}`}>
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <h2 className={`${displayFontClass} text-center text-3xl ${isLight ? "text-[#1d1915]" : "text-white"} md:text-4xl`}>
          Kenapa Memilih Naffil
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {whyChoose.map((item) => (
            <div
              key={item.text}
              className={`rounded border p-4 text-center ${isLight ? "border-[#b99762]/40 bg-[#f8efdf]" : "border-white/15 bg-[#16181c]"}`}
            >
              <div
                className={`mx-auto mb-3 inline-flex h-[52px] w-[52px] items-center justify-center rounded-full border ${isLight ? "border-[#c19b5f] bg-[#f0dfc1] text-[#7b4e15]" : "border-[#8a6a3a]/70 bg-[#0f1218] text-[#f7cf82]"}`}
              >
                <Image
                  src={isLight ? item.iconLight : item.iconDark}
                  alt=""
                  width={26}
                  height={26}
                  className="h-[26px] w-[26px]"
                />
              </div>
              <p className={`text-base leading-snug ${isLight ? "text-[#241d17]/90" : "text-white/90"}`}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
