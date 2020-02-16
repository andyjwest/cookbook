import React from 'react'

export default function Equipment({equipment}) {
  return <div>
    <strong>Equipment: </strong>{equipment.map((it, i) => `${it}${i-1 !== equipment.length && ', '}`)}
  </div>
}