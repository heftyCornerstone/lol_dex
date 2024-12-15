"use client";

import useRotationAndChamps from "@/hooks/useRotationAndChamps";
import { Champion } from "@/types/Champion";
import { ChampionRotation } from "@/types/ChampionRotation";
import Image from "next/image";
import { useEffect, useState } from "react";

const Rotation = () => {
  const [freeChamps, setFreeChamps] = useState<Champion[] | null>(null);
  const { fetchedRotation, fetchedAllChamps, isDataPending, isDataError } =
    useRotationAndChamps();

  useEffect(() => {
    const getTest = async () => {
      try {
        if (fetchedRotation && fetchedAllChamps) {
          const rotationData: ChampionRotation = await fetchedRotation.json();
          const freeChamp: number[] = rotationData.freeChampionIds;

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

  if (isDataPending) return <div>Loading...</div>;
  if (isDataError) return <div>Error!</div>;

  return (
    <div>
      {freeChamps &&
        freeChamps.map((curChamp) => {
          return (
            <div key={curChamp.id}>
              <div>
                <Image
                  src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${curChamp.id}.png`}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <h6>{curChamp.name}</h6>
              <div>{curChamp.title}</div>
            </div>
          );
        })}
    </div>
  );
};

export default Rotation;
 