"use client";

import ChampCard from "@/components/ChampCard";
import useRotationAndChamps from "@/hooks/useRotationAndChamps";
import { Champion } from "@/types/Champion";
import { useEffect, useState } from "react";

const Rotation = () => {
  const [freeChamps, setFreeChamps] = useState<Champion[] | null>(null);
  const { fetchedRotation, fetchedAllChamps, isDataPending } =
    useRotationAndChamps();

  useEffect(() => {
    const getTest = async () => {
      try {
        if (fetchedRotation && fetchedAllChamps) {
          const freeChamp: number[] = fetchedRotation.freeChampionIds;

          const freeChampList: Champion[] = [];
          for (const champName in fetchedAllChamps) {
            const champ = fetchedAllChamps[champName];
            const isFreeChamp = freeChamp.some(
              (champId) => champId.toString() === champ.key
            );
            if (isFreeChamp) freeChampList.push(champ);
          }

          setFreeChamps(freeChampList);
        }
      } catch (error) {
        throw error;
      }
    };
    getTest();
  }, [fetchedRotation, fetchedAllChamps]);

  return (
    <div className="w-[90vw] max-w-screen-2xl mb-20 flex flex-col items-center gap-10">
      <div className="w-7/12 pb-10 flex flex-col justify-center items-center gap-10 border-b-2 border-amber-400">
        <h1 className="font-bold text-5xl break-keep">챔피언 로테이션</h1>
        <div className="text-center break-keep">
          <p>이번 주에 무료로 플레이할 수 있는 챔피언의 목록입니다.</p>
          <p>각 항목을 클릭하면 상세페이지로 이동합니다.</p>
        </div>
      </div>
      {isDataPending ? (
        <div>loading...</div>
      ) : (
        <div className="w-6/12 grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] justify-items-center gap-x-5 gap-y-10">
          {freeChamps &&
            freeChamps.map((curChamp) => (
              <ChampCard key={curChamp.id} champ={curChamp} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Rotation;
