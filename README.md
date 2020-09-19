# 𝔉𝔯𝔞𝔨𝔱𝔲𝔯 converter

See https://kt3k.github.io/fraktur

This is a showcase of single page utility app of 2020.

# Architecture

- Hosting: GitHub Pages
- Styling: [sakura.css](https://github.com/oxalorg/sakura)
  - Nice classless css framework
  - So I didn't do any styling work on this app!
- UI interaction: [capsid.js](https://github.com/capsidjs/capsid)
  - See [this source](https://github.com/kt3k/fraktur/blob/main/main.ts). It's really short and totally easy to understand (if you know capsid.js).
- Packaging: parcel
  - You don't need much configuration (but actually [not a zero configuration](https://github.com/kt3k/fraktur/blob/main/package.json#L8) unfortunately)

So the actual "source code" of this app is [index.html](https://github.com/kt3k/fraktur/blob/main/index.html) and [main.ts](https://github.com/kt3k/fraktur/blob/main/index.html). They are just 41 sloc in total, and realize this application. I'm very satisfied with this situation 😌
