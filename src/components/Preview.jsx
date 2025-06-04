import './Preview.css';
// import { useState } from 'react';
import Canvas from './Canvas';
import Submit from '../assets/submit.png';

const Preview = (props) => {
  // Use open/setOpen from props if provided (for shared state)
  const open = props.open;
  const setOpen = props.setOpen;
  // Only render the icon if isInToolPanel is true
  const showIcon = props.isInToolPanel !== false;
  // Only render the modal if isInToolPanel is false
  const showModal = props.isInToolPanel === false && open;

  return (
    <>
      {showIcon && (
        <img
          src={Submit}
          alt='preview'
          className='icon'
          onClick={() => setOpen(true)}
          style={{ cursor: 'pointer' }}
        />
      )}
      {showModal && (
        <div className="preview-modal-overlay">
          <div className="preview-modal" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <button className="close-btn" onClick={() => setOpen(false)}>×</button>
            <div className="preview-cards-row" style={{ position: 'relative', width: '700px', justifyContent: 'center', alignItems: 'center', display: 'flex', gap: 16 }}>
              <div className="preview-card" style={{ position: 'relative', boxShadow: 'none', background: 'none', padding: 0, width: 320, height: 200 }}>
                <Canvas {...props} preview={true} disableEdit={true} cardWidth={320} cardHeight={200} />
              </div>
              <div className="preview-card" style={{ position: 'relative', boxShadow: 'none', background: 'none', padding: 0, width: 320, height: 200 }}>
                <Canvas {...props} preview={true} disableEdit={true} backOnly={true} cardWidth={320} cardHeight={200} />
              </div>
            </div>
            {/* <button className="download-btn">Download</button>  */}
          </div>
        </div>
      )}
    </>
  );
};

export default Preview;