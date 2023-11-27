import React, { useEffect, useState } from 'react'
// import axios from 'axios'


const NewsFeed =  () => {
  const [articles, setArticles] = useState(null)

  //Race condition. Read: https://devtrium.com/posts/async-functions-useeffect
  useEffect(  () => {

    const fetchData = async () => {
        
        /*
          var url = "https://newsapi.org/v2/top-headlines?" +
            "country=us&" +
            "apiKey=" + process.env.REACT_APP_NEWS_API_KEY;
        */
        var url = "http://localhost:8000/news";

        console.log(`url: [${url}]`)

        var req = new Request(url);
        fetch(req)
            .then(function(response) {
              console.count(`---------------------------`);
              response.json().then( e => {
                setArticles( e.articles );
                // console.log( e.articles[0] );
                });
              console.count(`---------------------------`);
                // setArticles(e.articles);
                // data = response.json().data
            })
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