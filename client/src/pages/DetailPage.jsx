import { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Testimonial from '../components/Testimonial';
import itemDetails from '../json/itemDetails.json';
import BookingForm from '../components/BookingForm';

class DetailPage extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Header />
                <hr />
                <BookingForm data={itemDetails}/>
                <Testimonial data={itemDetails.testimonial}/>
                
                <hr />
                <Footer />
            </div>
        );
    }
}

export default DetailPage;