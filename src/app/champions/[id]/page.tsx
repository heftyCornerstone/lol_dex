import ChampSpellCard from "@/components/ChampSpellCard";
import { ChampionDetail } from "@/types/ChampionDetail";
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

interface ChampionInFoProps {
  champ: ChampionDetail;
}

const ChampionInFo = ({ champ }: ChampionInFoProps) => {
  const { lore, allytips, enemytips } = champ;
  const feature =
    lore !== allytips[0] ? allytips : "아직 특징이 등록되지 않았습니다";
  const tips =
    enemytips.length !== 0 ? enemytips : "아직 팁이 등록되지 않았습니다";

  return (
    <div className="w-8/12 flex flex-col items-start gap-14">
      <div>
        <h6 className="mb-3 text-lg font-bold">소개</h6>
        <p className="p-3 min-h-28 border border-black break-keep">{lore}</p>
      </div>
      <div className="w-full">
        <h6 className="mb-3 text-lg font-bold">특징</h6>
        <p className="p-3 min-h-28 border border-black break-keep">{feature}</p>
      </div>
      <div className="w-full">
        <h6 className="mb-3 text-lg font-bold">적으로 만난다면 어떻게?</h6>
        <p className="p-3 min-h-28 border border-black break-keep">{tips}</p>
      </div>
    </div>
  );
};

const ChampionDetails = async ({ params }: ChampionDetailProps) => {
  const { id: champId } = params;
  const { championDetail, newestVer } = await fetchChampionDetails(champId);
  const champ = championDetail[champId];
  //console.log(champ.enemytips.length);
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
      <ChampionInFo champ={champ} />
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
