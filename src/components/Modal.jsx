import React, { useEffect, useState } from 'react';

function Modal(props) {
  const { gif } = props;
  const [embedGif, setEmbedGif] = useState([]);

  useEffect(() => {
    setEmbedGif(gif.embed_url);
  }, [gif]);

  return (
    <div>
      {{ embedGif }}
    </div>
  );
}

export default Modal;
