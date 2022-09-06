import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Card = () => {
    const [post, setPost] = useState([])
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()

    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            setPost(data);
            setLoading(false);
        } catch (error) {
            console.log('error:', error)
        }
  
    }



    const showModal = (id) => {
        navigate(`/modalDetail/${id}`)
    };

    useEffect(() => {
        fetchData()
    }, [])

    return (
        
        <>
        <div className="searchBar">
                <input class="form-control" type="text" placeholder='Search' onChange={(event)=>setSearch(event.target.value)} />
            </div>

        <div className='mainContainer'>
            {
                post.filter((item)=>{
                    if(search==""){
                        return item;
                    } else if (item.title.includes(search)) {
                        return item;
                    }
                }).map((item) => {
                    return (
                        <div className="card" key={item.id}>

                            <div className="card-body">
                                <h5 className="card-title">{item.title.slice(0, 30)}</h5>
                                <p className="card-text">{item.body.slice(0, 60)}</p>
                                <button className='btn btn-primary' onClick={() => showModal(item.id)}>
                                    View
                                </button>
                            </div>
                        </div>
                    )

                })
            }
        </div>
        </>
    )
}

export default Card