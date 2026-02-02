import { Card } from "primereact/card";
import { Button } from "primereact/button";

export default function ProductCard({ product }) {
  const footer = (
    <Button label="Comprar"/>
  );

  return (
    <Card
      title={product.title}
      subTitle={`R$ ${product.price}`}
      footer={footer}
      className="m-2"
      style={{
        height:"100%"
      }}
    >
      <img src={product.image} alt={product.title}
        style={{ width: "100%", height: "200px", objectFit: "contain" }}
      />
      <p className="mt-3">{product.description}</p>
    </Card>
  );
}