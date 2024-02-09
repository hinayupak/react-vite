import Button from "./Button/Button";
import Card from "./Card";
import Student from "./Student";

function App() {
  const studentsList = [
    {
      name: "arun",
      gender: "Male",
      physics: 88,
      maths: 87,
      english: 78,
    },
    {
      name: "rajesh",
      gender: "Male",
      physics: 96,
      maths: 100,
      english: 95,
    },
    {
      name: "moorthy",
      gender: "Male",
      physics: 89,
      maths: 90,
      english: 70,
    },
  ];
  return (
    <>
      <Student name="Spongebob" age={30} isStudent={true} />
      <Student />
      <Card sList={studentsList} />
      <Button />
    </>
  );
}

export default App;
