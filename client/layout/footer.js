import '../assets/style/footer.css'

export default {
  data() {
    return {
      anthor: 'ZhangYe'
    }
  },
  render() {
    return (
      <div id="footer">
        <span>Written by {this.anthor}</span>
      </div>
    )
  }
}
