import { useState, useEffect, useCallback } from 'react';
import Background from './Background';
import Stars from './Stars';
import Navbar from './Navbar';

interface NasaArticle {
  title: string;
  explanation: string;
  url: string;
  date: string;
  media_type: string;
}

const CACHE_KEY = 'nasa_articles_cache';
const CACHE_DURATION = 48 * 60 * 60 * 1000; // 48 hours

const Article = () => {
  const [articles, setArticles] = useState<NasaArticle[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState("");

  const fetchNasaData = useCallback(async (startIndex: number, count: number, retries = 0) => {
    const maxRetries = 3;
    const results = [];
    
    try {
      const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY;
      console.log('API Key available:', !!NASA_API_KEY); // Debug log
      
      if (!NASA_API_KEY) {
        throw new Error('NASA API key is missing. Please check your .env file');
      }

      for (let i = startIndex; i < startIndex + count; i++) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const formattedDate = date.toISOString().split('T')[0];
        
        console.log(`Fetching data for date: ${formattedDate}`); // Debug log
        
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&date=${formattedDate}`
        );
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error('API Error:', {
            status: response.status,
            text: errorText
          });
          throw new Error(`NASA API Error: ${response.status}`);
        }
        
        const data = await response.json();
        results.push(data);
        
        // Add delay between requests
        if (i < startIndex + count - 1) {
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      }
      
      return results;
    } catch (error) {
      console.error('Fetch error:', error);
      if (retries < maxRetries) {
        console.log(`Retrying... Attempt ${retries + 1} of ${maxRetries}`);
        await new Promise(resolve => setTimeout(resolve, 2000));
        return fetchNasaData(startIndex, count, retries + 1);
      }
      throw error;
    }
  }, []);

  const loadInitialData = useCallback(async () => {
    try {
      setLoading(true);
      setError('');
      
      const results = await fetchNasaData(0, 1);
      console.log('Fetched results:', results); // Debug log
      
      if (!results || results.length === 0) {
        throw new Error('No data received from NASA API');
      }
      
      setArticles(results);
      
      // Update cache
      localStorage.setItem(CACHE_KEY, JSON.stringify({
        data: results,
        timestamp: Date.now()
      }));
    } catch (err) {
      console.error('Load error:', err);
      // Try to load from cache if API fails
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { data } = JSON.parse(cached);
        setArticles(data);
        setError('Using cached data - API error occurred');
      } else {
        setError(err instanceof Error ? err.message : 'Failed to load articles');
      }
    } finally {
      setLoading(false);
    }
  }, [fetchNasaData]);

  const loadMore = async () => {
    if (loadingMore) return;
    
    try {
      setLoadingMore(true);
      setError('');
      const newArticles = await fetchNasaData(articles.length, 3);
      
      if (newArticles.length === 0) {
        throw new Error('No new articles available');
      }
      
      setArticles(prev => [...prev, ...newArticles]);
    } catch (err) {
      handleError(err);
    } finally {
      setLoadingMore(false);
    }
  };

  const handleError = (err: unknown) => {
    console.error('Error:', err);
    const message = err instanceof Error ? err.message : 'An unexpected error occurred';
    setError(message);
  };

  useEffect(() => {
    loadInitialData();
  }, [loadInitialData]);

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-purple-400 animate-pulse">Loading amazing space content...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navbar />
      <Background />
      <Stars />
      <div className="relative z-10 container mx-auto px-4 py-12 mt-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center">
          NASA Astronomy Picture of the Day
        </h2>
        
        <input
          type="text"
          placeholder="Search articles..."
          className="w-full max-w-md mx-auto block mb-8 p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map(article => (
            <div
              key={article.date}
              className="bg-gray-900/50 rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-gray-800"
            >
              {article.media_type === 'image' ? (
                <img
                  src={article.url}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-800 flex items-center justify-center">
                  <span className="text-gray-400">Video Content</span>
                </div>
              )}
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {article.title}
                </h3>
                <p className="text-gray-400 line-clamp-2">{article.explanation}</p>
                <span className="inline-block mt-2 px-2 py-1 bg-purple-500/20 rounded-full text-sm">
                  {article.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {articles.length > 0 && articles.length < 9 && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              disabled={loadingMore}
              className="px-6 py-2 bg-purple-500/20 rounded-full text-white/80 hover:text-white hover:bg-purple-500/30 transition-all duration-300 disabled:opacity-50"
            >
              {loadingMore ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Loading...
                </span>
              ) : (
                "Load More Articles"
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Article;