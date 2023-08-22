import { categories } from "@/constants";
import fetchNews from "@/utils/fetchNews";
import NewsList from "@/components/NewsList";

async function Homepage() {
  const news: NewsResponse = await fetchNews(categories.join(","));

  return (
    <div>
      {/* NewsList */}
      <NewsList news={news} />
    </div>
  );
}

export default Homepage;
