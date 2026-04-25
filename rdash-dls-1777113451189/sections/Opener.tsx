export function Opener() {
  const chapterItems = [
    { label: 'Foundations', num: '02' },
    { label: 'Components', num: '03' },
    { label: 'System in motion', num: '04' },
    { label: 'My contribution', num: '05' },
  ];

  const tokenSwatches = ['#1E3A5F', '#3B82F6', '#7C3AED', '#E11D48', '#FAFAFA', '#A1A1AA', '#3F3F46', '#18181B'];

  return (
    <section className="border-b border-[#18181B]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-24 py-20 lg:py-28">
        <div className="flex items-center justify-between mb-14 lg:mb-20">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-[#E11D48] rounded-full" />
            <span className="text-[11px] tracking-[3px] uppercase text-[#71717A] font-medium">
              Design Language System · Mobile
            </span>
          </div>
          <span className="text-[11px] tracking-[2px] uppercase text-[#52525B]">Chapter · 06</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7 xl:col-span-8">
            <h1 className="text-5xl sm:text-6xl lg:text-[88px] font-semibold leading-[1.02] tracking-[-0.03em] text-[#FAFAFA] mb-8">
              One language,
              <br />
              <span className="text-[#A1A1AA]">across every</span>
              <br />
              surface.
            </h1>
            <p className="text-base lg:text-[18px] leading-[1.55] text-[#A1A1AA] max-w-[560px]">
              A tokenised, Material&nbsp;3-adapted system that lets eight squads ship in lockstep —{' '}
              <span className="text-[#FAFAFA]">light, dark,</span> and every state in between.
            </p>
          </div>

          <div className="lg:col-span-5 xl:col-span-4 lg:pl-12">
            <div className="text-[10px] tracking-[2px] uppercase text-[#52525B] mb-5 lg:text-right">
              What's inside
            </div>
            <ul className="flex flex-col gap-3.5 lg:items-end">
              {chapterItems.map((item) => (
                <li key={item.num} className="flex items-center gap-3.5">
                  <span className="text-[13px] text-[#D4D4D8] font-medium">{item.label}</span>
                  <span className="text-[11px] text-[#52525B] font-mono tabular-nums">— {item.num}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-5 mt-16 pt-10 border-t border-[#18181B]">
          <div className="flex gap-1.5">
            {tokenSwatches.map((color, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-md transition-transform duration-200 hover:-translate-y-0.5"
                style={{ backgroundColor: color, border: i === tokenSwatches.length - 1 ? '1px solid #3F3F46' : 'none' }}
              />
            ))}
          </div>
          <span className="text-[11px] tracking-[2px] uppercase text-[#52525B] sm:ml-auto">
            Tokens · Components · Patterns
          </span>
        </div>
      </div>
    </section>
  );
}