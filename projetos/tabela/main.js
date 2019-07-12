
const MOUNTAINS = [
  {name: 'Kilimanjaro', height: '5895', place: 'Tanzania' },
  {name: 'Wololo', height: '5895', place: 'Tanzania' },
  {name: 'Yolo', height: '5895', place: 'Tanzania' },
  {name: 'ElCabo', height: '5895', place: 'Tanzania' },
  {name: 'Kilimanjaro', height: '5895', place: 'Tanzania' }
]

function buildTable(data) {
  let table = document.createElement('table');
  let tableTr = tr();

  // table.innerHTML = tableTr()

  table.appendChild(tableTr);

  // const mountaisItems = MOUNTAINS.map(function(items) {
  //   return (items);
  // })
  // console.log('mountaisItems', mountaisItems)
  // tr();

  return table
}

function tr() {
  let tr = document.createElement('tr');
  let tableTd = td();

  tr.appendChild(tableTd);

  return tr
}

function td () {
  let td = document.createElement('td');

  const listItems = MOUNTAINS.map(function(items) {
    return {
      name: items.name,
      height: items.height,
      place: items.place,
    }
  });
  
  console.log('listItems', listItems)
  
  return td
}
document.body.appendChild(buildTable(MOUNTAINS));