import React, { useState } from 'react'
import BcexplorerDiv from '../components/BcexplorerDiv';
import '../styles/articleStyle.css';
import bcexplorerData1 from '../data/page_1.json';
import bcexplorerData2 from '../data/page_2.json';


export const Bcexplorer = () => {

  const [pageNumber, setPageNumber] = useState(1);

  const togglePage1 = () => {
    setPageNumber(1)
  }
  const togglePage2 = () => {
    setPageNumber(2)
  }

  return (
    <div className='container'>
        {pageNumber == 1 && (
          <div className="candidate-list mt-5">
            {bcexplorerData1.map((blockData) => (
              <BcexplorerDiv
                key={blockData.indexNo}
                indexNo={blockData.indexNo}
                timestamp={blockData.timestamp}
                nonce={blockData.nonce}
                previousBlockHash={blockData.previousBlockHash}
                currentBlockHash={blockData.currentBlockHash}
                merkleRoot={blockData.merkleRoot}
                sender_uuid={blockData.sender_uuid}
                digital_signature={blockData.digital_signature}
                transactionList={blockData.transactionList}
              />
            ))}
          </div>
        )}   

        {pageNumber == 2 && (
          <div className="candidate-list mt-5">
            {bcexplorerData2.map((blockData) => (
              <BcexplorerDiv
                key={blockData.indexNo}
                indexNo={blockData.indexNo}
                timestamp={blockData.timestamp}
                nonce={blockData.nonce}
                previousBlockHash={blockData.previousBlockHash}
                currentBlockHash={blockData.currentBlockHash}
                merkleRoot={blockData.merkleRoot}
                sender_uuid={blockData.sender_uuid}
                digital_signature={blockData.digital_signature}
                transactionList={blockData.transactionList}
              />
            ))}
          </div>
        )} 
        <div className='mt-5 d-flex justify-content-center'>
          <button onClick={togglePage1} className='btn mr-3 p-2' style={{backgroundColor: "#0C0C0C", color: "white"}}>1</button>
          <button onClick={togglePage2} className='btn p-2' style={{backgroundColor: "#0C0C0C", color: "white"}}>2</button>
        </div>
    </div>
  )
}
