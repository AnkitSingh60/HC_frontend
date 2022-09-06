import React from 'react'

const Card = ({ post }) => {
    // console.log('post:', post)
    const handelView = (id) => {
        console.log("hey kiddo");
        console.log('id:', id)
    }
    return (
        <div className='mainContainer'>
        {
            post.map((item)=>{
                return(
                    
                    <div className="card" key={item.id}>
        
                <div className="card-body">
                    <h5 className="card-title">{item.title.slice(0, 30)}</h5>
                    <p className="card-text">{item.body.slice(0, 60)}</p>
                    <button className="btn btn-primary" onClick={() =>handelView((item.id))}>View</button>
                </div>
            </div>
                )
            })
        }

            
        </div>
    )
}

export default Card