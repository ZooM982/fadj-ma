import LayoutAuth from "./authentification/layout";

export default function Home() {
  return (
    <main className="">
      <LayoutAuth>
        <h1 className="hidden">Bienvenue sur la page</h1>
      </LayoutAuth>
    </main>
  );
}
