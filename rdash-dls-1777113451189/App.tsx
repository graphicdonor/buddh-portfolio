import { PageNav } from './components/PageNav';
import { Opener } from './sections/Opener';
import { Foundations } from './sections/Foundations';
import { Components } from './sections/Components';
import { SystemMotion01 } from './sections/SystemMotion01';
import { SystemMotion02 } from './sections/SystemMotion02';
import { SystemMotion03 } from './sections/SystemMotion03';
import { SystemMotion04 } from './sections/SystemMotion04';
import { Closer } from './sections/Closer';
import './index.css';

export default function App() {
  return (
    <div className="min-h-dvh bg-[#07070D] text-[#F4F4F5] font-['Space_Grotesk',system-ui,sans-serif] selection:bg-[#E11D48] selection:text-[#FAFAFA]">
      <PageNav />
      <main className="flex flex-col">
        <Opener />
        <Foundations />
        <Components />
        <SystemMotion01 />
        <SystemMotion02 />
        <SystemMotion03 />
        <SystemMotion04 />
        <Closer />
      </main>
      <footer className="border-t border-[#18181B] py-12 px-6 lg:px-24">
        <div className="mx-auto max-w-[1280px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-[#E11D48] rounded-md" />
            <span className="text-sm font-semibold tracking-tight">your.name</span>
          </div>
          <span className="text-xs tracking-[2px] uppercase text-[#52525B]">R'Dash · DLS chapter · 2026</span>
        </div>
      </footer>
    </div>
  );
}