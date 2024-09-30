import React, { Fragment, useEffect, useState } from 'react';
import '../styles/colors.css';
import acDownload from "../assets/acDownload.jpg";

export const BcexplorerMain = () => {
  const [urlParameters, setUrlParameters] = useState({
    page: { name: "page-no", value: 0 },
    sort: { name: "ascending", value: true },
  });

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:8080/block?page-no=${urlParameters.page.value}&ascending=${urlParameters.sort.value}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [urlParameters]);

  const handlePageChange = (direction) => {
    setUrlParameters((prevParams) => ({
      ...prevParams,
      page: { ...prevParams.page, value: prevParams.page.value + direction }
    }));
  };

  const handleSortToggle = () => {
    setUrlParameters((prevParams) => ({
      ...prevParams,
      sort: { ...prevParams.sort, value: !prevParams.sort.value }
    }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <Fragment>
      <div className='card container shadow-lg mt-5 mb-3'> 
        <img src={acDownload} className='p-5' alt="acDownload" /> 
      </div>
      <div className='card container shadow-lg mt-5 text-center'>
        <a className='p-5' style={{color: "#577B8D"}} href="#"><h5><i class="fa-solid fa-download"></i> Download Our Desktop App</h5></a>
      </div>
  </Fragment>
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <h6>Page Number</h6>
              <span>{urlParameters.page.value}</span>
            </div>
            <div className="card-body">
              <button className="btn btn-dark mb-2 w-100 color3" onClick={() => handlePageChange(-1)} disabled={urlParameters.page.value <= 0}>Previous Page</button>
              <button className="btn btn-dark mb-2 w-100 color3" onClick={() => handlePageChange(1)}>Next Page</button>
            </div>
          </div>
          <div className="card mt-5 mb-5">
            <div className="card-header d-flex justify-content-between">
              <h6>Sort Order</h6>
              <span>{urlParameters.sort.value ? "Ascending" : "Descending"}</span>
            </div>
            <div className="card-body">
              <button className="btn btn-dark w-100 color3" onClick={handleSortToggle}>Toggle Sort Order</button>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          {data.data && data.data.length > 0 ? (
            data.data.map((block, index) => (
              <div key={index} className="card mb-4 shadow-m">
                <div className="card-body">
                  <p><strong>Index No:</strong> {block.indexNo}</p>
                  <p><strong>Timestamp:</strong> {block.timestamp}</p>
                  <p><strong>Nonce:</strong> {block.nonce}</p>
                  <p><strong>Current Block Hash:</strong> {block.currentBlockHash}</p>
                  <p><strong>Merkle Root:</strong> {block.merkleRoot}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
      </div>
    </div>
  );
};


// {data.data && data.data.length > 0 ? (
//   data.data.map((block, index) => (
//     <div key={index} className="card mb-4 shadow-sm">
//       <div className="card-body">
//         <p><strong>Index No:</strong> {block.indexNo}</p>
//         <p><strong>Timestamp:</strong> {block.timestamp}</p>
//         <p><strong>Nonce:</strong> {block.nonce}</p>
//         <p><strong>Previous Block Hash:</strong> {block.previousBlockHash}</p>
//         <p><strong>Current Block Hash:</strong> {block.currentBlockHash}</p>
//         <p><strong>Merkle Root:</strong> {block.merkleRoot}</p>
//         <p><strong>Sender UUID:</strong> {block.sender_uuid}</p>
//         <p><strong>Digital Signature:</strong> {block.digital_signature}</p>
//         <p><strong>Transaction List:</strong> {block.transactionList.length > 0 ? JSON.stringify(block.transactionList) : 'No transactions'}</p>
//       </div>
//     </div>
//   ))
// ) : (
//   <p>No data available</p>
// )}