import {
  PanelHeader,
  ScreenStage,
  CaptionStrip,
  MobileFrame,
  StatusBar,
  ScreenColumn,
} from '../components/PanelParts';

function EmptyState() {
  return (
    <MobileFrame schema="light">
      <StatusBar schema="light" />
      <div className="flex items-center gap-2">
        <div className="w-[18px] h-[18px] bg-[#F1F5F9] rounded-md flex items-center justify-center text-[#1E3A5F] text-[11px]">
          ←
        </div>
        <span className="text-[13px] font-semibold">Payment requests</span>
      </div>
      <div className="bg-[#F1F5F9] border border-[#E2E8F0] rounded-lg p-2 flex items-center gap-1.5">
        <div className="w-3.5 h-3.5 border-[1.5px] border-[#94A3B8] rounded-full" />
        <span className="text-[10px] text-[#94A3B8]">Search vendors</span>
      </div>
      <div className="flex gap-1.5">
        <div className="bg-[#1E3A5F] text-white text-[9px] font-semibold px-3 py-1 rounded-full">All</div>
        <div className="bg-white text-[#64748B] text-[9px] font-semibold px-3 py-1 rounded-full border border-[#E2E8F0]">
          Pending
        </div>
        <div className="bg-white text-[#64748B] text-[9px] font-semibold px-3 py-1 rounded-full border border-[#E2E8F0]">
          Paid
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-3.5 px-2">
        <div className="w-16 h-16 bg-[#F1F5F9] rounded-2xl flex items-center justify-center">
          <div className="w-9 h-9 border-[1.5px] border-dashed border-[#94A3B8] rounded-lg flex items-center justify-center text-sm text-[#94A3B8]">
            ₹
          </div>
        </div>
        <div className="text-center">
          <div className="text-[13px] font-semibold mb-1">No payment requests yet</div>
          <div className="text-[10px] text-[#64748B] leading-[1.5]">
            When a vendor raises a payment request against your PO, it'll show up here.
          </div>
        </div>
        <div className="bg-[#1E3A5F] text-white px-4 py-2 rounded-full text-[10px] font-semibold">
          Raise a request
        </div>
      </div>
    </MobileFrame>
  );
}

function LoadingState() {
  return (
    <MobileFrame schema="dark">
      <StatusBar schema="dark" />
      <div className="flex items-center gap-2">
        <div className="w-[18px] h-[18px] bg-[#1E293B] rounded-md" />
        <div className="h-3 w-[120px] bg-[#1E293B] rounded animate-pulse" />
      </div>
      <div className="bg-[#1E293B] rounded-[10px] p-2.5 flex flex-col gap-1.5">
        <div className="h-2 w-[60px] bg-[#2C4A6E] rounded animate-pulse" />
        <div className="h-2.5 w-[140px] bg-[#2C4A6E] rounded animate-pulse" />
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="bg-[#1E293B] rounded-[10px] p-3 flex flex-col gap-1.5">
          <div className="h-2 w-[80px] bg-[#2C4A6E] rounded animate-pulse" />
          <div className="h-2.5 w-[160px] bg-[#2C4A6E] rounded animate-pulse" />
          <div className="h-2 w-[100px] bg-[#2C4A6E] rounded animate-pulse" />
        </div>
        <div className="bg-[#1E293B] rounded-[10px] p-3 flex flex-col gap-1.5">
          <div className="h-2 w-[70px] bg-[#2C4A6E] rounded animate-pulse" />
          <div className="h-2.5 w-[150px] bg-[#2C4A6E] rounded animate-pulse" />
          <div className="h-2 w-[120px] bg-[#2C4A6E] rounded animate-pulse" />
        </div>
        <div className="bg-[#1E293B] rounded-[10px] p-3 flex flex-col gap-1.5">
          <div className="h-2 w-[90px] bg-[#2C4A6E] rounded animate-pulse" />
          <div className="h-2.5 w-[130px] bg-[#2C4A6E] rounded animate-pulse" />
          <div className="h-2 w-[110px] bg-[#2C4A6E] rounded animate-pulse" />
        </div>
      </div>
      <div className="mt-auto flex items-center justify-center gap-2">
        <div className="w-3.5 h-3.5 border-2 border-[#A8C4E8] border-r-transparent rounded-full animate-spin" />
        <span className="text-[11px] text-[#A8C4E8] font-semibold">Loading orders</span>
      </div>
    </MobileFrame>
  );
}

function ErrorState() {
  return (
    <MobileFrame schema="light">
      <StatusBar schema="light" />
      <div className="flex items-center gap-2">
        <div className="w-[18px] h-[18px] bg-[#F1F5F9] rounded-md flex items-center justify-center text-[#1E3A5F] text-[11px]">
          ←
        </div>
        <span className="text-[13px] font-semibold">Create order</span>
      </div>
      <div className="bg-[#FCE7E7] border border-[#FCA5A5] rounded-[10px] p-2.5 flex items-start gap-2">
        <div className="w-4 h-4 bg-[#B91C1C] text-white rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">
          !
        </div>
        <div>
          <div className="text-[10px] text-[#7F1D1D] font-semibold mb-0.5">Couldn't save order</div>
          <div className="text-[9px] text-[#991B1B] leading-[1.4]">
            Vendor doesn't have a tax ID on file. Add one to continue.
          </div>
        </div>
      </div>
      <div>
        <div className="text-[9px] text-[#64748B] mb-1 font-medium">Vendor</div>
        <div className="bg-white border-[1.5px] border-[#B91C1C] rounded-md px-2 py-1.5 text-[10px] font-semibold flex justify-between items-center">
          <span>Surya Marble & Stone</span>
          <div className="w-3.5 h-3.5 bg-[#B91C1C] text-white rounded-full flex items-center justify-center text-[9px]">
            !
          </div>
        </div>
        <div className="text-[9px] text-[#B91C1C] mt-1">Tax ID required</div>
      </div>
      <div>
        <div className="text-[9px] text-[#64748B] mb-1 font-medium">Project</div>
        <div className="bg-white border border-[#E2E8F0] rounded-md px-2 py-1.5 text-[10px] font-semibold">
          Modular kitchen — Block A
        </div>
      </div>
      <div>
        <div className="text-[9px] text-[#64748B] mb-1 font-medium">Delivery date</div>
        <div className="bg-white border border-[#E2E8F0] rounded-md px-2 py-1.5 text-[10px] font-semibold">
          22 Mar 2026
        </div>
      </div>
      <div className="mt-auto flex gap-1.5">
        <div className="flex-1 bg-white text-[#1E3A5F] py-2 rounded-lg text-[10px] font-semibold text-center border border-[#1E3A5F]">
          Cancel
        </div>
        <div className="flex-1 bg-[#B91C1C] text-white py-2 rounded-lg text-[10px] font-semibold text-center">
          Add tax ID
        </div>
      </div>
    </MobileFrame>
  );
}

export function SystemMotion03() {
  return (
    <section className="border-b border-[#18181B]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-24 py-20 lg:py-24">
        <PanelHeader
          overline="04 · System in motion · cont."
          headlineLine1="The states"
          headlineLine2="nobody designs."
          subhead={
            <>
              Empty, loading, error —{' '}
              <span className="text-[#FAFAFA]">three states most systems quietly skip.</span> Built into the library so
              the team never has to decide what an empty list looks like at 11pm before a release.
            </>
          }
          metaTop="3 of 3"
          metaBottom="States covered system-wide"
        />

        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          <ScreenColumn
            stage={
              <ScreenStage overline="07 · Empty" gradientHint="neutral">
                <EmptyState />
              </ScreenStage>
            }
            caption={
              <CaptionStrip
                headline="Empty list · contextual CTA"
                tokens={['surface/low', 'on-surface/muted']}
                components={['Empty state', 'Filter chips']}
              />
            }
          />
          <ScreenColumn
            stage={
              <ScreenStage overline="08 · Loading" gradientHint="cool">
                <LoadingState />
              </ScreenStage>
            }
            caption={
              <CaptionStrip
                headline="Skeleton mirroring real layout"
                tokens={['surface/default', 'primary/container']}
                components={['Skeleton row', 'Spinner']}
              />
            }
          />
          <ScreenColumn
            stage={
              <ScreenStage overline="09 · Error" gradientHint="warm">
                <ErrorState />
              </ScreenStage>
            }
            caption={
              <CaptionStrip
                headline="Inline error · field-level + recovery CTA"
                tokens={['error · error/container', 'on-error']}
                components={['Banner', 'Field error']}
              />
            }
          />
        </div>
      </div>
    </section>
  );
}