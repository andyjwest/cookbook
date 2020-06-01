import React from 'react'

export default function EquipmentList({equipment}) {
  return <>
    {equipment.map((it, i) => `${it}${i+1 === equipment.length ? '': ', '}`)}
  </>
}