import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";

const UploadFile = ({
  setValue,
  files,
  setFiles,
  fileSize,
  setFileSize,
  uploadFileHandler,
  filesArr,
  setFilesArr,
}) => {
  // const [files, setFiles] = useState("");
  // const [filesArr, setFilesArr] = useState([]);
  //state for checking file size
  // const [fileSize, setFileSize] = useState(true);
  // for file upload progress message
  //for displaying response message
  //base end point url

  // const uploadFileHandler = (event) => {
  //   setFiles(event.target.files);
  //   setFilesArr(Array.from(event.target.files));
  //   setFileSize(true);
  //   const formData = new FormData();
  //   for (let i = 0; i < files.length; i++) {
  //     if (files[i].size > 1024) {
  //       setFileSize(false);
  //       return;
  //     }
  //     formData.append(`files`, files[i]);
  //   }
  //   setValue("files", formData, { shouldValidate: true });
  // };

  // console.log(files);

  const fileSubmitHandler = (event) => {
    // event.preventDefault();
    // setFileSize(true);
    // setFileUploadProgress(true);
    // setFileUploadResponse(null);
    // const formData = new FormData();
    // for (let i = 0; i < files.length; i++) {
    //   if (files[i].size > 1024) {
    //     setFileSize(false);
    //     setFileUploadProgress(false);
    //     setFileUploadResponse(null);
    //     return;
    //   }
    //   formData.append(`files`, files[i]);
    // }
    // setValue("files", formData, { shouldValidate: true });
    // const requestOptions = {
    //   method: "POST",
    //   body: formData,
    // };
    // fetch(FILE_UPLOAD_BASE_ENDPOINT + "/upload", requestOptions)
    //   .then(async (response) => {
    //     const isJson = response.headers
    //       .get("content-type")
    //       ?.includes("application/json");
    //     const data = isJson && (await response.json());
    //     // check for error response
    //     if (!response.ok) {
    //       // get error message
    //       const error = (data && data.message) || response.status;
    //       setFileUploadResponse(data.message);
    //       return Promise.reject(error);
    //     }
    //     console.log(data.message);
    //     setFileUploadResponse(data.message);
    //   })
    //   .catch((error) => {
    //     console.error("Error while uploading file!", error);
    //   });
  };

  //   useEffect(() => {
  //     setFilesArr(Array.from(files));
  //   }, [files]);
  return (
    <form onSubmit={fileSubmitHandler}>
      <div style={{ position: "relative", marginBottom: "20px" }}>
        <Button variant="contained" fullWidth>
          Select Files
        </Button>
        <input
          type="file"
          multiple
          onChange={uploadFileHandler}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0,
            width: "100%",
          }}
        />
      </div>
      {/* <button type="submit">Upload</button> */}
      <div
        style={{
          display: "block",
          columnGap: "5px",
          justifyContent: "flex-start",
        }}
      >
        {filesArr.map((x) => (
          <>
            <span
              style={{
                padding: "5px 10px",
                borderRadius: "30px",
                fontSize: "14px",
                marginBottom: "20px",
                whiteSpace: "nowrap",
                background: "rgba(0,0,0,0.2)",
              }}
            >
              {x.name}
            </span>
            <br />
            <br />
          </>
        ))}
      </div>
      {}
      {!fileSize && <p style={{ color: "red" }}>File size exceeded!!</p>}
    </form>
  );
};
export default UploadFile;
