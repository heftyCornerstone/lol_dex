import ItemStateTable from "@/components/ItemStateTable";
import { fetchItems } from "@/utils/serverApi";
import Image from "next/image";

interface ItemDetailProps {
  params: { id: string };
}
export interface StateObjType {
  stateName: string;
  stateValue: string;
}

const ItemDetail = async ({ params }: ItemDetailProps) => {
  const { id: itemId } = params;
  const { items, newestVer } = await fetchItems();
  const { name: itemName, description } = items[itemId];

  //아이템 상세 설명 스트링 편집집하기
  const regex = /<.*?>/;
  const itemDescription = description.split("</stats>");
  const states = itemDescription[0]
    .split(regex)
    .filter((stateItem) => stateItem !== "");

  //편집한 스트링을 적절한 데이터 형식으로 만들기
  const statesArr: StateObjType[] = [];
  for (let i = 0; i < states.length; i += 2) {
    const stateObj = { stateName: states[i], stateValue: states[i + 1] };
    statesArr.push(stateObj);
  }

  return (
    <div className="w-screen flex flex-col items-center justify-center gap-20">
      <div className="flex flex-col items-center gap-3">
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/${newestVer}/img/item/${itemId}.png`}
          alt=""
          width={80}
          height={80}
        />
        <h6 className="text-xl font-bold">{itemName}</h6>
      </div>
      <ItemStateTable statesArr={statesArr}/>
    </div>
  );
};

export default ItemDetail;
