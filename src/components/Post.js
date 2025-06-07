// components/Post.jsx
import React from "react";
import styles from "./Post.module.css";

const Post = ({ title, date, excerpt, tag }) => {
  const formattedDate = new Date(date).toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className={styles.postCard}>
      <div className={styles.cardHeader}>
        <h2 className={styles.postTitle}>{title}</h2>
        <time className={styles.postDate}>{formattedDate}</time>
      </div>

      <div className={styles.cardBody}>
        <p className={styles.postExcerpt}>{excerpt}</p>

        <div className={styles.cardFooter}>
          <button className={styles.readMoreBtn}>阅读全文</button>
          <div className={styles.tags}>
            {tag.map((items) => (
              <span>{items}</span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Post;
