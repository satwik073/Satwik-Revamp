import {
  IconBrandDribbble,
  IconLayoutDashboard,
  IconProgressDown,
  IconAdjustmentsHorizontal,
  IconArrowRightToArc,
} from '@tabler/icons-react';

import MainAction from './Pages/Display_Hub/__MainAction';
import FooterNavigation from './Global/PedestialNavs/FooterNavigation';

const App = () => {
  const content = [
    { icon: IconBrandDribbble, label: 'Figma design source files' },
    { icon: IconLayoutDashboard, label: 'High quality templates' },
    { icon: IconAdjustmentsHorizontal, label: 'Advanced Coding skills' },
    { icon: IconProgressDown, label: 'Simple demo installation' },
    { icon: IconArrowRightToArc, label: 'Reliable regular updates' },
  ];

  return (
    <div className="w-full bg-black/10">
      <a 
        className="safe-paddings relative z-50 flex w-full items-center justify-center gap-x-2.5 overflow-hidden px-4 py-2.5 leading-none transition-colors duration-200 dark:bg-[#0B0C0F] bg-[#F5FBFD]" 
        href="https://neon.tech/blog/hipaa-multitenancy-b2b-saas"
      >
        {/* Gradient Background Layers */}
        <span 
          className="absolute left-1/3 -z-10 h-[106px] w-[29px] origin-center -translate-y-1/2 rotate-[226deg] rounded-full mix-blend-plus-lighter blur-xl dark:opacity-100 sm:left-[35%] -top-2 z-40 bg-[linear-gradient(265.08deg,#FFFFFF_52.92%,rgba(255,255,255,0)_53.57%)] opacity-70"
        ></span>
        
        <span 
          className="absolute left-1/3 top-1/2 -z-10 h-[188px] w-[60px] origin-center -translate-y-[43%] rotate-[226deg] rounded-full bg-[linear-gradient(-45deg,_#6DC5D8_40.06%,_#6A77E8_48.11%)] mix-blend-plus-lighter blur-2xl dark:opacity-100 sm:left-[35%]  opacity-100"
        ></span>
        
        <span 
          className="absolute left-1/3 top-1/2 z-0 h-[188px] w-[60px] origin-center -translate-y-[43%] rotate-[226deg] rounded-full bg-[linear-gradient(-45deg,_#6DC5D8_40.06%,_#6A77E8_48.11%)] opacity-100 blur-2xl dark:hidden sm:left-[35%] "
        ></span>
        
        <img 
          alt="" 
          width="345" 
          height="35" 
          decoding="async" 
          className="absolute left-1/3 top-0 z-10 [mask-image:linear-gradient(90deg,rgba(0,0,0,.1)_15%,black_70%,rgba(0,0,0,.1)_100%)] dark:opacity-100 sm:left-0 sm:translate-x-0 opacity-80 mix-blend-overlay" 
          style={{color: 'transparent'}} 
          src="https://neon.tech/_next/static/svgs/9ee958f8b2be7694e4ce9140c14df68e.svg"
        />
        
        {/* Bottom Borders */}
        <span 
          className="absolute inset-x-0 bottom-0 z-10 block h-px w-full bg-gray-new-98 bg-opacity-40 dark:hidden" 
          aria-hidden="true"
        ></span>
        
        <span 
          className="absolute inset-x-0 bottom-0 z-10 block h-px w-full mix-blend-overlay dark:bg-white bg-black-new" 
          aria-hidden="true"
        ></span>
        
        {/* Text with Gradient Effect */}
        <span 
          className="relative z-50 truncate py-1 text-sm font-medium tracking-tight text-[#E4E5E7] sm:text-[17px]"
        >
          Learn how Neon simplifies HIPAA compliance and scaling for multi-tenant SaaS
        </span>
        
        {/* Arrow Icon */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          fill="none" 
          viewBox="0 0 16 16" 
          className="relative z-50 w-[9px] shrink-0 origin-center -rotate-90 opacity-60 dark:text-white text-black-new"
        >
          <path stroke="currentColor" strokeWidth="1.4" d="m15 5-7 7-7-7"></path>
        </svg>
      </a>
    </div>
  );
};

export default App;
