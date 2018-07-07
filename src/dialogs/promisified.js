// @flow
export function alert(message: string) {
  return new Promise(resolve => {
    window.alert(message)
    resolve()
  })
}

export function confirm(message: string) {
  return new Promise(resolve => {
    const success = window.confirm(message)

    resolve(success)
  })
}

export function prompt(message: string) {
  return new Promise(resolve => {
    const answer = window.prompt(message)

    resolve(answer)
  })
}
