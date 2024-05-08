import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import "./App.css";
import { FormItem } from "./components/FormItem";
import { ProductFormType, productSchema } from "./types";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormType>({
    resolver: zodResolver(productSchema),
  });

  const onSubmit: SubmitHandler<ProductFormType> = (values: ProductFormType) =>
    console.log(values);

  return (
    <main>
      <form
        className="flex flex-col gap-5 w-[300px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormItem label="Nome" error={errors.title}>
          <input type="text" {...register("title")} />
        </FormItem>
        <FormItem label="Valor" error={errors.value}>
          <input
            type="number"
            defaultValue="0"
            {...register("value", { valueAsNumber: true })}
          />
        </FormItem>
        <FormItem label="Marca" error={errors.brand}>
          <select {...register("brand")}>
            <option value="apple">Apple</option>
            <option value="samsung">Samsung</option>
            <option value="xiaomi">Xiaomi</option>
          </select>
        </FormItem>
        <FormItem label="Avaliação" error={errors.rating}>
          <input
            type="range"
            min="1"
            max="5"
            step="0.5"
            {...register("rating", { valueAsNumber: true })}
          />
        </FormItem>
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}

export default App;
