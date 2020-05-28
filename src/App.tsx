import React, { useState } from "react";

import ImageEditor from "./components/image-editor/ImageEditor";
import ImageUpload from "./components/image-upload/ImageUpload";
import { ImageAttributes, ResizeTypes } from "./models";

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
        {image && <ImageEditor type={ResizeTypes.HORIZONTAL} image={image} />}
        {image && <ImageEditor type={ResizeTypes.VERTICAL} image={image} />}
        {image && <ImageEditor type={ResizeTypes.HORIZONTAL_SMALL} image={image} />}
        {image && <ImageEditor type={ResizeTypes.GALLERY} image={image} />}
      </div>
    </div>
  );
}

export default App;
