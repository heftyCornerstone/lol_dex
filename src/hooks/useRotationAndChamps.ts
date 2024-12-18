import { fetchChampions } from "@/utils/serverApi";
import { useQueries } from "@tanstack/react-query";

const useRotationAndChamps = () => {
  const [rotation, allChamps] = useQueries({
    queries: [
      {
        queryKey: ["rotation"],
        queryFn: () => fetch("/api/rotation"),
      },
      {
        queryKey: ["allChamps"],
        queryFn: () => fetchChampions(),
      },
    ],
  });

  const {
    data: fetchedRotation,
    isPending: isRotationPending,
  } = rotation;
  const {
    data: fetchedAllChamps,
    isPending: isAllChampsPending,
  } = allChamps;

  const isDataPending = !!(isRotationPending || isAllChampsPending);

  return { fetchedRotation, fetchedAllChamps, isDataPending };
};

export default useRotationAndChamps;
