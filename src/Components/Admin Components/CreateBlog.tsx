import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import config from "../../config";

const CreateBlog = () => {
  const [values, setValues] = useState({
    blogCategory: "",
    blogTitle: "",
    blogContent: "",
    blogURL: "",
  });
  const [image, setImage] = useState<File | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleQuillChange = (content: string): void => {
    setValues((prevValues) => ({
      ...prevValues,
      blogContent: content,
    }));
  };

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],

    // [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];

  const module = {
    toolbar: toolbarOptions,
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(values);
    console.log(image);

    const formData = new FormData();
    formData.append("blogCategory", values.blogCategory);
    formData.append("blogTitle", values.blogTitle);
    formData.append("blogContent", values.blogContent);
    formData.append("blogURL", values.blogURL);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await axios.post(
        // "http://localhost:8000/api/users/upload",
        `${config.BASE_URL}/api/users/upload`,
        // "https://alarm24hours-backend.onrender.com/api/users/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("User uploaded successfully");
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error uploading user:", error);
      alert("Failed to upload user");
    }
  };

  return (
    <div className="border-2 w-[85%] p-11">
      <h1 className="text-2xl font-bold text-center">Create New Blog</h1>
      {/* <h1>Sample</h1>
      <h2>Sample</h2>
      <h3>Sample</h3>
      <h4>Sample</h4>
      <h5>Sample</h5>
      <h6>Sample</h6> */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-10">
        <div className="flex gap-[100px]">
          <div className="flex w-[15%] justify-between items-center">
            <label className="font-bold">Blog Category</label>
            <p className="font-bold">:</p>
          </div>
          <div className="w-[70%]">
            <input
              type="text"
              value={values.blogCategory}
              onChange={handleChange}
              required
              name="blogCategory"
              placeholder="Enter Blog Category"
              className="border-2 rounded-lg p-1 focus:outline-none w-full"
            />
          </div>
        </div>

        <div className="flex gap-[100px]">
          <div className="flex w-[15%] justify-between items-center">
            <label className="font-bold">Blog Title</label>
            <p className="font-bold">:</p>
          </div>
          <div className="w-[70%]">
            <input
              type="text"
              value={values.blogTitle}
              onChange={handleChange}
              required
              name="blogTitle"
              placeholder="Enter Blog Title"
              className="border-2 rounded-lg p-1 focus:outline-none w-full"
            />
          </div>
        </div>

        <div className="flex gap-[100px]">
          <div className="flex w-[15%] justify-between items-center">
            <label className="font-bold">Blog URL</label>
            <p className="font-bold">:</p>
          </div>
          <div className="w-[70%]">
            <input
              type="text"
              value={values.blogURL}
              onChange={handleChange}
              required
              name="blogURL"
              placeholder="Enter Blog URL"
              className="border-2 rounded-lg p-1 focus:outline-none w-full"
            />
          </div>
        </div>

        <div className="flex gap-[100px]">
          <div className="flex w-[15%] justify-between items-center">
            <label className="font-bold">Blog Content</label>
            <p className="font-bold">:</p>
          </div>
          <div className="w-[70%]">
            <ReactQuill
              modules={module}
              theme="snow"
              value={values.blogContent}
              onChange={handleQuillChange} // Use the Quill-specific handler here
              className="border-2 rounded-lg p-1 focus:outline-none w-full"
            />
          </div>
        </div>

        <div className="flex gap-[100px]">
          <div className="flex w-[15%] justify-between items-center">
            <label className="font-bold">Blog Image</label>
            <p className="font-bold">:</p>
          </div>
          <div className="w-[70%]">
            <input
              type="file"
              onChange={handleImageChange}
              required
              className="border-2 rounded-lg p-1 focus:outline-none w-full"
            />
          </div>
        </div>

        <div>
          {" "}
          <button
            type="submit"
            className="text-sky-400 bg-white font-bold p-4 rounded-xl shadow-xl px-11"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
