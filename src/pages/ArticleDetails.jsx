import React from 'react';
import { useParams } from 'react-router-dom';
import articlesData from '../data/articlesData.json';

const ArticleDetails = () => {
  const { id } = useParams(); // useParams kancasından 'id' parametresini al

  // id'ye göre makaleyi bul
  const article = articlesData.find((article) => article.id === parseInt(id));

  if (!article) {
    return <div>Article not found.</div>;
  }

  return (
    <div className='container mt-5 articleDetails'>
      <div className="card bg-light mb-3">
        <div className="card-header d-flex justify-content-between align-items-center">
          <span>
            <span style={{ fontSize: '1.5rem' }}><b>{article.articleName}</b></span>
            <br />
            <span className="text-muted mr-3 display-6"><i className="fa-regular fa-circle-user"></i> {article.authorName}</span>
            <span className="text-muted display-6"><i className="fa-solid fa-building-columns"></i> {article.authorInstitution}</span>
          </span>
          <span style={{ color: '#57A6A1' }}>{article.publicationDate}</span>
        </div>
        <div className="card-body">
          <p className="card-text">{article.content}</p>
        </div>
        <div className='card-footer bg-light mt-3'>
          {article.keywords.map((keyword, index) => (
            <span key={index} className='badge bg-soft-secondary mr-2'>{keyword}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
