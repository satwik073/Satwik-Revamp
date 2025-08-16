
// @ts-nocheck
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n'
import App from './App.tsx'
import { NavigationMenuDemo } from './Global/Navigation/NavigationMenu.tsx'
import FooterNavigation from './Global/PedestialNavs/FooterNavigation.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <NavigationMenuDemo/> */}
    <App />
   
  </StrictMode>,
)
