interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({ eyebrow, title, description, align = 'left' }: SectionHeaderProps) {
  const alignment = align === 'center' ? 'text-center mx-auto items-center' : 'items-start';

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="text-4xl text-ink-900 sm:text-5xl lg:text-6xl">{title}</h2>
      {description && <p className="text-base leading-relaxed text-ink-500">{description}</p>}
    </div>
  );
}
