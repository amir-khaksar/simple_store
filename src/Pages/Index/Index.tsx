import { Container } from "@/Components/Container/Container";
import Header from "@/Components/header/header";
import ProductCard from "@/Components/ProductCard/ProductCard";
import { GProducts } from "./GProducts";

export default function Index() {
   const { data: products, isLoading, error } = GProducts();

   if (isLoading) return <p>Loading...</p>;
   if (error) return <p>Something went wrong</p>;

   return (
      <>
         <Container>
            <Header />

            <h1 className="text-4xl font-bold mt-20">Our products</h1>

            <div
               className={
                  "flex items-center justify-center flex-wrap gap-8 mt-30"
               }
            >
               {products.map((product: any) => (
                  <ProductCard product={product} key={product.id} />
               ))}

            </div>
         </Container>
      </>
   );
}
