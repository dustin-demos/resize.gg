
import { pocket } from 'pocket/index'
import { patch } from 'superfine'

import Home from './views/home'
import Missing from './views/missing'

const node = document.getElementById('app')
const app = init => pocket(init, view => patch(node, view))

app({
  state: {
    resize: {
      link: true,
      ratio: 4 / 3,
      width: 800,
      height: 600
    },
    clipboard: {
      copied: false
    }
  },
  pages: {
    // Served under /resize/ in the demos container, so the home route is that path.
    '/resize/': Home,
    '/missing': Missing
  }
})

window.resizeTo(480 + 16, 316 + 42)
