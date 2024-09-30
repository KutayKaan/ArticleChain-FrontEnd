import { Link } from 'react-router-dom';
import "../styles/colors.css"

const ArticleDiv = (args) => {
    const { id, authorName, authorInstitution, articleName, publicationDate, keywords} = args;
    
    return (
      <div className="candidate-list-box card shadow-lg mt-2">
        <div className="p-4 card-body">
          <div className="align-items-center row">
            <div className="col-lg-5">
              <div className="candidate-list-content mt-3 mt-lg-0">
                <h5 className="fs-19 mb-0">
                  <p className="primary-link">{authorName}</p>
                </h5>
                <p className="text-muted mb-2">{authorInstitution}</p>
                <p className="text-muted mb-2">{articleName}</p>
                <p className="text-muted mb-2">{publicationDate}</p>
              </div>
            </div>
            <div className="col-lg-4">
              {keywords.map((keyword, index) => (
                <span key={index} className="badge bg-soft-secondary fs-14 mt-1 ml-1">{keyword}</span>
              ))}
            </div>
          </div>
          <div className="favorite-icon">
          <Link to={`/articledetails/${id}`}>
            <i className="fa-solid fa-right-long fa-xl" style={{color: '#577B8D'}}></i>
          </Link>
          </div>
        </div>
      </div>
    );
  };

  export default ArticleDiv;