import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';
import { Upload, File, X } from 'lucide-react';
import { useUploadThing } from './uploadthing';

interface FileUploadProps {
  onUploadComplete: (urls: string[]) => void;
  maxFiles?: number;
  acceptedTypes?: string[];
}

const FileUpload: React.FC<FileUploadProps> = ({
  onUploadComplete,
  maxFiles = 1,
  acceptedTypes = ['image/*', 'application/pdf']
}) => {
  const { startUpload, isUploading } = useUploadThing('imageUploader');

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    try {
      const uploadedFiles = await startUpload(acceptedFiles);
      if (uploadedFiles) {
        const urls = uploadedFiles.map(file => file.url);
        onUploadComplete(urls);
      }
    } catch (error) {
      console.error('Upload failed:', error);
    }
  }, [startUpload, onUploadComplete]);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
    onDrop,
    maxFiles,
    accept: acceptedTypes.reduce((acc, curr) => ({ ...acc, [curr]: [] }), {})
  });

  return (
    <div className="space-y-4">
      <motion.div
        {...getRootProps()}
        whileHover={{ scale: 1.02 }}
        className={`p-8 border-2 border-dashed rounded-lg text-center cursor-pointer
          transition-colors duration-300 ${
            isDragActive
              ? 'border-brand-red-500 bg-brand-red-50'
              : 'border-gray-300 hover:border-brand-red-500'
          }`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center gap-2">
          <Upload className={`w-8 h-8 ${
            isDragActive ? 'text-brand-red-500' : 'text-gray-400'
          }`} />
          {isDragActive ? (
            <p className="text-brand-red-500 font-medium">Drop files here...</p>
          ) : (
            <div className="space-y-1">
              <p className="font-medium">Drag & drop files here</p>
              <p className="text-sm text-gray-500">or click to select files</p>
            </div>
          )}
        </div>
      </motion.div>

      {acceptedFiles.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium">Selected files:</p>
          {acceptedFiles.map((file: File) => (
            <motion.div
              key={file.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm"
            >
              <div className="flex items-center gap-3">
                <File className="w-5 h-5 text-brand-red-500" />
                <div>
                  <p className="text-sm font-medium">{file.name}</p>
                  <p className="text-xs text-gray-500">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-1 text-gray-400 hover:text-red-500"
                onClick={(e) => {
                  e.stopPropagation();
                  acceptedFiles.splice(acceptedFiles.indexOf(file), 1);
                }}
              >
                <X className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      )}

      {isUploading && (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-brand-red-500" />
        </div>
      )}
    </div>
  );
};

export default FileUpload;