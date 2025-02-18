import { useEffect, useState } from "react";
import { listUsers } from "../services/UserService";
import { User } from "../types/User";

export default function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchUsers() {
    setLoading(true);
    try {
      const usersData = await listUsers();
      setUsers(usersData);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, loading, refresh: fetchUsers };
}
