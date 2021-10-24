import React from "react";

function UploadImg() {
  return (
    <div>
      <form>
        <input
          style={{
            display: "inline-block",
            color: "transparent",
            width: "50%"
          }}
          type="file"
          id="myFile"
          name="uploadedFile"
          accept="image/*"
        />
        {/* <input style={{ display: "inline-block" }} type="submit" /> */}
      </form>
    </div>
  );
}

export default UploadImg;
