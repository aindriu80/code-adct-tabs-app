import { useEffect, useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
const url = 'https://course-api.com/react-tabs-project';

import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  // Check api if jobs returned, use React Dev Tools
  console.log(jobs);

  if (loading) {
    return (
      <section className='section loading'>
        <h3>loading...</h3>
      </section>
    );
  }
  return (
    <div className='App'>
      <h2>jobs</h2>
    </div>
  );
}

export default App;
