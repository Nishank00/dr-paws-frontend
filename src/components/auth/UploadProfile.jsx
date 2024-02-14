import React, { useRef, useState } from "react";

const UploadProfile = ({ onUpload }) => {
  const [profileImage, setProfileImage] = useState(null);
  const fileRef = useRef();

  const fileInputChanged = (e) => {
    const fileReader = new FileReader();
    const { files } = e.target;
    if (files && files.length > 0) {
      fileReader.readAsDataURL(files[0]);
      fileReader.onload = () => {
        if (typeof fileReader.result === "string")
          setProfileImage(fileReader.result);
      };
    }
    console.log(files[0]);

    let myHeaders = new Headers();
    myHeaders.append("authorization", localStorage.getItem("access_token"));
    var formdata = new FormData();
    formdata.append("files", files[0]);
    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      process.env.NEXT_PUBLIC_API_BASE_URL + "/upload/files",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status) onUpload(data.data[0]);
        console.log("data => ", data);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="flex items-center justify-center mb-5">
      <div
        className="w-32 h-32 rounded-full bg-accent relative"
        style={{
          backgroundImage: `url(${profileImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className="w-8 h-8 rounded-full bg-secondary absolute right-1 bottom-1 cursor-pointer flex items-center justify-center"
          onClick={() => fileRef.current.click()}
        >
          🚀
          <input type="file" hidden ref={fileRef} onChange={fileInputChanged} />
        </div>
      </div>
    </div>
  );
};

export default UploadProfile;
