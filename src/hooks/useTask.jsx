import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTask = () => {
  const axiosPublic = useAxiosPublic();

  const { data: task = [], refetch } = useQuery({
    queryKey: ["task"],
    queryFn: async () => {
      const res = await axiosPublic.get("/task");
      return res.data;
    },
  });

  return [task, refetch];
};

export default useTask;
