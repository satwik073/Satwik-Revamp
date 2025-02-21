import React, { useEffect, useState } from 'react'


const CursorDispatcher = () => {
     const [__CURSOR_POSITION__, __SET_CURSOR_POSITION__] = useState({ x: 0, y: 0 });
      const [__CURSOR_VISIBLE__, __SET_CURSOR_VISIBLE__] = useState(true);
      const [__CURSOR_ENLARGED__, __SET_CURSOR_ENLARGED__] = useState(false);
      const [__OUTLINE_POS__, setOutlinePosition] = useState({ x: 0, y: 0 });
    
      const delay = 8;
      let _x = 0;
      let _y = 0;
    
      useEffect(() => {
        const __HANDLE_MS_MV_Event = (e : any) => {
          __SET_CURSOR_POSITION__({ x: e.pageX, y: e.pageY });
          setOutlinePosition({
            x: _x + (e.pageX - _x) / delay,
            y: _y + (e.pageY - _y) / delay,
          });
          _x = e.pageX;
          _y = e.pageY;
        };
    
        const __HANDLE_MOUSE_ENTER__ = () => {
          __SET_CURSOR_VISIBLE__(true);
        };
        const __HANDLE_MOUSE_LEAVE__ = () => {
          __SET_CURSOR_VISIBLE__(false);
        };
        const __HANDLE_MOUSE_OVER__ = () => {
          __SET_CURSOR_ENLARGED__(true);
        };
        const __HANDLE_MOUSE_OUT__ = () => {
          __SET_CURSOR_ENLARGED__(false);
        };
    
        document.addEventListener('mousemove', __HANDLE_MS_MV_Event);
        document.addEventListener('mouseenter', __HANDLE_MOUSE_ENTER__);
        document.addEventListener('mouseleave', __HANDLE_MOUSE_LEAVE__);
    
        const links = document.querySelectorAll('a');
        links.forEach((link) => {
          link.addEventListener('mouseover', __HANDLE_MOUSE_OVER__);
          link.addEventListener('mouseout', __HANDLE_MOUSE_OUT__);
        });
    
        return () => {
          document.removeEventListener('mousemove', __HANDLE_MS_MV_Event);
          document.removeEventListener('mouseenter', __HANDLE_MOUSE_ENTER__);
          document.removeEventListener('mouseleave', __HANDLE_MOUSE_LEAVE__);
          links.forEach((link) => {
            link.removeEventListener('mouseover', __HANDLE_MOUSE_OVER__);
            link.removeEventListener('mouseout', __HANDLE_MOUSE_OUT__);
          });
        };
      }, []);
    
      const cursorDotStyle:React.CSSProperties  = {
        position: 'absolute',
        top: `${__CURSOR_POSITION__.y}px`,
        left: `${__CURSOR_POSITION__.x}px`,
        width: '8px',
        height: '8px',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: __CURSOR_VISIBLE__ ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out',
        pointerEvents: 'none', 
        zIndex: 9999,
      };
    
      const cursorOutlineStyle:React.CSSProperties  = {
        position: 'absolute',
        top: `${__OUTLINE_POS__.y}px`,
        left: `${__OUTLINE_POS__.x}px`,
        width: '45px',
        height: '45px',
        border: '1px solid red',
        borderRadius: '50%',
        opacity: __CURSOR_VISIBLE__ ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
        transform: __CURSOR_ENLARGED__
          ? 'translate(-50%, -50%) scale(1.5)'
          : 'translate(-50%, -50%) scale(1)',
        pointerEvents: 'none',
        zIndex: 9999,
      };
    
      return (
        <>
          <div className="cursor-dot" style={cursorDotStyle}></div>
          <div className="cursor-dot-outline" style={cursorOutlineStyle}></div>
        </>
  )
}

export default CursorDispatcher