import Button from "./Button/Button";
import Card from "./Card";
import ColorPicker from "./ColorPicker";
import Counter from "./Counter";
import List from "./List";
import MyComponent from "./MyComponent";
import OnChangeSample from "./OnChangeSample";
import ProfilePicture from "./ProfilePicture";
import Student from "./Student";
import UserGreeting from "./UserGreeting";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];
  const vegetables = [
    { id: 1, name: "potatoes", calories: 110 },
    { id: 2, name: "celery", calories: 15 },
    { id: 3, name: "carrots", calories: 25 },
    { id: 4, name: "corn", calories: 63 },
    { id: 5, name: "borccoli", calories: 50 },
  ];

  return (
    <>
      <ColorPicker />
      {/* <OnChangeSample /> */}
      {/* <UserGreeting isLoggedIn={true} username="Joshua" /> */}
      {/* {fruits.length > 0 && <List items={fruits} category="Fruits" />} */}
      {/* <ProfilePicture /> */}
      {/* <Counter /> */}
      {/* <MyComponent /> */}
      {/* {vegetables.length > 0 && (
        <List items={vegetables} category="Vegetables" />
      )} */}
      {/* <Student name="Spongebob" age={30} isStudent={true} /> */}
      {/* <Student /> */}
      {/* <Card /> */}
      {/* <Button /> */}
    </>
  );
}

export default App;
