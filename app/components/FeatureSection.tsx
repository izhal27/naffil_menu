import FeatureCard from "./FeatureCard";

export default function FeatureSection() {
  return (
    <section id='about' className="container mx-auto px-4">
      <h2 data-aos="fade-up" className="text-xl md:text-3xl text-center font-bold mt-12 text-eegie">
        Mengapa harus Naffli Cafe & Resto?
      </h2>

      <FeatureCard
        title="Masakan oleh Chef Profesional"
        description="Pengalaman bertahun-tahun menghadirkan cita rasa istimewa di setiap hidangan."
        image="/images/feature-chef-image.png"
      />
      <FeatureCard
        title="Pelayanan yang harmonis"
        description="Kami mengutamakan kenyamanan dan kepuasan Anda seperti keluarga sendiri."
        image="/images/feature-waiter-image.png"
        reverse
      />
      <FeatureCard
        title="Area Parkir Luas & Nyaman"
        description="Kami menyediakan area parkir luas dan nyaman, cocok untuk acara kantor dan acara keluarga."
        image="/images/feature-parking-image.png"
      />
    </section>
  );
}