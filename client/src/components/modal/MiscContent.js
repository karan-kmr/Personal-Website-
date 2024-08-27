import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import KaranResumePage from "../../assets/docs/Karan_Kumar_Resume_Aug_2024.jpg"
import PdfCard from '../major/PdfCard';
function MiscContent() {
   
  return (
    <div className='modal-body-container resume'>
       {/* <Document file={KaranResume} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document> */}
      <img src={KaranResumePage} alt='Karan Kumar Resume'/>
      {/* <PdfCard></PdfCard> */}
    </div>
  )
}

export default MiscContent