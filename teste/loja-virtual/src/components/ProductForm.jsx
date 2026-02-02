import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export default function ProductForm({ addProduct }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      title,
      price,
      description: "Produto adicionado manualmente",
      image: "https://via.placeholder.com/200"
    };

    addProduct(newProduct);
    setTitle("");
    setPrice("");
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h3>Adicionar Produto</h3>

      <div className="flex gap-2">
        <InputText
          placeholder="Nome do produto"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <InputText
          placeholder="Preço"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />

        <Button label="Adicionar" icon="pi pi-plus" />
      </div>
    </form>
  );
}