import React from 'react'

const NewsItem = ({title, description, imageUrl, newsUrl, author, date, source})=> {
        return (
            <div className='my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }>
                        <span className='badge rounded-pill bg-danger'>{source}</span>
                    </div>
                    <img src={!imageUrl?"https://image.cnbcfm.com/api/v1/image/108197083-1757530631998-gettyimages-1222040206-dscf5863-----gi--30apr20.jpeg?v=1757530690&w=1920&h=1080":imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title} </h5>
                            <p className="card-text">{description}</p>
                            <p className='card-text'><small className='text-danger'>By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                            <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-sm btn-primary">See More</a>
                        </div>
                </div>
            </div>
        )
    }

export default NewsItem
