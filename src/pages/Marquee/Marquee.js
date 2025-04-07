import Slider from 'react-infinite-logo-slider'
import "./Marquee.css"
import React from 'react'

const Marquee = () => {

  return (
    <div className="marquee p-0 md:p-[1.5rem] mx-0  md:mx-[6rem] md:my-4">
      <div className="marquee-content">
        <Slider
          width="100px"
          duration={20}
          pauseOnHover={true}
          blurBorders={true}
          blurBorderColor={"var(--blur-border-color)"}
        >
          <Slider.Slide>
            <a href="https://www.coinbase.com" target="_blank" rel="noopener noreferrer">
              <div className='company-logo-box'>
                <img src="https://simpleicons.org/icons/coinbase.svg" alt="Coinbase" className="logo" />
                <h5>Coinbase</h5>
              </div>
            </a>
          </Slider.Slide>
          <Slider.Slide>
            <a href="https://www.binance.com" target="_blank" rel="noopener noreferrer">
              <div className='company-logo-box'>
                <img src="https://simpleicons.org/icons/binance.svg" alt="Binance" className="logo" />
                <h5>Binance</h5>
              </div>
            </a>
          </Slider.Slide>
          <Slider.Slide>
            <a href="https://ethereum.org" target="_blank" rel="noopener noreferrer">
              <div className='company-logo-box'>
                <img src="https://simpleicons.org/icons/ethereum.svg" alt="Ethereum" className="logo" />
                <h5>Ethereum</h5>
              </div>
            </a>
          </Slider.Slide>
          <Slider.Slide>
            <a href="https://dogecoin.com" target="_blank" rel="noopener noreferrer">
              <div className='company-logo-box'>
                <img src="https://simpleicons.org/icons/dogecoin.svg" alt="Dogecoin" className="logo" />
                <h5>Dogecoin</h5>
              </div>
            </a>
          </Slider.Slide>
          <Slider.Slide>
            <a href="https://polkadot.network" target="_blank" rel="noopener noreferrer">
              <div className='company-logo-box'>
                <img src="https://simpleicons.org/icons/polkadot.svg" alt="Polkadot" className="logo" />
                <h5>Polkadot</h5>
              </div>
            </a>
          </Slider.Slide>
          <Slider.Slide>
            <a href="https://litecoin.org" target="_blank" rel="noopener noreferrer">
              <div className='company-logo-box'>
                <img src="https://simpleicons.org/icons/litecoin.svg" alt="Litecoin" className="logo" />
                <h5>Litecoin</h5>
              </div>
            </a>
          </Slider.Slide>
          <Slider.Slide>
            <a href="https://ripple.com" target="_blank" rel="noopener noreferrer">
              <div className='company-logo-box'>
                <img src="https://simpleicons.org/icons/ripple.svg" alt="Ripple" className="logo" />
                <h5>Ripple</h5>
              </div>
            </a>
          </Slider.Slide>
          <Slider.Slide>
            <a href="https://chain.link" target="_blank" rel="noopener noreferrer">
              <div className='company-logo-box'>
                <img src="https://simpleicons.org/icons/chainlink.svg" alt="Chainlink" className="logo" />
                <h5>Chainlink</h5>
              </div>
            </a>
          </Slider.Slide>
          <Slider.Slide>
            <a href="https://cardano.org" target="_blank" rel="noopener noreferrer">
              <div className='company-logo-box'>
                <img src="https://simpleicons.org/icons/cardano.svg" alt="Cardano" className="logo" />
                <h5>Cardano</h5>
              </div>
            </a>
          </Slider.Slide>
          <Slider.Slide>
            <a href="https://solana.com" target="_blank" rel="noopener noreferrer">
              <div className='company-logo-box'>
                <img src="https://simpleicons.org/icons/solana.svg" alt="Solana" className="logo" />
                <h5>Solana</h5>
              </div>
            </a>
          </Slider.Slide>
        </Slider>
      </div>
    </div>
  )
}

export default Marquee