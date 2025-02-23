import { useEffect } from "react";
import { useDebounce } from "react-use";
import { useSearchStore, useUIStore } from "../store";

export const useSearchBar = () => {
  const isSearchOpen = useUIStore((state) => state.isSearchOpen);
  const setIsSearchOpen = useUIStore((state) => state.setIsSearchOpen);

  const searchQuery = useSearchStore((state) => state.searchQuery);
  const searchResults = useSearchStore((state) => state.searchResults);
  const isLoading = useSearchStore((state) => state.isLoading);
  const setSearchQuery = useSearchStore((state) => state.setSearchQuery);
  const fetchSearchResults = useSearchStore(
    (state) => state.fetchSearchResults
  );
  const resetSearchResults = useSearchStore(
    (state) => state.resetSearchResults
  );

  const onSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isSearchOpen) {
      const value = e.target.value.trimStart();
      setSearchQuery(value);
    }

    return;
  };

  useDebounce(
    () => {
      searchQuery.length >= 2 ? fetchSearchResults() : resetSearchResults();
    },
    350,
    [searchQuery]
  );

  const clearSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
    resetSearchResults();
  };

  useEffect(() => {
    searchQuery !== ""
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [searchQuery]);

  return {
    isSearchOpen,
    searchQuery,
    searchResults,
    isLoading,

    onSearchInputChange,
    clearSearch,
  };
};
