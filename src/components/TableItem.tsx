import { Link } from "react-router-dom";
import { createSnippet } from "../helpers";
import Article from "../models/article";
import { useNavigate } from "react-router-dom";

interface props {
   article: Article;
   onDeleteArticle: (id: string) => void;
   onSelectArticle: (article: Article) => void;
}

const TableItem = ({ article, onDeleteArticle, onSelectArticle }: props) => {
   const navigate = useNavigate();

   const handleDelete = () => {
      onDeleteArticle(article.id);
   };

   const handleSelectArticle = () => {
      onSelectArticle(article);
   };

   const handleEdit = () => {
      onSelectArticle(article);
      navigate("/form");
   };

   return (
      <tr>
         <td>
            <Link onClick={handleSelectArticle} to={`/article/${article.id}`}>
               {article.title}
            </Link>
         </td>
         <td>{createSnippet(article.content)}</td>
         <td>{article.date}</td>
         <td>
            <button onClick={handleEdit} className="btn btn-gray">
               EDIT
            </button>
            <button onClick={handleDelete} className="btn btn-red">
               DELETE
            </button>
         </td>
      </tr>
   );
};

export default TableItem;
