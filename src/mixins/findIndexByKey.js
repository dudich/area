export default {
  methods: {
    findIndexByKey(arr, key, val) {
      return arr.map((item) => item[key]).indexOf(val);
    }
  }
}