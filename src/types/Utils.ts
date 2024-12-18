import { ChampionDetailObj } from "./ChampionDetail";
import { Items } from "./Item";

export interface ChampionDetailsRes {
  championDetail: ChampionDetailObj;
  newestVer: string;
}

export  interface FetchItemsRespond {
  items: Items;
  newestVer: string;
}
