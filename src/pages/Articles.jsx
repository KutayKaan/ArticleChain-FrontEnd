import React from 'react';
import ArticleDiv from'../components/ArticleDiv';
import '../styles/articleStyle.css';
import articlesData from '../data/articlesData.json';

const Articles = () => {
  return (
    <div className='container articles'>
      <div className="candidate-list mt-5">
      {articlesData.map((article) => (
          <ArticleDiv
            key={article.id}
            id={article.id}
            authorName={article.authorName}
            authorInstitution={article.authorInstitution}
            articleName={article.articleName}
            publicationDate={article.publicationDate}
            keywords={article.keywords}
            content={article.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Articles;
