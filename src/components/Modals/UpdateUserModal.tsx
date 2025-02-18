import { useForm } from "react-hook-form";
import { User } from "../../types/User";
import UserModal from "./UserModal";
import { useEffect } from "react";
import { getUser, updateUser } from "../../services/UserService";

interface UpdateUserModalProps {
  userId: number;
  onUpdate: () => void;
}

export default function UpdateUserModal({
  userId,
  onUpdate,
}: UpdateUserModalProps) {
  const form = useForm<User>();

  async function fillUserDetails() {
    const user = await getUser(userId);
    form.reset(user);
  }

  useEffect(() => {
    if (userId) {
      fillUserDetails();
    }
  }, [userId]);

  async function onSubmit(user: User) {
    await updateUser(userId, user);
    form.reset();
    onUpdate();
  }

  return (
    <UserModal
      id="updateUserModal"
      onSubmit={onSubmit}
      title="Update User"
      form={form}
    />
  );
}
