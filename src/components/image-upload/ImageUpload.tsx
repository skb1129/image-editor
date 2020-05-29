import React, { useCallback, useState } from "react";

import { ImageAttributes } from "../../models";

import "./ImageUpload.scss";

interface Props {
  setImage: (imgAttr: ImageAttributes) => void;
}
function ImageUpload({ setImage }: Props) {
  const styles = {
    wrapper: "image-upload__wrapper",
    error: "image-upload__error",
  };
  const [error, setError] = useState<string>("");

  const handleChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      const file = target.files[0];
      const imageURL = URL.createObjectURL(file);
      const image = new Image();
      image.src = imageURL;
      image.onload = () => {
        const { width, height } = image;
        if (height === 1024 && width === 1024) {
          setImage({ name: file.name, src: imageURL });
          setError("");
          return true;
        }
        setError("The height and width of the image must be 1024px X 1024px.");
        return false;
      };
    },
    [setImage, setError]
  );

  return (
    <div data-testid="image-upload" className={styles.wrapper}>
      <input data-testid="image-upload-input" type="file" onChange={handleChange} accept="image/png, image/jpeg" />
      {error && (
        <p data-testid="image-upload-error" className={styles.error}>
          {error}
        </p>
      )}
    </div>
  );
}

export default ImageUpload;
