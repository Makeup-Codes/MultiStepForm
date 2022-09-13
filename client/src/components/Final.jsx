import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'



import {Store} from '../context/Store'

const Final = () => {
    document.title = "Depression Test";
    const role = useContext(Store).calculation;

    const [data, setData] = useState(role)
    // console.log(data);
    // const [message, setMessage] = useState('');




    const ZeroPercent = (
        <div className="bg-teal-200 p-5 font-bold m-4 rounded-xl">
            <p>Your results indicate that you have none, or very few signs of depression.</p>
            <p className="mb-3">
        These results are not meant to be a diagnosis. You can meet with a doctor or therapist to get a diagnosis and/or access therapy or medications. Sharing these results with someone you trust can be a great place to start.</p>
        </div>
    )

    const FiftyPercent = (
        <div className="bg-teal-200 p-5 font-bold m-4 rounded-xl">
            <p className="mb-3">Your results indicate that you have none, or very few signs of depression.
            </p>
            <p>
                These results are not meant to be a diagnosis. You can meet with a doctor or therapist to get a
                diagnosis and/or access therapy or medications. Sharing these results with someone you trust can be a
                great place to start.</p>
        </div>
    )


    const HundredPercent = (
        <div className="bg-teal-200 p-5 font-bold m-4 rounded-xl">
            <p className="mb-3">Your results indicate that you may be experiencing signs of moderately severe depression.
            </p>
            <p>
                These results are not meant to be a diagnosis. You can meet with a doctor or therapist to get a
                diagnosis and/or access therapy or medications. Sharing these results with someone you trust can be a
                great place to start.</p>
        </div>
    )

    const Status = () =>{
        if(data === 0){
            return 'Minimal Depression';
            
        }
        else if( data > 0 && data <= 15 ){
            return 'Moderate Depression';
            
        }
        else if(data > 15 && data <= 30){
            return 'Severe Depression';
            
        }
    }
    
    const MessageData = () => {
    if(data === 0){
        return ZeroPercent;
    }
    else if( data > 0 && data <= 15 ){
        return FiftyPercent;
    }
    else if(data > 15 && data <= 30){
        return HundredPercent;
    }
    
    }

  return (
    <div className="w-100 md:w-3/5 mx-auto rounded-2xl p-4">
        <h3 className="text-cyan-600 text-5xl	font-bold	mb-4">Your Results</h3>
        <div className="container lg:w-2/3 horizantal mt-5 mb-12 mx-auto">
       
        <div className="mx-4 p-4 flex justify-between items-center mb-8">
        <div className="w-full flex items-center">
            <div className="relative flex flex-col items-center text-teal-600">
                <div
                    className="rounded-full transition duration-500 ease-in-out border-8 border-gray-300 h-9 w-10 flex items-center justify-center py-3 border-blue-900 text-white font-bold border-8 bg-blue-900">
                        <span><i className="fa-solid fa-check"></i></span>
                </div>
                <div className="absolute top-0 text-center mt-14 w-100 text-xs text-10px font-medium uppercase text-gray-900">Test
                    Questions</div>
            </div>
            <div className="flex-auto border-t-8 transition duration-500 ease-in-out border-blue-900"></div>
        </div>
        <div className="w-full flex items-center">
            <div className="relative flex flex-col items-center text-teal-600">
            <div
                    className="rounded-full transition duration-500 ease-in-out border-8 border-gray-300 h-9 w-10 flex items-center justify-center py-3 border-blue-900 text-white font-bold border-8 bg-blue-900">
                        <span><i className="fa-solid fa-check"></i></span>
                </div>
                <div className="absolute top-0 text-center mt-14 w-32 text-xs text-10px font-medium uppercase text-gray-400">
                    Demographic Information</div>
            </div>
            <div className="flex-auto border-t-8 transition duration-500 ease-in-out border-blue-900"></div>
        </div>
        <div className="flex items-center">
            <div className="relative flex flex-col items-center text-teal-600">
                <div
                    className="rounded-full transition duration-500 ease-in-out border-8 border-gray-300 h-9 w-10 flex items-center justify-center py-3 border-blue-900 text-white font-bold border-8 bg-emerald-400 ">
                </div>
                <div className="absolute top-0 text-center mt-14 w-32 text-xs text-10px font-medium uppercase text-gray-400">Your
                    Results</div>
            </div>
            <div className="flex-auto border-t-8 transition duration-500 ease-in-out border-gray-300"></div>
        </div>
        </div>

        </div>

        <div className="mt-7 bg-emerald-400 p-10 rounded-tr-3xl rounded-tl-3xl rounded-br-3xl">
            <h3 className="text-base lg:text-xl text-white">
                YOUR DEPRESSION TEST SCORE WAS
            </h3>
            <p className="text-3xl lg:text-5xl font-bold text-white">
                <Status/>
            </p>
        </div>

        <div className="flex flex-col lg:flex-row">
            
            <Link to="/" className="w-100 lg:w-1/3 border rounded-2xl mt-10 text-center bg-blue-900 text-white p-4 font-bold mx-2 hover:bg-teal-200 hover:text-black cursor-pointer">Home</Link>

            <div className="w-100 lg:w-1/3 border rounded-2xl mt-10 text-center bg-blue-900 text-white p-4 font-bold mx-2 hover:bg-teal-200 hover:text-black cursor-pointer">
                Your Score is: {data}/30
            </div>
            <a href="/#" className="w-100 lg:w-1/3 border rounded-2xl mt-10 text-center bg-blue-900 text-white p-4 font-bold mx-2 hover:bg-teal-200 hover:text-black cursor-pointer">Take Another Test</a>
            {/* <div className="w-100 lg:w-1/3 border rounded-2xl mt-10 text-center bg-blue-900 text-white p-4 font-bold mx-auto hover:bg-teal-200 hover:text-black cursor-pointer" >
                Click For Medical Advise <i className="fa-regular fa-hand-pointer"></i>
            </div> */}
        </div>
            <div>
                {/* <Message message={message}/> */}
                <MessageData />
            </div>
    </div>
  )
}

export default Final