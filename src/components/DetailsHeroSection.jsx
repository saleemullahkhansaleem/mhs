import { Heading } from ".";

export default function DetailsHeroSection({ title = "", description = "" }) {
  return (
    <section
      className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/images/banner.webp')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background/90"></div>
      <div className="relative text-center z-10 text-foreground">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          <Heading>{title}</Heading>
        </h1>
        <p className="mt-4 text-lg">{description}</p>
      </div>
    </section>
  );
}
