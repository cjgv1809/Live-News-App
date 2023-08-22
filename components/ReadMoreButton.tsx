"use client";

import { useRouter } from "next/navigation";

type Props = {
  article: Article;
};

function ReadMoreButton({ article }: Props) {
  const router = useRouter();

  const handleClick = () => {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    router.push(`/article?${queryString}`);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-orange-400 font-bold h-10 rounded-b-lg dark:text-gray-900 hover:bg-orange-500 transition-all duration-200 ease-out flex items-center justify-center"
    >
      Read More
    </button>
  );
}

export default ReadMoreButton;
