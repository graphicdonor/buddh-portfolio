import {
  PanelHeader,
  ScreenStage,
  CaptionStrip,
  MobileFrame,
  StatusBar,
  ScreenColumn,
} from '../components/PanelParts';

function ItemDetailsSheet() {
  return (
    <div className="w-60 bg-[#FAFAFA] rounded-t-3xl rounded-b-none px-4 py-3.5 flex flex-col gap-2.5 text-[#0F172A] border-[6px] border-b-0 border-[#1F1F23] shadow-[0_-20px_60px_rgba(0,0,0,0.6)] self-end">
      <div className="w-9 h-1 bg-[#CBD5E1] rounded-full mx-auto" />
      <div className="flex justify-between items-center">
        <span className="text-[13px] font-semibold">Item details</span>
        <div className="w-[18px] h-[18px] bg-[#F1F5F9] rounded-full flex items-center justify-center text-[10px] text-[#64748B]">
          ×
        </div>
      </div>
      <div className="bg-[#F1F5F9] rounded-lg p-2.5">
        <div className="text-[9px] text-[#64748B] tracking-[1px] uppercase mb-0.5">Floor tiles · Cat 12</div>
        <div className="text-[11px] font-semibold">Vitrified · 600×600 matt</div>
      </div>
      <div className="flex gap-1.5">
        <div className="flex-1 bg-[#1E3A5F] text-white py-1.5 rounded-md text-[9px] text-center font-semibold">
          Vendor
        </div>
        <div className="flex-1 bg-[#F1F5F9] text-[#64748B] py-1.5 rounded-md text-[9px] text-center">
          Progress
        </div>
      </div>
      <div className="flex flex-col gap-1.5 text-[9px]">
        <div className="flex justify-between text-[#64748B]">
          <span>HSN</span>
          <span className="text-[#0F172A] font-semibold">6907</span>
        </div>
        <div className="flex justify-between text-[#64748B]">
          <span>Quantity</span>
          <span className="text-[#0F172A] font-semibold">240 sqft</span>
        </div>
        <div className="flex justify-between text-[#64748B]">
          <span>Tax</span>
          <span className="text-[#0F172A] font-semibold">18%</span>
        </div>
        <div className="flex justify-between text-[#64748B]">
          <span>Subtotal</span>
          <span className="text-[#0F172A] font-semibold">₹71,356</span>
        </div>
        <div className="flex justify-between border-t border-[#E2E8F0] pt-1.5 mt-0.5">
          <span className="text-[#1E3A5F] font-semibold">Total</span>
          <span className="text-[#1E3A5F] font-bold">₹84,200</span>
        </div>
      </div>
      <div className="bg-[#1E3A5F] text-white py-2 rounded-lg text-[10px] font-semibold text-center">
        Save changes
      </div>
    </div>
  );
}

function OrderSummary() {
  return (
    <MobileFrame schema="dark">
      <StatusBar schema="dark" />
      <div className="flex items-center gap-2">
        <div className="w-[18px] h-[18px] bg-[#1E293B] rounded-md flex items-center justify-center text-[#A8C4E8] text-[11px]">
          ←
        </div>
        <span className="text-[13px] text-[#FAFAFA] font-semibold">Order summary</span>
      </div>
      <div className="bg-[#1E293B] rounded-[10px] p-2.5">
        <div className="text-[9px] text-[#94A3B8] tracking-[1px] uppercase mb-0.5">PO · 2419</div>
        <div className="text-[11px] text-[#FAFAFA] font-semibold">Modular kitchen execution</div>
        <div className="text-[9px] text-[#A8C4E8] mt-1">Stage 4 · Execution</div>
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="bg-[#1E293B] rounded-lg p-2 flex justify-between">
          <span className="text-[9px] text-[#CBD5E1]">12 items</span>
          <span className="text-[9px] text-[#FAFAFA] font-semibold">₹2.40L</span>
        </div>
        <div className="bg-[#1E293B] rounded-lg p-2 flex justify-between">
          <span className="text-[9px] text-[#CBD5E1]">Discount</span>
          <span className="text-[9px] text-[#A8C4E8] font-semibold">−₹12,000</span>
        </div>
        <div className="bg-[#1E293B] rounded-lg p-2 flex justify-between">
          <span className="text-[9px] text-[#CBD5E1]">GST · 18%</span>
          <span className="text-[9px] text-[#FAFAFA] font-semibold">₹41,040</span>
        </div>
      </div>
      <div className="bg-[#7F1D1D] rounded-[10px] p-3 flex justify-between items-center">
        <span className="text-[10px] text-[#FECACA] font-semibold">Total payable</span>
        <span className="text-[13px] text-white font-bold">₹2.69L</span>
      </div>
      <div className="mt-auto flex gap-1.5">
        <div className="flex-1 bg-[#1E293B] text-[#A8C4E8] py-2 rounded-lg text-[10px] font-semibold text-center border border-[#334155]">
          Save
        </div>
        <div className="flex-1 bg-[#A8C4E8] text-[#0F172A] py-2 rounded-lg text-[10px] font-semibold text-center">
          Approve
        </div>
      </div>
    </MobileFrame>
  );
}

function CreateOrder() {
  return (
    <MobileFrame schema="light">
      <StatusBar schema="light" />
      <div className="flex items-center gap-2">
        <div className="w-[18px] h-[18px] bg-[#F1F5F9] rounded-md flex items-center justify-center text-[#1E3A5F] text-[11px]">
          ←
        </div>
        <span className="text-[13px] font-semibold">Create order</span>
      </div>
      <div className="bg-[#F1F5F9] rounded-[10px] p-2 flex items-center gap-1.5">
        <div className="w-[18px] h-[18px] bg-[#1E3A5F] text-white rounded-full flex items-center justify-center text-[9px] font-semibold">
          1
        </div>
        <div className="flex-1 h-0.5 bg-[#1E3A5F] rounded-full" />
        <div className="w-[18px] h-[18px] bg-white text-[#1E3A5F] border-[1.5px] border-[#1E3A5F] rounded-full flex items-center justify-center text-[9px] font-semibold">
          2
        </div>
        <div className="flex-1 h-0.5 bg-[#E2E8F0] rounded-full" />
        <div className="w-[18px] h-[18px] bg-[#F1F5F9] text-[#94A3B8] rounded-full flex items-center justify-center text-[9px] font-semibold">
          3
        </div>
      </div>
      <div>
        <div className="text-[9px] text-[#64748B] mb-1 font-medium">Vendor</div>
        <div className="bg-white border border-[#1E3A5F] rounded-md px-2 py-1.5 text-[10px] font-semibold">
          Surya Marble & Stone
        </div>
      </div>
      <div>
        <div className="text-[9px] text-[#64748B] mb-1 font-medium">Project</div>
        <div className="bg-white border border-[#E2E8F0] rounded-md px-2 py-1.5 text-[10px] text-[#64748B]">
          Select project
        </div>
      </div>
      <div>
        <div className="text-[9px] text-[#64748B] mb-1 font-medium">Delivery date</div>
        <div className="bg-white border border-[#E2E8F0] rounded-md px-2 py-1.5 text-[10px] font-semibold">
          22 Mar 2026
        </div>
      </div>
      <div>
        <div className="text-[9px] text-[#64748B] mb-1 font-medium">Notes</div>
        <div className="bg-white border border-[#E2E8F0] rounded-md px-2 py-1.5 text-[10px] text-[#94A3B8] h-[30px]">
          Add note for vendor
        </div>
      </div>
      <div className="mt-auto flex gap-1.5">
        <div className="flex-1 bg-white text-[#1E3A5F] py-2 rounded-lg text-[10px] font-semibold text-center border border-[#1E3A5F]">
          Back
        </div>
        <div className="flex-1 bg-[#1E3A5F] text-white py-2 rounded-lg text-[10px] font-semibold text-center">
          Continue
        </div>
      </div>
    </MobileFrame>
  );
}

export function SystemMotion01() {
  return (
    <section className="border-b border-[#18181B]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-24 py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
          <div className="max-w-[680px]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1.5 h-1.5 bg-[#E11D48] rounded-full" />
              <span className="text-[11px] tracking-[3px] uppercase text-[#71717A]">04 · System in motion</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold leading-[1.05] tracking-[-0.025em] text-[#FAFAFA] mb-5">
              From token
              <br />
              to screen.
            </h2>
            <p className="text-[16px] leading-[1.55] text-[#A1A1AA] max-w-[540px]">
              Three production flows on the construction site —{' '}
              <span className="text-[#FAFAFA]">item details, order summary, create order</span> — built entirely from
              the tokens and components above. Light, dark, and the bottom sheet that holds the field together.
            </p>
          </div>
          <div className="flex items-end gap-1.5 shrink-0 pb-1">
            <div className="w-3.5 h-3.5 bg-[#FAFAFA] rounded-sm" />
            <div className="w-3.5 h-3.5 bg-[#A1A1AA] rounded-sm" />
            <div className="w-3.5 h-3.5 bg-[#52525B] rounded-sm" />
            <span className="text-[10px] tracking-[2px] uppercase text-[#71717A] ml-2">
              Light · Dark · Sheet
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          <ScreenColumn
            stage={
              <ScreenStage overline="01 · Item details" gradientHint="neutral">
                <ItemDetailsSheet />
              </ScreenStage>
            }
            caption={
              <CaptionStrip
                headline="Bottom sheet over content"
                tokens={['surface/high', 'scrim', 'radius/xl']}
                components={['Tabs', 'List rows', 'Button']}
              />
            }
          />
          <ScreenColumn
            stage={
              <ScreenStage overline="02 · Order summary" gradientHint="cool">
                <OrderSummary />
              </ScreenStage>
            }
            caption={
              <CaptionStrip
                headline="GST-aware total · dark schema"
                tokens={['surface/default', 'error/container']}
                components={['List rows', 'Buttons', 'Status chip']}
              />
            }
          />
          <ScreenColumn
            stage={
              <ScreenStage overline="03 · Create order" gradientHint="neutral">
                <CreateOrder />
              </ScreenStage>
            }
            caption={
              <CaptionStrip
                headline="Multi-step form · light schema"
                tokens={['surface/lowest', 'primary']}
                components={['Stepper', 'Inputs', 'Date picker']}
              />
            }
          />
        </div>
      </div>
    </section>
  );
}