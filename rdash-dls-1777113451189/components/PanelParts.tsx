type PanelHeaderProps = {
  overline: string;
  headlineLine1: string;
  headlineLine2: string;
  subhead: React.ReactNode;
  metaTop?: string;
  metaBottom?: string;
  big?: boolean;
};

export function PanelHeader({
  overline,
  headlineLine1,
  headlineLine2,
  subhead,
  metaTop,
  metaBottom,
  big = false,
}: PanelHeaderProps) {
  const headlineSize = big
    ? 'text-4xl sm:text-5xl lg:text-[64px]'
    : 'text-3xl sm:text-4xl lg:text-[48px]';

  return (
    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
      <div className="max-w-[680px]">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-1.5 h-1.5 bg-[#E11D48] rounded-full" />
          <span className="text-[11px] tracking-[3px] uppercase text-[#71717A]">{overline}</span>
        </div>
        <h2
          className={`${headlineSize} font-semibold leading-[1.05] tracking-[-0.025em] text-[#FAFAFA] mb-5`}
        >
          {headlineLine1}
          <br />
          {headlineLine2}
        </h2>
        <p className="text-[15px] lg:text-[16px] leading-[1.55] text-[#A1A1AA] max-w-[540px]">{subhead}</p>
      </div>
      {(metaTop || metaBottom) && (
        <div className="text-right shrink-0">
          {metaTop && (
            <div className="text-[11px] tracking-[2px] uppercase text-[#71717A]">{metaTop}</div>
          )}
          {metaBottom && <div className="text-[13px] text-[#A1A1AA] mt-1">{metaBottom}</div>}
        </div>
      )}
    </div>
  );
}

type ScreenStageProps = {
  overline: string;
  gradientHint?: 'cool' | 'warm' | 'neutral';
  children: React.ReactNode;
};

export function ScreenStage({ overline, gradientHint = 'cool', children }: ScreenStageProps) {
  const gradient =
    gradientHint === 'warm'
      ? 'bg-[radial-gradient(circle_at_50%_30%,#2D1A1F_0%,#0F0F12_70%)]'
      : gradientHint === 'neutral'
      ? 'bg-[radial-gradient(circle_at_50%_30%,#1A1F2E_0%,#0F0F12_70%)]'
      : 'bg-[radial-gradient(circle_at_50%_30%,#1A2030_0%,#07070D_70%)]';

  return (
    <div
      className={`flex-1 ${gradient} rounded-2xl px-6 py-10 flex items-center justify-center relative overflow-hidden min-h-[560px]`}
    >
      <div className="absolute top-3.5 left-5 text-[9px] tracking-[2px] uppercase text-[#52525B]">{overline}</div>
      {children}
    </div>
  );
}

type CaptionStripProps = {
  headline: string;
  tokens: string[];
  components: string[];
};

export function CaptionStrip({ headline, tokens, components }: CaptionStripProps) {
  return (
    <div className="bg-[#0F0F12] border border-[#1F1F23] rounded-lg p-3.5">
      <div className="text-[11px] text-[#FAFAFA] font-semibold mb-2">{headline}</div>
      <div className="flex gap-1.5 flex-wrap">
        {tokens.map((t) => (
          <span
            key={t}
            className="text-[10px] text-[#A8C4E8] bg-[#0F172A] px-2 py-0.5 rounded font-mono"
          >
            {t}
          </span>
        ))}
        {components.map((c) => (
          <span key={c} className="text-[10px] text-[#A1A1AA] bg-[#18181B] px-2 py-0.5 rounded">
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

// Shared mobile frame — used across all System in Motion panels.
// Width is fixed (240px) for visual rhythm; height adjusts to content with min-h.
export function MobileFrame({
  schema,
  children,
}: {
  schema: 'light' | 'dark';
  children: React.ReactNode;
}) {
  const bg = schema === 'light' ? 'bg-[#FAFAFA] text-[#0F172A]' : 'bg-[#0F172A] text-[#F4F4F5]';
  return (
    <div
      className={`w-60 h-[480px] ${bg} rounded-3xl px-4 py-3.5 flex flex-col gap-2.5 border-[6px] border-[#1F1F23] shadow-[0_30px_60px_rgba(0,0,0,0.5)]`}
    >
      {children}
    </div>
  );
}

export function StatusBar({ schema }: { schema: 'light' | 'dark' }) {
  return (
    <div className="flex justify-between items-center">
      <span className={`text-[9px] font-semibold ${schema === 'light' ? 'text-[#0F172A]' : 'text-[#FAFAFA]'}`}>
        9:41
      </span>
      <div className="flex gap-0.5">
        <div
          className={`w-3 h-1.5 rounded-sm ${schema === 'light' ? 'bg-[#1E3A5F]' : 'bg-[#A8C4E8]'}`}
        />
        <div
          className={`w-3 h-1.5 rounded-sm ${schema === 'light' ? 'bg-[#1E3A5F]' : 'bg-[#A8C4E8]'}`}
        />
      </div>
    </div>
  );
}

export function ScreenColumn({
  stage,
  caption,
}: {
  stage: React.ReactNode;
  caption: React.ReactNode;
}) {
  return (
    <div className="flex-1 flex flex-col gap-3.5 min-w-0">
      {stage}
      {caption}
    </div>
  );
}