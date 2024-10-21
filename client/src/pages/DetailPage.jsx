import { Component } from 'react'
import Header from '../components/Header'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'
import itemDetails from '../json/itemDetails.json'


export default class DetailPage extends Component {
    constructor(){
      super()
    }
  
    render() {
      return (
          <div>
              <Header></Header>
              <hr />
              
              <Testimonial data={itemDetails.testimonial}/>
              <hr/>
              <Footer/>
          </div>
      )
    }
  }
  