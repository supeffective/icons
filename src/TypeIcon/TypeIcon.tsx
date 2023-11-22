import { pokemonTypesMap } from '@supeffective/dataset'
import { Teratype } from '../generated'
import './TypeIcon.css'

import type { ReactElement } from 'react'
import { cn } from '../utils'
import { typeIconGlyphRecipe, typeIconRecipe, typeTeraIconBgRecipe } from './cva'
import { pokemonTypeComponents } from './svgComponents'
import type { TypeIconProps } from './types'

export function TypeIcon(props: TypeIconProps): ReactElement {
  const { typeId, terastal, filled, colored, rounded, theme = 'dark', size = 'sm', className, ...rest } = props
  const dataProps = {
    'data-type': typeId,
    'data-terastal': terastal ? true : undefined,
    // 'data-filled': filled ? 'true' : 'false',
    // 'data-colored': colored ? 'true' : 'false',
    // 'data-rounded': rounded ? 'true' : 'false',
    // 'data-size': size,
  }
  const pokeType = pokemonTypesMap.get(typeId)
  if (!pokeType) {
    throw new Error(`Pokémon Type with id '${typeId}' not found`)
  }

  const componentConfig = pokemonTypeComponents[pokeType.id]
  if (!componentConfig) {
    throw new Error(`SVG icon for Pokémon Type '${pokeType.id}' not found`)
  }

  const TypeComponent = componentConfig.component

  const wrapperClass = cn(
    typeIconRecipe({
      typeId: pokeType.id,
      filled,
      colored,
      rounded,
      theme,
      terastal,
      size,
    }),
    className,
  )
  const terastalBgClass = typeTeraIconBgRecipe({
    typeId: pokeType.id,
    filled,
    colored,
    rounded,
    theme,
    terastal,
    size,
  })

  const typeGlyphClass = cn(
    typeIconGlyphRecipe({
      typeId: pokeType.id,
      filled,
      colored,
      rounded,
      theme,
      terastal,
      size,
    }),
  )

  return (
    <span title={pokeType.name} className={wrapperClass} {...rest} {...dataProps}>
      {terastal && <Teratype className={terastalBgClass} />}
      <TypeComponent className={typeGlyphClass} />
    </span>
  )
}
