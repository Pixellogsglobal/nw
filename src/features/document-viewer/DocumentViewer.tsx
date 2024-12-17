import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface DocumentViewerProps {
  url: string;
}

const DocumentViewer: React.FC<DocumentViewerProps> = ({ url }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const previousPage = () => {
    setPageNumber((prevPage) => Math.max(prevPage - 1, 1));
  };

  const nextPage = () => {
    setPageNumber((prevPage) => Math.min(prevPage + 1, numPages || 1));
  };

  const zoomIn = () => {
    setScale((prevScale) => Math.min(prevScale + 0.2, 2));
  };

  const zoomOut = () => {
    setScale((prevScale) => Math.max(prevScale - 0.2, 0.5));
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg">
      <div className="mb-4 flex items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={previousPage}
          disabled={pageNumber <= 1}
          className="p-2 bg-white rounded-lg shadow-sm disabled:opacity-50"
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>

        <span className="text-sm">
          Page {pageNumber} of {numPages}
        </span>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextPage}
          disabled={pageNumber >= (numPages || 1)}
          className="p-2 bg-white rounded-lg shadow-sm disabled:opacity-50"
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>

        <div className="border-l border-gray-300 mx-2 h-6" />

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={zoomOut}
          className="p-2 bg-white rounded-lg shadow-sm"
        >
          <ZoomOut className="w-5 h-5" />
        </motion.button>

        <span className="text-sm">{Math.round(scale * 100)}%</span>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={zoomIn}
          className="p-2 bg-white rounded-lg shadow-sm"
        >
          <ZoomIn className="w-5 h-5" />
        </motion.button>
      </div>

      <div className="max-w-full overflow-auto bg-white rounded-lg shadow-lg">
        <Document
          file={url}
          onLoadSuccess={onDocumentLoadSuccess}
          className="mx-auto"
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>
    </div>
  );
};

export default DocumentViewer;