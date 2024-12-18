import ChampionInfo from "@/components/detailPage/ChampInfo";
import ChampSpellCard from "@/components/detailPage/ChampSpellCard";
import { fetchChampionDetails } from "@/utils/serverApi";
import Image from "next/image";

interface ChampionDetailProps {
  params: { id: string };
}

export function generateMetadata({ params }: ChampionDetailProps) {
  return {
    title: `LoL dex | Champion details`,
    description: `Champion details on ${params.id}`,
  };
}

const ChampionDetails = async ({ params }: ChampionDetailProps) => {
  const { id: champId } = params;
  const { championDetail, newestVer } = await fetchChampionDetails(champId);
  const champ = championDetail[champId];

  return (
    <div className="mb-20 flex flex-col items-center gap-20">
      <div className="flex flex-col items-center gap-5">
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/${newestVer}/img/champion/${champId}.png`}
          alt=""
          width={100}
          height={100}
        />
        <div className="text-center">
          <h6 className="mb-1 text-2xl font-bold">{champ.name}</h6>
          <div className="text-sm text-gray-500">{champ.title}</div>
        </div>
      </div>
      <ChampionInfo champ={champ} />
      <div className="w-8/12">
        <h6 className="mb-3 text-lg font-bold">스킬</h6>
        <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-x-5 gap-y-10">
          {champ.spells.map((champSpell) => (
            <ChampSpellCard
              key={champSpell.id}
              spell={champSpell}
              version={newestVer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChampionDetails;
