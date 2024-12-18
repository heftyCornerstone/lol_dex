import { ChampionDetail } from "@/types/ChampionDetail";

interface ChampionInFoProps {
  champ: ChampionDetail;
}

const ChampionInfo = ({ champ }: ChampionInFoProps) => {
  const { lore, allytips, enemytips } = champ;
  const feature =
    lore !== allytips[0] && allytips.length !== 0
      ? allytips
      : "아직 특징이 등록되지 않았습니다";
  const tips =
    enemytips.length !== 0 ? enemytips : "아직 팁이 등록되지 않았습니다";

  return (
    <div className="w-8/12 flex flex-col items-start gap-14">
      <div>
        <h6 className="mb-3 text-lg font-bold">소개</h6>
        <p className="p-3 min-h-28 border border-black break-keep dark:border-white">
          {lore}
        </p>
      </div>
      <div className="w-full">
        <h6 className="mb-3 text-lg font-bold">특징</h6>
        <p className="p-3 min-h-28 border border-black break-keep dark:border-white">
          {feature}
        </p>
      </div>
      <div className="w-full">
        <h6 className="mb-3 text-lg font-bold">적으로 만난다면 어떻게?</h6>
        <p className="p-3 min-h-28 border border-black break-keep dark:border-white">
          {tips}
        </p>
      </div>
    </div>
  );
};

export default ChampionInfo;