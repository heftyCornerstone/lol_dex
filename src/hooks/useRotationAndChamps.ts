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
    isError: isRotationErr,
  } = rotation;
  const {
    data: fetchedAllChamps,
    isPending: isAllChampsPending,
    isError: isAllChampsErr,
  } = allChamps;

  const isDataPending = !!(isRotationPending || isAllChampsPending);
  const isDataError = !!(isRotationErr || isAllChampsErr);

  return { fetchedRotation, fetchedAllChamps, isDataPending, isDataError };
};

export default useRotationAndChamps;
