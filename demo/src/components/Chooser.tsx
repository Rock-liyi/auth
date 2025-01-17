import { Select } from '@windmill/react-ui'
import React, { useRef } from 'react'
import { PeerMap } from '../peers'

export const Chooser = ({ onAdd, peers }: ChooserProps) => {
  const peerSelect = useRef() as React.MutableRefObject<HTMLSelectElement>

  return (
    <div className="Chooser group flex-grow">
      <Select
        ref={peerSelect}
        className={`
          bg-color-none opacity-25
          group-hover:opacity-100 group-hover:bg-color-white
          focus:opacity-100 focus:bg-color-white
          border-none rounded-lg focus:rounded-b-none
          h-10 font-normal text-lg`}
        onChange={() => {
          peerSelect.current.blur()
          onAdd(peerSelect.current.value)
        }}
        css=""
      >
        <option>Show device...</option>
        {Object.values(peers)
          .filter(p => !p.show)
          .map(p => (
            <option key={p.id} value={p.id}>
              {p.user.emoji} {p.device.emoji}
            </option>
          ))}
      </Select>
    </div>
  )
}

interface ChooserProps {
  onAdd: (id: string) => void
  peers: PeerMap
}
