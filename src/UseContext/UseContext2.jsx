import UseContext3 from "./UseContext3";

function UseContext2() {
  return (
    <>
      <div className="use-context">
        <div className="box">
          <h1>Component B</h1>
          <UseContext3 />
        </div>
      </div>
    </>
  );
}

export default UseContext2;
