import { useState } from "react";
import "./App.css";
import { ProductForm } from "./components/Form";
import { Modal } from "./components/Modal";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <main className="flex w-full h-full justify-center items-center">
      <Modal title="Criar produto" open={open} setOpen={setOpen}>
        <ProductForm onSubmit={(values) => console.log(values)} />
      </Modal>
      <button onClick={() => setOpen(true)}>Open modal</button>
    </main>
  );
}

export default App;
