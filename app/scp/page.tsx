'use client'
import { useCallback, useState } from 'react'
import { useResizeObserver } from '@wojtekmaj/react-hooks'
import { pdfjs, Document, Page } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'

import type { PDFDocumentProxy } from 'pdfjs-dist'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString()

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
}

const resizeObserverOptions = {}

const maxWidth = 800

type PDFFile = string | File | null

export default function Sample() {
  const [file, setFile] = useState<PDFFile>(null)
  const [numPages, setNumPages] = useState<number>()
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null)
  const [containerWidth, setContainerWidth] = useState<number>()

  const onResize = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries

    if (entry) {
      setContainerWidth(entry.contentRect.width)
    }
  }, [])

  useResizeObserver(containerRef, resizeObserverOptions, onResize)

  function onFileChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { files } = event.target
    const nextFile = files?.[0]

    if (nextFile) {
      setFile(nextFile)
      setPageNumber(1)
    }
  }

  function onDocumentLoadSuccess({
    numPages: nextNumPages,
  }: PDFDocumentProxy): void {
    setNumPages(nextNumPages)
  }

  function goToPrevPage() {
    setPageNumber((prevPage) => Math.max(prevPage - 1, 1))
  }

  function goToNextPage() {
    setPageNumber((prevPage) => Math.min(prevPage + 1, numPages || 1))
  }

  function loadPDF(filePath: string) {
    setFile(filePath)
    setPageNumber(1)
  }

  return (
    <div className="Example">
      <header>
        <h1 className="text-4xl font-extrabold text-center m-4 font-[family-name:var(--font-geist-mono)]">
          PDF Viewer
        </h1>
      </header>

      {/* PDF 선택 버튼 */}
      <div className="Example__container__load m-4 flex justify-center space-x-4">
        <button
          className="text-white bg-black hover:bg-gray-300 hover:text-black border-black border-2 rounded-md p-2"
          onClick={() => loadPDF('./doc/DLL.pdf')}
        >
          DLL.pdf
        </button>
        <button
          className="text-white bg-black hover:bg-gray-300 hover:text-black border-black border-2 rounded-md p-2"
          onClick={() => loadPDF('./doc/MinRev.pdf')}
        >
          MinRev.pdf
        </button>
        <button
          className="text-white bg-black hover:bg-gray-300 hover:text-black border-black border-2 rounded-md p-2"
          onClick={() => loadPDF('./doc/Pwndbg.pdf')}
        >
          Pwndbg.pdf
        </button>
        <button
          className="text-white bg-black hover:bg-gray-300 hover:text-black border-black border-2 rounded-md p-2"
          onClick={() => loadPDF('./doc/UPX.pdf')}
        >
          UPX.pdf
        </button>
      </div>

      {/* PDF 파일 업로드 */}
      <div className="Example__container__load m-4">
        <label htmlFor="file">Load from file:</label>{' '}
        <input onChange={onFileChange} type="file" />
      </div>

      {/* PDF 문서 렌더링 */}
      <div className="Example__container__document" ref={setContainerRef}>
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          options={options}
          className={'flex justify-center border-y-4 border-black'}
        >
          <Page
            pageNumber={pageNumber}
            width={
              containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth
            }
          />
        </Document>
        <div className="pagination flex items-center justify-center">
          <button
            className="text-white bg-black hover:bg-gray-300 hover:text-black border-black border-2 rounded-md p-1 m-4"
            onClick={goToPrevPage}
            disabled={pageNumber <= 1}
          >
            Previous
          </button>
          <span className="text-black border-black border-y-2 rounded-md p-1 m-4">
            Page {pageNumber} of {numPages}
          </span>
          <button
            className="text-white bg-black hover:bg-gray-300 hover:text-black border-black border-2 rounded-md p-1 m-4"
            onClick={goToNextPage}
            disabled={pageNumber >= (numPages || 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
