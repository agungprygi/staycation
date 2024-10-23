import { useState, useEffect, useRef } from 'react';
import { PropTypes } from 'prop-types';
import { DateRange } from 'react-date-range';
import formatDate from '../utils/formatDate';
import calendarIcon from '../assets/icons/ic_calendar.svg';
import { addDays } from 'date-fns';

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

function DatePicker(props){
    const {value, placeholder, name} = props;
    const [isShow, setIsShow] = useState(false);

    const datePickerChange = (value) => {
        const target = {
            target: {
                value: value.selection,
                name: name
            }
        }
        props.onChange(target);
        setIsShow(false);
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    });
    const refDatePicker = useRef(null);
    const handleClickOutside = (e) => {
        if(refDatePicker && !refDatePicker.current.contains(e.target)){
            setIsShow(false);
        }
    }
    const check = (focus) => {
        focus.indexOf(1) < 0 && setIsShow(false);
    }
   const displayDate = `${value.startDate ? formatDate(value.startDate) : ''}${value.endDate ? ' - ' + formatDate(value.endDate) : ''}`;
   const today = new Date();
   today.setHours(0, 0, 0, 0);
    
    return <div className={["mb-3 font-poppins", props.outerClassName].join(" ")} ref={refDatePicker}>
        <div className="bg-white">
            <div>
                <span className="w-11 h-11 cursor-pointer text-white p-0 rounded-lg text-2xl flex justify-center items-center bg-gray-900 absolute z-50">
                    <img src={calendarIcon} alt="calendar icon" />
                </span>
            </div>
            <input type='text' className="bg-gray-100 px-3 py-2 text-center justify-center w-full h-11 rounded-r-lg" value={displayDate} placeholder={placeholder} readOnly onClick={() => setIsShow(!isShow)}/>
            {isShow && (
                <div className='p-1 bg-white absolute rounded-xl z-10 shadow-lg'>
                    <DateRange
                        editableDateInputs={true}
                        onChange={datePickerChange}
                        moveRangeOnFirstSelection={false}
                        onRangeFocusChange={check}
                        ranges={[value]}
                        minDate={today}
                    />
                </div>
            )}
            
        </div>
       </div>
}

export default function BookingForm(props) {
    const [stateNumber, setStateNumber] = useState({
        value: "1"
    });
    const [stateDate, setStateDate] = useState({
        value: {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    });
    const handleOnChangeNumber = (e) => {
        setStateNumber({[e.target.name]: e.target.value})
    }
    const handleOnChangeDate = (e) => {
        setStateDate({
            value: {
              ...e.target.value,
              endDate: addDays(e.target.value.startDate, parseInt(stateNumber.value))
            }
          });
    }

    return <div className=' w-full py-16 px-20 rounded-2xl border-gray-100 border-2'>
        <h2 className='text-xl font-semibold'>Start Booking</h2>
        <p className='text-teal-500 font-semibold text-4xl'>$ {props.data.price} <span className='text-gray-300 font-light'>per {props.data.unit}</span></p>
        <div className='mt-4'>
            <p className='font-medium'>How long you will stay?</p>
            <Numbers value={stateNumber.value} onChange={handleOnChangeNumber} name="value" max={30} suffix={` ${props.data.unit}`}/>
        </div>
        <div className='mt-4'>
            <p className='font-medium'>Pick a date</p>
            <DatePicker value={stateDate.value} onChange={handleOnChangeDate} name="value" />
        </div>
        <div className='mt-4'>
          <p className='text-gray-300'>You will pay <span className='text-primary font-semibold'>$ {stateNumber.value * props.data.price}</span> per <span className='text-primary'>{stateNumber.value} {props.data.unit}</span></p>
        </div>
        <a href="#" className='bg-primary text-white px-11 py-2 rounded-lg w-full block text-center mt-10 font-semibold'>Continue to Book</a>
    </div>
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

DatePicker.propTypes = {
    value: PropTypes.object,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    outerClassName: PropTypes.string
}