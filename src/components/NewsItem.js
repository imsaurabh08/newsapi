import React from 'react'

const NewsItem =(props)=> {
  
    let { title, description, imgUrl, newsUrl, author, date, source } = props;
    return (
      <div>

        <div className="card my-3">
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',position:'absolute',right:'0'}}>
          <span className=" badge rounded-pill bg-dark" >
            {source}

          </span>
        </div>
        <img src={imgUrl ? imgUrl : "https://images.hindustantimes.com/img/2022/05/15/1600x900/Finland-NATO-5_1652617361736_1652617381250.jpg"} className="card-img-top" alt="" />
        <div className="card-body">

          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toUTCString()}</small></p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>

      </div >
    )
  }


export default NewsItem