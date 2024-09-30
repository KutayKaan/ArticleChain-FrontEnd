import React, { useState } from 'react';

const BcexplorerDiv = (props) => {
  const { indexNo, nonce, timestamp, previousBlockHash, currentBlockHash, merkleRoot, sender_uuid, digital_signature, transactionList } = props;

  const [expanded, setExpanded] = useState(false);

  const toggleDetails = () => {
    setExpanded(!expanded);
  };

  const renderTransactionDetails = (transaction, tIndex) => {
    if (transaction["@type"] === "submitEntity") {
      return (
        <div key={tIndex} className="border rounded p-3 mb-3">
          <h6 className='mb-3'>Transaction {transaction.tx_id}</h6>
          <p className="text-muted mb-1"><strong>Type: </strong>{transaction["@type"]}</p>
          <p className="text-muted mb-1"><strong>Timestamp: </strong>{transaction.timestamp}</p>
          <p className="text-muted mb-1"><strong>Sender UUID: </strong>{transaction.sender_uuid}</p>

          {transaction.article && (
            <div className="mt-4">
              <h6>Article</h6>
              <p className="text-muted mb-1"><strong>Title: </strong>{transaction.article.article_title}</p>
              <p className="text-muted mb-1"><strong>Type: </strong>{transaction.article.article_type}</p>
              <p className="text-muted mb-1"><strong>Research Field: </strong>{transaction.article.article_resField}</p>
              <p className="text-muted mb-1"><strong>Date: </strong>{transaction.article.article_date}</p>
              <p className="text-muted mb-1"><strong>Keywords: </strong>{transaction.article.article_keywords}</p>
              <p className="text-muted mb-1"><strong>Abstract: </strong>{transaction.article.paperAbstract}</p>
              <p className="text-muted mb-1"><strong>File Identifier: </strong>{transaction.article.fileIdentifier}</p>

              {transaction.article.authors && transaction.article.authors.length > 0 && (
                <div className="mt-4">
                  <h6>Authors</h6>
                  {transaction.article.authors.map((author, aIndex) => (
                    <div key={aIndex} className="mb-2">
                      <p className="text-muted mb-1"><strong>Title: </strong>{author.title}</p>
                      <p className="text-muted mb-1"><strong>Name: </strong>{author.author_name}</p>
                      <p className="text-muted mb-1"><strong>Email: </strong>{author.author_email}</p>
                      <p className="text-muted mb-1"><strong>Department: </strong>{author.department}</p>
                      <p className="text-muted mb-1"><strong>Institution: </strong>{author.institution}</p>
                      <p className="text-muted mb-1"><strong>Country: </strong>{author.address.country}</p>
                      <p className="text-muted mb-1"><strong>State: </strong>{author.address.state}</p>
                      <p className="text-muted mb-1"><strong>Zip Code: </strong>{author.address.zipCode}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      );
    } else if (transaction["@type"] === "FinalDecisionEntity") {
      return (
        <div key={tIndex} className="border rounded p-3 mb-3">
          <h6 className='mb-3'>Transaction {transaction.tx_id}</h6>
          <p className="text-muted mb-1"><strong>Type: </strong>{transaction["@type"]}</p>
          <p className="text-muted mb-1"><strong>Timestamp: </strong>{transaction.timestamp}</p>
          <p className="text-muted mb-1"><strong>Sender UUID: </strong>{transaction.sender_uuid}</p>
          <p className="text-muted mb-1"><strong>Reviewer Name: </strong>{transaction.reviewer_name}</p>
          <p className="text-muted mb-1"><strong>Research Field: </strong>{transaction.reviewerResearchField}</p>
          <p className="text-muted mb-1"><strong>Reviewer Email: </strong>{transaction.reviewer_email}</p>
          <p className="text-muted mb-1"><strong>Manuscript ID: </strong>{transaction.manuscriptId}</p>
          <p className="text-muted mb-1"><strong>Acceptance: </strong>{transaction.acceptanceEnumDTO}</p>
          <p className="text-muted mb-1"><strong>Decision File Hash: </strong>{transaction.decision_file_hash}</p>
          <p className="text-muted mb-1"><strong>Decision Point: </strong>{transaction.decisionPoint}</p>
          <p className="text-muted mb-1"><strong>Review Type: </strong>{transaction.review_type}</p>
          <p className="text-muted mb-1"><strong>File Identifier: </strong>{transaction.fileIdentifier}</p>
        </div>
      );
    } else if (transaction["@type"] === "ReviewRequestEntity") {
      return (
        <div key={tIndex} className="border rounded p-3 mb-3">
          <h6 className='mb-3'>Transaction {transaction.tx_id}</h6>
          <p className="text-muted mb-1"><strong>Type: </strong>{transaction["@type"]}</p>
          <p className="text-muted mb-1"><strong>Timestamp: </strong>{transaction.timestamp}</p>
          <p className="text-muted mb-1"><strong>Sender UUID: </strong>{transaction.sender_uuid}</p>
          <p className="text-muted mb-1"><strong>Reviewer Name: </strong>{transaction.reviewer_name}</p>
          <p className="text-muted mb-1"><strong>Research Field: </strong>{transaction.reviewerResearchField}</p>
          <p className="text-muted mb-1"><strong>Reviewer Email: </strong>{transaction.reviewer_email}</p>
          <p className="text-muted mb-1"><strong>Manuscript ID: </strong>{transaction.manuscriptId}</p>
          <p className="text-muted mb-1"><strong>Acceptance: </strong>{transaction.acceptanceEnumDTO}</p>
        </div>
      );
    } else {
      return <p key={tIndex} className="text-muted mb-2">Unknown transaction type.</p>;
    }
  };

  return (
    <div className="candidate-list-box card shadow-lg mt-2">
      <div className="p-4 card-body">
        <div className="col-lg-12">
          <div className="candidate-list-content mt-3 mt-lg-0">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="primary-link font-weight-bold">Index No: {indexNo}</span>
              <button className="btn" onClick={toggleDetails} style={{backgroundColor: "#577B8D",color: "white"}}>
                {expanded ? 'Hide Details' : 'View Details'}
              </button>
            </div>
            <p className="text-muted "><strong>Previous Block Hash: </strong>{previousBlockHash}</p>
            <p className="text-muted"><strong>Current Block Hash: </strong>{currentBlockHash}</p>
            <p className="text-muted"><strong>Merkle Root: </strong>{merkleRoot}</p>
            <p className="text-muted"><strong>Sender UUID: </strong>{sender_uuid}</p>

            {expanded && (
              <div>
                <p className="text-muted"><strong>Timestamp: </strong>{timestamp}</p> 
                <p className="text-muted"><strong>Nonce: </strong>{nonce}</p> 
                <p className="text-muted"><strong>Digital Signature: </strong>{digital_signature}</p>

                {transactionList && transactionList.length > 0 ? (
                  transactionList.map((transaction, tIndex) => renderTransactionDetails(transaction, tIndex))
                ) : (
                  <p className="text-muted">No transactions available.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BcexplorerDiv;
