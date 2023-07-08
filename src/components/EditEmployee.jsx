import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function EditEmployee(props) {
  const [name, setName] = useState(props.name);
  const [position, setPosition] = useState(props.position);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="px-4">
        Edit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={(e, id, newName, newPosition) => {
              e.preventDefault();
              handleClose();
              props.newEmployee(props.id, name, position);
            }}
            id="profileUpdate"
            className="flex flex-col items-center gap-y-2 gap-x-2"
          >
            <div className="flex items-center">
              <label htmlFor="name" className="mr-4 text-right">
                Fullname
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                autoComplete="off"
                type="text"
                name="name"
                className="border rounded-lg py-1 px-2"
              />
            </div>

            <div className="flex items-center">
              <label htmlFor="position" className="mr-4">
                Position
              </label>
              <input
                onChange={(e) => setPosition(e.target.value)}
                value={position}
                autoComplete="off"
                type="text"
                name="position"
                className="border rounded-lg py-1 px-2"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={handleClose}
            className="bg-gray-300 py-2 px-3 rounded-lg"
          >
            Close
          </button>
          <button
            form="profileUpdate"
            className="bg-blue-600 py-2 px-3 rounded-lg text-white"
          >
            Update
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEmployee;
