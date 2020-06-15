export default {
  totalcount: (state) => {
    return state.cats.length + state.dogs.length
  }
}
