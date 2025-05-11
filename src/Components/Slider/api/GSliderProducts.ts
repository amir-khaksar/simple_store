import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const GSliderProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      return data;
    },
  });
};
