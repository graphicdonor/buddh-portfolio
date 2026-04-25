type ColumnProps = {
  category: string;
  categoryColor: string;
  iconBg: string;
  icon: string;
  iconColor: string;
  headline: string;
  items: { title: string; desc: string }[];
};

function ContributionColumn({ category, categoryColor, iconBg, icon, iconColor, headline, items }: ColumnProps) {
  return (
    <div className="bg-[#0F0F12] border border-[#1F1F23] rounded-2xl p-6 lg:p-7 flex flex-col">
      <div className="flex items-center gap-2.5 mb-4">
        <div
          className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold"
          style={{ backgroundColor: iconBg, color: iconColor }}
        >
          {icon}
        </div>
        <div className="text-[11px] tracking-[2px] uppercase font-semibold" style={{ color: categoryColor }}>
          {category}
        </div>
      </div>
      <div className="text-[18px] text-[#FAFAFA] font-semibold leading-[1.3] mb-5">{headline}</div>
      <div className="flex flex-col gap-4 flex-1">
        {items.map((item, i) => (
          <div key={i}>
            <div className="text-[13px] text-[#FAFAFA] font-semibold mb-1">{item.title}</div>
            <div className="text-[12px] text-[#A1A1AA] leading-[1.5]">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Closer() {
  const teammates = [
    { initials: 'PR', bg: '#A8C4E8', fg: '#0F172A' },
    { initials: 'SK', bg: '#FBBF24', fg: '#0F172A' },
    { initials: 'AM', bg: '#7C3AED', fg: '#FFFFFF' },
    { initials: 'DJ', bg: '#E11D48', fg: '#FFFFFF' },
  ];

  return (
    <section className="border-b border-[#18181B]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-24 py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div className="max-w-[680px]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1.5 h-1.5 bg-[#E11D48] rounded-full" />
              <span className="text-[11px] tracking-[3px] uppercase text-[#71717A]">05 · Contribution</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold leading-[1.05] tracking-[-0.025em] text-[#FAFAFA] mb-5">
              My slice of
              <br />
              the system.
            </h2>
            <p className="text-[16px] leading-[1.55] text-[#A1A1AA] max-w-[540px]">
              R'Dash's mobile language is the work of a DS pod of four.{' '}
              <span className="text-[#FAFAFA]">Here's the slice that was mine</span> — and the slice I learned to share.
            </p>
          </div>
          <div className="text-right shrink-0">
            <div className="text-[11px] tracking-[2px] uppercase text-[#71717A] mb-1">Pod of 4</div>
            <div className="text-[13px] text-[#A1A1AA]">2 designers · 2 engineers</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <ContributionColumn
            category="Owned"
            categoryColor="#A8C4E8"
            iconBg="#A8C4E8"
            iconColor="#0F172A"
            icon="▲"
            headline="What I shipped end to end."
            items={[
              {
                title: 'Form & input library',
                desc: '12 components — text, number, date, select, search, multi-select, toggle, stepper. Bound to color + spacing tokens.',
              },
              {
                title: 'State coverage spec',
                desc: 'Empty, loading, error, success — written as a system rule, not a per-screen decision.',
              },
              {
                title: 'Mobile bottom-sheet pattern',
                desc: 'From scrim tokens to swipe behaviour. Used across Item Details, filters, action sheets.',
              },
            ]}
          />
          <ContributionColumn
            category="Co-created"
            categoryColor="#FBBF24"
            iconBg="#FBBF24"
            iconColor="#0F172A"
            icon="⇆"
            headline="What we built side by side."
            items={[
              {
                title: 'Color schemas — light & dark',
                desc: 'Token taxonomy with the DS lead. I owned the dark schema audit + contrast pass against AA.',
              },
              {
                title: 'Dashboards by role',
                desc: 'Three density variants. I led site engineer + project owner; PM dashboard was a teammate\'s lead.',
              },
              {
                title: 'Engineer handoff format',
                desc: 'Token JSON schema + Figma variable mapping, agreed with the two engineers in the pod.',
              },
            ]}
          />
          <ContributionColumn
            category="Took away"
            categoryColor="#C4B5FD"
            iconBg="#7C3AED"
            iconColor="#FFFFFF"
            icon="◇"
            headline="What sitting in a DS pod taught me."
            items={[
              {
                title: 'Tokens make politics easier',
                desc: 'Once roles are named, brand debates become token debates. Faster to resolve, harder to relitigate.',
              },
              {
                title: '"Done" is shipping, not perfection',
                desc: 'Our stepper component went out at v0.6. The squad caught two states we missed — the system improved.',
              },
              {
                title: 'Empty states are political too',
                desc: 'The most contested PRs in the pod. Everyone owns "what we say when there\'s nothing to say."',
              },
            ]}
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 pt-6 mt-10 border-t border-[#18181B]">
          <div className="flex items-center gap-3.5">
            <span className="text-[11px] tracking-[2px] uppercase text-[#52525B]">Built with</span>
            <div className="flex">
              {teammates.map((t, i) => (
                <div
                  key={t.initials}
                  className="w-[30px] h-[30px] rounded-full flex items-center justify-center text-[11px] font-bold border-2 border-[#07070D]"
                  style={{
                    backgroundColor: t.bg,
                    color: t.fg,
                    marginLeft: i === 0 ? 0 : '-8px',
                  }}
                >
                  {t.initials}
                </div>
              ))}
            </div>
            <div className="text-[13px] text-[#A1A1AA]">DS lead · 1 designer · 2 engineers</div>
          </div>
          <div className="text-[13px] text-[#71717A] italic">Continues with — AI-first, systems-led design ↓</div>
        </div>
      </div>
    </section>
  );
}