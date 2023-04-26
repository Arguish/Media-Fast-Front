import Hello from "../../Components/Hello/Hello";
import GoTo from "../../Components/GoTo/GoTo";

function Home({ temporal, array }) {
  return (
    <>
      <Hello></Hello>
      <h2>Ruta de : "{temporal}"</h2>
      <hr />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {array.map((a) => {
          return <GoTo text={a} path={a}></GoTo>;
        })}
      </div>
    </>
  );
}

export default Home;
