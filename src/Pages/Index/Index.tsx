import { Container } from "@/Components/Container/Container";
import Header from "@/Components/Header/header";
import Products from "@/Components/Products/Products";
import Footer from "@/Components/Footer/Footer";
import Slider from "@/Components/Slider/Slider";

export default function Index() {
   return (
      <Container>
         <Header />

         <h1 className={"text-4xl font-bold mt-20"}>محصولات ما</h1>

         <Products />

         <Slider />

         <Footer />
      </Container>
   );
}
