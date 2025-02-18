import Modal from "../Modal";
import { User } from "../../types/User";
import { UseFormReturn } from "react-hook-form";

interface UserModalProps {
  title: string;
  id: string;
  onSubmit: (user: User) => void;
  form: UseFormReturn<User>;
}

export default function UserModal({
  title,
  id,
  onSubmit,
  form,
}: UserModalProps) {
  const { register, handleSubmit } = form;

  return (
    <Modal title={title} id={id}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          {...register("name")}
        />

        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="text"
          className="form-control"
          id="email"
          {...register("email")}
        />

        <label htmlFor="phone" className="form-label">
          Phone
        </label>
        <input
          type="text"
          className="form-control"
          id="phone"
          {...register("phone")}
        />

        <div className="modal-footer mt-3">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            data-bs-dismiss="modal"
          >
            Save
          </button>
        </div>
      </form>
    </Modal>
  );
}
