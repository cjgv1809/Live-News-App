"use client";

import LiveTimestamp from "@/components/LiveTimestamp";
import { notFound } from "next/navigation";
import { useState, useEffect } from "react";

type Props = {
  searchParams?: Article;
};

function ArticlePage({ searchParams }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }


  const article: Article = searchParams;

  return (
    <article>
      <section className="flex flex-col items-start lg:flex-row pb-24 px-0 lg:px-10">
        {article.image && (
          <img
            className="h-44 aspect-video md:h-50 pt-5 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-contain rounded-lg"
            src={article.image}
            alt={article.title}
            loading="lazy"
          />
        )}

        <div className="px-10 space-y-4">
          <h1 className="headerTitle px-0 no-underline pb-2">
            {article.title}
          </h1>

          <div className="flex divide-x-2 space-x-4">
            <h2 className="font-bold">By: {article.author ?? "unknown"}</h2>
            <h2 className="font-bold pl-4">
              Source: {article.source ?? "unknown"}
            </h2>
            <p className="pl-4">
              <LiveTimestamp time={article.published_at} />
            </p>
          </div>

          <p className="pt-4">{article.description}</p>
        </div>
      </section>
    </article>
  );
}

export default ArticlePage;
