import Image from "next/image";
import { useRouter } from "next/router";

interface ItemDetailProps {
  searchParams: { itemName:string, base: string; purchasable: string; sell: string };
  params: { id: string };
}
const ItemDetail = ({ params, searchParams }: ItemDetailProps) => {
  const { id: itemId } = params;
  const { itemName, base, purchasable, sell } = searchParams;

  return (
    <div>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/${itemId}.png`}
        alt=""
        width={70}
        height={70}
      />
      <div>{itemName}</div>
      {purchasable ? (
        <div>
          <div>구매가: {base}</div>
          <div>판매가: {sell}</div>
        </div>
      ) : (
        <div>거래 불가능</div>
      )}
    </div>
  );
};

export default ItemDetail;
