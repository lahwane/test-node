import _ from 'lodash'

function getRandomScore() {
    return Math.round(Math.random() * 100)
}

// const result = _.times(5, getRandomScore)
// console.log('Random nums:', result)

////////////////////////////////////////////////////

const items = [
    { id: '1abc', type: 'music', title: 'First item', content: '...' },
    { id: '2abc', type: 'cooking', title: 'Second item', content: '...' },
    { id: '3abc', type: 'music', title: 'Third item', content: '...' },
    { id: '4abc', type: 'sport', title: 'Fourth item', content: '...' },
]


// const itemMap = _.keyBy(items, 'id')
// console.log('itemMap:', itemMap)
// const item = itemMap['2abc']
// console.log('item:', item)

////////////////////////////////////////////////////

const itemGroupMap = _.groupBy(items, 'type')
console.log('itemGroupMap:', itemGroupMap)
