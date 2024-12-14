import LayoutAuth from "./authentification/layout";

export default function Home() {
  return (
    <main className="">
      <LayoutAuth>
        <h1 className="text-center text-5xl font-semibold">
          Bienvenue sur notre plateforme
        </h1>
        <p className="mt-4 text-center text-gray-600">
          Veuillez vous connecter ou vous inscrire pour continuer.
        </p>
      </LayoutAuth>
    </main>
  );
}
