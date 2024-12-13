"use client";

import { Champion, Champions } from "@/types/Champion";
import { ChampionRotation } from "@/types/ChampionRotation";
import { fetchChampions } from "@/utils/serverApi";
import { useEffect, useState } from "react";

const Rotation = () => {
  const [champRotation, setChampRotation] = useState<number[] | null>(null);
    const [freeChamps, setFreeChamps] = useState<Champion[] | null>(null);
  
    useEffect(() => {
      const getTest = async () => {
        try {
          const data = await fetch("/api/rotation");
          const rotation: ChampionRotation = await data.json();
          const freeChamp: number[] = rotation.freeChampionIds;
  
          const allChamps: Champions = await fetchChampions();
          const freeChampList: Champion[] = [];
  
          for (const champName in allChamps) {
            const champ = allChamps[champName];
            const isFreeChamp = freeChamp.some(
              (champId) => champId.toString() === champ.key
            );
            if (isFreeChamp) freeChampList.push(champ);
          }
          //setChampRotation(freeChamp);
          setFreeChamps(freeChampList);
        } catch (error) {
          throw error;
        }
      };
      getTest();
    }, []);
  
    return (
      <div>
        {freeChamps &&
          freeChamps.map((curChamp) => {
            return (
              <div key={curChamp.id}>
                <div>
                  <img
                    src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${curChamp.id}.png`}
                    alt=""
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
