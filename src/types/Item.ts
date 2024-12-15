import { ChampionImage } from "./Champion";

export interface ItemData {
  type: string;
  version: string;
  basic: Basic;
  data: Items;
  groups: Groups[];
  tree: Tree[];
}

export interface Items {
    [key: string]: Item;
  };

interface Basic {
  name: string;
  group: string;
  description: string;
  colloq: string;
  plaintext: string;
  consumed: false;
  stacks: number;
  depth: number;
  consumeOnFull: false;
  from: string[];
  into: string[];
  specialRecipe: number;
  inStore: true;
  hideFromAll: false;
  requiredChampion: string;
  requiredAlly: string;
  stats: ItemStats;
  tags: string[];
  maps: ItemDataMaps;
  rune: Rune;
  gold: Gold;
}

interface Rune {
  isrune: false;
  tier: number;
  type: string;
}

interface Gold {
  base: number;
  total: number;
  sell: number;
  purchasable: false;
}

interface Groups {
  id: string;
  MaxGroupOwnable: string;
}

interface Tree {
  header: string;
  tags: string[];
}

export interface Item {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from?: string[];
  into: string[];
  image: ChampionImage;
  gold: Gold;
  tags: string[];
  maps: ItemDataMaps;
  stats: {
    FlatMovementSpeedMod: number;
  };
}

export interface ItemStats {
  FlatHPPoolMod: number;
  rFlatHPModPerLevel: number;
  FlatMPPoolMod: number;
  rFlatMPModPerLevel: number;
  PercentHPPoolMod: number;
  PercentMPPoolMod: number;
  FlatHPRegenMod: number;
  rFlatHPRegenModPerLevel: number;
  PercentHPRegenMod: number;
  FlatMPRegenMod: number;
  rFlatMPRegenModPerLevel: number;
  PercentMPRegenMod: number;
  FlatArmorMod: number;
  rFlatArmorModPerLevel: number;
  PercentArmorMod: number;
  rFlatArmorPenetrationMod: number;
  rFlatArmorPenetrationModPerLevel: number;
  rPercentArmorPenetrationMod: number;
  rPercentArmorPenetrationModPerLevel: number;
  FlatPhysicalDamageMod: number;
  rFlatPhysicalDamageModPerLevel: number;
  PercentPhysicalDamageMod: number;
  FlatMagicDamageMod: number;
  rFlatMagicDamageModPerLevel: number;
  PercentMagicDamageMod: number;
  FlatMovementSpeedMod: number;
  rFlatMovementSpeedModPerLevel: number;
  PercentMovementSpeedMod: number;
  rPercentMovementSpeedModPerLevel: number;
  FlatAttackSpeedMod: number;
  PercentAttackSpeedMod: number;
  rPercentAttackSpeedModPerLevel: number;
  rFlatDodgeMod: number;
  rFlatDodgeModPerLevel: number;
  PercentDodgeMod: number;
  FlatCritChanceMod: number;
  rFlatCritChanceModPerLevel: number;
  PercentCritChanceMod: number;
  FlatCritDamageMod: number;
  rFlatCritDamageModPerLevel: number;
  PercentCritDamageMod: number;
  FlatBlockMod: number;
  PercentBlockMod: number;
  FlatSpellBlockMod: number;
  rFlatSpellBlockModPerLevel: number;
  PercentSpellBlockMod: number;
  FlatEXPBonus: number;
  PercentEXPBonus: number;
  rPercentCooldownMod: number;
  rPercentCooldownModPerLevel: number;
  rFlatTimeDeadMod: number;
  rFlatTimeDeadModPerLevel: number;
  rPercentTimeDeadMod: number;
  rPercentTimeDeadModPerLevel: number;
  rFlatGoldPer10Mod: number;
  rFlatMagicPenetrationMod: number;
  rFlatMagicPenetrationModPerLevel: number;
  rPercentMagicPenetrationMod: number;
  rPercentMagicPenetrationModPerLevel: number;
  FlatEnergyRegenMod: number;
  rFlatEnergyRegenModPerLevel: number;
  FlatEnergyPoolMod: number;
  rFlatEnergyModPerLevel: number;
  PercentLifeStealMod: number;
  PercentSpellVampMod: number;
}

interface ItemDataMaps {
  [key: string]: boolean;
}
