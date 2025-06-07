import { useEffect, useState, useMemo } from "react";
import "./PostList.css";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // 搜索关键词状态
  const [sortOrder, setSortOrder] = useState("desc"); // 排序顺序状态

  useEffect(() => {
    fetch("/posts/index.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  // 处理排序和搜索
  const processedPosts = useMemo(() => {
    let result = [...posts];

    // 搜索引擎（标题和about）
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(term) ||
          (post.about && post.about.toLowerCase().includes(term))
      );
    }

    // 时间排序（根据sortOrder状态决定升序或降序）
    result.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "desc" ? dateB - dateA : dateA - dateB;
    });

    return result;
  }, [posts, searchTerm, sortOrder]);

  return (
    <div className="post-container">
      {/* 搜索和排序控制区 */}
      <div className="controls">
        <div className="search-container">
          <input
            type="text"
            placeholder="搜索博客标题或摘要..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button className="search-btn">
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z" />
            </svg>
          </button>
        </div>

        <div className="sort-controls">
          <label>
            <input
              type="radio"
              name="sortOrder"
              checked={sortOrder === "desc"}
              onChange={() => setSortOrder("desc")}
            />
            最新优先
          </label>
          <label>
            <input
              type="radio"
              name="sortOrder"
              checked={sortOrder === "asc"}
              onChange={() => setSortOrder("asc")}
            />
            最旧优先
          </label>
        </div>
      </div>

      {/* 博客列表 */}
      <div className="post-list">
        {processedPosts.length > 0 ? (
          processedPosts.map((post) => (
            <div key={post.id} className="post-item">
              <h3>
                <a href={`/post/${post.id}`}>{post.title}</a>
              </h3>
              <p>{post.about}</p>
              <small>{new Date(post.date).toLocaleDateString()}</small>
            </div>
          ))
        ) : (
          <div className="no-results">没有找到匹配的博客...</div>
        )}
      </div>
    </div>
  );
}
