// @flow
import * as React from 'react'
import { uniq } from 'lodash'
import { DialogContext } from './context'
import { confirm, prompt } from './promisified'
import { CustomAlert } from './customAlert'
import type { TDialog } from './types'

type Props = {}
type DialogObj = { type: TDialog, id: string, Component: React.Element }
type State = {
  dialogs: Array<DialogObj>,
}

export class DialogProvider extends React.Component<Props, State> {
  state = {
    dialogs: [],
  }

  addDialog = ({ content, type, Component }: DialogObj) => {
    // get a unique id so we can identify the alert to remove
    const id = uniq()
    // create a promise that will be used by the component callback so we can track "on close"
    let resolve
    const promise = new Promise(r => {
      resolve = r
    })
    const onClose = () => {
      this.removeDialog(id)
      resolve()
    }
    const newDialog = {
      type,
      id,
      Component: <Component key={id} onClose={onClose} content={content} />,
    }

    this.setState(({ dialogs }) => ({
      dialogs: [...dialogs, newDialog],
    }))

    return promise
  }

  showAlert = (content: React.Element) => {
    /**
     * Alert showcases a custom React component. Notice that, because of it,
     * `content` can also be any React.Element (not just a string)
     *
     * We return the promisified response to maintain the previous API.
     *
     * `showConfirm` and `showPrompt` show the default window dialogs but the
     * API for all of them is the same
     */
    return this.addDialog({ content, type: 'alert', Component: CustomAlert })
  }
  showConfirm = (content: string) => confirm(content)
  showPrompt = (content: string) => prompt(content)
  removeDialog = (id: string) => {
    this.setState(({ dialogs }) => ({
      dialogs: dialogs.filter(dialog => dialog.id !== id),
    }))
  }

  render() {
    return (
      <DialogContext.Provider
        value={{
          showAlert: this.showAlert,
          showConfirm: this.showConfirm,
          showPrompt: this.showPrompt,
        }}
      >
        {this.props.children}
        {this.state.dialogs.map(({ Component }) => Component)}
      </DialogContext.Provider>
    )
  }
}
