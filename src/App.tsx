import { useForm } from "react-hook-form";
import "./App.css";
import { FormItem } from "./components/FormItem";

type ProductForm = {
  name: string;
  value: number;
};

function App() {
  const { register, handleSubmit } = useForm<ProductForm>();

  const onSubmit = (values: ProductForm) => console.log(values);

  return (
    <main>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <FormItem label="Nome">
          <input type="text" {...register("name")} />
        </FormItem>
        <FormItem label="Valor">
          <input type="number" {...register("value")} />
        </FormItem>
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}

export default App;
