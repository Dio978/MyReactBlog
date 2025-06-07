import React from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "katex/dist/katex.min.css";

const MarkdownWithLatex = ({ content }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex]}
      components={{
        // 添加代码高亮支持
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");

          // 行内代码
          if (inline) {
            return (
              <code
                className="bg-gray-100 px-1.5 py-0.5 rounded font-mono"
                {...props}
              >
                {children}
              </code>
            );
          }

          // 代码块
          return (
            <SyntaxHighlighter
              style={vscDarkPlus}
              language={match ? match[1] : "text"}
              PreTag="div"
              showLineNumbers
              customStyle={{
                margin: "1rem 0",
                borderRadius: "0.5rem",
                backgroundColor: "#1e1e1e",
                fontSize: "0.9rem",
              }}
              {...props}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          );
        },

        // 可选：为表格添加基本样式
        table({ children }) {
          return (
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 my-4">
                {children}
              </table>
            </div>
          );
        },

        // 可选：为表格单元格添加样式
        th({ children }) {
          return (
            <th className="border border-gray-300 px-4 py-2 bg-gray-100">
              {children}
            </th>
          );
        },

        td({ children }) {
          return (
            <td className="border border-gray-300 px-4 py-2">{children}</td>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownWithLatex;
