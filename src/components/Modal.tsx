interface ModalProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function Modal({ id, title, children }: ModalProps) {
  return (
    <div className="modal fade" id={id} tabIndex={-1} aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5 fw-bold">{title}</h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
}
