const express = require('express');
const router = express.Router();

const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {

  const FetchTrends = async () => {
    const response = await axios.get('https://api.themoviedb.org/3/trending/all/day', {
      params: { 'api_key': '85592f5049b6db0438c3b91a1ba92abc' }
    });
    return response.data
  }

  FetchTrends().then(
    (trends) => {
      res.render(
        'index',
        {
          title: 'Movie Trends',
          trends: trends.results

        }
      );
      console.log(trends.results)
    })
});

module.exports = router;
