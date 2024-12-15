import { fetchChampionDetails } from "@/utils/serverApi";
import Image from "next/image";

interface ChampionDetailProps {
  params: {id:string}
}
//메타데이터 설정하기
const ChampionDetail = async ({ params }: ChampionDetailProps) => {
  const {id:champId} = params;
  const champDetailsObj = await fetchChampionDetails(champId);
  const champ = champDetailsObj[champId];
  return (
    <div>
      <div>
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${champId}.png`}
          alt=""
          width={100}
          height={100}
        />
      </div>
      <h6>{champ.name}</h6>
      <div>{champ.title}</div>
      <div>{champ.lore}</div>
      <div>{champ.allytips}</div>
      <div>{champ.enemytips}</div>
      <div>
        {champ.spells.map((c) => {
          return (
            <div key={c.id}>
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/spell/${c.image.full}`}
                alt=""
                width={70}
                height={70}
              />
              <div>{c.name}</div>
              <div>{c.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChampionDetail;
