import { useState } from "react";
import "./App.css";
import { Modal } from "./components/Modal";
import { set } from "react-hook-form";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <main>
      <Modal open={open} setOpen={setOpen} />
      <button onClick={() => setOpen(true)}>Open modal</button>
    </main>
  );
}

export default App;
