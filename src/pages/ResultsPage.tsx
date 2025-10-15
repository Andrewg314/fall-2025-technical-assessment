import { useNavigate, useLocation } from 'react-router-dom';
import arrow from '../assets/left-arrow.svg';
import search from '../assets/search.png';
import { useState, useEffect } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import axios from 'axios';

export default function ResultsPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state as {
    profData?: { name: string; avg_rating: number; courses: string[] };
    avgGrades?: { [key: string]: number | null };
  } | undefined;

  const [name, setName] = useState(state?.profData?.name || '');
  const [profData, setProfData] = useState(state?.profData);
  const [avgGrades, setAvgGrades] = useState(state?.avgGrades);
  const [error, setError] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchProfData();
  };

  const fetchProfData = async () => {
    try {
      setError('');
      setProfData(undefined);
      setAvgGrades(undefined);

      const profAPI = await axios.get('https://planetterp.com/api/v1/professor', {
        params: { name },
      });
      const prof = profAPI.data;

      const newProfData = {
        name: prof.name,
        avg_rating: prof.average_rating,
        courses: prof.courses,
      };

      setProfData(newProfData);

      const grades: { [key: string]: number | null } = {};
      const promises = prof.courses.map(async (course: string) => {
        const courseAPI = await axios.get('https://planetterp.com/api/v1/course', {
          params: { name: course },
        });
        grades[course] = courseAPI.data.average_gpa || null;
      });

      await Promise.all(promises);
      setAvgGrades(grades);
    } catch (err) {
      console.error(err);
      setError('Error fetching professor data.');
    }
  };

  useEffect(() => {
    if (state && state.profData) {
      setProfData(state.profData);
      setAvgGrades(state.avgGrades);
    }
  }, [state]);

  return (
    <div className="bg-white min-h-screen relative font-sans">
      <div className="flex items-center px-36 py-24">
        <div className="flex items-center">
          <button
            className="inline-flex items-center gap-8 text-[#6E6E6E] bg-white text-[20.25px] font-normal"
            onClick={() => navigate('/')}
          >
            <img src={arrow} />
            Return
          </button>
        </div>

        <div className="flex-1 flex justify-center">
          <form role="search" onSubmit={handleSubmit} className="w-[60%] -translate-x-20 max-w-3xl">
            <div className="flex">
              <input
                name="name"
                type="text"
                placeholder="Enter professor name..."
                className="flex-1 px-6 bg-white py-3 border rounded-l-xl text-black"
                value={name}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="flex items-center justify-center px-4 py-3 bg-[#39302B] rounded-r-xl border border-gray-300 border-l-0"
              >
                <img src={search} className="h-5 w-5 object-contain" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <h1 className="text-[#39302B] text-[24px] font-bold px-[29.75%]">Search Results</h1>

      {error && <p className="px-[29.75%] mt-6 text-gray-500">{error}</p>}

      {profData && (
        <div className="px-[29.75%] mt-6 text-black">
          <p className="text-[20px] font-semibold">Professor: {profData.name}</p>
          <p className="text-[18px]">Average Rating: {profData.avg_rating}</p>
          <p className="text-[18px] font-semibold mt-4">Courses Taught:</p>
          <ul className="list-disc ml-6">
            {profData.courses.map((course) => {
              let gpaText = 'N/A';
              if (avgGrades && avgGrades[course]) {
                const gpa = avgGrades[course];
                if (gpa !== null && gpa !== undefined) {
                  gpaText = gpa.toFixed(2);
                }
              }
              return (
                <li key={course}>
                  {course} — Average GPA: {gpaText}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {!profData && !error && (
        <p className="px-[29.75%] mt-6 text-gray-500">No professor data found.</p>
      )}
    </div>
  );
}
