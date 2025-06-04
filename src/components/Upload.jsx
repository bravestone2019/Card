import './upload.css';
import Files from './Files';
import { useRef, useState } from 'react';
import FileIcon from '../assets/file.png';
import * as XLSX from 'xlsx';

const Upload = ({ setBackImage, setTitleImage, setSignImage, setPhotoImage, setExcelData }) => {
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
      // If filename is all digits (e.g., 6608.jpg), treat as photoImage
      if (/^\d+\./.test(file.name)) {
        const url = URL.createObjectURL(file);
        setPhotoImage(url, file.name);
      }
      // Handle Excel file
      if (file.name.endsWith('.xlsx') || file.name.endsWith('.xls') || file.name.endsWith('.csv')) {
        const reader = new FileReader();
        reader.onload = (evt) => {
          const data = new Uint8Array(evt.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const jsonRaw = XLSX.utils.sheet_to_json(worksheet);
          // Normalize keys: trim whitespace from all keys in each row
          const json = jsonRaw.map(row => {
            const newRow = {};
            Object.keys(row).forEach(key => {
              // Also trim string values to avoid extra spaces
              newRow[key.trim()] = typeof row[key] === 'string' ? row[key].trim() : row[key];
            });
            return newRow;
          });
          setExcelData(json);
        };
        reader.readAsArrayBuffer(file);
      }
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
        accept='.jpg,.jpeg,.png,.xlsx,.xls'
        style={{ display: 'none' }} 
      />

      <Files files={ files } onRemove={ handleRemove } onClear={ handleClear } />
    </>
  );
};

export default Upload;
