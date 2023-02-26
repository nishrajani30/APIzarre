import Constants from 'expo-constants';
import axiosBaseInstance from "./base";

export const searchNews = async (query: string) => {
  const response = await axiosBaseInstance.get('everything', {
    params: {
      q: query, // The search query
      language: 'en', // Language code (optional)
      apiKey: Constants?.expoConfig?.extra?.apiKey!, // TODO pass as environment variable
    },
  });
  return response.data.articles;
};

export const getTopHeadlines = async () => {
  const response = await axiosBaseInstance.get('top-headlines', {
    params: {
      language: 'en', // Language code (optional)
      apiKey: Constants?.expoConfig?.extra?.apiKey!,
    },
  });
  return response?.data?.articles;
}
