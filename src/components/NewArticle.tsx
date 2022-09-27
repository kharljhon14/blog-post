import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentDate } from "../helpers";
import Article from "../models/article";

interface props {
   onAddingArticle: (article: Article) => void;
}

const NewArticle = ({ onAddingArticle }: props) => {
   const [title, setTitle] = useState<string>("");
   const [content, setContent] = useState<string>("");
   const navigate = useNavigate();

   const handleSubmit = (evt: React.FormEvent) => {
      evt.preventDefault();
      const newArticle = {
         id: (Date.now() * Math.random() * 100).toFixed(0).toString(),
         title: title,
         content: content,
         date: getCurrentDate(),
      };

      onAddingArticle(newArticle);
      navigate("/");
   };

   const handleTitle = (evt: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(evt.target.value);
   };

   const handleContent = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
      setContent(evt.target.value);
   };

   return (
      <div className="new-article">
         <h2 className="new-article__header">Create New Article</h2>
         <form onSubmit={handleSubmit} className="new-article__form" >
            <input className="new-article__form-title" value={title} onChange={handleTitle} type="text" placeholder="Article Title" required />
            <textarea className="new-article__form-content" value={content} onChange={handleContent} cols={50} rows={10} placeholder="Article Content" required></textarea>
            <button className="btn">Post</button>
         </form>
      </div>
   );
};

export default NewArticle;
