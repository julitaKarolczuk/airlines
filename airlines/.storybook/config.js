import { configure, addParameters } from '@storybook/react'
import '../src/airlines/airlines.css'
import '../src/search/reservations.css'
import '../src/App.css'

addParameters({ viewport: 'iphone6'});

const loadStories = () => {
  // require('../src/stories/index.js')
  require('../src/stories/search.js')
  require('../src/stories/filghts.js')
  require('../src/stories/header.js')
  // You can require as many stories as you need.
}

configure(loadStories, module)
