// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { DialogProvider } from './dialogs'
import { DialogButton } from './dialogButton'
import './styles.css'

function App() {
  return (
    <DialogProvider>
      <h1>Hello CodeSandbox</h1>
      <DialogButton type="alert" message="I am alert!">
        Alert
      </DialogButton>
      <DialogButton type="confirm" message="are you sure?">
        Confirm
      </DialogButton>
      <DialogButton type="prompt" message="You tell me">
        Prompt
      </DialogButton>
    </DialogProvider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
