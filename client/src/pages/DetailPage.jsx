import { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Testimonial from '../components/Testimonial';
import itemDetails from '../json/itemDetails.json';
import BookingForm from '../components/BookingForm';
import PageDetailDescription from '../components/PageDetailDescription';

class DetailPage extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Header />
                <hr />
                <div className='container mx-auto font-poppins md:px-40 px-4 '>
                    <div className='flex flex-row'>
                        <div className='w-7/12 pr-4'>
                            <PageDetailDescription data={itemDetails}/>
                        </div>
                        <div className='w-5/12'>
                            <BookingForm data={itemDetails}/>
                        </div>
                    </div>
                </div>
                <Testimonial data={itemDetails.testimonial}/>
                
                <hr />
                <Footer />
            </div>
        );
    }
}

export default DetailPage;