// components/Feed.jsx
import React, { useState } from "react";
import FeedHeader from "./FeedHeader";
import TweetComposer from "./TweetComposer";

export default function Feed() {
  const [tab, setTab] = useState("foryou");
  const [posts, setPosts] = useState([]);

  return (
    <div className="w-full border-x">
      <FeedHeader value={tab} onChange={setTab} />
      <TweetComposer
        onPost={(text) =>
          setPosts((p) => [{ id: crypto.randomUUID(), text, createdAt: Date.now() }, ...p])
        }
      />
      <div>
        {posts.map((p) => (
          <article key={p.id} className="px-4 py-3 border-b">
            <p className="whitespace-pre-wrap leading-6">{p.text}</p>
            <p className="text-xs text-muted-foreground mt-1">
              {new Date(p.createdAt).toLocaleString()}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
