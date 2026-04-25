import {
  PanelHeader,
  ScreenStage,
  CaptionStrip,
  MobileFrame,
  StatusBar,
  ScreenColumn,
} from '../components/PanelParts';

function PaymentRequest() {
  return (
    <MobileFrame schema="dark">
      <StatusBar schema="dark" />
      <div className="flex items-center gap-2">
        <div className="w-[18px] h-[18px] bg-[#1E293B] rounded-md flex items-center justify-center text-[#A8C4E8] text-[11px]">
          ←
        </div>
        <span className="text-[13px] text-[#FAFAFA] font-semibold">Payment request</span>
      </div>
      <div className="bg-[#2C4A6E] rounded-[10px] p-2.5 flex justify-between items-center">
        <div>
          <div className="text-[9px] text-[#A8C4E8] tracking-[1px] uppercase mb-0.5">Pending</div>
          <div className="text-[10px] text-[#FAFAFA] font-semibold">Awaiting approval</div>
        </div>
        <div className="w-2 h-2 bg-[#FBBF24] rounded-full" />
      </div>
      <div className="bg-[#1E293B] rounded-[10px] p-2.5">
        <div className="text-[9px] text-[#94A3B8] mb-0.5">Vendor</div>
        <div className="text-[11px] text-[#FAFAFA] font-semibold">Surya Marble & Stone</div>
        <div className="text-[9px] text-[#A8C4E8] mt-0.5">Linked · PO-2419</div>
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="bg-[#1E293B] rounded-lg p-2 flex justify-between">
          <span className="text-[9px] text-[#CBD5E1]">Requested</span>
          <span className="text-[9px] text-[#FAFAFA] font-semibold">₹84,200</span>
        </div>
        <div className="bg-[#1E293B] rounded-lg p-2 flex justify-between">
          <span className="text-[9px] text-[#CBD5E1]">Already paid</span>
          <span className="text-[9px] text-[#FAFAFA] font-semibold">₹40,000</span>
        </div>
        <div className="bg-[#1E293B] rounded-lg p-2 flex justify-between">
          <span className="text-[9px] text-[#CBD5E1]">Due</span>
          <span className="text-[9px] text-[#A8C4E8] font-bold">₹44,200</span>
        </div>
      </div>
      <div className="mt-auto flex gap-1.5">
        <div className="flex-1 bg-[#1E293B] text-[#FCA5A5] py-2 rounded-lg text-[10px] font-semibold text-center border border-[#7F1D1D]">
          Reject
        </div>
        <div className="flex-1 bg-[#A8C4E8] text-[#0F172A] py-2 rounded-lg text-[10px] font-semibold text-center">
          Approve
        </div>
      </div>
    </MobileFrame>
  );
}

function GRNLinked() {
  return (
    <MobileFrame schema="light">
      <StatusBar schema="light" />
      <div className="flex items-center gap-2">
        <div className="w-[18px] h-[18px] bg-[#F1F5F9] rounded-md flex items-center justify-center text-[#1E3A5F] text-[11px]">
          ←
        </div>
        <span className="text-[13px] font-semibold">Linked GRN</span>
      </div>
      <div className="bg-[#F1F5F9] rounded-lg p-2.5">
        <div className="text-[9px] text-[#64748B] mb-0.5">PO-2419 · Floor tiles</div>
        <div className="text-[10px] font-semibold">240 sqft ordered</div>
        <div className="flex items-center gap-1.5 mt-1.5">
          <div className="flex-1 h-1 bg-white rounded-full">
            <div className="w-3/4 h-1 bg-[#1E3A5F] rounded-full" />
          </div>
          <span className="text-[9px] text-[#1E3A5F] font-semibold">75%</span>
        </div>
      </div>
      <div className="flex flex-col gap-1.5 flex-1 overflow-hidden">
        <div className="text-[9px] text-[#64748B] tracking-[1px] uppercase mt-1">Receipts</div>
        <div className="bg-white border border-[#E2E8F0] rounded-lg p-2">
          <div className="flex justify-between items-center mb-0.5">
            <span className="text-[10px] font-semibold">GRN-3421</span>
            <div className="bg-[#D1FAE5] text-[#065F46] text-[8px] font-semibold px-1.5 py-0.5 rounded-full">
              Received
            </div>
          </div>
          <div className="text-[9px] text-[#64748B]">120 sqft · 14 Mar</div>
        </div>
        <div className="bg-white border border-[#E2E8F0] rounded-lg p-2">
          <div className="flex justify-between items-center mb-0.5">
            <span className="text-[10px] font-semibold">GRN-3458</span>
            <div className="bg-[#D1FAE5] text-[#065F46] text-[8px] font-semibold px-1.5 py-0.5 rounded-full">
              Received
            </div>
          </div>
          <div className="text-[9px] text-[#64748B]">60 sqft · 18 Mar</div>
        </div>
        <div className="bg-white border border-[#E2E8F0] rounded-lg p-2">
          <div className="flex justify-between items-center mb-0.5">
            <span className="text-[10px] font-semibold">GRN-3502</span>
            <div className="bg-[#FEF3C7] text-[#92400E] text-[8px] font-semibold px-1.5 py-0.5 rounded-full">
              Pending
            </div>
          </div>
          <div className="text-[9px] text-[#64748B]">60 sqft · ETA 24 Mar</div>
        </div>
      </div>
      <div className="mt-auto bg-[#1E3A5F] text-white py-2 rounded-lg text-[10px] font-semibold text-center">
        Log new receipt
      </div>
    </MobileFrame>
  );
}

function ProgressReport() {
  return (
    <MobileFrame schema="dark">
      <StatusBar schema="dark" />
      <div className="flex items-center gap-2">
        <div className="w-[18px] h-[18px] bg-[#1E293B] rounded-md flex items-center justify-center text-[#A8C4E8] text-[11px]">
          ←
        </div>
        <span className="text-[13px] text-[#FAFAFA] font-semibold">Progress report</span>
      </div>
      <div className="flex items-center gap-1.5 bg-[#1E293B] rounded-[10px] p-2">
        <div className="text-[9px] text-[#FAFAFA] bg-[#2C4A6E] px-2 py-1 rounded-md font-semibold">Vendor</div>
        <div className="text-[9px] text-[#94A3B8] px-2 py-1 font-semibold">Progress</div>
      </div>
      <div className="bg-[#1E293B] rounded-[10px] p-2.5">
        <div className="text-[9px] text-[#94A3B8] mb-0.5">Today · 18 Mar</div>
        <div className="text-[11px] text-[#FAFAFA] font-semibold">Site update by Ravi K.</div>
      </div>
      <div className="bg-[#1E293B] rounded-[10px] p-2.5 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="text-[10px] text-[#FAFAFA] font-semibold">Floor tiles</span>
          <span className="text-[9px] text-[#A8C4E8] font-semibold">62%</span>
        </div>
        <div className="h-1 bg-[#0F172A] rounded-full">
          <div className="w-[62%] h-1 bg-[#A8C4E8] rounded-full" />
        </div>
        <div className="flex justify-between items-center mt-1">
          <span className="text-[10px] text-[#FAFAFA] font-semibold">Wall paint</span>
          <span className="text-[9px] text-[#FBBF24] font-semibold">28%</span>
        </div>
        <div className="h-1 bg-[#0F172A] rounded-full">
          <div className="w-[28%] h-1 bg-[#FBBF24] rounded-full" />
        </div>
        <div className="flex justify-between items-center mt-1">
          <span className="text-[10px] text-[#FAFAFA] font-semibold">Modular ktn</span>
          <span className="text-[9px] text-[#94A3B8] font-semibold">Not started</span>
        </div>
        <div className="h-1 bg-[#0F172A] rounded-full" />
      </div>
      <div className="bg-[#1E293B] rounded-[10px] p-2.5 flex items-center gap-2">
        <div className="w-6 h-6 bg-[#2C4A6E] rounded-md flex items-center justify-center text-[11px] text-[#A8C4E8]">
          📷
        </div>
        <div>
          <div className="text-[10px] text-[#FAFAFA] font-semibold">3 site photos</div>
          <div className="text-[9px] text-[#94A3B8]">Tap to view</div>
        </div>
      </div>
      <div className="mt-auto bg-[#A8C4E8] text-[#0F172A] py-2 rounded-lg text-[10px] font-semibold text-center">
        Log update
      </div>
    </MobileFrame>
  );
}

export function SystemMotion02() {
  return (
    <section className="border-b border-[#18181B]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-24 py-20 lg:py-24">
        <PanelHeader
          overline="04 · System in motion · cont."
          headlineLine1="After the order,"
          headlineLine2="the rest of the chain."
          subhead={
            <>
              Payment requests, goods received against a PO, on-site progress logged by execution teams —{' '}
              <span className="text-[#FAFAFA]">all bound to the same tokens, all at parity with the screens above.</span>
            </>
          }
          metaTop="Stage 4"
          metaBottom="Execution in progress"
        />

        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          <ScreenColumn
            stage={
              <ScreenStage overline="04 · Payment request" gradientHint="neutral">
                <PaymentRequest />
              </ScreenStage>
            }
            caption={
              <CaptionStrip
                headline="Linked to PO · status pill"
                tokens={['primary/container', 'tertiary']}
                components={['Status chip', 'Link reference']}
              />
            }
          />
          <ScreenColumn
            stage={
              <ScreenStage overline="05 · GRN linked" gradientHint="neutral">
                <GRNLinked />
              </ScreenStage>
            }
            caption={
              <CaptionStrip
                headline="Receipt timeline · progress bar"
                tokens={['surface/lowest', 'success · warning']}
                components={['Progress bar', 'Status chips']}
              />
            }
          />
          <ScreenColumn
            stage={
              <ScreenStage overline="06 · Progress report" gradientHint="cool">
                <ProgressReport />
              </ScreenStage>
            }
            caption={
              <CaptionStrip
                headline="Multi-row progress · photo log"
                tokens={['primary · warning', 'surface/default']}
                components={['Tabs', 'Progress bars', 'Image tile']}
              />
            }
          />
        </div>
      </div>
    </section>
  );
}