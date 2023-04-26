import Hello from "../../Components/Hello/Hello";

function Home({ temporal }) {
  return (
    <>
      <Hello></Hello>
      <h2>Ruta de : "{temporal}"</h2>
    </>
  );
}

export default Home;
