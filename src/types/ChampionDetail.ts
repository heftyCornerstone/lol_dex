import { Champion, ChampionImage } from "./Champion";

export interface ChampionDetailData {
  type: string;
  format: string;
  version: string;
  data: { [champName: string]: ChampionDetail };
}

export interface ChampionDetailObj {
  [champName: string]: ChampionDetail;
};

export interface ChampionDetail extends Omit<Champion, "version"> {
  skins: Skins[];
  lore: string;
  allytips: string[];
  enemytips: string[];
  spells: SpellsItem[];
  passive: Passive;
  recommended: [];
}

interface Skins {
  id: string;
  num: number;
  name: string;
  chromas: boolean;
};

interface SpellsItem {
  id: string;
  name: string;
  description: string;
  tooltip: string;
  leveltip: {
    label: string[];
    effect: string[];
  };
  maxrank: number;
  cooldown: number[];
  cooldownBurn: string;
  cost: number[];
  costBurn: string;
  datavalues: {};
  effect: Array<number[] | null>;
  effectBurn: Array<string | null>;
  vars: [];
  costType: string;
  maxammo: string;
  range: number[];
  rangeBurn: string;
  image: ChampionImage;
  resource: string;
};

type Passive = {
  name: string;
  description: string;
  image: ChampionImage;
};
