import React, { FC } from 'react'
import IconsSVG from "../../assets/image/sprite.svg";

interface IIcon {
  width: string;
  height: string;
  iconId: string;
  xmlns?: string;
}

export const Icon: FC<IIcon> = ({ width, height, iconId, xmlns = 'http://www.w3.org/2000/svg'}) => {
  return (
    <svg xmlns={xmlns} width={width} height={height}>
      <use xlinkHref={`${IconsSVG}#${iconId}`}></use>
    </svg>
  )
}
