export default {
  data() {
    return {
      title: '',
      description: '',
    }
  },
  head() {
    return {
      title: this.title + ' | Filari',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
      ],
    }
  },
}
