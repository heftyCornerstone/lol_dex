import { StateObjType } from "@/app/items/[id]/page";


interface ItemStateTableProps {
    statesArr : StateObjType[];
}

const ItemStateTable = ({ statesArr }: ItemStateTableProps) => {
  return (
    <div className="w-3/12 flex flex-col items-start gap-3">
      <h6 className="text-lg font-bold">스탯</h6>
      <table className="w-full min-h-12 border border-amber-500">
        {statesArr.length ? (
          statesArr.map(({ stateName, stateValue }) => {
            return (
              <tr
                className="align-middle border border-amber-500"
                key={stateName}
              >
                <td className="w-2/5 p-2 border border-amber-500 font-bold">
                  {stateName}
                </td>
                <td className="text-center">{stateValue}</td>
              </tr>
            );
          })
        ) : (
          <tr className="align-middle border border-amber-500">
            <td className="p-2">스탯 정보가 없습니다</td>
          </tr>
        )}
      </table>
    </div>
  );
};

export default ItemStateTable;
