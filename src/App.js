import "./App.css";
import UsersSmall from "./usersSmall";
import state from "./state";

function App() {
  return (
    <div className="App">
      <div className="contentBody">
        {state.users.map((value) => {
          return <UsersSmall user={value} />;
        })}
      </div>
    </div>
  );
}

export default App;
