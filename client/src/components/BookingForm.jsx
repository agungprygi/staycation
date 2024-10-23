import { useState, useEffect, useRef } from 'react';
import { PropTypes } from 'prop-types';
import { DateRangePicker } from 'react-date-range';
import formatDate from '../utils/formatDate';
import calendarIcon from '../assets/icons/ic_calendar.svg';

function Numbers(props){
    const {value, placeholder, name, min, max, prefix, suffix} = props;
    const [inputValue, setInputValue] = useState(`${prefix}${value}${suffix}`);

    const onChange = (e) => {
        let value = String(e.target.value);
        if (prefix) value = value.replace(prefix, '');
        if (suffix) value = value.replace(suffix, '');

        const patternNumeric = new RegExp("[0-9]*");
        const isNumeric = patternNumeric.test(value);

        if(isNumeric && +value <= max && +value >= min){
            props.onChange({
                target: {
                    name: name,
                    value: +value
                }
            });
            setInputValue(`${prefix}${value}${suffix}`);
        }
    };
    const minus = () => {
        value > min && onChange({target: {name: name, value: +value - 1}})
    };
    const plus = () => {
        value < max && onChange({target: {name: name, value: +value + 1}})
    };
    return <>
       <div className={["mb-3 font-poppins", props.outerClassName].join(" ")}>
        <div className="bg-white flex items-center">
            <div>
                <span className="w-11 h-11 cursor-pointer text-white p-0 rounded-lg text-2xl flex justify-center items-center select-none bg-red-600" onClick={minus}>
                    -
                </span>
            </div>
            <input className="bg-gray-100 px-3 py-2 text-center min-h-11" min={min} max={max} name={name} pattern="[0-9]*" placeholder={placeholder ? placeholder : 0} value={String(inputValue)} onChange={onChange}/>
            <div className="w-11 h-11 cursor-pointer text-white p-0 rounded-lg text-2xl flex justify-center items-center select-none bg-teal-600" onClick={plus}>
                +
            </div>
        </div>
       </div>
    </>
}


export default function BookingForm() {
  return (
    <div>BookingForm</div>
  )
}

Numbers.defaultProps = {
    min: 1,
    max: 1,
    prefix: '',
    suffix: ''
}

Numbers.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    outerClassName: PropTypes.string
}