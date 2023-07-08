import { useState } from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AddEmployee = (props) => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [img, setImg] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        onClick={handleShow}
        className="block mx-auto bg-blue-600 text-white py-2 px-4 my-8 rounded-lg"
      >
        {" "}
        + Add Employee
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              //Clear values after submiting
              setName("");
              setPosition("");
              setImg("");
              props.newEmployee(name, position, img);
            }}
            id="profileUpdate"
            className="flex flex-col items-center gap-y-2 gap-x-2"
          >
            <div className="flex items-center">
              <label htmlFor="name" className="mr-4 text-right w-1/3">
                Fullname
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                autoComplete="off"
                type="text"
                name="name"
                placeholder="e.g. John Doe"
                className="border rounded-lg py-1 px-2 w-2/3"
              />
            </div>

            <div className="flex items-center">
              <label htmlFor="position" className="mr-4 text-right w-1/3">
                Position
              </label>
              <input
                onChange={(e) => setPosition(e.target.value)}
                value={position}
                autoComplete="off"
                type="text"
                name="position"
                placeholder="e.g Accountant"
                className="border rounded-lg py-1 px-2 w-2/3"
              />
            </div>

            <div className="flex items-center">
              <label htmlFor="img" className="mr-4 text-right w-1/3">
                Image URL
              </label>
              <input
                onChange={(e) => setImg(e.target.value)}
                value={img}
                autoComplete="off"
                type="text"
                name="img"
                placeholder="https://wwww.pexels.com/123"
                className="border rounded-lg py-1 px-2 w-2/3"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={handleClose}
            className="bg-gray-300 py-2 px-3 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleClose}
            form="profileUpdate"
            className="bg-blue-600 py-2 px-3 rounded-lg text-white"
          >
            Add
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddEmployee;
