import './App.css'
import Preview from './components/Preview'
import { useState } from 'react';
import Tool from './components/Tools';
import Canvas from './components/Canvas';

function App() {
  const [backImage, setBackImage] = useState(null);
  const [titleImage, setTitleImage] = useState(null);
  const [signImage, setSignImage] = useState(null);
  const [photoImage, setPhotoImage] = useState(null);
  const [excelData, setExcelData] = useState([]);
  const [photoFileName, setPhotoFileName] = useState("");

  // Custom setter to track file name
  const handleSetPhotoImage = (url, fileName) => {
    setPhotoImage(url);
    setPhotoFileName(fileName);
  };

  // Match photoImage filename (roll no) to excelData
  let studentData = null;
  if (photoFileName && excelData.length > 0) {
    // Remove extension from file name and trim whitespace
    const rollNo = photoFileName.split('.')[0].trim();
    // console.log('Matching photo filename rollNo:', rollNo);
    studentData = excelData.find(row => {
      const excelRoll = row["Roll.No"] !== undefined && row["Roll.No"] !== null ? String(row["Roll.No"]).trim() : "";
      // console.log('Comparing with Excel row:', row, 'excelRoll:', excelRoll);
      return excelRoll === rollNo;
    });
    // console.log('Matched studentData:', studentData);
  }

  return (
    <>
      <Canvas backImage={backImage} titleImage={titleImage} signImage={signImage} photoImage={photoImage} studentData={studentData} />
      <Tool setBackImage={setBackImage} setTitleImage={setTitleImage} setSignImage={setSignImage} setPhotoImage={handleSetPhotoImage} setExcelData={setExcelData} />
    </>
  );
};

export default App;

// import BarcodeCard from "./components/barcode";

// const items = [
//   {
//     image: "https://i.pravatar.cc/100?img=1",
//     name: "Amit Sharma",
//     class: "12-A",
//     rollNo: "1201",
//     phone: "9876543210",
//     address: "Patiala, Punjab",
//   },
//   {
//     image: "https://i.pravatar.cc/100?img=2",
//     name: "Neha Verma",
//     class: "12-B",
//     rollNo: "1202",
//     phone: "9123456789",
//     address: "Ludhiana, Punjab",
//   },
// ];

// const App = () => {
//   return (
//     <div style={{ display: "flex", flexWrap: "wrap", padding: "20px" }}>
//       {items.map((item, index) => (
//         <BarcodeCard key={index} item={item} />
//       ))}
//     </div>
//   );
// };

// export default App;
