import React from 'react';
import {NavLink} from 'react-router-dom';

const Sidebar: React.FC = () => {
   return (
      <nav className="sidebar">
         <ul>
            <li>
               <NavLink to="/" className={({isActive}) => (isActive ? 'active' : '')}>
                  Дэшборд
               </NavLink>
            </li>
            <li>
               <NavLink to="/code" className={({isActive}) => (isActive ? 'active' : '')}>
                  Код Участия
               </NavLink>
            </li>
            <li className="menu-group">
               <span className="menu-group-name">Гильдии</span>
               <ul>
                  <li>
                     <NavLink to="/guild/1" className={({isActive}) => (isActive ? 'active' : '')}>
                        Toxiic
                     </NavLink>
                  </li>
               </ul>
            </li>
         </ul>
      </nav>
   );
};

export default Sidebar;
