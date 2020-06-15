export default {
  addpet: (state, { species, pet }) => {
    state[species].push(pet)
  }
}
