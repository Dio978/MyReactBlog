// const Blog = () => (
//   <div>
//     <h1>博客文章</h1>
//     <ul>
//       <li>React入门指南</li>
//       <li>路由配置详解</li>
//     </ul>
//   </div>
// );
// export default Blog;
import MarkdownWithLatex from "../components/MarkdownWithLatex";

function Blog() {
  // 假设 markdownContent 是从文件或 API 获取的 Markdown 内容
  const markdownContent = `
# Markdown 渲染示例

## 数学公式支持

行内公式：$E = mc^2$

块级公式：
$$
\\int_0^\\infty e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}
$$

## 代码高亮示例

\`\`\`js
// JavaScript 代码示例
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));
\`\`\`

\`\`\`python
# Python 代码示例
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a

print(fibonacci(10))
\`\`\`

## 表格支持

| 函数名       | 语言       | 复杂度   |
|--------------|------------|----------|
| fibonacci    | JavaScript | O(2^n)   |
| fibonacci    | Python     | O(n)     |
`;

  return (
    <div>
      <MarkdownWithLatex content={markdownContent} />
    </div>
  );
}

export default Blog;
