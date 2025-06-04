// import './Preview.css';
// import { useState } from 'react';
// import Canvas from './Canvas';
// import Submit from '../assets/submit.png';

// const Preview = () => {
//     const [open, setOpen] = useState(false);
//     // ({ backImage, titleImage, signImage }
//     return (
//         <>
//             <img
//                 src={Submit}
//                 alt='preview'
//                 className='icon'
//                 onClick={() => setOpen(true)}
//                 style={{ cursor: 'pointer' }}
//             />
//             {open && (
//                 <div className="preview-modal-overlay">
//                     <div className="preview-modal">
//                         <button className="close-btn" onClick={() => setOpen(false)}>×</button>
//                         <div className="preview-cards-row">
//                             {/* Render front and back cards side by side */}
//                             {/* <div className="preview-card">
//                                 <Canvas
//                                     backImage={null}
//                                     titleImage={titleImage}
//                                     signImage={signImage}
//                                 />
//                             </div> */}
//                             {/* <div className="preview-card">
//                                 <Canvas
//                                     backImage={backImage}
//                                     titleImage={null}
//                                     signImage={null}
//                                 />
//                             </div> */}
//                         </div>
//                         {/* <button className="download-btn">Download</button> */}
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default Preview;

import './Preview.css';
import { useState } from 'react';
import Canvas from './Canvas';
import Submit from '../assets/submit.png';

const Preview = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* This icon is inside the tool panel */}
      <img
        src={Submit}
        alt='preview'
        className='icon'
        onClick={() => setOpen(true)}
        style={{ cursor: 'pointer' }}
      />
      {/* This modal is fixed and covers the whole screen */}
      {open && (
        <div className="preview-modal-overlay">
          <div className="preview-modal">
            <button className="close-btn" onClick={() => setOpen(false)}>×</button>
            <div className="preview-cards-row">
              {/* Example: render your preview cards here */}
              <div className="preview-card">
                <Canvas {...props} preview={true} />
              </div>
            </div>
            <button className="download-btn">Download</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Preview;