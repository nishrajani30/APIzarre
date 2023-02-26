import {useCallback, useEffect, useState} from "react";
import {getTopHeadlines, searchNews} from "../../services/news";
import {Article} from "../../types/article";

const useHome = () => {
  const [news, setNews] = useState<Article[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const hideError = () => {
    setError("");
  }

  const fetchTopHeadlines = useCallback(async () => {
    // fetch top headline news here
    setLoading(true);
    try {
      const topHeadlines = await getTopHeadlines();
      setNews(topHeadlines);
    } catch (e: any) {
      setError(e.message)
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchTopHeadlines();
  }, []);

  const onSearch = useCallback(async (query: string) => {
    // fetch top headline news here
    setLoading(true);
    try {
      const queryNews = Boolean(query) ? searchNews(query): getTopHeadlines()
      const searchedNews = await queryNews;
      setNews(searchedNews);
    } catch (e: any) {
      setError(e.message)
    }
    setLoading(false);
  }, [])


  return {
    news,
    error,
    hideError,
    loading,
    onSearch,
  }
}

export default useHome;