import get from 'axios';

const fetchTrends = async () => {
  const response = await get('https://api.themoviedb.org/3/trending/all/day', {
    params: { 'api_key': '85592f5049b6db0438c3b91a1ba92abc' }
  });
  return response.data
}

fetchTrends().then((trends) => console.log(trends.results[0]));
