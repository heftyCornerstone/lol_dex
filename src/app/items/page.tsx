import { Item } from '@/types/Item';
import { fetchItems } from '@/utils/serverApi';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface ItemTestProps {
  itemId : string,
  item : Item,
}
const ItemTest = ({ itemId, item }: ItemTestProps) => {
  const itemName = item.name;
 const {base, purchasable, sell} = item.gold;

  return (
    <Link
      href={{
        pathname: `/item_detail/${itemId}`,
        query: { itemName, base, purchasable, sell },
      }}
    >
      <div>
        <div>
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/${itemId}.png`}
            alt=""
            width={70}
            height={70}
          />
        </div>
        <h6>{itemName}</h6>
      </div>
    </Link>
  );
};

const Items = async () => {
  //각 아이템의 이름과 아이콘 이미지를 표시합니다.
  //아이템을 클릭하면 해당 아이템의 상세 페이지로 이동합니다.
  //이미지 최적화를 위해 Next.js의 <Image> 컴포넌트를 사용하세요.
  //https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/1001.png

  try {
      const items = await fetchItems();
      const itemsArr = Object.entries(items);
  
      return (
        <div>
          {itemsArr.map(([itemId, itemData]: [string, Item]) => (
            <ItemTest key={itemId} itemId={itemId} item={itemData}/>
          ))}
        </div>
      );
    } catch (error) {
      return <div>Error!</div>;
    }
}

export default Items