import { Rnd } from "react-rnd";

const ResizableImage = ({ id, x, y, width, height, src, alt, selectedId, setSelectedId }) => {
  return (
    <Rnd
      default={{ x, y, width, height }}
      minWidth={50}
      minHeight={30}
      lockAspectRatio={true}
      enableResizing={{
        bottomRight: true,
        bottom: false,
        bottomLeft: false,
        left: true,
        right: true,
        top: false,
        topLeft: false,
        topRight: false,
      }}
      onClick={(e) => {
        e.stopPropagation();
        setSelectedId(id);
      }}
      style={{
        border: selectedId === id ? "2px solid limegreen" : "none",
        zIndex: selectedId === id ? 10 : 1,
      }}
    >
      <img
        src={src}
        alt={alt}
        draggable={false}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          pointerEvents: "none",
        }}
      />
    </Rnd>
  );
};

export default ResizableImage;
