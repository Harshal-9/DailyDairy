import React from "react";

function UploadImg() {
  return (
    <div>
      <form>
        <input
          style={{
            display: "inline-block",
            color: "transparent",
            width: "75%",
            paddingLeft: "20px"
          }}
          type="file"
          id="myFile"
          name="uploadedFile"
          accept="image/*"
        />
      </form>
    </div>
  );
}

export default UploadImg;
