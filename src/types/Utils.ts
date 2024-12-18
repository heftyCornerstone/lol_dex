import { ChampionDetailObj } from "./ChampionDetail";
import { Items } from "./Item";

export interface ChampionDetailsRes {
  championDetail: ChampionDetailObj;
  newestVer: string;
}

export  interface fetchItemsRespond {
  items: Items;
  newestVer: string;
}
