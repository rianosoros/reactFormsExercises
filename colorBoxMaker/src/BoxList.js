import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  const addBox = (newBox) => {
    setBoxes((prevBoxes) => [...prevBoxes, newBox]);
  };

  const removeBox = (id) => {
    setBoxes((prevBoxes) => prevBoxes.filter((box) => box.id !== id));
  };

  const updateBox = boxes.map((box) => (
    <Box
      key={box.id}
      id={box.id}
      width={box.width}
      height={box.height}
      color={box.color}
      handleRemove={removeBox}
    />
  ));

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {updateBox}
    </div>
  );
}

export default BoxList;
