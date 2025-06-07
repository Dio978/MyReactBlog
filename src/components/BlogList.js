// components/BlogList.jsx
import React, { useState, useEffect } from "react";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 获取文章元数据
    fetch("/posts.json")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("加载文章列表失败:", error);
        setLoading(false);
      });
  }, []);

  const openPostDetail = (filePath) => {
    // 在新窗口打开文章详情
    window.open(
      `/post.html?filePath=${encodeURIComponent(filePath)}`,
      "_blank",
      "width=1200,height=800"
    );
  };

  if (loading) return <div className="text-center py-10">加载中...</div>;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">博客文章</h1>

      <div className="space-y-6">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => openPostDetail(post.filePath)}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-blue-600">
                  {post.title}
                </h2>
                <time className="text-gray-500 text-sm">{post.date}</time>
              </div>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <button className="text-blue-500 font-medium hover:text-blue-700 transition-colors">
                阅读全文 →
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
