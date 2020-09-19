import { encode } from 'fraktur'
import { wired, component, on } from 'capsid'

const DEFAULT_PLACEHOLDER = 'SPQR'

@component('js-main')
class Main {
  @wired('input') input
  @wired('.result') result

  __mount__() {
    const i = localStorage.input
    this.input!.value = i == null ? DEFAULT_PLACEHOLDER : i
    this.onInput()
  }

  @on('input')
  onInput() {
    const v = this.input!.value
    localStorage.input = v
    this.result!.textContent = encode(v)
  }
}
