import SearchForm from "@/components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
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
      <section className="section-container"></section>
    </>
  );
}
