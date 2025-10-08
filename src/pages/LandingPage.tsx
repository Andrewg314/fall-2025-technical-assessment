import image from '../assets/image.png';

export default function LandingPage() {
  return (
    <div>
        <div className="grid grid-rows-[10fr_13fr] min-h-screen">
            <div className="w-full relative">
                <img src={image} className="w-full h-full object-cover object-[40%_60%] absolute"/>
                <div className="w-[37.8%] p-24">
                    <h1 className="text-white text-[54px] font-bold font-inter relative">
                        Find My Professor
                    </h1>
                    <br />
                    <h2 className="text-white text-[22.5px] font-regular font-inter relative">
                        Want to know more about the professors here at UMD? This is the 
                        perfect place to learn a bit about the courses they teach and 
                        their grade distributions.
                    </h2>
                </div>
            </div>

            <div className="bg-white w-full relative">
                
            </div>
        </div>
    </div>
  );
}
