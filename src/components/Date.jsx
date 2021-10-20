import React from "react";

function Date() {
  return (
    <div>
      <form>
        <label htmlFor="myDate">Select a Date : </label>
        <input type="date" id="myDate" name="myDate" />
        <input type="submit" />
      </form>
    </div>
  );
}

//   <form action="/upload" enctype="multipart/form-data" method="post">
//   <label for="myDate">Select a Date:</label>
//   <input type="date" id="myDate" name="myDate">
//   <input type="submit">
//   <input type="file" id="myFile" name="uploadedFile">
// </form>

export default Date;
