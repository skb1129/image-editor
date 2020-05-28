import React, { useState } from "react";

import ImageUpload from "./components/image-upload/ImageUpload";
import { ImageAttributes } from "./models";

import "./App.scss";

function App() {
  const styles = {
    wrapper: "app__wrapper",
    main: "app__main",
    image: "app__image",
  };
  const [image, setImage] = useState<ImageAttributes>(null);
  return (
    <div data-testid="app" className={styles.wrapper}>
      <div className={styles.main}>
        {!image && <ImageUpload setImage={setImage} />}
        {image && <img className={styles.image} src={image.src} alt={image.name} />}
      </div>
    </div>
  );
}

export default App;
