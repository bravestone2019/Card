import './Tools.css' 
import Upload from './Upload'
import Preview from './Preview'

const Tools = ({ backImage, titleImage, signImage, setBackImage, setTitleImage, setSignImage, setPhotoImage, setExcelData }) => {
    
    return (
        <>
        <div className="container">
            <Upload setBackImage={ setBackImage } setTitleImage={ setTitleImage } setSignImage={ setSignImage } setPhotoImage={setPhotoImage} setExcelData={setExcelData} />
            <div className="center-preview-btn">
                <Preview backImage={backImage} titleImage={titleImage} signImage={signImage} />
            </div>
        </div>  
        </>
    );
};

export default Tools;

