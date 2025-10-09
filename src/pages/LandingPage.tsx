import image from '../assets/image.png';
import search from '../assets/search.png';
import { useNavigate } from 'react-router';
import type { FormEvent } from 'react';
import arrow from '../assets/right-arrow.svg'

export default function LandingPage() {
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/results");
  }
  return (
    <div className="font-sans">
        <div className="grid grid-rows-[10fr_13fr] min-h-screen">
            <div className="w-full relative overflow-hidden">
                <img src={image} className="w-full h-full object-cover object-[40%_60%] absolute"/>
                <div className="w-[37.8%] p-24">
                    <h1 className="text-white text-[54px] font-bold relative">
                        Find My Professor
                    </h1>
                    <br />
                    <h2 className="text-white text-[22.5px] font-regular relative">
                        Want to know more about the professors here at UMD? This is the 
                        perfect place to learn a bit about the courses they teach and 
                        their grade distributions.
                    </h2>
                </div>
            </div>

            <div className="bg-white w-full relative">
                <h1 className="absolute left-1/2 top-[12%] -translate-x-1/2 text-black font-bold text-[36px]">
                  Enter a Professor to start
                </h1>

                <form role="search" onSubmit={handleSubmit} className="absolute left-1/2 top-[22%] -translate-x-1/2 w-[70%] max-w-3xl">
                  <div className="flex">
                    <input name="name" type="text" placeholder="Enter professor name..." className="flex-1 px-6 bg-white py-3 border rounded-l-xl text-black" />
                    <button type="submit" className="flex items-center justify-center px-4 py-3 bg-[#39302B] rounded-r-xl border border-gray-300 border-l-0">
                      <img src={search} className="h-5 w-5 object-contain" alt="search"/>
                    </button>
                  </div>
                </form>

                <div className="absolute left-1/2 top-[48%] -translate-x-1/2 w-[70%] max-w-3xl">
                  <h3 className="text-[22.5px] font-bold text-[#39302B] mb-8">Recently Searched</h3>
                  <div className="flex flex-wrap justify-between text-black text-[20.25px] w-3xl h-[66px]">
                    <button type="button" className="inline-flex items-center gap-3 px-5 py-2 border rounded-md bg-[#FBFBFB] font-normal border-[#C5C5C5] whitespace-nowrap" onClick={() => navigate("/results")}>
                      John Jane Doe
                      <img src = {arrow}/>
                    </button>

                    <button type="button" className="inline-flex items-center gap-3 px-5 py-2 border rounded-md bg-[#FBFBFB] font-normal border-[#C5C5C5] whitespace-nowrap" onClick={() => navigate("/results")}>
                      Jane Middle Doe
                      <img src = {arrow}/>
                    </button>

                    <button type="button" className="inline-flex items-center gap-3 px-5 py-2 border rounded-md bg-[#FBFBFB] font-normal border-[#C5C5C5] whitespace-nowrap" onClick={() => navigate("/results")}>
                      John John Jane
                      <img src = {arrow}/>
                    </button>
                  </div>
                </div>

                <p className="absolute left-1/2 bottom-6 -translate-x-1/2 text-xs text-gray-400 text-[18px]">
                  All data is gathered from the <a className="text-[#B95F5F] underline" href="https://planetterp.com/">PlanetTerp</a> API
                </p>
             </div>
         </div>
     </div>
   );
 }
