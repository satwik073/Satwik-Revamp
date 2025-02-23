
import { IconBrandDribbble, IconLayoutDashboard, IconProgressDown, IconAdjustmentsHorizontal, IconArrowRightToArc } from '@tabler/icons-react';
import './App.css';
import ImageLinks from './assets';

import MainAction from './Pages/Display_Hub/__MainAction';
import FooterNavigation from './Global/PedestialNavs/FooterNavigation';


const App = () => {
  const content = [
    { icon: IconBrandDribbble, label: 'Figma design source files' },
    { icon: IconLayoutDashboard, label: 'High quality templates' },
    { icon: IconAdjustmentsHorizontal, label: 'Advanced Coding skills' },
    { icon: IconProgressDown, label: 'Simple demo installation' },
    { icon: IconArrowRightToArc, label: 'Reliable updates' }
  ];

  return (
    <div className="App w-full">
      {/* <CursorDispatcher /> */}
      <MainAction imageLink={ImageLinks?.__Elite} captionDisplay='Power Elite Author' titleRender='The all‐in‐one WordPress theme to build beautiful sites.' subDivisionSection __scrapButton={'Go to LinkedIn'} __scrapText='Life-time license, free updates
and 6 months of free support.' highlightMenu content={content} />
      <FooterNavigation />
    </div>
  );
};

export default App;
