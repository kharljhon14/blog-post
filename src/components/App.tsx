import React, { useState } from "react";
import Header from "./Header";
import Table from "./Table";
import Form from "./Form";
import { Routes, Route } from "react-router-dom";
import Article from "../models/article";
import Detailed from "./Detailed";
import { initialArticles } from "../seeds/articles";
import "../sass/main.scss";

const App = () => {
   const [articles, setArticles] = useState<Array<Article>>(initialArticles);
   const [selectedArticle, setSelectedArticle] = useState<Article>();

   const onCreateNewArticle = () => {
      setSelectedArticle(undefined);
   };

   const addNewArticle = (article: Article) => {
      setArticles([...articles, article]);
   };

   const editArticle = (article: Article) => {
      setArticles((prev) => {
         const newArticles = prev.map((prevArticle) => {
            if (prevArticle.id === article.id) {
               prevArticle = article;
            }
            return prevArticle;
         });

         return newArticles;
      });
      setSelectedArticle(undefined);
   };

   const deleteArticle = (id: string) => {
      setArticles(articles.filter((article) => article.id !== id));
   };

   const selectArticle = (article: Article) => {
      setSelectedArticle(article);
   };

   return (
      <div className="app">
         <Header selectedArticle={selectedArticle} onCreateNew={onCreateNewArticle} />
         <Routes>
            <Route path="/" element={<Table articles={articles} onDeleteArticle={deleteArticle} onSelectArticle={selectArticle} />} />
            <Route path="/form" element={<Form onAddingArticle={addNewArticle} article={selectedArticle} onEditArticle={editArticle} />} />
            <Route path="/article/:id" element={<Detailed article={selectedArticle} />} />
         </Routes>
      </div>
   );
};

export default App;
