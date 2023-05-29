import boraBora from "../assets/borabora.jpg";
import boraBora2 from "../assets/borabora2.jpg";
import keywest from "../assets/keywest.jpg";
import maldives from "../assets/maldives.jpg";
import maldives2 from "../assets/maldives2.jpg";

const Destination = () => {
  return (
    <section className="max-w=[240px] mx-auto py-16 px-4 text-center">
      <h1>Resorts com tudo incluso!</h1>
      <p className="py-4 text-xl font-semibold">Nas melhores praias do caribe</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-3 md:gap-4">
        <img
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
          src={boraBora}
          alt="Imagem de bora bora"
        />
        <img
          className="w-full h-full object-cover"
          src={boraBora2}
          alt="Outra imagem de bora bora"
        />
        <img
          className="w-full h-full object-cover"
          src={keywest}
          alt="imagem de Keywest"
        />
        <img
          className="w-full h-full object-cover"
          src={maldives}
          alt="imagem de maldivas"
        />
        <img
          className="w-full h-full object-cover"
          src={maldives2}
          alt="outra imagem de maldivas"
        />
      </div>
    </section>
  );
};

export default Destination;
