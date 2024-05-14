import { IconX } from "@tabler/icons-react";
import { Form } from "./Form";

export type ModalProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export function Modal({ open, setOpen }: ModalProps) {
  return (
    <div
      id="modal"
      className={
        "absolute top-0 w-screen h-screen z-10 " + (open ? "" : "hidden")
      }
    >
      <div className="relative flex justify-center items-center h-full w-full">
        <div
          id="backdrop"
          className="absolute top-0 left-0 w-full h-full bg-slate-500 opacity-20 z-0"
        ></div>
        <div className="p-8 bg-teal-900 rounded-lg z-20">
          <div className="relative">
            <IconX
              className="absolute top-0 right-0 cursor-pointer"
              onClick={() => setOpen(false)}
            />
            <h2 className="text-2xl font-bold mb-4">Título</h2>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
}
