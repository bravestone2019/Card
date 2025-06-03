import './Tools.css' 
import Upload from './Upload'
import Preview from './Preview'

const Tools = ({ setBackImage, setTitleImage, setSignImage,   }) => {
    
    return (
        <>
        <div className="container">
            <Upload setBackImage={ setBackImage } setTitleImage={ setTitleImage } setSignImage={ setSignImage }/>
            {/* <Preview BackImage={ BackImage } TitleImage={ TitleImage } SignImage={ SignImage }/> */}
        </div>  
        </>
    );
};

export default Tools;
