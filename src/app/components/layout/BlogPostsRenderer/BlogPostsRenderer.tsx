"use client";

import React, { FC } from "react";
import styles from "./BlogPostsRenderer.module.scss";
import { Blog } from "@/types/blog";
import RelatedArticle from "../../ui/RelatedArticle/RelatedArticle";

type Props = {
  blogPosts: Blog[];
  lang: string;
};

const BlogPostsRenderer: FC<Props> = ({ blogPosts, lang }) => {
  return (
    <div className={styles.blogPostsRenderer}>
      <div className={styles.articlesBlock}>
        <div className="container">
          <div className={styles.articles}>
            {blogPosts.map((post) => (
              <RelatedArticle
                key={post._id}
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                slug={post.slug}
                previewImage={post.previewImage as any}
                lang={lang}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostsRenderer;
