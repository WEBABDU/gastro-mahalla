import React from "react";
import ReactQuill from "react-quill";
import { formats, modules } from "./quill-modules";
import "./QuillComponent.css";
import "../../../node_modules/react-quill/dist/quill.snow.css";
import { useState } from "react";

export const QuillComponent = () => {
  const [body, setBody] = useState(null);

  const handleBody = (e) => {
    setBody(e);
  };
  return (
    <>
      <ReactQuill
        placeholder="Insert text here..."
        modules={modules}
        formats={formats}
        onChange={handleBody}
        value={body}
      />
    </>
  );
};
