// src/app/components/LikeButton.tsx
"use client"; // Client-side component for state management

import React, { useState, useEffect } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [impressions, setImpressions] = useState(0);
  const [likes, setLikes] = useState(0);

  // Fetch impressions & likes when the component loads
  useEffect(() => {
    fetch("/api/like", { method: "POST", body: JSON.stringify({ type: "impression" }) })
      .then((res) => res.json())
      .then((data) => {
        setImpressions(data.impressions);
        setLikes(data.likes);
      });
  }, []);

  // Handle Like Click
  const handleLike = async () => {
    if (!liked) {
      setLiked(true);
      const res = await fetch("/api/like", {
        method: "POST",
        body: JSON.stringify({ type: "like" }),
      });
      const data = await res.json();
      setLikes(data.likes);
    }
  };

  return (
    <div className="flex flex-col items-center mt-4">
      <p className="text-sm text-gray-800">👀 Views: {impressions}</p>
      <button
        onClick={handleLike}
        className={`px-6 py-3 mt-3 text-lg font-semibold rounded-full transition-all duration-300 ease-in-out ${
          liked ? "bg-red-600 text-white" : "bg-orange-600 text-gray-200"
        } hover:bg-red-500 hover:text-white hover:scale-105 active:scale-95`}
      >
        {liked ? "❤️ Liked" : "Like"} ({likes})
      </button>
    </div>
  );
};

export default LikeButton;
