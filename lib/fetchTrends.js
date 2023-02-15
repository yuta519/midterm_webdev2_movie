const axios = require('axios');

const FetchTrends = async () => {
  const response = await axios.get('https://api.themoviedb.org/3/trending/all/day', {
    params: { 'api_key': '85592f5049b6db0438c3b91a1ba92abc' }
  });
  return response.data
}

FetchTrends().then((trends) => console.log(trends.results));
