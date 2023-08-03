import React from 'react';
import Image from "./Image.js"

function ImageGallery() {
  const [selectedCategory, setSelectedCategory] = React.useState();
  const [images, setImages] = React.useState()

  function onCategoryChange(e) {
    setSelectedCategory(e.target.value);

    
  }
  return (
    <div>
      <h1>Image Gallery</h1>
      <label>Select Category : </label>
      <select value={selectedCategory} onChange={onCategoryChange}>
        <option hidden value="select">
          Select...
        </option>
        <option value="fruits">Fruits</option>
        <option value="vegetables">Vegetables</option>
        <option value="flowers">Flowers</option>
      </select>

      <Image category = {selectedCategory}/>
    </div>
  );
}

export default ImageGallery;
