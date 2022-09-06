import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';


const Card = () => {
    const [post, setPost] = useState([])
    const params = useParams()
    const navigate = useNavigate()

    const fetchData = async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            setPost(data);
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
        <div className='mainContainer'>
            {
                post.map((item) => {
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
    )

}

export default Card