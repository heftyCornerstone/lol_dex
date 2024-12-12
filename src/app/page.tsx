"use client";

import { ChampionRotation } from "@/types/ChampionRotation";
import { useEffect, useState } from "react";

export default function Home() {
  const [champRotation, setChampRotation] = useState<ChampionRotation|null>(null);
  useEffect(() => {
    const getTest = async () => {
      try{
      const data = await fetch("/api/rotation");
      const rotation: ChampionRotation = await data.json();
      setChampRotation(rotation);
    } catch(error){
      throw error
    }
    };
    getTest();
  }, []);

  return <div>Home</div>;
}
