import "./canvas.css";
import { useState } from "react";
import { Rnd } from "react-rnd";
import ResizableImage from "./Resize";

const Canvas = ({ backImage, titleImage, signImage }) => {
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
