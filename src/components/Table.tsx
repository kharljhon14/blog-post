import Article from "../models/article";
import TableItem from "./TableItem";

interface props {
   articles: Array<Article>;
   onDeleteArticle: (id: string) => void;
}

const Table = ({ articles, onDeleteArticle }: props) => {
   const renderItems = articles.map((article) => {
      return <TableItem key={article.id} article={article} onDeleteArticle={onDeleteArticle}/>;
   });

   return (
      <table className="table">
         <thead>
            <tr>
               <th>Article Title</th>
               <th>Article Content Snippet</th>
               <th>Date</th>
               <th>Edit/Delete</th>
            </tr>
         </thead>
         <tbody>{articles.length > 0 ? renderItems : <tr></tr>}</tbody>
      </table>
   );
};

export default Table;
