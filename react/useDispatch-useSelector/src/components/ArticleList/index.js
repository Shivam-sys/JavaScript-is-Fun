import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
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
        <li>Gilligan's Island. Is it true?</li>
        <li>A Baseball Moment</li>
        <li>Poke Moment</li>
        <li>Cool Cats</li>
        <li>Why Am I At Home</li>
      </ol>

      <Switch>
        <Route path="/article/:id">
          <SingleArticle />
        </Route>
      </Switch>
    </div>
  );
};

export default ArticleList;
