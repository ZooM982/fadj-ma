import Logo from "../components/Dashboard/navigations/logo";

const Banners = () => {
  return (
    <section className="bg-[#1d242e] mx-auto">
      <div className="text-white font-semibold text-[14px] text-center">
        <h3 className="pt-3">Bienvenue chez votre pharmacie</h3>
      </div>
      <div className="w-[90%] md:w-1/6 mx-auto text-center">
        <Logo />
      </div>
    </section>
  );
};

export default Banners;
