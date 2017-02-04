const names = ['Leo', 'Carlos', 'Renato', 'Taís'];
const jobs = ['Desenvolvedor', 'Arquiteto', 'Dentista', 'Designer']

function random(list) {
  return list[parseInt(list.length * Math.random(), 10)];
}

const generators = {
  name: () => random(names),
  text: (model) => model.value,
  job: () => random(jobs),
}

export function generateCase(model) {
  return model.map(m => Object.assign({}, m, {value: generators[m.type](m)}));
}

export function updateModelItem(Cases, id, properties) {
  return [
    ...Cases.slice(0, id),
    Object.assign({}, Cases[id], properties),
    ...Cases.slice(id+1),
  ];
}
