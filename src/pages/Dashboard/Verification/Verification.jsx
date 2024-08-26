import React, { Fragment, useEffect, useState } from "react";
import { useGlobalState } from "../../../context/GlobalContext";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { storage } from "../../../firebase";
import { FaTrash } from "react-icons/fa";
import { useModal } from "../../../context/ModalContext";

export default function Verification() {
  return (
    <div className="w-full h-full pt-10 px-5 md:px-10 pb-20 overflow-y-auto overflow-x-hidden">
      <p className="text-3xl font-semibold mb-12 select-none">
        Document Submission
      </p>
      <div className="flex flex-col gap-5">
        <FileInput title={"Family Income Certificate"} type={"income"} />
        <FileInput title={"12th MarkSheet"} type={"pucFile"} />
        <FileInput title={"Diploma Certifcate"} type={"diplomaFile"} />
        <FileInput title={"Domincile Certificate for J&K"} type={"domicile"} />
        <FileInput title={"SSC MarkSheet"} type={"sscFile"} />
        <FileInput
          title={"Category Certificate (if applicable)"}
          type={"category"}
        />
        <FileInput title={"Passport Size Photograph"} type={"photo"} />
        <FileInput title={"Signature"} type={"signature"} />
      </div>
    </div>
  );
}

function FileInput({ title, type }) {
  const [imgUrl, setImgUrl] = useState("");
  const { user } = useGlobalState();
  const path = `${user.uid}/${type}`;
  const storageReference = ref(storage, path);
  const [loaded, setLoaded] = useState(false);

  const { openModal } = useModal();

  useEffect(() => {
    getImage();
  }, []);

  const getImage = async () => {
    try {
      const existingUrl = await getDownloadURL(storageReference);
      // console.log("File already exists at:", existingUrl);
      setImgUrl(existingUrl);
    } catch (error) {
      if (error.code === "storage/object-not-found") {
        // console.log("File does not exist.");
        setImgUrl("");
      }
    } finally {
      setLoaded(true);
    }
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      await uploadImage(file);
    }
  };

  const uploadImage = async (file) => {
    try {
      await uploadBytes(storageReference, file);
      const newUrl = await getDownloadURL(storageReference);
      setImgUrl(newUrl);
      openModal("Uploaded Sucessfully!");
    } catch (error) {
      openModal("Upload Failed!");
      console.error(error);
    }
  };

  const deleteImage = async () => {
    try {
      await deleteObject(storageReference);
      openModal("Deleted Sucessfully!");
      await getImage();
    } catch (error) {
      openModal("Deletion Failed!");
      console.error(error);
    }
  };

  if (!loaded) return null;

  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold">
        {title}
        <span className="text-red-500">*</span>
      </label>
      {!imgUrl ? (
        <input
          type="file"
          id="imageUpload"
          name="imageUpload"
          accept="image/*"
          className="block w-auto max-w-60 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-accent file:text-white hover:file:bg-orange-400"
          onChange={handleImageChange}
        />
      ) : (
        // <img className="w-36" alt="Uploaded Image" src={imgUrl} />
        <div className="bg-slate-100 p-3 px-5 rounded-md flex justify-between items-center">
          <a
            className="text-sm underline font-semibold cursor-pointer"
            onClick={() => window.open(imgUrl, "_blank")}
          >
            View File
          </a>
          <FaTrash
            className="cursor-pointer hover:text-red-600"
            onClick={() => deleteImage()}
          />
        </div>
      )}
    </div>
  );
}

// const url = URL.createObjectURL(file);

// window.open(url, "_blank");

// setTimeout(() => URL.revokeObjectURL(url), 60000)
