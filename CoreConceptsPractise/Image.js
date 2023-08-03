import React from 'react';

export default function Image(props) {
  const [images, setImages] = React.useState();
  return (
    <div>
      {props.category && (
        <div>
          <h2>{props.category.toUpperCase()}</h2>
          <div className="image-container">
            <img src="/pomme-large.jpg" height="100px" />
            <img src="/pomme-large.jpg" height="100px" />
          </div>
        </div>
      )}
    </div>
  );
}
