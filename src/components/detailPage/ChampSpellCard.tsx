import { SpellsItem } from "@/types/ChampionDetail";
import Image from "next/image";

type SpellCardProps = {
  spell: SpellsItem;
  version: string;
};
const ChampSpellCard = ({ spell, version }: SpellCardProps) => {
  const { name: spellName, description } = spell; 
  const regex = /<.*?>/;
  const refinedDescription = description.split(regex).join(' ');
  return (
    <div className="w-80 border-2 border-amber-500">
      <div className="p-4 flex flex-col justify-center items-center gap-6">
        <div className="flex flex-col justify-center items-center gap-4">
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${spell.image.full}`}
            alt=""
            width={70}
            height={70}
          />
          <div className="font-bold">{spellName}</div>
        </div>
        <div className="break-keep">{refinedDescription}</div>
      </div>
    </div>
  );
};

export default ChampSpellCard;
