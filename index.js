import { initWood } from '@sseezov/wood-js'
import App from './src/App'
import CounterPage from './src/pages/Counter'
import AboutPage from './src/pages/About'

const routes = [
  { path: '/', component: CounterPage, parentSelector: '#main' },
  { path: '/about', component: AboutPage, parentSelector: '#main' },
]

initWood(App, routes)