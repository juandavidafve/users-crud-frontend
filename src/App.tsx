import { useState } from "react";
import CreateUserModal from "./components/Modals/CreateUserModal";
import UpdateUserModal from "./components/Modals/UpdateUserModal";
import UserTable from "./components/UserTable";
import useUsers from "./hooks/useUsers";
import DeleteUserModal from "./components/Modals/DeleteUserModal";

function App() {
  const { users, loading, refresh } = useUsers();
  const [selectedUserId, setSelectedUserId] = useState(0);

  return (
    <div className="container">
      <h1 className="text-center fw-bold mt-5">Users CRUD</h1>

      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#createUserModal"
      >
        Create User
      </button>

      <CreateUserModal onCreate={refresh} />
      <UpdateUserModal onUpdate={refresh} userId={selectedUserId} />
      <DeleteUserModal onDelete={refresh} userId={selectedUserId} />

      <UserTable
        users={users}
        loading={loading}
        setSelectedUserId={setSelectedUserId}
      />
    </div>
  );
}

export default App;
