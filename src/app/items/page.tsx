import ItemCard from "@/components/ItemCard";
import { Item } from "@/types/Item";
import { fetchItems } from "@/utils/serverApi";

const Items = async () => {
    const { items, newestVer } = await fetchItems();
    const itemsArr = Object.entries(items);

    return (
      <div className="w-[90vw] max-w-screen-2xl mb-20 flex flex-col items-center gap-10">
        <div className="w-7/12 pb-10 flex flex-col justify-center items-center gap-10 border-b-2 border-amber-400">
          <h1 className="font-bold text-5xl">아이템</h1>
          <div className="text-center break-keep">
            <p>아이템 목록입니다.</p>
            <p>각 항목을 클릭하면 상세페이지로 이동합니다.</p>
          </div>
        </div>
        <div className="w-6/12 grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] justify-items-center gap-x-5 gap-y-10">
          {itemsArr.map(([itemId, itemData]: [string, Item]) => (
            <ItemCard
              key={itemId}
              itemId={itemId}
              itemName={itemData.name}
              version={newestVer}
            />
          ))}
        </div>
      </div>
    ); 
};

export default Items;