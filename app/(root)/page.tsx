import SearchForm from "@/components/SearchForm";
import ArticleCard from "@/components/ArticleCard";
import { client } from "@/sanity/lib/client";
import { ARTICLE_QUERY } from "@/sanity/lib/queries";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = await client.fetch(ARTICLE_QUERY);

  return (
    <>
      <section className="navy-container">
        <div className="flex flex-col items-center  gap-2 w-full max-w-3xl">
          <div className="lightblue-container">
            <h3 className="p-2.5 px-4">WRITE, SHARE, INSPIRE</h3>
          </div>
          <div className="lightnavy-container">
            <h2 className="text-center  py-6 text-3xl">
              SHARE YOUR THOUGHTS,
              <br /> CONNECT THROUGH STORIES
            </h2>
          </div>
          <div className="text-white font-work-sans font-medium text-center w-5/6 mt-2">
            <p>
              Write articles, explore perspectives, and build your personal
              journal.
            </p>
          </div>
        </div>
        <SearchForm query={query} />
      </section>
      <section className="section-container">
        <p className="font-work-sans font-semibold text-xl">
          {query ? `Search Article from ${query}` : "All Article"}
        </p>
        <ul className="card_grid">
          {posts?.length > 0 ? (
            posts.map((post: ArticleTypeCard) => (
              <ArticleCard key={post?._id} post={post} />
            ))
          ) : (
            <p>No Startup Found</p>
          )}
        </ul>
      </section>
    </>
  );
}
