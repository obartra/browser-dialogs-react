// @flow
import * as React from 'react'
import { DialogContext, type TDialog } from './dialogs'

function getMethod({ showAlert, showConfirm, showPrompt }, type: TDialog) {
  switch (type) {
    case 'alert':
      return showAlert
    case 'confirm':
      return showConfirm
    case 'prompt':
      return showPrompt
    default:
      throw new Error('Invalid message type')
  }
}

type Props = {
  type: TDialog,
  message: string,
  children: React.Element,
}
export function DialogButton({ type, message, children }: Props) {
  return (
    <DialogContext.Consumer>
      {context => {
        return (
          <button onClick={() => getMethod(context, type)(message)}>
            {children}
          </button>
        )
      }}
    </DialogContext.Consumer>
  )
}
