// BlogPostsRenderer.tsx
"use client";

import React, { FC, useState } from "react";
import styles from "./BlogPostsRenderer.module.scss";
import { Blog } from "@/types/blog";
import Link from "next/link";
import { urlFor } from "@/sanity/sanity.client";
import Image from "next/image";
import axios from "axios";
import RelatedArticle from "../../ui/RelatedArticle/RelatedArticle";

type Props = {
  blogPosts: Blog[];
  totalPosts: number;
  lang: string;
};

const LIMIT = 9;

const BlogPostsRenderer: FC<Props> = ({ blogPosts, totalPosts, lang }) => {
  const [posts, setPosts] = useState<Blog[]>(blogPosts);
  const [loading, setLoading] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB").replace(/\//g, ".");
  };

  const generateSlug = (slug: any, language: string) =>
    slug?.[language]?.current
      ? `/${language}/blog/${slug[language].current}`
      : "#";

  const getLoadMoreText = () => {
    switch (lang) {
      case "ru":
        return `Загрузить ещё ${LIMIT} постов`;
      case "pl":
        return `Załaduj jeszcze ${LIMIT} postów`;
      case "en":
      default:
        return `Load ${LIMIT} more posts`;
    }
  };

  const loadMorePosts = async () => {
    setLoading(true);
    const offset = posts.length;

    try {
      const { data } = await axios.get(
        `/api/getMorePosts?lang=${lang}&limit=${LIMIT}&offset=${offset}`
      );
      const newPosts: Blog[] = data.posts;
      setPosts((prev) => [...prev, ...newPosts]);
    } catch (err) {
      console.error("Error loading more posts:", err);
    } finally {
      setLoading(false);
    }
  };

  // категории для табов
  const categories = Array.from(
    new Set(posts.map((post) => post.category.title))
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const filteredPosts = selectedCategory
    ? posts.filter((p) => p.category.title === selectedCategory)
    : posts;

  return (
    <div className={styles.blogPostsRenderer}>
      {/* Табы категорий */}
      <div className={styles.tabsBlock}>
        <div className="container">
          <div className={styles.tabs}>
            <button
              className={`${!selectedCategory ? styles.active : ""} ${styles.tab}`}
              onClick={() => setSelectedCategory(null)}
            >
              {lang === "en"
                ? "All"
                : lang === "ru"
                  ? "Все"
                  : lang === "pl"
                    ? "Wszystkie"
                    : "All"}
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${selectedCategory === cat ? styles.active : ""} ${styles.tab}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Список статей */}
      <div className={styles.articlesBlock}>
        <div className="container">
          <div className={styles.articles}>
            {filteredPosts.map((post) => {
              // Ссылка-заглушка
              const PLACEHOLDER =
                "https://cdn.sanity.io/files/88gk88s2/production/1580d3312e8cb973526a4d8f1019c78868ab3a45.jpg";

              // Попытаемся взять asset._ref; если его нет — сразу в заглушку
              const hasValidImage = Boolean(post.previewImage?.asset?._ref);

              // Если asset._ref есть – формируем URL, иначе – плейсхолдер
              const imageUrl = hasValidImage
                ? (post.previewImage as any)
                : PLACEHOLDER;

              return (
                <RelatedArticle
                  key={post._id}
                  title={post.title}
                  excerpt={post.excerpt}
                  category={post.category}
                  slug={post.slug}
                  previewImage={post.previewImage as any}
                  lang={lang}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostsRenderer;
