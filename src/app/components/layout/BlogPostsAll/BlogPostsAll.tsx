import { Blog } from "@/types/blog";
import React, { FC } from "react";
import styles from "./BlogPostsAll.module.scss";
import BlogPostsRenderer from "../BlogPostsRenderer/BlogPostsRenderer";

type Props = {
  blogPosts: Blog[];
  lang: string;
};

const BlogPostsAll: FC<Props> = ({ blogPosts, lang }) => {
  return (
    <section className={styles.blogPosts}>
      <BlogPostsRenderer blogPosts={blogPosts} lang={lang} />
    </section>
  );
};

export default BlogPostsAll;
