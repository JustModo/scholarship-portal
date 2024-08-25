import React from "react";

export default function Verification() {
  return (
    <div className="w-full h-full p-10 pb-20 overflow-y-auto overflow-x-hidden">
      <p className="text-3xl font-semibold mb-12 select-none">
        Document Submission
      </p>
      <div className="flex flex-col gap-5">
        <FileInput title={"Family Income Certificate"} />
        <FileInput title={"12th MarkSheet"} />
        <FileInput title={"Diploma Certifcate"} />
        <FileInput title={"Domincile Certificate for J&K"} />
        <FileInput title={"SSC MarkSheet"} />
        <FileInput title={"Category Certificate (if applicable)"} />
        <FileInput title={"Passport Size Photograph"} />
        <FileInput title={"Signature"} />
      </div>
    </div>
  );
}

function FileInput({ title }) {
   const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const url = URL.createObjectURL(file);

      window.open(url, '_blank');

      setTimeout(() => URL.revokeObjectURL(url), 60000);
    }
  };
  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold">
        {title}
        <span className="text-red-500">*</span>
      </label>
      <input
        type="file"
        id="imageUpload"
        name="imageUpload"
        accept="image/*"
        className="block w-auto max-w-60 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-accent file:text-white hover:file:bg-orange-400"
        // onChange={handleImageChange}
      />
    </div>
  );
}
