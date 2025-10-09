import { useNavigate } from 'react-router';
import arrow from '../assets/left-arrow.svg'
import search from '../assets/search.png';
import type { FormEvent } from 'react';

export default function ResultsPage() {
    const navigate = useNavigate();
    
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate("/results");
      }

    return (
        <div className="bg-white min-h-screen relative font-sans">
            <div className="flex items-center px-36 py-24">
                <div className="flex items-center">
                    <button className="inline-flex items-center gap-8 text-[#6E6E6E] bg-white text-[20.25px] font-normal" onClick={() => navigate("/")}>
                        <img src={arrow}/>
                        Return
                    </button>
                </div>
                <div className="flex-1  flex justify-center">
                    <form role="search" onSubmit={handleSubmit} className="w-[60%] -translate-x-20 max-w-3xl">
                         <div className="flex">
                             <input name="name" type="text" placeholder="Enter professor name..." className="flex-1 px-6 bg-white py-3 border rounded-l-xl text-black" />
                             <button type="submit" className="flex items-center justify-center px-4 py-3 bg-[#39302B] rounded-r-xl border border-gray-300 border-l-0">
                                 <img src={search} className="h-5 w-5 object-contain"/>
                             </button>
                         </div>
                    </form>
                </div>
            </div>
            <h1 className="text-[#39302B] text-[24px] font-bold px-[29.75%]">
                Search Results
            </h1>
         </div>
     )
}