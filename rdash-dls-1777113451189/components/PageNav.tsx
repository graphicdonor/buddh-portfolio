export function PageNav() {
  return (
    <nav className="sticky top-0 z-30 backdrop-blur-md bg-[#07070D]/80 border-b border-[#18181B]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 h-[68px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-6 h-6 bg-[#E11D48] rounded-md transition-transform duration-200 group-hover:scale-110" />
          <span className="text-sm font-semibold tracking-tight text-[#FAFAFA]">your.name</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#" className="text-[#FAFAFA] hover:text-[#E11D48] transition-colors duration-150">Work</a>
          <a href="#" className="text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors duration-150">About</a>
          <a href="#" className="text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors duration-150">Writing</a>
          <a
            href="#"
            className="px-4 py-1.5 bg-[#FAFAFA] text-[#07070D] rounded-full font-medium hover:bg-[#E11D48] hover:text-[#FAFAFA] transition-colors duration-150"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}