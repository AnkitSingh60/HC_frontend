import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom';


const ModalView = ({ id }) => {

  console.log('id:', id)
  const [data, setData] = useState("")

  const params = useParams()
  const navigate = useNavigate()

  const getData = async () => {
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    let result = await res.json();
    setData(result)
    console.log('result:', result)
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <div className="CardContainer">
    <a href="/" className="btn btn-primary" >Home</a>
      <div className="card" >
        <div className="card-body">
          <h3 className="card-title">Username -{data.username}</h3>
          <p><strong>Name-</strong> {data.name} </p>
          <p><strong>Phone-</strong> {data.phone} </p>
          <p><strong>Website-</strong> {data.website} </p>
          


        </div>
      </div>

    </div>
  )
}

export default ModalView