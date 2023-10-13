// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    tossResult: 0,
    total: 0,
    heads: 0,
    tails: 0,
    imgs: '',
  }

  onClickButton = () => {
    const {tossResult, heads, tails, total} = this.state
    this.setState({
      tossResult: Math.floor(Math.random() * 2),
    })
    if (tossResult === 0) {
      this.setState({
        heads: heads + 1,
        total: total + 1,
        imgs: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    } else {
      this.setState({
        tails: tails + 1,
        total: total + 1,
        imgs: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    }
  }

  render() {
    const {total, tails, heads, imgs} = this.state
    const okay = total === 0 ? 'img-page' : 'tail-img'
    const tailChange = total !== 0 ? 'img-page' : 'tail-img'

    return (
      <div className="main-div">
        <div className="semi-div">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
            alt="toss result"
            className={okay}
          />
          <img src={imgs} alt="toss result" className={tailChange} />
          <button
            onClick={this.onClickButton}
            type="button"
            className="toss-coin"
          >
            Toss Coin
          </button>
          <div className="head-tail-value">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
