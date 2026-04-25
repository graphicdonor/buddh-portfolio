type TokenRowProps = {
  schema: 'light' | 'dark';
  group: string;
  swatches: { label: string; bg: string; fg: string; border?: boolean }[];
};

function TokenRow({ swatches }: TokenRowProps) {
  return (
    <div className="grid grid-cols-4 gap-1.5">
      {swatches.map((s, i) => (
        <div
          key={i}
          className="px-2 py-2.5 rounded-md text-[10px] font-semibold text-center truncate"
          style={{
            backgroundColor: s.bg,
            color: s.fg,
            border: s.border ? '1px solid #E5E7EB' : 'none',
          }}
        >
          {s.label}
        </div>
      ))}
    </div>
  );
}

export function Foundations() {
  const lightRows: TokenRowProps[] = [
    {
      schema: 'light',
      group: 'Primary',
      swatches: [
        { label: 'Primary', bg: '#1E3A5F', fg: '#FFFFFF' },
        { label: 'On Primary', bg: '#FFFFFF', fg: '#1E3A5F', border: true },
        { label: 'Primary Cont.', bg: '#D6E4F5', fg: '#0F172A' },
        { label: 'On Cont.', bg: '#FFFFFF', fg: '#1E3A5F', border: true },
      ],
    },
    {
      schema: 'light',
      group: 'Secondary',
      swatches: [
        { label: 'Secondary', bg: '#475569', fg: '#FFFFFF' },
        { label: 'On Sec.', bg: '#FFFFFF', fg: '#475569', border: true },
        { label: 'Sec. Cont.', bg: '#E2E8F0', fg: '#0F172A' },
        { label: 'On Cont.', bg: '#FFFFFF', fg: '#475569', border: true },
      ],
    },
    {
      schema: 'light',
      group: 'Tertiary',
      swatches: [
        { label: 'Tertiary', bg: '#7C3AED', fg: '#FFFFFF' },
        { label: 'On Tert.', bg: '#FFFFFF', fg: '#7C3AED', border: true },
        { label: 'Tert. Cont.', bg: '#EDE5FB', fg: '#0F172A' },
        { label: 'On Cont.', bg: '#FFFFFF', fg: '#7C3AED', border: true },
      ],
    },
    {
      schema: 'light',
      group: 'Error',
      swatches: [
        { label: 'Error', bg: '#B91C1C', fg: '#FFFFFF' },
        { label: 'On Error', bg: '#FFFFFF', fg: '#B91C1C', border: true },
        { label: 'Error Cont.', bg: '#FCE7E7', fg: '#0F172A' },
        { label: 'On Cont.', bg: '#FFFFFF', fg: '#B91C1C', border: true },
      ],
    },
  ];

  const darkRows: TokenRowProps[] = [
    {
      schema: 'dark',
      group: 'Primary',
      swatches: [
        { label: 'Primary', bg: '#A8C4E8', fg: '#0F172A' },
        { label: 'On Primary', bg: '#1E293B', fg: '#A8C4E8' },
        { label: 'Primary Cont.', bg: '#2C4A6E', fg: '#FAFAFA' },
        { label: 'On Cont.', bg: '#1E293B', fg: '#A8C4E8' },
      ],
    },
    {
      schema: 'dark',
      group: 'Secondary',
      swatches: [
        { label: 'Secondary', bg: '#94A3B8', fg: '#0F172A' },
        { label: 'On Sec.', bg: '#1E293B', fg: '#94A3B8' },
        { label: 'Sec. Cont.', bg: '#3F4856', fg: '#FAFAFA' },
        { label: 'On Cont.', bg: '#1E293B', fg: '#94A3B8' },
      ],
    },
    {
      schema: 'dark',
      group: 'Tertiary',
      swatches: [
        { label: 'Tertiary', bg: '#C4B5FD', fg: '#0F172A' },
        { label: 'On Tert.', bg: '#1E293B', fg: '#C4B5FD' },
        { label: 'Tert. Cont.', bg: '#4C3B7A', fg: '#FAFAFA' },
        { label: 'On Cont.', bg: '#1E293B', fg: '#C4B5FD' },
      ],
    },
    {
      schema: 'dark',
      group: 'Error',
      swatches: [
        { label: 'Error', bg: '#FCA5A5', fg: '#0F172A' },
        { label: 'On Error', bg: '#1E293B', fg: '#FCA5A5' },
        { label: 'Error Cont.', bg: '#7F1D1D', fg: '#FFFFFF' },
        { label: 'On Cont.', bg: '#1E293B', fg: '#FCA5A5' },
      ],
    },
  ];

  const surfaceLevels = [
    { label: 'Lowest', desc: 'Page background', bg: '#0F0F12', text: '#A1A1AA', border: '1px solid #18181B' },
    { label: 'Low', desc: 'Section', bg: '#18181B', text: '#A1A1AA' },
    { label: 'Default', desc: 'Card', bg: '#27272A', text: '#A1A1AA' },
    { label: 'High', desc: 'Modal · sheet', bg: '#3F3F46', text: '#D4D4D8' },
    { label: 'Highest', desc: 'Popover · toast', bg: '#52525B', text: '#FAFAFA' },
  ];

  return (
    <section className="border-b border-[#18181B]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-24 py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div className="max-w-[680px]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1.5 h-1.5 bg-[#E11D48] rounded-full" />
              <span className="text-[11px] tracking-[3px] uppercase text-[#71717A]">02 · Foundations</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold leading-[1.05] tracking-[-0.025em] text-[#FAFAFA] mb-5">
              Tokens before
              <br />
              pixels.
            </h2>
            <p className="text-[16px] leading-[1.55] text-[#A1A1AA] max-w-[520px]">
              Material 3 gave us the structure. R'Dash gave it brand and intent. Every color is a role — not a hex.{' '}
              <span className="text-[#FAFAFA]">120 tokens, two schemas, one logic.</span>
            </p>
          </div>
          <div className="text-right shrink-0">
            <div className="text-4xl font-semibold text-[#FAFAFA] tracking-tight">120</div>
            <div className="text-[11px] tracking-[1.5px] uppercase text-[#52525B] mt-1">Semantic tokens</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="bg-[#FAFAFA] rounded-xl p-6 text-[#0F172A]">
            <div className="flex justify-between items-center mb-5">
              <span className="text-[13px] font-semibold">Light schema</span>
              <span className="text-[10px] tracking-[1.5px] uppercase text-[#71717A]">Default</span>
            </div>
            <div className="flex flex-col gap-3.5 mb-5">
              {lightRows.map((row, i) => (
                <TokenRow key={i} {...row} />
              ))}
            </div>
            <div>
              <div className="text-[10px] tracking-[1.5px] uppercase text-[#71717A] mb-2">Sample · welcome card</div>
              <div className="bg-[#1E3A5F] text-white p-3.5 rounded-[10px]">
                <div className="text-[13px] font-semibold mb-1">Welcome to your project</div>
                <div className="text-[11px] text-[#CBD5E1] mb-2.5">Surface · primary · on-primary in production</div>
                <div className="flex gap-1.5">
                  <span className="bg-white text-[#1E3A5F] px-2.5 py-1 rounded-full text-[10px] font-semibold">
                    Primary action
                  </span>
                  <span className="text-white px-2.5 py-1 rounded-full text-[10px] border border-white">
                    Secondary
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0F172A] rounded-xl p-6 text-[#F4F4F5]">
            <div className="flex justify-between items-center mb-5">
              <span className="text-[13px] font-semibold text-[#FAFAFA]">Dark schema</span>
              <span className="text-[10px] tracking-[1.5px] uppercase text-[#71717A]">Mirror</span>
            </div>
            <div className="flex flex-col gap-3.5 mb-5">
              {darkRows.map((row, i) => (
                <TokenRow key={i} {...row} />
              ))}
            </div>
            <div>
              <div className="text-[10px] tracking-[1.5px] uppercase text-[#71717A] mb-2">Sample · welcome card</div>
              <div className="bg-[#1E293B] p-3.5 rounded-[10px] border border-[#334155]">
                <div className="text-[13px] font-semibold mb-1 text-[#A8C4E8]">Welcome to your project</div>
                <div className="text-[11px] text-[#94A3B8] mb-2.5">Same logic, mirrored hue & tone</div>
                <div className="flex gap-1.5">
                  <span className="bg-[#A8C4E8] text-[#0F172A] px-2.5 py-1 rounded-full text-[10px] font-semibold">
                    Primary action
                  </span>
                  <span className="text-[#FAFAFA] px-2.5 py-1 rounded-full text-[10px] border border-[#475569]">
                    Secondary
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[11px] tracking-[2px] uppercase text-[#71717A]">
              Surface containment · 5 levels of depth
            </span>
            <span className="text-[11px] text-[#52525B]">Used for elevation in flat UI</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1.5">
            {surfaceLevels.map((s) => (
              <div
                key={s.label}
                className="px-3.5 py-5 rounded-md text-[11px]"
                style={{ backgroundColor: s.bg, color: s.text, border: s.border }}
              >
                <div className="font-semibold text-[#FAFAFA] mb-0.5">{s.label}</div>
                <div className="text-[10px]">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}