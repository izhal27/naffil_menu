'use client';
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge';

interface FeatureCardProps {
  title: string
  description: string
  image: string
  reverse?: boolean
}

export default function FeatureCard({ title, description, image, reverse = false }: FeatureCardProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const imageAnim = isMobile ? 'fade-up' : reverse ? 'fade-left' : 'fade-right';
  const textAnim = isMobile ? 'fade-up' : reverse ? 'fade-right' : 'fade-left';
  const textBaseClass = 'md:w-1/2 text-center';
  const textReverseClass = reverse ? 'md:text-right' : 'md:text-left';

  return (
    <div
      id='about'
      className={`flex flex-col-reverse md:flex-row items-center ${reverse ? 'md:flex-row-reverse' : ''} gap-6 py-12`}
      data-aos="fade-up"
      data-aos-md={reverse ? "fade-left" : "fade-right"}
    >
      <div data-aos={imageAnim} className="md:w-1/2">
        <Image src={image} alt={title} width={500} height={400} className="mx-auto" />
      </div>
      <div data-aos={textAnim} className={twMerge(textBaseClass, textReverseClass)}>
        <h3 className="text-xl md:text-3xl font-bold text-orange">{title}</h3>
        <p className="txtt-xs md:text-xl text-eerie mt-2 font-light">{description}</p>
      </div>
    </div>
  )
}

