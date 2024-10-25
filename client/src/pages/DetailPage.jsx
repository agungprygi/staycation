import {Component} from 'react';
import {Link, useLocation} from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Testimonial from '../components/Testimonial';
import Categories from "../components/Categories.jsx";
import itemDetails from '../json/itemDetails.json';
import BookingForm from '../components/BookingForm';
import PageDetailDescription from '../components/PageDetailDescription';
import {Breadcrumbs} from "react-daisyui";

function Title(props) {
  const location = useLocation();
  console.log(location)
  return (
    <Fade direction="up">
      <div className="container mx-auto font-poppins md:px-40 px-4 grid grid-cols-3 items-center">
        <div className="breadcrumbs text-sm">
          <ul>
            <li><Link to="/" className='text-gray-400 text-base'>Home</Link></li>
            <li><Link to={`/properties/${props.data._id}`}
                      className='text-secondary font-semibold text-base'>{props.data.name}</Link></li>
          </ul>
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-secondary">{props.data.name}</h1>
          <p className="text-gray-400 font-light">{props.data.city}, {props.data.country}</p>
        </div>
      </div>
    </Fade>
  )
}

function Pictures(props) {
  return (
      <div className="container mx-auto font-poppins md:px-40 px-4 items-center mb-12">
        <Fade direction="up">
          <div className="w-full flex">
            <div className="w-7/12 h-full">
              <img src={props.data.imageUrls[0].url} alt={props.data.name}
                   className="w-full h-full object-cover rounded-xl"/>
            </div>
            <div className="w-5/12 ml-4">
              <div className="w-full h-full flex flex-col">
                <img src={props.data.imageUrls[1].url} alt={props.data.name}
                     className="w-full h-full object-cover rounded-xl"/>
                <img src={props.data.imageUrls[2].url} alt={props.data.name}
                     className="w-full h-full object-cover rounded-xl mt-4"/>
              </div>
            </div>
          </div>
        </Fade>
      </div>
  )
}

class DetailPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header/>
        <hr/>
        <div className="m-12">
          <Title data={itemDetails}/>
        </div>
        <Pictures data={itemDetails}/>
        <div className='container mx-auto font-poppins md:px-40 px-4 '>
          <div className='flex flex-row'>
            <div className='w-7/12 pr-12'>
              <PageDetailDescription data={itemDetails}/>
            </div>
            <div className='w-5/12'>
              <BookingForm data={itemDetails}/>
            </div>
          </div>
        </div>
        <Categories data={itemDetails.categories}/>
        <Testimonial data={itemDetails.testimonial}/>

        <hr/>
        <Footer/>
      </div>
    );
  }
}

export default DetailPage;