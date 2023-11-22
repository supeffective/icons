import type { SVGProps } from 'react'

import { type PokeType, pokemonTypesMap } from '@supeffective/dataset'
import {
  BugType,
  DarkType,
  DragonType,
  ElectricType,
  FairyType,
  FightingType,
  FireType,
  FlyingType,
  GhostType,
  GrassType,
  GroundType,
  IceType,
  NormalType,
  PoisonType,
  PsychicType,
  RockType,
  SteelType,
  WaterType,
} from '../generated/types'

export const pokemonTypeComponents: Record<
  PokeType['id'],
  {
    component: React.FC<SVGProps<SVGSVGElement>>
    color?: string
  }
> = {
  normal: {
    component: NormalType,
    color: pokemonTypesMap.get('normal')?.color,
  },
  fire: {
    component: FireType,
    color: pokemonTypesMap.get('fire')?.color,
  },
  water: {
    component: WaterType,
    color: pokemonTypesMap.get('water')?.color,
  },
  electric: {
    component: ElectricType,
    color: pokemonTypesMap.get('electric')?.color,
  },
  grass: {
    component: GrassType,
    color: pokemonTypesMap.get('grass')?.color,
  },
  ice: {
    component: IceType,
    color: pokemonTypesMap.get('ice')?.color,
  },
  fighting: {
    component: FightingType,
    color: pokemonTypesMap.get('fighting')?.color,
  },
  poison: {
    component: PoisonType,
    color: pokemonTypesMap.get('poison')?.color,
  },
  ground: {
    component: GroundType,
    color: pokemonTypesMap.get('ground')?.color,
  },
  flying: {
    component: FlyingType,
    color: pokemonTypesMap.get('flying')?.color,
  },
  psychic: {
    component: PsychicType,
    color: pokemonTypesMap.get('psychic')?.color,
  },
  bug: {
    component: BugType,
    color: pokemonTypesMap.get('bug')?.color,
  },
  rock: {
    component: RockType,
    color: pokemonTypesMap.get('rock')?.color,
  },
  ghost: {
    component: GhostType,
    color: pokemonTypesMap.get('ghost')?.color,
  },
  dragon: {
    component: DragonType,
    color: pokemonTypesMap.get('dragon')?.color,
  },
  dark: {
    component: DarkType,
    color: pokemonTypesMap.get('dark')?.color,
  },
  steel: {
    component: SteelType,
    color: pokemonTypesMap.get('steel')?.color,
  },
  fairy: {
    component: FairyType,
    color: pokemonTypesMap.get('fairy')?.color,
  },
}
