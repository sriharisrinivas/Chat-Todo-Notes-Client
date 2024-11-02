import React, { useRef, useState } from 'react';
import { UploadButton } from "@bytescale/upload-widget-react";

const options = {
  apiKey: "public_W142ieg6PSRXJ6FzWs7sF64uBF1T", // This is your API key.
  maxFileCount: 1
};

const ProfilePictureUpload = () => {

  const [image, setImage] = useState()

  return (
    <UploadButton options={options}
      onComplete={files => {
        console.log("🚀 ~ onComplete ~ files:", files)
        setImage(files[0])
      }}>
      {({ onClick }) =>
        <button onClick={onClick}>
          Upload a file...
        </button>
      }
    </UploadButton>
  );
};

export default ProfilePictureUpload;


