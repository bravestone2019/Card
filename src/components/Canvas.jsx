import "./canvas.css";
import { useState } from "react";
import { Rnd } from "react-rnd";
import ResizableImage from "./Resize";
import BarcodeCard from "./barcode"; // Import the BarcodeCard component

const Canvas = ({ backImage, titleImage, signImage, photoImage, studentData }) => {
  const [placeholders] = useState([
    { id: 1, x: 25, y: 20, width: 490, height: 50 },
    { id: 2, x: 40, y: 90, width: 125, height: 150 },
    { id: 3, x: 180, y: 90, width: 320, height: 150 },
    { id: 4, x: 40, y: 260, width: 250, height: 50 }, /* Barcode */
    { id: 5, x: 350, y: 260, width: 160, height: 60 }, /* Principle signature */
    { id: 6, x: 0, y: 0, width: 540, height: 345 }, /* back side of the card */
  ]);

  const [selectedId, setSelectedId] = useState(null);

  const front = placeholders.slice(0, 5);
  const back = placeholders.slice(5);

  return (
    <div className="card-container">
      {/* FRONT SIDE */}
      <div
        className="card"
        style={{ marginLeft: "-300px" }}
        onClick={() => setSelectedId(null)} // Deselect when clicking background
      >
        {front.map(({ id, x, y, width, height }) => {
          if (id === 1 && titleImage) {
            return (
              <ResizableImage
                key={id}
                id={id}
                x={x}
                y={y}
                width={width}
                height={height}
                src={titleImage}
                alt="Title"
                selectedId={selectedId}
                setSelectedId={setSelectedId}
              />
            );
          }

          if (id === 2 && photoImage) {
            return (
              <Rnd
                key={id}
                default={{ x, y, width, height }}
                minWidth={50}
                minHeight={30}
                style={{ overflow: "hidden" }}
              >
                <img
                  src={photoImage}
                  alt="Photo"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Rnd>
            );
          }

          if (id === 3) {
            if (studentData && (studentData["Name"] || studentData["Roll.No"])) {
              return (
                <Rnd
                  key={id}
                  default={{ x, y, width, height }}
                  style={{ background: "#fff", padding: 8, overflow: "hidden" }}
                >
                  <div
                    className="student-data-box"
                    style={{ width: "100%", height: "100%" }}
                  >
                    <div><b style={{ color: "red" }}>Name:</b> {studentData["Name"]}</div>
                    <div><b style={{ color: "red" }}>Roll No:</b> {studentData["Roll.No"]}</div>
                    {studentData["Class"] && <div><b style={{ color: "red" }}>Class:</b> {studentData["Class"]}</div>}
                    {studentData["Phone"] && <div><b style={{ color: "red" }}>Phone:</b> {studentData["Phone"]}</div>}
                    {studentData["Address"] && <div><b style={{ color: "red" }}>Address:</b> {studentData["Address"]}</div>}
                  </div>
                </Rnd>
              );
            } else if (studentData) {
              return (
                <Rnd
                  key={id}
                  default={{ x, y, width, height }}
                  style={{ overflow: "auto", background: "#fff", padding: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <div style={{ color: '#FF0000' }}>No student data found</div>
                </Rnd>
              );
            }
          }

          if (id === 4 && studentData && studentData["Roll.No"]) {
            return (
              <Rnd
                key={id}
                default={{ x, y, width, height }}
                style={{ background: "#fff", padding: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <BarcodeCard item={{
                  rollNo: studentData["Roll.No"],
                  name: studentData["Name"],
                  class: studentData["Class"],
                  phone: studentData["Phone"],
                  address: studentData["Address"]
                }} />
              </Rnd>
            );
          }

          if (id === 5 && signImage) {
            return (
              <ResizableImage
                key={id}
                id={id}
                x={x}
                y={y}
                width={width}
                height={height}
                src={signImage}
                alt="Signature"
                selectedId={selectedId}
                setSelectedId={setSelectedId}
              />
            );
          }

          return (
            <Rnd
              key={id}
              default={{ x, y, width, height }}
              minWidth={50}
              minHeight={30}
              className={`placeholder${selectedId === id ? " selected" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedId(id);
              }}
              resizeHandleStyles={{
                top: { cursor: "default" },
                bottom: { cursor: "default" },
                left: { cursor: "default" },
                right: { cursor: "default" },
              }}
            />
          );
        })}
      </div>

      {/* BACK SIDE */}
      <div
        className="card"
        style={{ marginLeft: "300px" }}
        onClick={() => setSelectedId(null)} // Deselect when clicking background
      >
        {back.map(({ id, x, y, width, height }) => {
          if (id === 6 && backImage) {
            return (
              <ResizableImage
                key={id}
                id={id}
                x={x}
                y={y}
                width={width}
                height={height}
                src={backImage}
                alt="Back"
                selectedId={selectedId}
                setSelectedId={setSelectedId}
              />
            );
          }

          return (
            <Rnd
              key={id}
              default={{ x, y, width, height }}
              minWidth={50}
              minHeight={30}
              className={`placeholder${selectedId === id ? " selected" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedId(id);
              }}
              resizeHandleStyles={{
                top: { cursor: "default" },
                bottom: { cursor: "default" },
                left: { cursor: "default" },
                right: { cursor: "default" },
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Canvas;
