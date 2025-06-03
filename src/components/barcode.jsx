import { useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";

const BarcodeCard = ({ item }) => {
  const barcodeRef = useRef(null);

  useEffect(() => {
    if (barcodeRef.current) {
      JsBarcode(barcodeRef.current, item.rollNo, {
        format: "CODE128",
        lineColor: "#000",
        width: 2,
        height: 50,
        displayValue: true,
      });
    }
  }, [item.rollNo]);

  return (
    <div
      style={{
        width: "300px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        boxShadow: "0 0 5px rgba(0,0,0,0.2)",
        fontFamily: "sans-serif",
      }}
    >
      <img
        src={item.image}
        alt={item.name}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover",
          display: "block",
          margin: "0 auto 10px",
        }}
      />
      <h3 style={{ textAlign: "center", marginBottom: "10px" }}>{item.name}</h3>
      <p><strong>Class:</strong> {item.class}</p>
      <p><strong>Roll No:</strong> {item.rollNo}</p>
      <p><strong>Phone:</strong> {item.phone}</p>
      <p><strong>Address:</strong> {item.address}</p>
      <svg ref={barcodeRef} />
    </div>
  );
};

export default BarcodeCard;
