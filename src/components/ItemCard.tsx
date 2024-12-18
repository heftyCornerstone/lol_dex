import { Item } from "@/types/Item";
import Image from "next/image";
import Link from "next/link";

interface ItemTestProps {
  itemId: string;
  itemName: string;
  version:string;
}
const ItemCard = ({ itemId, itemName, version }: ItemTestProps) => {
  const regex = /<.*?>/;
  const newname = itemName.split(regex).filter((cur)=>cur!=="")[0];
  return (
    <Link href={`/items/${itemId}`}>
      <div className="w-32 flex flex-col items-center justify-center gap-3">
        <div>
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${itemId}.png`}
            alt=""
            width={70}
            height={70}
          />
        </div>
        <h6 className="text-center">{newname}</h6>
      </div>
    </Link>
  );
};

export default ItemCard;

/*
<mainText> <stats> <attention> <passive>

<mainText>
<stats>
공격력 <attention>45</attention>
체력 <attention>450</attention>
스킬 가속 <attention>15</attention>
</stats><br><br>

<passive>광란의 뿔</passive>
적 챔피언에게 물리 피해를 입히면 3초 동안 40%의 <keyword>상처</keyword>를 남깁니다.
</mainText>
*/