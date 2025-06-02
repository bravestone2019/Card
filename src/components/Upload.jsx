import './upload.css';
import Files from './Files';
import { useRef, useState } from 'react';
import FileIcon from '../assets/file.png';

const Upload = () => {
  const fileInputRef = useRef(null);
  const [files, setFiles] = useState([]);

  /* Trigger the fileIcon clicked */ 
  function handleIconClick() {
    fileInputRef.current.click();
  };

  /* Remove a file from the list */
  const handleFileChange = ( event ) => {
    const selectedFiles = Array.from( event.target.files );
    setFiles( prev => [...prev, ...selectedFiles] );
  };

  const handleRemove = (index) => {
    setFiles( prev => prev.filter((_, i) => i !== index) );
  };

  const handleClear = () => {
    setFiles([]);
  };

  return (
    <>
      <img
        src={ FileIcon }
        alt='upload'
        className='icon'
        onClick={ handleIconClick }
      />
       <input
        type='file'
        ref={ fileInputRef } 
        onChange={ handleFileChange }
        multiple
        style={{ display: 'none' }} 
      />

      <Files files={ files } onRemove={ handleRemove } onClear={ handleClear } />
    </>
  );
};

export default Upload;
