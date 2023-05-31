import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Search = () => {
  return (
    <section id="viajar" className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-4 px-4 py-16 ">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h1>Férias luxuosas para duas pessoas</h1>
          <p className="py-4 text-[25px] md:text-[22px] ">
            Venha experimentar o auge do luxo caribenho com tudo incluso, férias
            para casais nos resorts SeaSide. Nossos luxuosos resorts de praia,
            situados ao longo das mais belas paisagens tropicais e praias
            requintadas em Santa Lúcia, Jamaica, Antígua, Bahamas, Granada,
            Barbados e Curaçao, oferece refeições gourmet ilimitadas, bares
            exclusivos que servem licores e vinhos premium e todos os esportes
            terrestres e aquáticos, incluindo Gym Pass de cortesia em nossos
            resorts, certificados de mergulho e golfe inclusos na maioria dos
            resorts. Se você está planejando seu casamento dos sonhos, SeaSide é
            líder em pacotes de casamento e lua de mel no Caribe.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button className="rounded-md my-2 bg-gradient-to-r from-cyan-400 via-cyan-600 to-cyan-700 p-4  hover:scale-110 duration-300 mr-2">
              <RiCustomerService2Fill size={50} className="fill-white" />
            </button>
            <div>
              <h3>Lider em serviços</h3>
              <p className="text-[22px] md:text-[18px] mt-1">
                Empresa com mais de 20 anos de experiência no ramo de viagens
                luxousas.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button className="rounded-md my-2 bg-gradient-to-r from-cyan-400 via-cyan-600 to-cyan-700 p-4  hover:scale-110 duration-300 mr-2">
              <MdOutlineTravelExplore size={50} className="fill-white" />
            </button>
            <div>
              <h3>Buscas automaticas</h3>
              <p className="text-[22px] md:text-[18px] mt-1">
                A SeaSide irá automaticamente os melhores destinos do mundo para
                as suas tão sonhadas férias.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="border text-center">
          <p className="pt-2">Ganhe um desconto adicional de 10%</p>
          <p className="py-4">12 HORAS RESTANTES!</p>
          <p className="bg-gray-800 text-gray-200 py-2 uppercase">
            Reserve agora e Economize dinheiro
          </p>
        </div>
        <form className="w-full">
          <div className="flex flex-col my-2">
            <label className="font-semibold">Destinos</label>
            <select className="border rounded-md p-2">
              <option>Grand Antigua</option>
              <option>Keywest</option>
              <option>Maldivas</option>
              <option>Bora Bora</option>
            </select>
          </div>
          <div className="flex flex-col my-2">
            <label className="font-semibold">Check-In</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col my-2">
            <label className="font-semibold">Check-out</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <button className="bg-gradient-to-r from-cyan-400 via-cyan-600 to-cyan-700 text-white rounded-md p-3 hover:scale-110 duration-300 my-4 w-full">
            Avaliações & Disponíveis
          </button>
        </form>
      </div>
    </section>
  );
};

export default Search;
