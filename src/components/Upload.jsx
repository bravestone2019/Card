import './upload.css';
import Files from './Files';
import { useRef, useState } from 'react';
import FileIcon from '../assets/file.png';

const Upload = ({ setBackImage, setTitleImage, setSignImage }) => {
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

    selectedFiles.forEach((file) => {
      if (file.name.toLowerCase().includes('back')) {
        const url = URL.createObjectURL(file);
        setBackImage(url);
      };
      if (file.name.toLowerCase().includes('title')) {
        const url = URL.createObjectURL(file);
        setTitleImage(url);
      };
      if (file.name.toLowerCase().includes('sign')) {
        const url = URL.createObjectURL(file);
        setSignImage(url);
      };
    });
  };

  const handleRemove = ( index ) => {
     const updatedFiles = [...files];
    const [removed] = updatedFiles.splice(index, 1);
    setFiles(updatedFiles);

    if (removed.name.toLowerCase().includes('back')) {
      setBackImage(null);
    };
    if (removed.name.toLowerCase().includes('title')) {
      setTitleImage(null);
    };
    if (removed.name.toLowerCase().includes('sign')) {
      setSignImage(null);
    };
  };

  const handleClear = () => {
    setFiles([]);
    setBackImage(null);
    setTitleImage(null);
    setSignImage(null);
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
