import Button from "./Button/Button";
import Card from "./Card";
import List from "./List";
import Student from "./Student";
import UserGreeting from "./UserGreeting";

function App() {
  const fruits = [
    { name: "apple", calories: 95 },
    { name: "orange", calories: 45 },
    { name: "banana", calories: 105 },
    { name: "coconut", calories: 159 },
    { name: "pineapple", calories: 37 },
  ];
  const vegetables = [
    { name: "potatoes", calories: 110 },
    { name: "celery", calories: 15 },
    { name: "carrots", calories: 25 },
    { name: "corn", calories: 63 },
    { name: "borccoli", calories: 50 },
  ];

  return (
    <>
      <UserGreeting isLoggedIn={true} username="Joshua" />
      <List items={fruits} category="Fruits" />
      <List items={vegetables} category="Vegetables" />
      <Student name="Spongebob" age={30} isStudent={true} />
      <Student />
      <Card />
      <Button />
    </>
  );
}

export default App;
