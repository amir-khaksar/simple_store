// hooks/useFooterData.ts
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFooterData = () => {
  return useQuery({
    queryKey: ["footer"],
    queryFn: async () => {
      const { data } = await axios.get("/footer");
      return data;
    },
  });
};
