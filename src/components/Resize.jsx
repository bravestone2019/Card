import { useState } from 'react';
import { Rnd } from 'react-rnd';
import './ResizableImage.css';

const ResizableImage = ({ id, x, y, width, height, src, alt, selectedId, setSelectedId }) => {
  const [position, setPosition] = useState({ x, y });
  const [size, setSize] = useState({ width, height });
  const [isResizing, setIsResizing] = useState(false);

  return (
    <Rnd
      size={size}
      position={position}
      onDragStop={(e, d) => setPosition({ x: d.x, y: d.y })}
      onResizeStart={() => setIsResizing(true)}
      onResizeStop={(e, dir, ref, delta, pos) => {
        setIsResizing(false);
        setSize({ width: ref.offsetWidth, height: ref.offsetHeight });
        setPosition(pos);
      }}
      minWidth={50}
      minHeight={30}
      className={`placeholder${selectedId === id ? ' selected' : ''}`}
      onClick={() => setSelectedId(id)}
      style={{ overflow: 'hidden' }}
    >
      <div className="rnd-container">
        <img
          src={src}
          alt={alt}
          draggable={false}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
        {isResizing && (
          <div className="resize-frame-overlay">
            <div className="diagonal-line" />
          </div>
        )}
      </div>
    </Rnd>
  );
};

export default ResizableImage;
