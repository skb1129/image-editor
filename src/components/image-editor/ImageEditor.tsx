import React, { useRef } from "react";
import Cropper from "react-cropper";

import { ImageAttributes } from "../../models";

import "cropperjs/dist/cropper.css";
import "./ImageEditor.scss";

interface Props {
  title: string;
  image: ImageAttributes;
  size: { width: number; height: number };
}
function ImageEditor({ title, image, size }: Props) {
  const styles = {
    title: "image-editor__title",
    wrapper: "image-editor__wrapper",
    image: "image-editor__image",
    preview: "image-editor__preview",
    previewImage: "image-editor__preview__image",
  };
  const cropper = useRef(null);
  const id = title.replace(" ", "");
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.wrapper}>
        <Cropper
          ref={cropper}
          className={styles.image}
          src={image.src}
          alt={image.name}
          aspectRatio={size.width / size.height}
          viewMode={1}
          movable={false}
          zoomable={false}
          preview={`#${id}`}
          minCropBoxWidth={size.width / 2}
          minCropBoxHeight={size.height / 2}
        />
        <div className={styles.preview}>
          <h2>Preview:</h2>
          <div id={id} className={styles.previewImage} />
        </div>
      </div>
    </>
  );
}

export default ImageEditor;
