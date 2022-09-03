import './App.css';

function App() {

  const users = [
    { name: "Randy Cox", id: 1 },
    { name: "Cody Thaller", id: 2 },
    { name: "Michelle Hoelzer", id: 3 }
  ];
  const userInfo = users.map((user) =>
   <li> {user.name} </li>)

  return (
    <div>
      <h1>User names</h1>
      <ul>
        {userInfo}
      </ul>
    </div>
  );
}

export default App;
