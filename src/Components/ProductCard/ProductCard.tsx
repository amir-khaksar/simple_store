import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
} from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";

export interface ProductProps {
   product: {
      id: number;
      title: string;
      description: string;
      price: number;
      image: string;
   };
}

export default function ProductCard({ product }: ProductProps) {
   return (
      <Card className="w-96 shadow-md rounded-2xl overflow-hidden">
         <CardHeader className="p-0">
            <img
               src={product.image}
               alt={product.title}
               className="w-full h-48 object-cover"
            />
         </CardHeader>
         <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-1 line-clamp-1">{product.title}</h3>
            <p className="text-sm text-muted-foreground mb-2 line-clamp-3">
               {product.description}
            </p>
            <p className="text-base font-medium text-primary">
               ${product.price}
            </p>
         </CardContent>
         <CardFooter className="p-4 pt-0">
            <Button className="w-full py-6">Add to Cart</Button>
         </CardFooter>
      </Card>
   );
}
