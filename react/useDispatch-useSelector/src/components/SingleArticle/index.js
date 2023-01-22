import './SingleArticle.css';
import {useParams} from "react-router-dom";
import { useSelector } from 'react-redux';

const SingleArticle = () => {
  // Thought it's not agood approach to normaliz it the data in child component. 
  // but, for learning purpose it's done here.
  const articles = useSelector((state) => state.articleState.entries);
  let normalizedArticles = {};
  articles.forEach((article) => {
    normalizedArticles[article.id] = article;  
  });
  const{ id }= useParams();
  const article = normalizedArticles[id];
  return (
    <div className='singleArticle'>
      <h1>{article.title}</h1>
      <img
        src='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Frobcain%2Ffiles%2F2017%2F10%2FKevin-Home-Alone.jpg'
        alt='home'
      />
      <p>
        {article.body}
      </p>
    </div>
  );
};

export default SingleArticle;
