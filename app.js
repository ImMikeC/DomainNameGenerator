let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extension = ['com', 'org', 'cl', 'io', 'us']

const rndPronoun = () => {
  return Math.floor(Math.random() * pronoun.length)
}
const rndAdj = () => {
  return Math.floor(Math.random() * adj.length)
}
const rndNoun = () => {
  return Math.floor(Math.random() * noun.length)
}
const rndExt = () => {
  return Math.floor(Math.random() * extension.length)
}


const rndDomainName = () => {
  return pronoun[rndPronoun()] + adj[rndAdj()] + noun[rndNoun()] + '.' + extension[rndExt()]
}
