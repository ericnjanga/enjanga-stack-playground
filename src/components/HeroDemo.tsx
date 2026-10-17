type HeroDemoProps = {
  title: string;
  description: string;
};

export default function HeroDemo({ title, description }: HeroDemoProps) {
  return (
    <header className="mb-10">
      <h1 className="mb-4">{title}</h1>
      <p className="intro border-b border-slate-700 pb-10">{description}</p>
    </header>
  );
}
