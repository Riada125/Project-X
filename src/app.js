import React from 'react'
import ReactDOM from 'react-dom'


import './style.scss'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      quotesList: []
    }
  }


  componentDidMount() {
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(resp => resp.json())
      .then(resp => this.setState({ quotesList: resp }))
  }


  render() {
    if (!this.state.quotesList) {
      return <div>
        <section className={'hero'}>
          <div className={'hero-body'}>
            <div className={'container'}>
              <h1 className={'title has-text-centered'}>
                The Simpsons <br /> Random Quote Generator
              </h1>
            </div>
          </div>
        </section>
        <section className={'columns'}>
          <div className={'column'}>
            <p>Hold yer horses! The quotes are loading!</p>
          </div>
          <div className={'column'}>
            <p>Seriously! give them a wee moment!</p>
          </div>
        </section>
      </div>
    }
    return <div>
      <section className={'hero'}>
        <div className={'hero-body'}>
          <h1 className={'title has-text-centered'}>
            The Simpsons <br /> Random Quote Generator
          </h1>
        </div>
      </section>
      <section className={'columns'}>
        <div className={'column'}>
          <figure className={'image is-square'}>
            {this.state.quotesList.map((quote, i) => {
              return <img key={i} src={quote.image} />
            })}
          </figure>
        </div>
        <div className={'column has-text-left'}>
          {this.state.quotesList.map((quote, i) => {
            return <div className={'has-text-left'} key={i}>" {quote.quote} " <br /> <br /> -{quote.character}</div>
          })}
          <br />
          <button onClick={() => this.componentDidMount()} className={'button is-large is-rounded'}>New Quote!</button>
        </div>
      </section>
    </div>



  }


}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)