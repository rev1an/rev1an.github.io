import React from 'react';
import {NavLink} from 'react-router-dom';

const Header: React.FC = () => {
   return (
      <header className="header">
         <NavLink className="branding" to="/">Тохики</NavLink>
         <div className="header-right">
            <button className="notification-button">🔔</button>
            <div className="user-avatar">
              {/* <img src="/path/to/avatar.png" alt="User Avatar" />*/}
            </div>
         </div>
      </header>
   );
};

export default Header;