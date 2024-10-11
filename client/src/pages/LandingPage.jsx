import {React, Component, useState} from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import MostPicked from '../components/MostPicked'
import axios from "axios";

export default class LandingPage extends Component {
  constructor(){
    super()
    this.state = {data:[]}
  }
 componentDidMount = async () => {
  await axios.get(`${import.meta.env.VITE_LOCAL_API_URL}/landing-page`).then(response=> {
    this.setState({data:response.data})
  })
 }
  render() {
    return (
        <div>
            <Header></Header>
            <hr />
            <Hero {...this.state.data}/>
            <MostPicked {...this.state.data}/>
        </div>
    )
  }
}
