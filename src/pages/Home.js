import PostList from "../components/PostList";

function Home() {
  const blogPosts = [
    {
      id: 1,
      title: "React Hooks深度解析",
      date: "2025-05-15",
      excerpt:
        "本文将深入探讨React Hooks的工作原理和使用技巧，帮助开发者更高效地构建函数组件...",
      tag: ["css"],
    },
    {
      id: 2,
      title: "CSS Grid布局实战指南",
      date: "2025-05-10",
      excerpt:
        "全面解析CSS Grid布局系统，通过实际案例演示如何创建响应式网页布局...",
      tag: ["css", "grid"],
    },
    {
      id: 3,
      title: "前端性能优化最佳实践",
      date: "2025-05-01",
      excerpt:
        "探索现代Web应用性能优化的关键技术，包括代码分割、懒加载和资源预取等策略...",
      tag: ["css", "web"],
    },
    {
      id: 4,
      title: "TypeScript在React中的应用",
      date: "2025-04-25",
      excerpt:
        "如何在React项目中充分利用TypeScript的类型系统提升代码质量和开发体验...",
      tag: ["react", "typescript"],
    },
  ];

  return (
    <div className="App">
      <PostList posts={blogPosts} />
    </div>
  );
}
export default Home;
