import React from "react";

function UploadImg() {
  return (
    <div>
      <form>
        <input type="file" id="myFile" name="uploadedFile" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default UploadImg;
