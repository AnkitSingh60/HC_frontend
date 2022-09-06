import React from 'react'

const Card = ({ post }) => {
    // console.log('post:', post)
    return (
        <div className='mainContainer'>
        {
            post.map((item)=>{
                return(
                    
                    <div className="card" key={item.id}>
        
                <div className="card-body">
                    <h5 className="card-title">{item.title.slice(0, 30)}</h5>
                    <p className="card-text">{item.body.slice(0, 60)}</p>
                    <a href="#" className="btn btn-primary">View</a>
                </div>
            </div>
                )
            })
        }

            
        </div>
    )
}

export default Card