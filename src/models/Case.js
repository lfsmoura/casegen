const names = ['Leo', 'Carlos', 'Renato', 'Taís'];
const jobs = ['Desenvolvedor', 'Arquiteto', 'Dentista', 'Designer']

function random(list) {
  return list[parseInt(list.length * Math.random(), 10)];
}

const generators = {
  name: () => random(names),
  text: (model) => model.value || '',
  job: () => random(jobs),
}

export function generateCase(model) {
  return model.map(m => Object.assign({}, m, {value: generators[m.type](m)}));
}

export function updateModelItem(cases, id, properties) {
  const index = cases.findIndex(m => m.id === id);
  return [
    ...cases.slice(0, index),
    Object.assign({}, cases[index], properties),
    ...cases.slice(index+1),
  ];
}

export function deleteModelItem(cases, id) {
  const index = cases.findIndex(m => m.id === id);
  return [
    ...cases.slice(0, index),
    ...cases.slice(index+1),
  ];
}

export function addItem(cases, properties = { type: 'text', value: '' }) {
  const id = cases.reduce((idMax, m) => Math.max(idMax, m.id), 0) + 1
  return [...cases, Object.assign({ id }, properties)];
}
