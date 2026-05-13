import ImageWithFallback from './ImageWithFallback';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  label?: string;
}

export default function PageHero({ title, subtitle, image, label }: PageHeroProps) {
  return (
    <section className="relative h-[50vh] min-h-[380px] flex items-end pb-16 overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
          fallbackColor="#1F3B2D"
          fallbackLabel={title}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(15,30,20,0.4) 0%, rgba(15,30,20,0.75) 100%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        {label && (
          <span className="section-label text-gold/70 text-xs block mb-3">{label}</span>
        )}
        <h1 className="font-serif text-white text-4xl md:text-6xl font-light leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="font-sans text-white/60 mt-3 text-lg max-w-xl leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="gold-divider-left mt-5" />
      </div>
    </section>
  );
}
