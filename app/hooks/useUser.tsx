import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/api";

export default function useUser() {
  const { isLoading, data, refetch, error } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    refetchOnWindowFocus: false
  });
  return { isLoading, refetch, user: data?.user, error };
}
