import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import SingleArticle from "../SingleArticle";
import { loadArticles } from "../../store/articleReducer";
import { NavLink } from "react-router-dom";

const ArticleList = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articleState.entries);

  useEffect(() => {
    dispatch(loadArticles());
  }, [dispatch]);
  return (
    <div>
      {articles.map(({ id, title }) => (
        <li key={id}>
          <NavLink to={`/article/${id}`}>{title}</NavLink>
        </li>
      ))}
      <h1>Article List</h1>
      <ol>
      {articles.map(({ id, title }) => (
        <li key={id}>
          {title}
        </li>
      ))}
      </ol>

      <Routes>
        <Route path="/article/:id" element ={ <SingleArticle />}>
        </Route>
      </Routes>
    </div>
  );
};

export default ArticleList;
