import './Tools.css' 
import Upload from './Upload'
import Preview from './Preview'
import { useState } from 'react';

const Tools = ({ backImage, titleImage, signImage, setBackImage, setTitleImage, setSignImage, setPhotoImage, setExcelData }) => {
    const [previewOpen, setPreviewOpen] = useState(false);
    return (
        <>
        <div className="container">
            <Upload setBackImage={ setBackImage } setTitleImage={ setTitleImage } setSignImage={ setSignImage } setPhotoImage={setPhotoImage} setExcelData={setExcelData} />
            <Preview backImage={backImage} titleImage={titleImage} signImage={signImage} isInToolPanel={true} open={previewOpen} setOpen={setPreviewOpen} />
        </div>
        <Preview backImage={backImage} titleImage={titleImage} signImage={signImage} isInToolPanel={false} open={previewOpen} setOpen={setPreviewOpen} />
        </>
    );
};

export default Tools;

