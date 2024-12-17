import { Champion } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";

interface ChampCardProps {
  champ: Champion;
}

const ChampCard = ({ champ }: ChampCardProps) => {
  return (
    <Link href={`champions/${champ.id}`}>
      <div className="w-32 flex flex-col items-center justify-center gap-3">
        <div>
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/${champ.version}/img/champion/${champ.id}.png`}
            alt={champ.id}
            width={100}
            height={100}
          />
        </div>
        <div className="text-center">
          <h6>{champ.name}</h6>
          <div className="text-xs text-gray-500">{champ.title}</div>
        </div>
      </div>
    </Link>
  );
};

export default ChampCard;