# Browser Dialogs in React

This demo showcases a minimal implementation that leverages:

- `window.alert`
- `window.confirm`
- `window.prompt`

The goal is to make the minimal amount of changes that would allow you to replace
the current implementation with custom React components without changing the API.

To consume it you need to import `DialogContext`. That component will expose
`showAlert`, `showConfirm` and `showPrompt` in the render props. `<DialogButton>`
shows an example of that behavior.

Clicking on the "Alert" button shows a custom dialog to demonstrate how the API can
be preserved. "Confirm" and "Prompt" show the default ones.