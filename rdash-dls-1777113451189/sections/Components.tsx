function CatalogTile({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="bg-[#0F0F12] border border-[#1F1F23] rounded-[10px] p-4 flex flex-col gap-3 h-[120px] hover:border-[#3F3F46] transition-colors duration-150">
      <div className="flex-1 flex flex-col gap-2">{children}</div>
      <div className="text-[11px] text-[#A1A1AA] font-medium">{label}</div>
    </div>
  );
}

export function Components() {
  return (
    <section className="border-b border-[#18181B]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-24 py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
          <div className="max-w-[680px]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1.5 h-1.5 bg-[#E11D48] rounded-full" />
              <span className="text-[11px] tracking-[3px] uppercase text-[#71717A]">03 · Components</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold leading-[1.05] tracking-[-0.025em] text-[#FAFAFA] mb-5">
              Sixty components,
              <br />
              one rule each.
            </h2>
            <p className="text-[16px] leading-[1.55] text-[#A1A1AA] max-w-[520px]">
              Every component speaks the token layer above it — and answers exactly one question for the team.{' '}
              <span className="text-[#FAFAFA]">No variants for the sake of variants.</span>
            </p>
          </div>
          <div className="flex gap-12 shrink-0">
            <div className="text-right">
              <div className="text-4xl font-semibold text-[#FAFAFA] tracking-tight">62</div>
              <div className="text-[11px] tracking-[1.5px] uppercase text-[#52525B] mt-1">Components</div>
            </div>
            <div className="text-right">
              <div className="text-4xl font-semibold text-[#FAFAFA] tracking-tight">8</div>
              <div className="text-[11px] tracking-[1.5px] uppercase text-[#52525B] mt-1">Categories</div>
            </div>
          </div>
        </div>

        <div className="text-[10px] tracking-[2px] uppercase text-[#71717A] mb-4">
          Library · representative selection
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          <CatalogTile label="Buttons">
            <div className="flex gap-1.5">
              <div className="bg-[#A8C4E8] text-[#0F172A] text-[10px] font-semibold px-3 py-1.5 rounded-full">
                Approve
              </div>
              <div className="bg-[#1E293B] text-[#A8C4E8] text-[10px] font-semibold px-3 py-1.5 rounded-full border border-[#334155]">
                Cancel
              </div>
            </div>
          </CatalogTile>
          <CatalogTile label="Inputs">
            <div className="bg-[#18181B] border border-[#27272A] rounded-md px-2.5 py-2 text-[10px] text-[#71717A]">
              PO number
            </div>
            <div className="bg-[#18181B] border border-[#A8C4E8] rounded-md px-2.5 py-2 text-[10px] text-[#FAFAFA]">
              PO-2419
            </div>
          </CatalogTile>
          <CatalogTile label="Chips">
            <div className="flex gap-1.5 flex-wrap">
              <div className="bg-[#1E293B] text-[#A8C4E8] text-[9px] font-semibold px-2.5 py-1 rounded-full border border-[#334155]">
                Vendor
              </div>
              <div className="bg-[#A8C4E8] text-[#0F172A] text-[9px] font-semibold px-2.5 py-1 rounded-full">
                Active
              </div>
              <div className="bg-[#1E293B] text-[#94A3B8] text-[9px] font-semibold px-2.5 py-1 rounded-full border border-[#334155]">
                Pending
              </div>
            </div>
          </CatalogTile>
          <CatalogTile label="List rows">
            <div className="bg-[#18181B] rounded-md px-3 py-2.5 border border-[#27272A]">
              <div className="text-[10px] text-[#FAFAFA] font-semibold mb-0.5">Floor tiles</div>
              <div className="text-[9px] text-[#71717A]">240 sqft</div>
            </div>
          </CatalogTile>
          <CatalogTile label="Tabs">
            <div className="flex gap-2 items-center">
              <div className="text-[9px] text-[#FAFAFA] bg-[#1E293B] px-2 py-1 rounded-md border-b-2 border-[#A8C4E8] font-semibold">
                Vendor
              </div>
              <div className="text-[9px] text-[#71717A] px-2 py-1">Progress</div>
            </div>
            <div className="h-px bg-[#1F1F23]" />
          </CatalogTile>
          <CatalogTile label="Toggles">
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-3.5 bg-[#A8C4E8] rounded-full flex items-center justify-end px-0.5">
                <div className="w-2.5 h-2.5 bg-[#0F172A] rounded-full" />
              </div>
              <div className="text-[9px] text-[#FAFAFA]">On</div>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-3.5 bg-[#27272A] rounded-full flex items-center px-0.5">
                <div className="w-2.5 h-2.5 bg-[#71717A] rounded-full" />
              </div>
              <div className="text-[9px] text-[#71717A]">Off</div>
            </div>
          </CatalogTile>
          <CatalogTile label="Steppers">
            <div className="flex items-center justify-between">
              <div className="bg-[#27272A] text-[#FAFAFA] w-4 h-4 rounded flex items-center justify-center text-[11px] font-semibold">
                −
              </div>
              <div className="text-[13px] text-[#FAFAFA] font-semibold">12</div>
              <div className="bg-[#A8C4E8] text-[#0F172A] w-4 h-4 rounded flex items-center justify-center text-[11px] font-semibold">
                +
              </div>
            </div>
          </CatalogTile>
          <CatalogTile label="Sliders">
            <div className="h-1 bg-[#27272A] rounded-full">
              <div className="w-3/5 h-1 bg-[#A8C4E8] rounded-full" />
            </div>
            <div className="flex justify-between text-[9px] text-[#71717A]">
              <span>0</span>
              <span className="text-[#FAFAFA]">240</span>
              <span>500</span>
            </div>
          </CatalogTile>
          <CatalogTile label="Search bar">
            <div className="bg-[#18181B] border border-[#27272A] rounded-lg px-2 py-2 flex gap-1.5 items-center">
              <div className="w-2 h-2 border-[1.5px] border-[#71717A] rounded-full" />
              <div className="text-[9px] text-[#71717A] flex-1">Search items, vendors</div>
            </div>
          </CatalogTile>
          <CatalogTile label="Toasts">
            <div className="bg-[#7F1D1D] text-white rounded-md px-2 py-2 text-[9px] flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-[#FCA5A5] rounded-full" />
              Order rejected
            </div>
            <div className="bg-[#1E293B] text-[#A8C4E8] rounded-md px-2 py-2 text-[9px] flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-[#A8C4E8] rounded-full" />
              Saved
            </div>
          </CatalogTile>
          <CatalogTile label="Sheets">
            <div className="bg-[#18181B] rounded-t-lg border border-[#27272A] px-2 pt-2 pb-1 flex-1">
              <div className="w-6 h-0.5 bg-[#3F3F46] rounded-full mx-auto mb-1.5" />
              <div className="text-[10px] text-[#FAFAFA] font-semibold">Item details</div>
            </div>
          </CatalogTile>
          <CatalogTile label="Avatars">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 bg-[#A8C4E8] text-[#0F172A] rounded-full flex items-center justify-center text-[9px] font-semibold">
                RK
              </div>
              <div>
                <div className="text-[9px] text-[#FAFAFA] font-semibold leading-tight">Ravi Kumar</div>
                <div className="text-[8px] text-[#71717A]">Site engineer</div>
              </div>
            </div>
          </CatalogTile>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mt-4 text-[11px] text-[#52525B]">
          <span>+ 50 more — forms · pickers · empty states · skeletons · banners · modals · tooltips</span>
          <a href="#" className="text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors">
            View library →
          </a>
        </div>

        <div className="bg-[#0F0F12] border border-[#1F1F23] rounded-xl p-6 lg:p-8 mt-12">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-6">
            <div>
              <div className="text-[10px] tracking-[2px] uppercase text-[#71717A] mb-1.5">Anatomy · button</div>
              <div className="text-xl lg:text-2xl font-semibold text-[#FAFAFA]">
                One component, every state, no exceptions.
              </div>
            </div>
            <span className="text-[11px] text-[#52525B] tracking-[1.5px] uppercase">
              5 variants · 5 states · 2 schemas
            </span>
          </div>

          <div className="grid grid-cols-[100px_1fr] gap-6 items-start">
            <div className="flex flex-col gap-2">
              <div className="text-[10px] tracking-[1.5px] uppercase text-[#71717A] mb-0.5">Variants</div>
              <div className="text-[11px] text-[#FAFAFA]">Primary</div>
              <div className="text-[11px] text-[#A1A1AA]">Secondary</div>
              <div className="text-[11px] text-[#A1A1AA]">Tertiary</div>
              <div className="text-[11px] text-[#A1A1AA]">Ghost</div>
              <div className="text-[11px] text-[#FCA5A5]">Destructive</div>
            </div>
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-4">
                {[
                  { state: 'Default', bg: '#A8C4E8', label: 'Approve' },
                  { state: 'Hover', bg: '#86A8D6', label: 'Approve' },
                  { state: 'Pressed', bg: '#6489B8', label: 'Approve' },
                  { state: 'Disabled', bg: '#27272A', label: 'Approve', dim: true },
                  { state: 'Loading', bg: '#A8C4E8', label: 'Wait', loading: true },
                ].map((v) => (
                  <div key={v.state} className="flex flex-col items-center gap-2">
                    <div className="text-[9px] text-[#52525B] tracking-[1px] uppercase">{v.state}</div>
                    <div
                      className="w-full text-center px-3 py-2 rounded-full text-[11px] font-semibold flex items-center justify-center gap-1.5"
                      style={{ backgroundColor: v.bg, color: v.dim ? '#52525B' : '#0F172A' }}
                    >
                      {v.loading && (
                        <div className="w-2 h-2 border-[1.5px] border-[#0F172A] border-r-transparent rounded-full animate-spin" />
                      )}
                      {v.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 flex-wrap pt-3 border-t border-[#1F1F23] items-center">
                <span className="text-[9px] text-[#71717A] tracking-[1px] uppercase">Tokens bound:</span>
                {['color/primary', 'color/on-primary', 'radius/full', 'space/sm', 'type/button'].map((t) => (
                  <span
                    key={t}
                    className="text-[10px] text-[#A8C4E8] bg-[#0F172A] px-2 py-0.5 rounded font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}