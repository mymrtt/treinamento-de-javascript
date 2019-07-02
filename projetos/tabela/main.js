const MOUNTAINS = [
  {name: 'Kilimanjaro', height: '5895', place: 'Tanzania' },
  {name: 'Kilimanjaro', height: '5895', place: 'Tanzania' },
  {name: 'Kilimanjaro', height: '5895', place: 'Tanzania' },
  {name: 'Kilimanjaro', height: '5895', place: 'Tanzania' },
  {name: 'Kilimanjaro', height: '5895', place: 'Tanzania' }
]

function buildTable(data) {
  let table = document.createElement('table');

  const mountaisItems = MOUNTAINS.map(function(items) {
    return items
  })
  console.log('mountaisItems', mountaisItems)

  return table
}

function tr() {
  let tr = document.createElement('tr');

  return tr

}

function td () {
  let td = document.createElement('td')

  return td
}
document.body.appendChild(buildTable(MOUNTAINS));