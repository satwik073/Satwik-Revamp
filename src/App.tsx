
import './App.css';
import ImageLinks from './assets';

import MainAction from './Pages/Display_Hub/__MainAction';

const App = () => {
  return (
    <div className="App w-full md:p-6">
      {/* <CursorDispatcher /> */}
      <MainAction imageLink={ImageLinks?.__Elite} captionDisplay='Power Elite Author' titleRender='The all‐in‐one WordPress theme to build beautiful sites.' subDivisionSection __scrapButton={'Go to LinkedIn'} __scrapText='Life-time license, free updates
and 6 months of free support.'/>
    </div>
  );
};

export default App;
