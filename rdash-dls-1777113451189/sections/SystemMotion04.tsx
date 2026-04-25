import {
  PanelHeader,
  ScreenStage,
  CaptionStrip,
  MobileFrame,
  StatusBar,
  ScreenColumn,
} from '../components/PanelParts';

function SiteEngineerDashboard() {
  return (
    <MobileFrame schema="dark">
      <StatusBar schema="dark" />
      <div className="flex justify-between items-center">
        <div>
          <div className="text-[10px] text-[#94A3B8]">Tuesday · 18 Mar</div>
          <div className="text-[15px] text-[#FAFAFA] font-semibold">Hi, Ravi</div>
        </div>
        <div className="w-[34px] h-[34px] bg-[#A8C4E8] text-[#0F172A] rounded-full flex items-center justify-center text-[12px] font-bold">
          RK
        </div>
      </div>
      <div className="bg-[linear-gradient(135deg,#2C4A6E_0%,#1E3A5F_100%)] rounded-xl p-3.5 text-white">
        <div className="text-[10px] text-[#A8C4E8] tracking-[1px] uppercase mb-1">Today</div>
        <div className="text-lg text-white font-bold mb-2">3 site tasks</div>
        <div className="flex gap-3.5">
          <div>
            <div className="text-[9px] text-[#A8C4E8]">Pickups</div>
            <div className="text-[13px] text-white font-semibold">2</div>
          </div>
          <div>
            <div className="text-[9px] text-[#A8C4E8]">Updates</div>
            <div className="text-[13px] text-white font-semibold">1</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1.5 flex-1 overflow-hidden">
        <div className="text-[9px] text-[#94A3B8] tracking-[1px] uppercase mt-0.5">Up next</div>
        <div className="bg-[#1E293B] rounded-[10px] p-2 flex items-center gap-2">
          <div className="w-8 h-8 bg-[#2C4A6E] rounded-lg flex items-center justify-center text-[#A8C4E8] text-[14px]">
            📦
          </div>
          <div className="flex-1">
            <div className="text-[10px] text-[#FAFAFA] font-semibold">Pickup · Floor tiles</div>
            <div className="text-[9px] text-[#94A3B8]">Surya Stone · 11:00 AM</div>
          </div>
        </div>
        <div className="bg-[#1E293B] rounded-[10px] p-2 flex items-center gap-2">
          <div className="w-8 h-8 bg-[#2C4A6E] rounded-lg flex items-center justify-center text-[#A8C4E8] text-[14px]">
            📷
          </div>
          <div className="flex-1">
            <div className="text-[10px] text-[#FAFAFA] font-semibold">Update · Wall paint</div>
            <div className="text-[9px] text-[#94A3B8]">Block A · 2:30 PM</div>
          </div>
        </div>
        <div className="bg-[#1E293B] rounded-[10px] p-2 flex items-center gap-2">
          <div className="w-8 h-8 bg-[#2C4A6E] rounded-lg flex items-center justify-center text-[#A8C4E8] text-[14px]">
            📦
          </div>
          <div className="flex-1">
            <div className="text-[10px] text-[#FAFAFA] font-semibold">Pickup · Hardware</div>
            <div className="text-[9px] text-[#94A3B8]">Hindware · 5:00 PM</div>
          </div>
        </div>
      </div>
      <div className="mt-auto bg-[#A8C4E8] text-[#0F172A] py-2 rounded-lg text-[10px] font-semibold text-center">
        Log site update
      </div>
    </MobileFrame>
  );
}

function ProcurementDashboard() {
  return (
    <MobileFrame schema="light">
      <StatusBar schema="light" />
      <div className="flex justify-between items-center">
        <div className="text-[14px] font-semibold">Procurement</div>
        <div className="flex gap-1.5">
          <div className="w-6 h-6 bg-[#F1F5F9] rounded-md flex items-center justify-center text-[#1E3A5F] text-[11px]">
            ⚡
          </div>
          <div className="w-6 h-6 bg-[#1E3A5F] text-white rounded-md flex items-center justify-center text-[11px]">
            +
          </div>
        </div>
      </div>
      <div className="bg-[#F1F5F9] border border-[#E2E8F0] rounded-md px-2 py-1.5 flex items-center gap-1.5">
        <div className="w-2.5 h-2.5 border-[1.5px] border-[#94A3B8] rounded-full" />
        <span className="text-[9px] text-[#94A3B8]">Search 247 POs</span>
      </div>
      <div className="flex gap-1 overflow-hidden">
        <div className="bg-[#1E3A5F] text-white text-[8px] font-semibold px-2 py-1 rounded-full whitespace-nowrap">
          All · 247
        </div>
        <div className="bg-white text-[#64748B] text-[8px] font-semibold px-2 py-1 rounded-full border border-[#E2E8F0] whitespace-nowrap">
          Approval · 12
        </div>
        <div className="bg-white text-[#64748B] text-[8px] font-semibold px-2 py-1 rounded-full border border-[#E2E8F0] whitespace-nowrap">
          Active · 84
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        <div className="bg-white border border-[#E2E8F0] rounded-lg p-1.5">
          <div className="text-[8px] text-[#64748B]">This month</div>
          <div className="text-[13px] font-bold">₹38.4L</div>
          <div className="text-[8px] text-[#16A34A] font-semibold">+12% MoM</div>
        </div>
        <div className="bg-white border border-[#E2E8F0] rounded-lg p-1.5">
          <div className="text-[8px] text-[#64748B]">Pending</div>
          <div className="text-[13px] font-bold">₹4.2L</div>
          <div className="text-[8px] text-[#B91C1C] font-semibold">12 POs</div>
        </div>
      </div>
      <div className="text-[9px] text-[#64748B] tracking-[1px] uppercase mt-0.5">Recent POs</div>
      <div className="flex flex-col gap-1 flex-1 overflow-hidden">
        {[
          { id: 'PO-2419 · Modular ktn', vendor: 'Surya Stone', amt: '₹2.69L', status: 'Pending', tone: 'warn' },
          { id: 'PO-2418 · Wall paint', vendor: 'Asian Paints', amt: '₹84,200', status: 'Active', tone: 'ok' },
          { id: 'PO-2417 · Hardware', vendor: 'Hindware', amt: '₹1.12L', status: 'Active', tone: 'ok' },
          { id: 'PO-2416 · Cement', vendor: 'UltraTech', amt: '₹2.40L', status: 'Closed', tone: 'mute' },
        ].map((po) => (
          <div key={po.id} className="bg-white border border-[#E2E8F0] rounded-md px-2 py-1.5">
            <div className="flex justify-between items-center">
              <span className="text-[9px] font-semibold">{po.id}</span>
              <span className="text-[9px] text-[#1E3A5F] font-bold">{po.amt}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[8px] text-[#64748B]">{po.vendor}</span>
              <div
                className={`text-[7px] font-semibold px-1 py-0.5 rounded-full ${
                  po.tone === 'warn'
                    ? 'bg-[#FEF3C7] text-[#92400E]'
                    : po.tone === 'ok'
                    ? 'bg-[#D1FAE5] text-[#065F46]'
                    : 'bg-[#E2E8F0] text-[#475569]'
                }`}
              >
                {po.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </MobileFrame>
  );
}

function ProjectOwnerDashboard() {
  return (
    <MobileFrame schema="dark">
      <StatusBar schema="dark" />
      <div>
        <div className="text-[9px] text-[#94A3B8] tracking-[1px] uppercase">Project · Block A</div>
        <div className="text-[14px] text-[#FAFAFA] font-semibold">Modular kitchen</div>
      </div>
      <div className="bg-[#1E293B] rounded-xl p-3">
        <div className="flex justify-between items-end mb-2">
          <div>
            <div className="text-[9px] text-[#94A3B8]">Budget used</div>
            <div className="text-[22px] text-[#FAFAFA] font-bold leading-none">68%</div>
          </div>
          <div className="text-right">
            <div className="text-[9px] text-[#94A3B8]">of ₹14L</div>
            <div className="text-[11px] text-[#A8C4E8] font-semibold">₹9.5L spent</div>
          </div>
        </div>
        <div className="h-1 bg-[#0F172A] rounded-full">
          <div className="w-[68%] h-1 bg-[linear-gradient(90deg,#A8C4E8_0%,#FBBF24_100%)] rounded-full" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        <div className="bg-[#1E293B] rounded-[10px] p-2">
          <div className="text-[9px] text-[#94A3B8]">Completion</div>
          <div className="text-[14px] text-[#FAFAFA] font-bold">52%</div>
        </div>
        <div className="bg-[#1E293B] rounded-[10px] p-2">
          <div className="text-[9px] text-[#94A3B8]">Days left</div>
          <div className="text-[14px] text-[#FBBF24] font-bold">28</div>
        </div>
      </div>
      <div className="bg-[#1E293B] rounded-xl p-2.5 flex-1 flex flex-col gap-1.5">
        <div className="flex justify-between items-center">
          <span className="text-[10px] text-[#FAFAFA] font-semibold">Weekly spend</span>
          <span className="text-[9px] text-[#94A3B8]">Last 6 wks</span>
        </div>
        <div className="flex items-end gap-1 h-[60px] pt-1.5">
          {[30, 55, 42, 70, 88, 64].map((h, i) => (
            <div
              key={i}
              className={`flex-1 rounded-sm ${i >= 4 ? 'bg-[#A8C4E8]' : 'bg-[#2C4A6E]'}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="flex justify-between text-[8px] text-[#52525B]">
          <span>W1</span>
          <span>W2</span>
          <span>W3</span>
          <span>W4</span>
          <span>W5</span>
          <span>W6</span>
        </div>
      </div>
      <div className="bg-[#1E293B] rounded-[10px] p-2">
        <div className="flex justify-between items-center mb-1">
          <span className="text-[9px] text-[#94A3B8]">Top categories</span>
          <span className="text-[9px] text-[#A8C4E8] font-semibold">View all</span>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between text-[9px]">
            <span className="text-[#FAFAFA]">Tiles & flooring</span>
            <span className="text-[#A8C4E8] font-semibold">₹2.8L</span>
          </div>
          <div className="flex justify-between text-[9px]">
            <span className="text-[#FAFAFA]">Modular ktn</span>
            <span className="text-[#A8C4E8] font-semibold">₹2.4L</span>
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}

export function SystemMotion04() {
  return (
    <section className="border-b border-[#18181B]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-24 py-20 lg:py-24">
        <PanelHeader
          overline="04 · System in motion · cont."
          headlineLine1="Density,"
          headlineLine2="by role."
          subhead={
            <>
              A site engineer needs three tasks. A procurement manager needs forty rows. A project owner needs the
              number.{' '}
              <span className="text-[#FAFAFA]">
                One token system, three densities — no fork in the codebase.
              </span>
            </>
          }
          metaTop="3 roles"
          metaBottom="Site engineer · PM · owner"
        />

        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          <ScreenColumn
            stage={
              <ScreenStage overline="10 · Site engineer" gradientHint="cool">
                <SiteEngineerDashboard />
              </ScreenStage>
            }
            caption={
              <CaptionStrip
                headline="Low density · 3 tasks · single CTA"
                tokens={['primary/container', 'surface/default']}
                components={['Hero card', 'Task row']}
              />
            }
          />
          <ScreenColumn
            stage={
              <ScreenStage overline="11 · Procurement manager" gradientHint="neutral">
                <ProcurementDashboard />
              </ScreenStage>
            }
            caption={
              <CaptionStrip
                headline="High density · 247 POs · multi-filter"
                tokens={['surface/lowest', 'success · warning']}
                components={['KPI tile', 'Compact row']}
              />
            }
          />
          <ScreenColumn
            stage={
              <ScreenStage overline="12 · Project owner" gradientHint="cool">
                <ProjectOwnerDashboard />
              </ScreenStage>
            }
            caption={
              <CaptionStrip
                headline="KPI density · charts · bound to data tokens"
                tokens={['primary · warning', 'chart/01 · chart/02']}
                components={['KPI hero', 'Bar chart']}
              />
            }
          />
        </div>
      </div>
    </section>
  );
}