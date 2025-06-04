import { useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";

const BarcodeCard = ({ item }) => {
  const barcodeRef = useRef(null);

  useEffect(() => {
    if (barcodeRef.current && item.rollNo) {
      JsBarcode(barcodeRef.current, item.rollNo, {
        format: "CODE128",
        lineColor: "#000",
        width: 2,
        height: 50,
        displayValue: false, // Hide the number below the barcode
      });
    }
  }, [item.rollNo]);

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <svg ref={barcodeRef} />
    </div>
  );
};

export default BarcodeCard;
