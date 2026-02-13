import { useState } from "react";

function NoticeForm({ addNotice }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) return;

    addNotice({ title, description });

    setTitle("");
    setDescription("");
  };

  return (
    <form className="notice-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Notice Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Notice Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Add Notice</button>
    </form>
  );
}

export default NoticeForm;