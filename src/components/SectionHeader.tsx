interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  dark = false,
}: SectionHeaderProps) {
  const alignment = align === 'center' ? 'text-center mx-auto items-center' : 'items-start';

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      <span className={`eyebrow ${dark ? 'text-gold-400' : 'text-gold-700'}`}>{eyebrow}</span>
      <h2 className={`font-serif text-4xl sm:text-5xl lg:text-6xl ${dark ? 'text-ivory-50' : 'text-ink-900'}`}>{title}</h2>
      {description && (
        <p className={`text-base leading-relaxed ${dark ? 'text-ivory-200/80' : 'text-ink-500'}`}>{description}</p>
      )}
    </div>
  );
}
