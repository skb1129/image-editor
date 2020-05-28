import React, { useCallback, useRef, useState } from "react";
import Cropper from "react-cropper";

import { storage } from "../../api";
import { content } from "../../assets";
import { ImageAttributes, ResizeTypes } from "../../models";

import "cropperjs/dist/cropper.css";
import "./ImageEditor.scss";

interface Props {
  type: ResizeTypes;
  image: ImageAttributes;
}
function ImageEditor({ type, image }: Props) {
  const styles = {
    title: "image-editor__title",
    wrapper: "image-editor__wrapper",
    image: "image-editor__image",
    preview: "image-editor__preview",
    previewImage: "image-editor__preview__image",
    result: "image-editor__result",
  };
  const [uploading, setUploading] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const cropper = useRef<Cropper>(null);
  const { title, size } = content[type];

  const cropImage = useCallback(() => {
    cropper.current.getCroppedCanvas({ ...size }).toBlob((blob) => {
      const [bucket, ext] = image.name.split(".");
      const filename = `${type}.${ext}`;
      const uploadTask = storage.ref(`${bucket}/${filename}`).put(blob);
      setUploading(true);
      uploadTask.on(
        "state_changed",
        null,
        (error) => console.log(error),
        () => {
          storage
            .ref(bucket)
            .child(filename)
            .getDownloadURL()
            .then((url) => {
              setImageURL(url);
              setUploading(false);
            });
        }
      );
    });
  }, [cropper, size, setUploading, setImageURL]);

  const getCropper = () => (
    <Cropper
      disabled={uploading}
      ref={cropper}
      className={styles.image}
      src={image.src}
      alt={image.name}
      aspectRatio={size.width / size.height}
      viewMode={1}
      movable={false}
      zoomable={false}
      preview={`#${type}`}
      minCropBoxWidth={size.width / 2}
      minCropBoxHeight={size.height / 2}
    />
  );

  const getPreview = () => (
    <div className={styles.preview}>
      <h2>Preview:</h2>
      <div id={type} className={styles.previewImage} />
      {uploading ? (
        <h3>Uploading...</h3>
      ) : (
        <button disabled={uploading} onClick={cropImage}>
          Crop and Upload
        </button>
      )}
    </div>
  );

  const getResult = () => <img className={styles.result} style={size} src={imageURL} alt={`${title} ${image.name}`} />;

  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.wrapper}>
        {imageURL ? (
          getResult()
        ) : (
          <>
            {getCropper()}
            {getPreview()}
          </>
        )}
      </div>
    </>
  );
}

export default ImageEditor;
