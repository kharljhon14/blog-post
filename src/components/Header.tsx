import React from "react";
import { Link } from "react-router-dom";
import Article from "../models/article";

interface props {
   onCreateNew: () => void;
   selectedArticle: Article| undefined;
}

const Header = ({ onCreateNew, selectedArticle }: props) => {
   return (
      <nav className="header">
         <ul className="navigation">
            <li className="navigation__item">
               <Link onClick={onCreateNew} className="navigation__item-link" to="/">
                  HOME
               </Link>
            </li>
            <li className="navigation__item">
               {selectedArticle === undefined ? (
                  <Link onClick={onCreateNew} className="navigation__item-link" to="/form">
                     Create New Article
                  </Link>
               ) : (
                  ""
               )}
            </li>
         </ul>
      </nav>
   );
};

export default Header;
