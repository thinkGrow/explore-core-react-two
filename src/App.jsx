import { Suspense } from "react";
import "./App.css";
import Counter from "./Counter";
import Cricket from "./Cricket";
import Users from "./Users";
import Friends from "./Friends";

// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

function App() {
  const friendsPromise = fetchFriends();

  return (
    <>
      {/* <Suspense fallback={<h3>Loading..</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      <Suspense fallback={<h3>Friends are coming for treat</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

      <Suspense fallback={<h3>Friends are coming for treat: </h3>}></Suspense>
      {/* <h3>React Count</h3> */}
    </>
  );
}

export default App;
