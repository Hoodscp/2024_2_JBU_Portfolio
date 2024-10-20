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
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-extrabold">MY Presentation</h1>
      {pdfFile ? (
        <>
          <div className="flex justify-center overflow-x-auto">
            <Document
              file={pdfFile}
              onLoadSuccess={onDocumentLoadSuccess}
              className="border p-4 max-w-full"
            >
              <Page pageNumber={pageNumber} width={1000} />
            </Document>
          </div>
          <div className="flex items-center mt-4">
            <button onClick={handlePrevious} className="btn aaabutton">
              Previous
            </button>
            <p className="mx-4">
              Page {pageNumber} of {numPages}
            </p>
            <button onClick={handleNext} className="btn aaabutton">
              Next
            </button>
          </div>
        </>
      ) : (
        <div className="flex space-x-4">
          <button
            onClick={() => setPdfFile(pdfFiles.DLL)}
            className="btn aaabutton"
          >
            DLL.pdf
          </button>
          <button
            onClick={() => setPdfFile(pdfFiles.MinRev)}
            className="btn aaabutton"
          >
            MinRev.pdf
          </button>
          <button
            onClick={() => setPdfFile(pdfFiles.Pwndbg)}
            className="btn aaabutton"
          >
            Pwndbg.pdf
          </button>
          <button
            onClick={() => setPdfFile(pdfFiles.UPX)}
            className="btn aaabutton"
          >
            UPX.pdf
          </button>
        </div>
      )}
    </div>
  )
}

export default PDFViewer
