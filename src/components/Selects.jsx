import { selectsImages } from "../constants";

const Selects = () => {
  return (
    <section className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {selectsImages.map(({ href, id, name }) => (
        <div key={id} className="relative h-full">
          <img src={href} alt="imagens das praias" className="w-full h-full object-cover" />
          <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
            <p className="left-4 bottom-4 text-xl text-white absolute font-bold">
              {name}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Selects;
