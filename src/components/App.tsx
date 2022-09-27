import React, { useState } from "react";
import Header from "./Header";
import Table from "./Table";
import NewArticle from "./NewArticle";
import { Routes, Route } from "react-router-dom";
import Article from "../models/article";
import "../sass/main.scss";

const App = () => {
   const [articles, setArticles] = useState<Array<Article>>([]);

   const addNewArticle = (article: Article) => {
      setArticles([...articles, article]);
   };

   const deleteArticle = (id: string) => {
      setArticles(articles.filter((article) => article.id !== id));
   };

   return (
      <div className="app">
         <Header />
         <Routes>
            <Route path="/" element={<Table articles={articles} onDeleteArticle={deleteArticle}/>} />
            <Route path="/create" element={<NewArticle onAddingArticle={addNewArticle} />} />
         </Routes>
      </div>
   );
};

export default App;
