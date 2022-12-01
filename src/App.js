import React, { useState } from "react";
import "./App.css";

function App() {
  const [file, setFile] = useState("");
  const [isSizeOk, setIsSizeOk] = useState(false);
  const [mark, setMark] = useState(false);
  let image = new Image();
  image.src = file;

  let getImageSize = () => {
    if (image.height === 512 && image.width === 512) {
      return setIsSizeOk(true);
    }
    setIsSizeOk(false);
    setMark(false);
  };

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  setTimeout(() => {
    file && document.getElementById("btn").click();
  }, 1);
  return (
    <>
      <div>
        <h2>Select an Image: </h2>
        <input type="file" onChange={handleChange} />
        <button
          style={{ display: "none" }}
          id="btn"
          onClick={getImageSize}
        ></button>
      </div>
      <div>
        <div className={mark ? "water-mark" : ""}>
          <div>
            {isSizeOk ? (
              <img src={file} alt="img" />
            ) : (
              <p style={{ fontSize: "20px", margin: "20px 0px 0px 20px" }}>
                "Please upload 512 x 512 image"
              </p>
            )}
          </div>
        </div>
        {isSizeOk && <button onClick={() => setMark(!mark)}>Generate</button>}
      </div>
    </>
  );
}

export default App;
