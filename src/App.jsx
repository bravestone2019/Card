import './App.css'
import Preview from './components/Preview'
import { useState } from 'react';
import Tool from './components/Tools';
import Canvas from './components/Canvas';

function App() {
  const [backImage, setBackImage] = useState(null);
  const [titleImage, setTitleImage] = useState(null);
  const [signImage, setSignImage] = useState(null);

  return (
    <>
      < Canvas backImage={ backImage } titleImage={ titleImage } signImage={ signImage } />
       <Preview backImage={ backImage } titleImage={ titleImage } signImage={ signImage }/>
      < Tool setBackImage={ setBackImage } setTitleImage={ setTitleImage } setSignImage={ setSignImage } />
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
