import ChampCard from "@/components/ChampCard";
import { Champion, Champions } from "@/types/Champion";
import { fetchChampions } from "@/utils/serverApi";

export const revalidate = 86400;

const AllChampions = async () => {
  try {
    const champions: Champions = await fetchChampions();
    const championsArr = Object.entries(champions);

    return (
      <div className="w-[90vw] max-w-screen-2xl mb-20 flex flex-col items-center gap-10">
        <div className="w-7/12 pb-10 flex flex-col justify-center items-center gap-10 border-b-2 border-amber-400">
          <h1 className="font-bold text-5xl">모든 챔피언</h1>
          <div className="text-center break-keep">
            <p>모든 챔피언의 목록입니다.</p>
            <p>각 항목을 클릭하면 상세페이지로 이동합니다.</p>
          </div>
        </div>
        <div className="w-6/12 grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] justify-items-center gap-x-5 gap-y-10">
          {championsArr.map(([, champData]: [string, Champion]) => (
            <ChampCard key={champData.id} champ={champData} />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    return <div>Error!</div>;
  }
};

export default AllChampions;
