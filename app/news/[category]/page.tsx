import NewsList from "@/components/NewsList";
import { categories } from "@/constants";
import fetchNews from "@/utils/fetchNews";

type Props = {
  params: { category: Category };
};

async function NewsCategory({ params }: Props) {
  const news: NewsResponse = await fetchNews(params.category);

  return (
    <div>
      <h1 className="headerTitle">{params.category}</h1>
      <NewsList news={news} />
    </div>
  );
}

export default NewsCategory;

// prebuild all the pages for the categories
export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}
