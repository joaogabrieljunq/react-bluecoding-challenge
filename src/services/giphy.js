import axios from 'axios';

function getOptionsGifs(searchText, gifsQuantity) {
  return {
    method: 'GET',
    url: 'https://api.giphy.com/v1/gifs/search',
    params: {
      api_key: 'IwYUi4lXyM5h67Qy7OtdFmEYGD5DRfNk',
      q: searchText,
      limit: gifsQuantity,
      offset: 0,
      rating: 'g',
      lang: 'en',
    },
  };
}

async function searchGifs(searchText, gifsQuantity) {
  try {
    const res = await axios.request(getOptionsGifs(searchText, gifsQuantity));
    const { data } = res;
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

const giphyService = {
  searchGifs,
};

export default giphyService;
