import ProductCard from "@/Components/ProductCard/ProductCard";
import { GProducts } from "./api/GProducts";

export default function Products() {
   const { data: products, isLoading, error } = GProducts();

   if (isLoading) return <p>Loading...</p>;
   if (error) return <p>Something went wrong</p>;

   return (
      <div className={"flex items-center justify-center flex-wrap gap-8 mt-30"}>
         {products.map((product: any) => (
            <ProductCard product={product} key={product.id} />
         ))}
      </div>
   );
}
