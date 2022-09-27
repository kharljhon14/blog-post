import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
   return (
      <nav className="header">
         <ul className="navigation">
            <li className="navigation__item">
               <Link className="navigation__item-link" to="/">
                  HOME
               </Link>
            </li>
            <li className="navigation__item">
               <Link className="navigation__item-link" to="/create">
                  Create New Article
               </Link>
            </li>
         </ul>
      </nav>
   );
};

export default Header;
