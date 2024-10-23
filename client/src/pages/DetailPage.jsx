import { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Testimonial from '../components/Testimonial';
import itemDetails from '../json/itemDetails.json';

class DetailPage extends Component {
    state = {
        value: ""
    };
    handleOnChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Header />
                <hr />
                <Testimonial data={itemDetails.testimonial}/>
                <hr />
                <Footer />
            </div>
        );
    }
}

export default DetailPage;