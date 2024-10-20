'use client'
import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

// PDF.js worker 설정
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const PDFViewer = () => {
  const [pdfFile, setPdfFile] = useState<string | null>(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [numPages, setNumPages] = useState<number | null>(null)

  const pdfFiles = {
    DLL: '/pdfs/DLL.pdf',
    MinRev: '/pdfs/MinRev.pdf',
    Pwndbg: '/pdfs/Pwndbg.pdf',
    UPX: '/pdfs/UPX.pdf',
  }

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
    setPageNumber(1)
  }

  const handlePrevious = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1)
    }
  }

  const handleNext = () => {
    if (numPages && pageNumber < numPages) {
      setPageNumber(pageNumber + 1)
    }
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-5">PDF Viewer</h1>
      <div className="flex space-x-4 mb-5">
        <button onClick={() => setPdfFile(pdfFiles.DLL)} className="btn">
          DLL.pdf
        </button>
        <button onClick={() => setPdfFile(pdfFiles.MinRev)} className="btn">
          MinRev.pdf
        </button>
        <button onClick={() => setPdfFile(pdfFiles.Pwndbg)} className="btn">
          Pwndbg.pdf
        </button>
        <button onClick={() => setPdfFile(pdfFiles.UPX)} className="btn">
          UPX.pdf
        </button>
      </div>

      {pdfFile ? (
        <>
          <Document
            file={pdfFile}
            onLoadSuccess={onDocumentLoadSuccess}
            className="border p-4"
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <div className="flex items-center mt-4">
            <button onClick={handlePrevious} className="btn">
              Previous
            </button>
            <p className="mx-4">
              Page {pageNumber} of {numPages}
            </p>
            <button onClick={handleNext} className="btn">
              Next
            </button>
          </div>
        </>
      ) : (
        <p>No PDF file specified.</p>
      )}
    </div>
  )
}

export default PDFViewer
