import { FaSearch } from "react-icons/fa";

import beachVideo from "../assets/beachVid.mp4";

const Hero = () => {
  return (
    <section className="w-full h-screen relative">
      <video
        src={beachVideo}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-screen top-0 left-0 bg-gray-900/30" />
      <div className="flex justify-center items-center flex-col p-4 absolute top-0 w-full h-full text-white space-y-1">
        <h1>Viagens de Primeira Classe</h1>
        <h2>As melhores localizações ao redor do mundo!</h2>
        <form className="flex items-center justify-between max-w-[700px] mx-auto w-full border p-2 rounded-md bg-gray-100/90 text-black font-project mt-2">
          <div>
            <input
              type="text"
              placeholder="Procure seu destino dos sonhos"
              className="p-2 rounded-md bg-transparent w-[300px] sm:w-[400px] text-2xl md:text-xl  focus:outline-none"
            />
          </div>
          <div>
            <button className="bg-gradient-to-r from-cyan-400 via-cyan-600 to-cyan-700 rounded-md p-4 hover:scale-110 duration-300">
              <FaSearch className="fill-white" size={20} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Hero;
