import * as React from 'react';
import { useState } from 'react';

// import http from './http-common';
import './styles/UploadForm.css';
import Button from './Button';
import UploadArticle from './UploadArticle';

type UploadItem = {
  file: File,
  progress: number,
  uploadSuccess: boolean | null,
};

const UploadForm = () => {
  const [uploadSelection, setUploadSelection] = useState<UploadItem[]>([]);
  const [isUploading, setUploadStatus] = useState<boolean>(false);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  const handleUploadSelect = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const fileList = event.target.files ? Array.from(event.target.files) : [];

    if (fileList.length === 0) {
      setUploadSelection([]);
    } else {
      const uploads = fileList.reduce(
        (fileSelection: UploadItem[], currFile: File): UploadItem[] => {
          fileSelection.push({
            file: currFile,
            progress: 0,
            uploadSuccess: null,
          });

          return fileSelection;
        }, [],
      );

      setUploadSelection(() => uploads);
    }
  };

  const handleClearClick = (): void => {
    setUploadSelection(() => []);
  };

  return (
    <main id="upload-form-main" className="container">
      <form id="upload-form" encType="multipart/form-data" onSubmit={handleFormSubmit}>
        <div id="form-header">
          <div id="form-button-group">
            <label htmlFor="upload-input" id="upload-input-label" className="button">
              <input
                id="upload-input"
                type="file"
                accept="image/*"
                onChange={handleUploadSelect}
                multiple
                disabled={isUploading}
              />
              Select Images
            </label>
            <Button
              text="Clear All"
              clickHandler={handleClearClick}
              disabled={uploadSelection.length === 0 || isUploading}
            />
            <Button text="Upload" isSubmit disabled={uploadSelection.length === 0} />
          </div>
          <div id="selection-count">
            {
              uploadSelection.length > 0
                ? `${uploadSelection.length} ${uploadSelection.length === 1 ? 'image' : 'images'} selected`
                : ''
            }
          </div>
        </div>
        <div id="file-list">
          {
            uploadSelection.length === 0
              ? <div id="no-file-text">No files currently selected for upload.</div>
              : uploadSelection.map((upload) => (
                <UploadArticle key={upload.file.name} file={upload.file} />
              ))
          }
        </div>
      </form>
    </main>
  );
};

export default UploadForm;
