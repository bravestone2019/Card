import './Tools.css' 
import Upload from './Upload'
import Preview from './Preview'

const Tools = ({ backImage, titleImage, signImage, setBackImage, setTitleImage, setSignImage,   }) => {
    
    return (
        <>
        <div className="container">
            <Upload setBackImage={ setBackImage } setTitleImage={ setTitleImage } setSignImage={ setSignImage }/>
            <Preview backImage={ backImage } titleImage={ titleImage } signImage={ signImage }/>
        </div>  
        </>
    );
};

export default Tools;
