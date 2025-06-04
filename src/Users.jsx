import { use } from "react";

export default function Users({ fetchUsers }) {
  const users = use(fetchUsers);
  const userStyle = {
    border: "2px solid gold",
    padding: "100px",
    borderRadius: "20px",
  };

  return (
    <div style={userStyle}>
      <h3>Users: {users.length}</h3>
    </div>
  );
}
