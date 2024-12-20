"use server";

import { ChampionDetailObj } from "./../types/ChampionDetail";
import { ChampionDetailData } from "@/types/ChampionDetail";
import { Champions, ChampionsData } from "./../types/Champion";
import { ItemData, Items } from "@/types/Item";
import { ChampionDetailsRes, FetchItemsRespond } from "@/types/Utils";

const getNewestVer = async (): Promise<string> => {
  try {
    const versionRes = await fetch(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    );
    const version: string[] = await versionRes.json();
    const newestVer: string = version[0];
    return newestVer;
  } catch (error) {
    throw error;
  }
};

export const fetchChampions = async (): Promise<Champions> => {
  try {
    const newestVer: string = await getNewestVer();
    const championsRes = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${newestVer}/data/ko_KR/champion.json`
    );
    const championsData: ChampionsData = await championsRes.json();
    const champions: Champions = championsData.data;

    return champions;
  } catch (error) {
    throw error;
  }
};

export const fetchChampionDetails = async (
  id: string
): Promise<ChampionDetailsRes> => {
  try {
    const newestVer: string = await getNewestVer();
    const detailsRes = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${newestVer}/data/ko_KR/champion/${id}.json`,
      { cache: "no-store" }
    );
    const championDetailData: ChampionDetailData = await detailsRes.json();
    const championDetail: ChampionDetailObj = championDetailData.data;

    return { championDetail, newestVer };
  } catch (error) {
    throw error;
  }
};

export const fetchItems = async (): Promise<FetchItemsRespond> => {
  try {
    const newestVer: string = await getNewestVer();
    const itemsRes = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${newestVer}/data/ko_KR/item.json`
    );
    const itemData: ItemData = await itemsRes.json();
    const items: Items = itemData.data;

    return { items, newestVer };
  } catch (error) {
    throw error;
  }
};
