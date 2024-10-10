import {React, Component} from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'

export default class LandingPage extends Component {
  render() {
    return (
        <div>
            <Header></Header>
            <Hero/>
        </div>
    )
  }
}
