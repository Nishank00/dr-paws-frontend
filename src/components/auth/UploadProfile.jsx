import { useEffect, useRef, useState } from "react";
import { useToast } from "@/components/ui/ToastProvider"
const UploadProfile = ({ onUpload,image }) => {
  const [profileImage, setProfileImage] = useState(null);
  const[url,setUrl]=useState("")
  const fileRef = useRef();
  const showToast = useToast();

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
        if (data.status){ 
          onUpload(data.data[0])
          showToast(data.message, "success");
        }
        else{
          showToast(data.message, "error");
        }
      })
      .catch((error) => console.log("error", error.message));
  };

  useEffect(() => {
    // if (profileImage) onUpload(onUpload);
    image && setUrl(image)
  }, [image]);

  return (
    <div className="flex items-center justify-center mb-5">
      <div
        className="w-32 h-32 rounded-full bg-accent relative"
        style={{
          backgroundImage: `url(${  url
            ? process.env.NEXT_PUBLIC_API_UPLOAD_URL +
            "/" +
            url:profileImage?profileImage
            : "/dummyDog.svg"})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className="w-8 h-8 rounded-full bg-secondary absolute right-1 bottom-1 cursor-pointer flex items-center justify-center"
          onClick={() => fileRef.current.click()}
        >
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.375 0.732178C11.0608 0.732178 10.7496 0.794068 10.4593 0.914316C10.169 1.03456 9.90526 1.21081 9.68307 1.433L1.24557 9.8705C1.16866 9.94741 1.11316 10.0431 1.08454 10.148L0.147037 13.5855C0.0880237 13.8019 0.149479 14.0333 0.308073 14.1919C0.466667 14.3505 0.69808 14.4119 0.914463 14.3529L4.35196 13.4154C4.4569 13.3868 4.55255 13.3313 4.62946 13.2544L13.067 4.81689C13.2891 4.5947 13.4654 4.33092 13.5856 4.04062C13.7059 3.75031 13.7678 3.43917 13.7678 3.12494C13.7678 2.81072 13.7059 2.49958 13.5856 2.20927C13.4654 1.91897 13.2891 1.65519 13.067 1.433C12.8448 1.21081 12.581 1.03456 12.2907 0.914316C12.0004 0.794068 11.6892 0.732178 11.375 0.732178ZM10.9377 2.06917C11.0763 2.01174 11.2249 1.98218 11.375 1.98218C11.5251 1.98218 11.6737 2.01174 11.8123 2.06917C11.951 2.1266 12.077 2.21077 12.1831 2.31689C12.2892 2.423 12.3734 2.54898 12.4308 2.68763C12.4882 2.82627 12.5178 2.97487 12.5178 3.12494C12.5178 3.27502 12.4882 3.42362 12.4308 3.56226C12.3734 3.70091 12.2892 3.82689 12.1831 3.933L3.86294 12.2531L1.64078 12.8592L2.24682 10.637L10.567 2.31689C10.6731 2.21077 10.799 2.1266 10.9377 2.06917Z"
              fill="white"
            />
          </svg>
          <input type="file" hidden ref={fileRef} onChange={fileInputChanged} />
        </div>
      </div>
    </div>
  );
};

export default UploadProfile;
