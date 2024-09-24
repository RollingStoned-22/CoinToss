// Write your code here
import {Component} from 'react'
import './index.css'

const headUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
let tails = 0
let heads = 0

class CoinToss extends Component {
  state = {count: 0, toss: 0, imageUrl: headUrl}

  onToss = () => {
    const {toss} = this.state
    const image = toss ? tailsUrl : headUrl
    const result = toss ? 'tails' : 'heads'
    if (result === tails) {
      tails += 1
    } else {
      heads += 1
    }
    console.log(result)
    this.setState({imageUrl: image})
  }

  onClickBtn = () => {
    this.setState(
      prevState => ({
        count: prevState.count + 1,
        toss: Math.floor(Math.random() * 2),
      }),
      this.onToss(),
    )
  }

  render() {
    const {count, imageUrl, toss} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={imageUrl} className="image" alt="toss result" />
          <button onClick={this.onClickBtn}>Toss Coin</button>
          <div className="counts">
            <p className="margin">Total: {count}</p>
            <p className="margin">Heads: {heads}</p>
            <p className="margin">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
