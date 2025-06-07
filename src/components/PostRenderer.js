import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useParams } from "react-router-dom";
import "katex/dist/katex.min.css";
import copyIcon from "./clipboard-icon.svg"; // 添加复制图标

export default function PostRenderer() {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [copiedStates, setCopiedStates] = useState({}); // 改为对象存储多个复制状态

  useEffect(() => {
    fetch("/posts/index.json")
      .then((res) => res.json())
      .then((posts) => {
        const post = posts.find((p) => p.id === id);
        if (post) {
          fetch(`/posts/${post.filename}`)
            .then((res) => res.text())
            .then((text) => setContent(text));
        }
      });
  }, [id]);

  // 复制文本到剪贴板（React 19原生API方案）
  const copyToClipboard = async (text, blockId) => {
    try {
      await navigator.clipboard.writeText(text);
      // 更新特定代码块的复制状态
      setCopiedStates((prev) => ({ ...prev, [blockId]: true }));

      // 2秒后重置状态
      setTimeout(() => {
        setCopiedStates((prev) => ({ ...prev, [blockId]: false }));
      }, 2000);
    } catch (err) {
      console.error("复制失败:", err);
      setCopiedStates((prev) => ({ ...prev, [blockId]: "error" }));
    }
  };

  return (
    <article className="post-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          // 数学公式渲染
          math: ({ children }) => <div className="math-block">{children}</div>,
          inlineMath: ({ children }) => (
            <span className="math-inline">{children}</span>
          ),

          // 代码块渲染（带高亮和复制按钮）
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            const language = match ? match[1] : "text";
            const blockId =
              node.position?.start.line.toString() || Date.now().toString();

            return !inline ? (
              <div
                className="code-block-wrapper"
                style={{ position: "relative" }}
              >
                <button
                  className="copy-button"
                  onClick={() =>
                    copyToClipboard(
                      String(children).replace(/\n$/, ""),
                      blockId
                    )
                  }
                  aria-label="复制代码"
                >
                  {copiedStates[blockId] === true ? (
                    "✓ 已复制"
                  ) : copiedStates[blockId] === "error" ? (
                    "复制失败"
                  ) : (
                    <img src={copyIcon} alt="复制" width={16} height={16} />
                  )}
                </button>

                <SyntaxHighlighter
                  style={a11yDark}
                  language={language}
                  PreTag="div"
                  showLineNumbers
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },

          // 图片处理
          img: ({ src, alt }) => (
            <img src={`/posts/${src}`} alt={alt} style={{ maxWidth: "100%" }} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
