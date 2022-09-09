import React, {useContext} from 'react'
import {Store} from '../context/Store'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const DepressionForm = () => {
  document.title = "Depression Test";
    const {calculation, setCalculation} = useContext(Store)
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onChange = (data) => {
        const sum = parseInt(data.Question1) + parseInt(data.Question2) + parseInt(data.Question3) + parseInt(data.Question4) + parseInt(data.Question5) + parseInt(data.Question6) + parseInt(data.Question7) + parseInt(data.Question8) + parseInt(data.Question9) + parseInt(data.Question10);
        
        // const calculation = (sum/30)*100;
        setCalculation(sum);
        navigate('/personaldata')
    };

      const handlerChange = (e) =>{
        
      }
  return (
    <div className="w-100 md:w-3/5 mx-auto rounded-2xl p-4">
        <div className="container horizantal mt-5">
        <h3 className="text-cyan-600 text-3xl sm:text-5xl	font-bold	mb-4">Depression Test</h3>
        <p className="text-justify md:text-left">There was a problem with your submission. Please review the fields below.</p>
        <div className="mx-4 p-4 flex justify-between items-center mb-8">
        <div className="w-full flex items-center">
            <div className="relative flex flex-col items-center text-teal-600">
                <div
                    className="rounded-full transition duration-500 ease-in-out border-8 border-gray-300 h-12 w-12 flex items-center justify-center py-3 border-blue-900 text-white font-bold border-8 bg-emerald-400">
                </div>
                <div className="absolute top-0 text-center mt-16 w-100 text-xs text-10px font-medium uppercase text-gray-900">Test
                    Questions</div>
            </div>
            <div className="flex-auto border-t-8 transition duration-500 ease-in-out border-blue-900"></div>
        </div>
        <div className="w-full flex items-center">
            <div className="relative flex flex-col items-center text-teal-600">
                <div
                    className="rounded-full transition duration-500 ease-in-out border-8 border-gray-300 h-12 w-12 flex items-center justify-center py-3 ">
                </div>
                <div className="absolute top-0 text-center mt-16 w-32 text-xs text-10px font-medium uppercase text-gray-400">
                    Demographic Information</div>
            </div>
            <div className="flex-auto border-t-8 transition duration-500 ease-in-out border-gray-300"></div>
        </div>
        <div className="flex items-center">
            <div className="relative flex flex-col items-center text-teal-600">
                <div
                    className="rounded-full transition duration-500 ease-in-out border-8 border-gray-300 h-12 w-12 flex items-center justify-center py-3 ">
                </div>
                <div className="absolute top-0 text-center mt-16 w-32 text-xs text-10px font-medium uppercase text-gray-400">Your
                    Results</div>
            </div>
            <div className="flex-auto border-t-8 transition duration-500 ease-in-out border-gray-300"></div>
        </div>
        </div>

        </div>

        
        <div className="p-4">
      <p className="py-2"> <span className="font-bold">Over the last 2 weeks</span>, how often have you been bothered by any of the following problems?</p>
      <p className="py-2 mb-5">Please note, all fields are required.</p>
      {/* {message === true ? <div
    id="alert-2"
    className="flex p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200"
    role="alert"
  >
    <svg
      aria-hidden="true"
      className="flex-shrink-0 w-5 h-5 text-red-700 dark:text-red-800"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
        clipRule="evenodd"
      />
    </svg>
    <span className="sr-only">Info</span>
    <div className="ml-3 text-sm font-medium text-red-700 dark:text-red-800">
      All Feild are required. Please Select all feild
    </div>
  </div>:''} */}
      <form onSubmit={handleSubmit(onChange)}>
        <ul className="list-decimal">
          {/* 1 */}
          <li className="py-5">
            <label htmlFor="1">Little interest or pleasure in doing things</label>
            <div>
              <ul className="my-5 flex flex-col lg:flex-row lg:flex-wrap">
                <li className="my-4 lg:my-3 xl:my-0">
                  <input type="radio" name="question1" className="invisible input" id="notAtAll"  value="0" {...register('Question1', { required: true })} />
                  <label htmlFor="notAtAll" className=" input-button-text uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">not at all</label>
                </li>
                <li className="my-4 lg:my-3 xl:my-0">
                  <input type="radio" className="invisible input" id="severalDays" onChange={handlerChange} value="1" name="question1" {...register('Question1', { required: true })}/>
                  <label htmlFor="severalDays" className="input-button-text uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Several Days</label>
                </li>
                <li className="my-4 lg:my-3 xl:my-0">
                  <input type="radio" className="invisible input" id="moreThanHalfTheDays" onChange={handlerChange} value="2" name="question1" {...register('Question1', { required: true })}/>
                  <label htmlFor="moreThanHalfTheDays" className="input-button-text uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">MORE THAN HALF THE DAYS</label>
                </li>
                <li className="my-4 lg:my-3 xl:my-0">
                  <input type="radio" className="invisible input" id="NearlyEveryDay" onChange={handlerChange} value="3" name="question1" {...register('Question1', { required: true })}/>
                  <label htmlFor="NearlyEveryDay" className="input-button-text uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Nearly Every Days</label>
                </li>
                
              </ul>
            
                {errors.Question1 && <p className="text-red-400 error-message">Feild is required.</p>}
            </div>
          </li>
          {/* 2 */}
          <li className="py-5">
            <label htmlFor="2">Feeling down, depressed, or hopeless</label>
            <div>
              <ul className="my-5 flex flex-col lg:flex-row lg:flex-wrap">
                <li className="my-4 lg:my-3 xl:my-0">
                  <input type="radio" name="question2" className="invisible input" id="notAtAll2" onChange={handlerChange} value="0" {...register('Question2', { required: true })}/>
                  <label htmlFor="notAtAll2" className="input-button-text uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">not at all</label>
                </li>
                <li className="my-4 lg:my-3 xl:my-0">
                  <input type="radio" className="invisible input" id="severalDays2" onChange={handlerChange} value="1" name="question2" {...register('Question2', { required: true })}/>
                  <label htmlFor="severalDays2" className="input-button-text uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Several Days</label>
                </li>
                <li className="my-4 lg:my-3 xl:my-0">
                  <input type="radio" className="invisible input" id="moreThanHalfTheDays2" onChange={handlerChange} value="2" name="question2" {...register('Question2', { required: true })}/>
                  <label htmlFor="moreThanHalfTheDays2" className=" input-button-text uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">MORE THAN HALF THE DAYS</label>
                </li>
                <li className="my-4 lg:my-3 xl:my-0">
                  <input type="radio" className="invisible input" id="NearlyEveryDay2" onChange={handlerChange} value="3" name="question2" {...register('Question2', { required: true })}/>
                  <label htmlFor="NearlyEveryDay2" className="input-button-text uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color hover:bg-gray-300 hover:text-white">Nearly Every Days</label>
                </li>
              </ul>
              {errors.Question2 && <p className="text-red-400 error-message">Feild is required.</p>}
            </div>
          </li>
          {/* 3 */}
          <li className="py-5">
            <label htmlFor="3">Trouble falling or staying asleep, or sleeping too much
            </label>
            <div>
              <ul className="my-5 flex flex-col lg:flex-row lg:flex-wrap">
                <li className="my-4 lg:my-3 xl:my-0">
                  <input type="radio" name="question3" className="invisible input" id="notAtAll3" onChange={handlerChange} value="0" {...register('Question3', { required: true })} />
                  <label htmlFor="notAtAll3" className="input-button-text uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">not at all</label>
                </li>
                <li className="my-4 lg:my-3 xl:my-0">
                  <input type="radio" className="invisible input" id="severalDays3" onChange={handlerChange} value="1" name="question3" {...register('Question3', { required: true })}/>
                  <label htmlFor="severalDays3" className="input-button-text uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Several Days</label>
                </li>
                <li className="my-4 lg:my-3 xl:my-0">
                  <input type="radio" className="invisible input" id="moreThanHalfTheDays3" onChange={handlerChange} value="2" name="question3" {...register('Question3', { required: true })}/>
                  <label htmlFor="moreThanHalfTheDays3" className="input-button-text uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">MORE THAN HALF THE DAYS</label>
                </li>
                <li className="my-4 lg:my-3 xl:my-0">
                  <input type="radio" className="invisible input" id="NearlyEveryDay3" onChange={handlerChange} value="3" name="question3" {...register('Question3', { required: true })}/>
                  <label htmlFor="NearlyEveryDay3" className="input-button-text uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Nearly Every Days</label>
                </li>
              </ul>
              {errors.Question3 && <p className="text-red-400 error-message">Feild is required.</p>}
            </div>
          </li>
          {/* 4 */}
          <li className="py-5">
            <label htmlFor="4">Feeling tired or having little energy</label>
            <div>
              <ul className="my-5 flex flex-col lg:flex-row lg:flex-wrap">
                <li className="my-4 lg:my-3 xl:my-0">
                  <input type="radio" name="question4" className="invisible input" id="notAtAll4" onChange={handlerChange} value="0" {...register('Question4', { required: true })} />
                  <label htmlFor="notAtAll4" className="input-button-text uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">not at all</label>
                </li>
                <li className="my-4 lg:my-3 xl:my-0">
                  <input type="radio" className="invisible input" id="severalDays4" onChange={handlerChange} value="1" name="question4" {...register('Question4', { required: true })}/>
                  <label htmlFor="severalDays4" className="input-button-text uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Several Days</label>
                </li>
                <li className="my-4 lg:my-3 xl:my-0">
                  <input type="radio" className="invisible input" id="moreThanHalfTheDays4" onChange={handlerChange} value="2" name="question4"{...register('Question4', { required: true })}/>
                  <label htmlFor="moreThanHalfTheDays4" className="input-button-text uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">MORE THAN HALF THE DAYS</label>
                </li>
                <li className="my-4 lg:my-3 xl:my-0">
                  <input type="radio" className="invisible input" id="NearlyEveryDay4" onChange={handlerChange} value="3" name="question4" {...register('Question4', { required: true })}/>
                  <label htmlFor="NearlyEveryDay4" className="input-button-text uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Nearly Every Days</label>
                </li>
              </ul>
              {errors.Question4 && <p className="text-red-400 error-message">Feild is required.</p>}
            </div>
          </li>
          {/* 5 */}
          <li className="py-5">
            <label htmlFor="5">Poor appetite or overeating</label>
            <div>
              <ul className="my-5 flex flex-col lg:flex-row lg:flex-wrap">
                <li className="my-4 lg:my-3 xl:my-0">
                  <input type="radio" name="question5" className="invisible input" id="notAtAll5" onChange={handlerChange} value="0" {...register('Question5', { required: true })}/>
                  <label htmlFor="notAtAll5" className="input-button-text uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">not at all</label>
                </li>
                <li className="my-4 lg:my-3 xl:my-0">
                  <input type="radio" className="invisible input" id="severalDays5" onChange={handlerChange} value="1" name="question5"{...register('Question5', { required: true })}/>
                  <label htmlFor="severalDays5" className="input-button-text uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Several Days</label>
                </li>
                <li className="my-4 lg:my-3 xl:my-0">
                  <input type="radio" className="invisible input" id="moreThanHalfTheDays5" onChange={handlerChange} value="2" name="question5" {...register('Question5', { required: true })}/>
                  <label htmlFor="moreThanHalfTheDays5" className="input-button-text uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">MORE THAN HALF THE DAYS</label>
                </li>
                <li className="my-4 lg:my-3 xl:my-0">
                  <input type="radio" className="invisible input" id="NearlyEveryDay5" onChange={handlerChange} value="3" name="question5" {...register('Question5', { required: true })}/>
                  <label htmlFor="NearlyEveryDay5" className="input-button-text uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Nearly Every Days</label>
                </li>
              </ul>
              {errors.Question5 && <p className="text-red-400 error-message">Feild is required.</p>}
            </div>
          </li>
          {/* 6 */}
          <li className="py-5">
            <label htmlFor="6">Feeling bad about yourself - or that you are a failure or have let yourself or your family down</label>
            <div>
              <ul className="my-5 flex flex-col lg:flex-row lg:flex-wrap">
                <li className="my-4 lg:my-3 xl:my-0">
                  <input type="radio" name="question6" className="invisible input" id="notAtAll6" onChange={handlerChange} value="0" {...register('Question6', { required: true })}/>
                  <label htmlFor="notAtAll6" className="input-button-text uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">not at all</label>
                </li>
                <li className="my-4 lg:my-3 xl:my-0">
                  <input type="radio" className="invisible input" id="severalDays6" onChange={handlerChange} value="1" name="question6" {...register('Question6', { required: true })}/>
                  <label htmlFor="severalDays6" className="input-button-text uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Several Days</label>
                </li>
                <li className="my-4 lg:my-3 xl:my-0">
                  <input type="radio" className="invisible input" id="moreThanHalfTheDays6" onChange={handlerChange} value="2" name="question6" {...register('Question6', { required: true })}/>
                  <label htmlFor="moreThanHalfTheDays6" className="input-button-text uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">MORE THAN HALF THE DAYS</label>
                </li>
                <li className="my-4 lg:my-3 xl:my-0">
                  <input type="radio" className="invisible input" id="NearlyEveryDay6" onChange={handlerChange} value="3" name="question6" {...register('Question6', { required: true })}/>
                  <label htmlFor="NearlyEveryDay6" className="input-button-textuppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Nearly Every Days</label>
                </li>
              </ul>
              {errors.Question6 && <p className="text-red-400 error-message">Feild is required.</p>}
            </div>
          </li>
          {/* 7 */}
          <li className="py-5">
            <label htmlFor="7">Trouble concentrating on things, such as reading the newspaper or watching television</label>
            <div>
              <ul className="my-5 flex flex-col lg:flex-row lg:flex-wrap">
                <li className="my-4 lg:my-3 xl:my-0">
                  <input type="radio" name="question7" className="invisible input" id="notAtAll7" onChange={handlerChange} value="0" {...register('Question7', { required: true })}/>
                  <label htmlFor="notAtAll7" className="input-button-text uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">not at all</label>
                </li>
                <li className="my-4 lg:my-3 xl:my-0">
                  <input type="radio" className="invisible input" id="severalDays7" onChange={handlerChange} value="1" name="question7" {...register('Question7', { required: true })}/>
                  <label htmlFor="severalDays7" className="input-button-text uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Several Days</label>
                </li>
                <li className="my-4 lg:my-3 xl:my-0">
                  <input type="radio" className="invisible input" id="moreThanHalfTheDays7" onChange={handlerChange} value="2" name="question7" {...register('Question7', { required: true })}/>
                  <label htmlFor="moreThanHalfTheDays7" className="input-button-text uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">MORE THAN HALF THE DAYS</label>
                </li>
                <li className="my-4 lg:my-3 xl:my-0">
                  <input type="radio" className="invisible input" id="NearlyEveryDay7" onChange={handlerChange} value="3" name="question7" {...register('Question7', { required: true })}/>
                  <label htmlFor="NearlyEveryDay7" className="input-button-text uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Nearly Every Days</label>
                </li>
              </ul>
              {errors.Question7 && <p className="text-red-400 error-message">Feild is required.</p>}
            </div>
          </li>
          {/* 8 */}
          <li className="py-5">
            <label htmlFor="8">Moving or speaking so slowly that other people could have noticed</label>
            <div>Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual</div>
            <div>
              <ul className="my-5 flex flex-col lg:flex-row lg:flex-wrap">
                <li className="my-4 lg:my-3 xl:my-0">
                  <input type="radio" name="question8" className="invisible input" id="notAtAll8" onChange={handlerChange} value="0" {...register('Question8', { required: true })}/>
                  <label htmlFor="notAtAll8" className="input-button-text uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">not at all</label>
                </li>
                <li className="my-4 lg:my-3 xl:my-0">
                  <input type="radio" className="invisible input" id="severalDays8" value="1" name="question8" {...register('Question8', { required: true })}/>
                  <label htmlFor="severalDays8" className="input-button-text uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Several Days</label>
                </li>
                <li className="my-4 lg:my-3 xl:my-0">
                  <input type="radio" className="invisible input" id="moreThanHalfTheDays8" value="2" name="question8" {...register('Question8', { required: true })}/>
                  <label htmlFor="moreThanHalfTheDays8" className="input-button-text uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">MORE THAN HALF THE DAYS</label>
                </li>
                <li className="my-4 lg:my-3 xl:my-0">
                  <input type="radio" className="invisible input" id="NearlyEveryDay8" value="3" name="question8" {...register('Question8', { required: true })}/>
                  <label htmlFor="NearlyEveryDay8" className="input-button-text uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Nearly Every Days</label>
                </li>
              </ul>
              {errors.Question8 && <p className="text-red-400 error-message">Feild is required.</p>}
            </div>
          </li>
          {/* 9 */}
          <li className="py-5">
            <label htmlFor="9">Thoughts that you would be better off dead, or of hurting yourself</label>
            <div>
              <ul className="my-5 flex flex-col lg:flex-row lg:flex-wrap">
                <li className="my-4 lg:my-3 xl:my-0">
                  <input type="radio" name="question9" className="invisible input" id="notAtAll9" onChange={handlerChange} value="0" {...register('Question9', { required: true })}/>
                  <label htmlFor="notAtAll9" className="input-button-text uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">not at all</label>
                </li>
                <li className="my-4 lg:my-3 xl:my-0">
                  <input type="radio" className="invisible input" id="severalDays9" onChange={handlerChange} value="1" name="question9" {...register('Question9', { required: true })}/>
                  <label htmlFor="severalDays9" className="input-button-text uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Several Days</label>
                </li>
                <li className="my-4 lg:my-3 xl:my-0">
                  <input type="radio" className="invisible input" id="moreThanHalfTheDays9" onChange={handlerChange} value="2" name="question9" {...register('Question9', { required: true })}/>
                  <label htmlFor="moreThanHalfTheDays9" className="input-button-text uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">MORE THAN HALF THE DAYS</label>
                </li>
                <li className="my-4 lg:my-3 xl:my-0">
                  <input type="radio" className="invisible input" id="NearlyEveryDay9" onChange={handlerChange} value="3" name="question9" {...register('Question9', { required: true })}/>
                  <label htmlFor="NearlyEveryDay9" className="input-button-text uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Nearly Every Days</label>
                </li>
              </ul>
              {errors.Question9 && <p className="text-red-400 error-message">Feild is required.</p>}
            </div>
          </li>
          {/* 10 */}
          <li className="py-5">
            <label htmlFor="10"> If you checked off any problems, how difficult have these problems made it for you at work, home, or with other people?</label>
            <div>
              <ul className="my-5 flex flex-col lg:flex-row lg:flex-wrap">
                <li className="my-4 lg:my-3 xl:my-0">
                  <input type="radio" name="question10" className="invisible input" id="notdifficultatall" onChange={handlerChange} value="0" {...register('Question10', { required: true })}/>
                  <label htmlFor="notdifficultatall" className="input-button-text uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">not difficult at all</label>
                </li>
                <li className="my-4 lg:my-3 xl:my-0">
                  <input type="radio" className="invisible input" id="SomeWhatDifficult" onChange={handlerChange} value="1" name="question10" {...register('Question10', { required: true })}/>
                  <label htmlFor="SomeWhatDifficult" className="input-button-text uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">SomeWhat Difficult</label>
                </li>
                <li className="my-4 lg:my-3 xl:my-0">
                  <input type="radio" className="invisible input" id="VeryDifficult" onChange={handlerChange} value="2" name="question10" {...register('Question10', { required: true })}/>
                  <label htmlFor="VeryDifficult" className="input-button-text uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Very Difficult</label>
                </li>
                <li className="my-4 lg:my-3 xl:my-0">
                  <input type="radio" className="invisible input" id="ExtermlyDifficult" onChange={handlerChange} value="3" name="question10" {...register('Question10', { required: true })}/>
                  <label htmlFor="ExtermlyDifficult" className="input-button-text uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Extermly Difficult</label>
                </li>
              </ul>
              {errors.Question10 && <p className="text-red-400 error-message">Feild is required.</p>}
            </div>
          </li>
        </ul>


        {/* <button
      onClick={()=>handleClick()}
      className={`bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300  hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ${currentStep === 1 ? "opacity-50 invisible" : ""}`}>Back</button>  */}
      {/* Next Button */}
      <div className="flex justify-end">
     <button
      className="bg-cyan-600 text-white uppercase py-4 px-12 rounded-tr-xl rounded-tl-xl rounded-br-xl font-semibold cursor-pointer  hover:bg-emerald-300 hover:text-white transition duration-200 ease-in-out">
        Next
      </button>
      </div>


      </form>
    </div>
    </div>
  )
}

export default DepressionForm