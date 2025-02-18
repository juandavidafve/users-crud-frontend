import { useForm } from "react-hook-form";
import { createUser } from "../../services/UserService";
import { User } from "../../types/User";
import UserModal from "./UserModal";

interface CreateUserModalProps {
  onCreate: () => void;
}

export default function CreateUserModal({ onCreate }: CreateUserModalProps) {
  const form = useForm<User>();

  async function onSubmit(user: User) {
    await createUser(user);
    form.reset();
    onCreate();
  }

  return (
    <UserModal
      id="createUserModal"
      onSubmit={onSubmit}
      title="Create User"
      form={form}
    />
  );
}
