import { Search } from "lucide-react";
import SearchFormReset from "./SearchFormReset";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <>
      <form className="search-form" action="/">
        <input
          type="text"
          name="query"
          defaultValue={query}
          placeholder="Seach Article"
          className="font-work-sans font-medium"
        />
        <div className="flex gap-2 items-center">
          {query && <SearchFormReset />}
          <button type="submit" className="search-btn text-white">
            <Search className="size-4" />
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchForm;
