import React, { useEffect, useState } from 'react'
// import axios from 'axios'


const NewsFeed =  () => {
  const [articles, setArticles] = useState(null)

  //Race condition. Read: https://devtrium.com/posts/async-functions-useeffect
  useEffect(  () => {

    const fetchData = async () => {

      // const options = {
      //     method: 'GET',
      //     url: 'https://crypto-news-live1.p.rapidapi.com/news',
      //     headers: {
      //       'X-RapidAPI-Key': 'e1970e8671mshf80db53f3903a8fp109e08jsna0ed37a6107d',
      //       'X-RapidAPI-Host': 'crypto-news-live1.p.rapidapi.com'
      //     }
      //   }

        // const options = {
        //   method: 'GET',
        //   // url: 'https://cryptocurrency-news2.p.rapidapi.com/v1/bsc',
        //   // url: 'https://crypto-news-live1.p.rapidapi.com/news',
        //   // url: 'https://newest-crypto-information-live.p.rapidapi.com/crypto/bitcoin/coindesk',

        //   url: 'https://crypto-news-live11.p.rapidapi.com/all',
        //   params: {
        //     page: '1',
        //     per_page: '5'
        //   },

        //   headers: {
        //     'X-RapidAPI-Key': 'e1970e8671mshf80db53f3903a8fp109e08jsna0ed37a6107d',
        //     'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
        //   }
        // };
        // const axios = require('axios');

        /*
        //Rapid API calls exhauseted 
        const options = {
          method: 'GET',
          url: 'https://crypto-news-live11.p.rapidapi.com/all',
          params: {
            page: '1',
            per_page: '5'
          },
          headers: {
            'X-RapidAPI-Key': 'e1970e8671mshf80db53f3903a8fp109e08jsna0ed37a6107d',
            'X-RapidAPI-Host': 'crypto-news-live11.p.rapidapi.com'
          }
        };

        try {
          const response = await axios.request(options);
          console.log("---------------------------------------")
          // console.log(response.data.data)
          setArticles(response.data.data);
          console.log("---------------------------------------")
        } catch (error) {
          console.error(error);
        }

        */
        
       // var url = 'https://newsapi.org/v2/top-headlines?' +
       //   'country=us&' +
       //   'apiKey=18f7db55943a4265883f97bfbaf03c4a';
       // let API_KEY = "18f7db55943a4265883f97bfbaf03c4a";
       
      //  let data;
        var url = "https://newsapi.org/v2/top-headlines?" +
          "country=us&" +
          "apiKey=" + process.env.REACT_APP_NEWS_API_KEY;

          console.log(`url: ${url}`)

        var req = new Request(url);
        fetch(req)
            .then(function(response) {
              // console.count(`---------------------------`);
              console.count(response.json().then( e => setArticles(e.articles) ));
              // console.count(`---------------------------`);
                // setArticles(e.articles);
                // data = response.json().data
            })
            
            // console.log(`---------------------------`);
            // console.log(`data: ${articles}`);
            // console.log(`---------------------------`);
        
      } 

    fetchData();

    },[])

    
    // first7Articles?.map( (article, _index) => ( console.log( `[${_index}]${<p>{article}</p>}` )) ) ;
    const first7Articles = articles?.slice(0,7);
    
    // first7Articles?.map( (article, _index) => ( console.log(article.url) ));
    // first7Articles?.map( (article, _index) => ( console.log(article) ));
    // console.log(`Articles: ${first7Articles}`);
    // console.log(`Articles: ${first7Articles}`);
    // console.log( "yahoo3!" );


    // first7Articles?.map( (article, _index) => ( console.log( `[${_index}]${{article}}` )) ) ;
    
  return (
    <div className="news-feed">
        <h2>News Feed</h2>
        {
          first7Articles?.map( 
            (article, _index) => 
              <div key={_index}>
                <a href={article.url}><p>{article.title}</p></a> 
              </div>
          )
        }
    </div>
  )
}

export default NewsFeed