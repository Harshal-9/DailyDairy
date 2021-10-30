import axios from "axios";
import React, { useState } from "react";

function UploadImg() {
  const [metadata, setMetadata] = useState(null);

  // printing the link
  function printLink() {
    console.log("link", metadata.link);
  }

  const handleFileChange = (event) => {
    // console.log(event.target.files[0]);
    const selectedFile = event.target.files[0];
    const fd = new FormData();
    fd.append("image", selectedFile, selectedFile.name);

    // Uploading Image
    axios
      .post("http://localhost:3000", fd)
      .then((res) => {
        console.log("result", res);
        console.log(res.data.link);

        setMetadata({ link: res.data.link, id: res.data.id });
        printLink();
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  // Handling deleting Image
  function handleDelete() {
    axios
      .delete("http://localhost:3000/", {
        data: {
          id: metadata.id
        }
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      {metadata ? (
        <button onClick={handleDelete}>Delete</button>
      ) : (
        <form enctype="multipart/form-data">
          <input
            style={{
              display: "inline-block",
              color: "transparent",
              width: "75%",
              paddingLeft: "20px"
            }}
            type="file"
            name="uploadedFile"
            accept="image/*"
            onChange={handleFileChange}
          />
        </form>
      )}
    </div>
  );
}

export default UploadImg;
