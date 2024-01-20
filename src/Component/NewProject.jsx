import Input from "./Input.jsx";
import { useRef } from "react";
import Modal from "./Modal.jsx";

export default function NewProject({ onAdd }) {
  const modal = useRef();
  const title = useRef();
  const descrption = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = descrption.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      descrption: enteredDescription,
      dueDate: enteredDueDate,
    });
  }
  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-xl font-bold text-stone-900 my-4">Invalid Input</h2>
        <p className="text-stone-800 mb-4">
          Oops...looks like you forget to enter a value
        </p>
        <p className="text-stone-800 mb-4">
          Please make sure you provide a valid value to every input field{" "}
        </p>
      </Modal>

      <div className="w-[35rem] mt-16 ">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>

        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={descrption} label="Discription" textarea />
          <Input type="Date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
