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

  if (loading) {
    return (
      <section className='section loading'>
        <h3>loading...</h3>
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <section className='section'>
      <div className='title'>
        <h2>Experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        {/* btn container */}
        {/* job info  */}
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className='job-description'>
                <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                <p>{duties}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
