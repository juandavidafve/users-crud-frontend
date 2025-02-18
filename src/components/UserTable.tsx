import { User } from "../types/User";

interface UserTableProps {
  users: User[];
  loading?: boolean;
  setSelectedUserId: (id: number) => void;
}

export default function UserTable({
  users,
  loading = false,
  setSelectedUserId,
}: UserTableProps) {
  return (
    <table className="table table-striped mt-2 mb-5">
      <thead className="table-dark">
        <tr>
          <th scope="col" className="text-center">
            Id
          </th>
          <th scope="col" className="text-center">
            Name
          </th>
          <th scope="col" className="text-center">
            Email
          </th>
          <th scope="col" className="text-center">
            Phone
          </th>
          <th scope="col" className="text-center">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {loading && (
          <tr>
            <td colSpan={5}>
              <div className="d-flex align-items-center justify-content-center p-4">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </td>
          </tr>
        )}
        {!loading &&
          users.map((user, index) => {
            return (
              <tr key={index}>
                <th scope="row" className="text-center">
                  {user.id}
                </th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <div className="container d-flex align-items-center justify-content-center">
                    <button
                      type="button"
                      className="btn btn-primary m-1"
                      data-bs-toggle="modal"
                      data-bs-target="#updateUserModal"
                      onClick={() => setSelectedUserId(user.id)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger m-1"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteUserModal"
                      onClick={() => setSelectedUserId(user.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
