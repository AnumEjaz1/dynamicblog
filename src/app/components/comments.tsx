"use client";
import { useState, useEffect } from "react";

const Comments = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [input, setInput] = useState("");

  // Load comments from localStorage on mount
  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem("comments") || "[]");
    setComments(savedComments);
  }, []);

  // Save comments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  // Add new comment
  const addComment = () => {
    if (input.trim()) {
      setComments([...comments, input]);
      setInput("");
    }
  };

  // ✅ Fix: Delete comment function
  const deleteComment = (index: number) => {
    const newComments = comments.filter((_, i) => i !== index);
    setComments(newComments);
  };

  return (
    <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2">Comments</h3>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-3 py-2 border rounded"
          placeholder="Write a comment..."
        />
        <button
          onClick={addComment}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Post
        </button>
      </div>

      <ul className="mt-4 space-y-2">
        {comments.map((comment, index) => (
          <li key={index} className="bg-white p-2 rounded shadow flex justify-between items-center">
            {comment}
            <button
              onClick={() => deleteComment(index)}
              className="ml-2 text-red-500 hover:text-red-700"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
