import {React, Component, useState, createRef} from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import MostPicked from '../components/MostPicked'
import Categories from '../components/Categories'
import axios from "axios";

export default class LandingPage extends Component {
  constructor(){
    super()
    this.state = {data:[]}
    this.mostPickedRef = createRef()
  }
 componentDidMount = async () => {
  await axios.get(`${import.meta.env.VITE_LOCAL_API_URL}/landing-page`).then(response=> {
    this.setState({data:response.data})
  })
 }
 scrollToMostPicked = () => {
  this.mostPickedRef.current.scrollIntoView({block: "start", inline: "nearest", behavior: 'smooth'})
 }
  render() {
    return (
        <div>
            <Header></Header>
            <hr />
            <Hero {...this.state.data} scrollToMostPicked={this.scrollToMostPicked}/>
            <MostPicked {...this.state.data} innerRef={this.mostPickedRef}/>
            <Categories {...this.state.data}/>
        </div>
    )
  }
}
