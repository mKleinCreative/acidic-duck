const NAME = 0
const POSITIONS = 1
const POSITION_DESCRIPTION = 2

const layoutInfo = require('./layoutInfo.json')
const layoutInfo = {
  fiveSpread: [
    'Five Card Spread',
    [
      [1,6],
      [3,5],
      [5,4],
      [7,5],
      [9,6],
    ],
    [
      ['The Question: This card represents the subject, topic or question for the reading. Use it to help define the issue clearly.'],
      ['Background: Generally indicates events or attitudes that have lead to the present situation or question. Helpful for further insight into the issue.'],
      ['Sitter/Seeker: Influence on the Qu of the person receiving the reading, e.g. how he/she/they has responded so far or reacted emotionally. Hopes, expectaions, fears...'],
      ['Outside Influences: The influence of the outside world or outside forces. May be interpreted in terms of other people, friends, family, boss, etc..'],
      ['The Answer: Tarot\'s answer for this situation or question. Some take it as suggested actions, other as how to respond mentally or emotionally. Interpretation is key.'],
    ]
  ]
}

export default _.shuffle( Object.keys( layoutInfo ).map( layoutKey => {
  const layoutData = layoutInfo[ layoutKey ]

  return {
    name: layoutData[ NAME ],
    normalDescription: layoutData[ POSITIONS ],
    reverseDescription: layoutData[ POSITION_DESCRIPTION ],
    layoutName: layoutKey
  }
}))
