// components/Feed.jsx
import React, { useState } from "react";
import FeedHeader from "./FeedHeader";
import TweetComposer from "./TweetComposer";

export default function Feed() {
  const [tab, setTab] = useState("foryou");
  const [posts, setPosts] = useState([]);

  return (
    <div className="w-full max-w-2xl mx-auto border-x border-gray-200 dark:border-gray-800">
      {/* Feed Header */}
      <FeedHeader value={tab} onChange={setTab} />

      {/* Tweet Composer */}
      <div className="border-b border-gray-200 dark:border-gray-800">
        <TweetComposer
          onPost={(text) =>
            setPosts((p) => [
              { id: crypto.randomUUID(), text, createdAt: Date.now() },
              ...p,
            ])
          }
        />
      </div>

      {/* Posts List */}
      <div className="divide-y divide-gray-200 dark:divide-gray-800">
        {posts.length === 0 ? (
          <div className="text-center text-sm text-gray-500 py-6">
            No posts yet. Be the first to tweet!
          </div>
        ) : (
          posts.map((p) => (
            <article key={p.id} className="px-4 py-3">
              <p className="whitespace-pre-wrap leading-6">{p.text}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {new Date(p.createdAt).toLocaleString()}
              </p>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
