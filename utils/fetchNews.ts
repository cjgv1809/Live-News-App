import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  // GraphQL query
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        keywords: $keywords
        countries: "us"
        sort: "published_desc"
      ) {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          total
          offset
          limit
          count
        }
      }
    }
  `;
  // Fetch function with Next.js caching
  const res = await fetch(
    "https://caceres.stepzen.net/api/voting-mink/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category || "general",
          keywords: keywords || "",
        },
      }),
    }
  );

  const newsResponse = await res.json();

  // Sort function by images vs not images present
  const news = sortNewsByImage(newsResponse.data.myQuery);

  // return results
  return news;
};

export default fetchNews;
