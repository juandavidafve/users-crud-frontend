import { useForm } from "react-hook-form";
import { User } from "../../types/User";
import { useEffect, useState } from "react";
import { deleteUser, getUser } from "../../services/UserService";
import Modal from "../Modal";

interface DeleteUserModalProps {
  userId: number;
  onDelete: () => void;
}

export default function DeleteUserModal({
  userId,
  onDelete,
}: DeleteUserModalProps) {
  const form = useForm<User>();
  const [user, setUser] = useState<User | null>(null);

  async function getUserDetails() {
    setUser(await getUser(userId));
  }

  useEffect(() => {
    if (userId) {
      getUserDetails();
    }
  }, [userId]);

  async function onSubmit() {
    await deleteUser(userId);
    form.reset();
    onDelete();
  }

  return (
    <Modal id="deleteUserModal" title="Delete User">
      <div className="mt-1">
        Are you sure that you want to delete the user {user?.name}?
      </div>
      <div className="modal-footer mt-3`">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
          onClick={onSubmit}
        >
          Yes
        </button>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-dismiss="modal"
        >
          No
        </button>
      </div>
    </Modal>
  );
}
