import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
 
 const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  
  document.title = `${capitalizeFirstLetter(props.category)}-News Hunt`

const updateNews = async () => {
  props.setProgress(10);
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${props.page}&pageSize=${props.pageSize}`;
  setloading(true);

  let data = await fetch(url);
  props.setProgress(30);

  let parsedData = await data.json();
  props.setProgress(10);

  console.log(parsedData);
  setarticles(parsedData.articles);
  settotalResults(parsedData.totalResults);
  setloading(false);
  props.setProgress(100);


}

useEffect(() => {
  updateNews();
  // eslint-disable-next-line
},[]
  )

const fetchMoreData = async () => {
  setpage(page + 1);
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${props.page}&pageSize=${props.pageSize}`;



  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
  setarticles(articles.concat(parsedData.articles));
  settotalResults(parsedData.totalResults);
  setloading(false);


};

return (


  <>
    <h2 className="  text-center" style={{marginTop:'90px',color:'brown'} }>NewsHunt- Top {capitalizeFirstLetter(props.category)} Headlines</h2>
    {loading && <Spinner />}
    <InfiniteScroll
      dataLength={articles.length}
      next={fetchMoreData}
      hasMore={articles.length !== totalResults}

    // loader={ <Spinner/>}

    >
      <div className="container">
        <div className="row">
          {
            articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>

            })
          }

        </div>

      </div>
    </InfiniteScroll>



  </>

)
        }

News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: 'sports'
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
export default News