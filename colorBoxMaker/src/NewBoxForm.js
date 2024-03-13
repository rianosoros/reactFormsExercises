import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function NewBoxForm({ addBox }) {
  const [formData, setFormData] = useState({
    width: '',
    height: '',
    color: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBox = { ...formData, id: uuidv4() };
    addBox(newBox);
    setFormData({ width: '', height: '', color: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width:</label>
      <input type="text" id="width" name="width" value={formData.width} onChange={handleChange} />
      <label htmlFor="height">Height:</label>
      <input type="text" id="height" name="height" value={formData.height} onChange={handleChange} />
      <label htmlFor="color">Color:</label>
      <input type="text" id="color" name="color" value={formData.color} onChange={handleChange} />
      <button type="submit">Add Box</button>
    </form>
  );
}

export default NewBoxForm;
