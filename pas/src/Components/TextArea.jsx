import React, { useState } from 'react';

const TextArea = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleChange}
        class= " w-full "
      />
      <p>{text}</p>
    </div>
  );
};

export default TextArea;