import { createSnippet } from "../helpers";
import Article from "../models/article";

interface props {
   article: Article;
   onDeleteArticle: (id: string) => void;
}

const TableItem = ({ article, onDeleteArticle }: props) => {
   const handleDelete = () => {
      onDeleteArticle(article.id);
   };

   return (
      <tr>
         <td>{article.title}</td>
         <td>{createSnippet(article.content)}</td>
         <td>{article.date}</td>
         <td>
            <button className="btn btn-gray">EDIT</button>
            <button onClick={handleDelete} className="btn btn-red">
               DELETE
            </button>
         </td>
      </tr>
   );
};

export default TableItem;
