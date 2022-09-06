import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [post, setPost] = useState([])

  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      // console.log('data:', data)
      setPost(data);
    } catch (error) {
      console.log('error:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <Card post={post} />
    </div>
  );
}

export default App;
