import React from 'react';

function box({ id,
  width = 5,
  height = 5,
  color = 'white',
  handleRemove 
}) {
  const removeBox= () => {handleRemove(id);};

  return (
    <div
    style={{
      width: `${width}em`,
      height: `${height}em`,
      backgroundColor: color,
      margin: '10px',
      position: 'relative',
      border: '1px solid black', 
    }}
    >
      <button onClick={removeBox} style={{ position: 'absolute', top: '5px', right: '5px' }}>
        X
      </button>
    </div>
  );
}

export default box;
