import { Champion, Champions } from "@/types/Champion";
import { fetchChampions } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";

interface ChampTestProps {
  champ: Champion;
};

export const revalidate = 86400;

const ChampTest = ({ champ }: ChampTestProps) => {
  return (
    <Link href={`champions/${champ.id}`}>
      <div>
        <div>
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${champ.id}.png`}
            alt=""
            width={100}
            height={100}
          />
        </div>
        <h6>{champ.name}</h6>
        <div>{champ.title}</div>
      </div>
    </Link>
  );
};

const AllChampions = async () => {
  try {
    const champions: Champions = await fetchChampions();
    const championsArr = Object.entries(champions);

    return (
      <div >
        {championsArr.map(([, champData]: [string, Champion]) => (
          <ChampTest key={champData.id} champ={champData} />
        ))}
      </div>
    );
  } catch (error) {
    return <div>Error!</div>;
  }
};

export default AllChampions;
