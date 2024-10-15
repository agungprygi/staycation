import { Component, createRef} from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import MostPicked from '../components/MostPicked'
import Categories from '../components/Categories'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'
// import axios from "axios";
import landingPage from '../json/landingPage.json'

export default class LandingPage extends Component {
  constructor(){
    super()
    this.state = {data:[]}
    this.mostPickedRef = createRef()
  }
 componentDidMount = async () => {
  // await axios.get(`${import.meta.env.VITE_LOCAL_API_URL}/landing-page`).then(response=> {
  //   this.setState({data:response.data})
  // })
  // this.setState({data:landingPage})
 }
 scrollToMostPicked = () => {
  this.mostPickedRef.current.scrollIntoView({block: "start", inline: "nearest", behavior: 'smooth'})
 }
  render() {
    return (
        <div>
            <Header></Header>
            <hr />
            <Hero data={landingPage.hero} scrollToMostPicked={this.scrollToMostPicked}/>
            <MostPicked data={landingPage.mostPicked} innerRef={this.mostPickedRef}/>
            <Categories data={landingPage.categories}/>
            <Testimonial data={landingPage.testimonial}/>
            <hr/>
            <Footer/>
        </div>
    )
  }
}
