import Generaldata from "./data/generaldata";
import Specialdata from "./data/spacialdata";

const Dashboard = () => {
  return (
    <section className="px-10 pb-10">
      <div className="dashboard flex justify-between my-4 px-5">
        <div className="text-dash">
          <h1 className="text-[24px] font-semibold">Tableau de board</h1>
          <p className="font-light text-[14px]">
            Un aperçu rapide des données de votre pharmacie
          </p>
        </div>
        <div className="ajout-produit py-3 w-48 h-12 bg-[#fff] border border-black">
          <button className=" w-4/5 mx-5 text-sm">
            Télecharger le rapport
          </button>
        </div>
      </div>
      <div>
        <Generaldata />
      </div>
      <div className="mb-6">
        <Specialdata />
      </div>
    </section>
  );
};

export default Dashboard;
