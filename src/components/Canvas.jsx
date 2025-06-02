import './canvas.css';
import { useState, useEffect } from 'react';
import { Rnd } from 'react-rnd';

const Canvas = () => {
    // State to hold array of placeholders, each with unique id and position/size
    const [placeholders, setPlaceholders] = useState([
        { id: 1, x: 25, y: 20, width: 490, height: 50 },   
        { id: 2, x: 40, y: 90, width: 125, height: 150 },  
        { id: 3, x: 180, y: 90, width: 320, height: 150 }, 
        { id: 4, x: 40, y: 260, width: 250, height: 50 }, /* Barcode */  
        { id: 5, x: 350, y: 260, width: 160, height: 60 },  /* Principle signature */  
        { id: 6, x: 25, y: 20, width: 490, height: 300 }  /* back side of the card */  
    ]);

    const [selectedId, setSelectedId] = useState(null);

    /* Effect to handle keydown events for adding and deleting placeholders */
    useEffect(() => {
        // Function to add a new placeholder with a unique id
        const addPlaceholder = () => {
            const newId = placeholders.length > 0 ? placeholders[placeholders.length - 1].id + 1 : 1;
            setPlaceholders([ ...placeholders,
                {
                    id: newId,
                    x: 50,
                    y: 50,
                    width: 200,
                    height: 100
            }
            ]);
        };

        /*  Function to delete a placeholder with its unique id */
        const deletePlaceholder = (id) => {
            setPlaceholders(placeholders.filter(ph => ph.id !== id));
            setSelectedId(null);
        };

        const handleKeyDown = (event) => {
            if (event.key.toLowerCase() === 'p') {
                addPlaceholder();
            }
            if (event.key === 'Backspace' && selectedId !== null) {
                deletePlaceholder(selectedId);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [placeholders, selectedId]);

    const front = placeholders.slice(0, 5);
    const back = placeholders.slice(5);

    return (
        <div className="card-container">
            <div className="card" style={{ marginLeft: '-300px' }}>
            { front.map(({ id, x, y, width, height } ) => (
            <Rnd
                key={ id }
                default={{ x, y, width, height }}
                minWidth={ 50 }
                minHeight={ 30 }
                className={ `placeholder${selectedId === id ? ' selected' : '' }`}
                onClick={ () => setSelectedId(id) }
                resizeHandleStyles={{
                    top: { cursor: 'default' },
                    bottom: { cursor: 'default' },
                    left: { cursor: 'default' },
                    right: { cursor: 'default' },
                    // topLeft: { cursor: 'default' },
                    // topRight: { cursor: 'default' },
                    // bottomLeft: { cursor: 'default' },
                    // bottomRight: { cursor: 'default' },
                }}
            />
            ))};
            </div>
            <div className="card" style={{ marginLeft: '300px' }}>
                { back.map(({ id, x, y, width, height }) => (
                <Rnd
                    key={ id }
                    default={{ x, y, width, height }}
                    minWidth={ 50 }
                    minHeight={ 30 }
                    className={ `placeholder${selectedId === id ? ' selected' : '' }`}
                    onClick={ () => setSelectedId(id) }
                    resizeHandleStyles={{
                        top: { cursor: 'default' },
                        bottom: { cursor: 'default' },
                        left: { cursor: 'default' },
                        right: { cursor: 'default' },
                        // topLeft: { cursor: 'default' },
                        // topRight: { cursor: 'default' },
                        // bottomLeft: { cursor: 'default' },
                        // bottomRight: { cursor: 'default' },
                    }}
                />
                ))};
            </div>
        </div>
    );
};

export default Canvas;

