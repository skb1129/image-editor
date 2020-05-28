import React, { useState } from "react";

import ImageEditor from "./components/image-editor/ImageEditor";
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
        {image && <ImageEditor title="Horizontal" image={image} size={{ width: 755, height: 450 }} />}
        {image && <ImageEditor title="Vertical" image={image} size={{ width: 365, height: 450 }} />}
        {image && <ImageEditor title="Horizontal Small" image={image} size={{ width: 365, height: 212 }} />}
        {image && <ImageEditor title="Gallery" image={image} size={{ width: 380, height: 380 }} />}
      </div>
    </div>
  );
}

export default App;
