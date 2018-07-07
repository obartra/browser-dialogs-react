// @flow
import * as React from 'react'

type Props = {
  onClose: () => Promise<void>,
  content: React.Element,
}

export function CustomAlert({ content, onClose }: Props) {
  return (
    <h1 style={{ color: 'red' }}>
      Oh my! {content} <button onClick={onClose}>X</button>
    </h1>
  )
}
