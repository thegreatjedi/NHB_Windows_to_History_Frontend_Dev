import * as React from 'react';

import './styles/UploadArticle.css';

type UploadArticleProps = {
  key: string,
  file: File,
};

const UploadArticle = ({ key, file }: UploadArticleProps) => (
  <article key={key} className="upload-preview">
    <img src={URL.createObjectURL(file)} alt={file.name} />
    <div className="preview-divs">
      <div>{file.name}</div>
    </div>
  </article>
);

export default UploadArticle;
