import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
// import {Store} from '../context/Store'
import { useForm } from 'react-hook-form';
import axios from 'axios'

const PersonalInfo = () => {
    document.title = "Depression Test";
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = async (data) => {
          
          const {forWhom, age, gender, raceOrEthnicity, householdIncome, usOrNot, countryOrState, postalCode, populationType, caringType, LGBTQSexualOrientation,traumaExperience, previousTreatment, mainMentalHealthProblems, healthInsurance, generalHealthCondition} = data;
          
        //   console.log(JSON.stringify({forWhom, age, gender,raceOrEthnicity, householdIncome, usOrNot, countryOrState, postalCode, populationType, caringType, LGBTQSexualOrientation, traumaExperience, previousTreatment, mainMentalHealthProblems, healthInsurance, generalHealthCondition}));
 
            const response = await axios.post('https://depression-tester-details.herokuapp.com/user/userInfo',{forWhom, age, gender,raceOrEthnicity, householdIncome, usOrNot, countryOrState, postalCode, populationType, caringType, LGBTQSexualOrientation, traumaExperience, previousTreatment, mainMentalHealthProblems, healthInsurance, generalHealthCondition})
            console.log(response);
            navigate('/final')
      }

    const [living, setLiving] = useState('');
    const [textBoxs, setTextBoxs] = useState('');
    const [caringType, setCaringType] = useState('');
    const [LGBTQSexualOrientation, setLGBTQSexualOrientation] = useState('');
    const [traumaExperience, setTraumaExperience] = useState('');

    const textBox = (e) => {
        if(e.target.value === 'Non-Binary'){
            setTextBoxs(textBoxData)
        }else{
            setTextBoxs('')
        }
    }

    const textBoxData = (
        <>
            <input type="text" name="question1" className="border border-gray-400 input w-80 p-3 rounded-full" id="nonbinaryText" placeholder="How would you describe your gender?"
            {...register('gender')} />
        </>
    )

    const usaornot = (e) => {
        if(e.target.value === 'I LIVE IN THE UNITED STATES'){
            setLiving(usa)
        }
        else if(e.target.value === 'I LIVE IN ANOTHER COUNTRY'){
            setLiving(notUsa)
        }
    }

    const usa = (
        <>
            <li>
                <h4 className="text-xl mt-2">
                    State
                </h4>
                <div>
                    <ul className="my-5 flex">
                        <li>
                            <select className="px-4 py-3 rounded-full border border-gray-300 rounded-full w-52"
                                defaultValue="" {...register('countryOrState', { required: true })}>
                                <option value=""></option>
                                <option value="Alabama">Alabama</option>
                                <option value="Alaska">Alaska</option>
                                <option value="Arizona">Arizona</option>
                                <option value="Arkansas">Arkansas</option>
                                <option value="California">California</option>
                                <option value="Colorado">Colorado</option>
                                <option value="Connecticut">Connecticut</option>
                                <option value="Delaware">Delaware</option>
                                <option value="District of Columbia">District of Columbia</option>
                                <option value="Florida">Florida</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Hawaii">Hawaii</option>
                                <option value="Idaho">Idaho</option>
                                <option value="Illinois">Illinois</option>
                                <option value="Indiana">Indiana</option>
                                <option value="Iowa">Iowa</option>
                                <option value="Kansas">Kansas</option>
                                <option value="Kentucky">Kentucky</option>
                                <option value="Louisiana">Louisiana</option>
                                <option value="Maine">Maine</option>
                                <option value="Maryland">Maryland</option>
                                <option value="Massachusetts">Massachusetts</option>
                                <option value="Michigan">Michigan</option>
                                <option value="Minnesota">Minnesota</option>
                                <option value="Mississippi">Mississippi</option>
                                <option value="Missouri">Missouri</option>
                                <option value="Montana">Montana</option>
                                <option value="Nebraska">Nebraska</option>
                                <option value="Nevada">Nevada</option>
                                <option value="New Hampshire">New Hampshire</option>
                                <option value="New Jersey">New Jersey</option>
                                <option value="New Mexico">New Mexico</option>
                                <option value="New York">New York</option>
                                <option value="North Carolina">North Carolina</option>
                                <option value="North Dakota">North Dakota</option>
                                <option value="Ohio">Ohio</option>
                                <option value="Oklahoma">Oklahoma</option>
                                <option value="Oregon">Oregon</option>
                                <option value="Pennsylvania">Pennsylvania</option>
                                <option value="Rhode Island">Rhode Island</option>
                                <option value="South Carolina">South Carolina</option>
                                <option value="South Dakota">South Dakota</option>
                                <option value="Tennessee">Tennessee</option>
                                <option value="Texas">Texas</option>
                                <option value="Utah">Utah</option>
                                <option value="Vermont">Vermont</option>
                                <option value="Virginia">Virginia</option>
                                <option value="Washington">Washington</option>
                                <option value="West Virginia">West Virginia</option>
                                <option value="Wisconsin">Wisconsin</option>
                                <option value="Wyoming">Wyoming</option>
                                <option value="I live in a U.S. Territory">I live in a U.S. Territory</option>
                            </select>
                        </li>

                    </ul>
                    {errors.countryOrState && <p className="text-red-400 error-message">This Field is required.</p>}
                </div>
            </li>
        </>
    )

    const notUsa = (
        <>
            <li>
                <h4 className="text-xl mt-2">
                What country do you live in?
                </h4>
                <div>
                    <ul className="my-5 flex">
                        <li>
                            <select className="px-4 py-3 rounded-full border border-gray-300 rounded-full w-52"
                                defaultValue="" {...register('countryOrState', { required: true })}>
                                <option value=""></option>
                                <option value="Afghanistan">Afghanistan</option>
                                <option value="Albania">Albania</option>
                                <option value="Algeria">Algeria</option>
                                <option value="American Samoa">American Samoa</option>
                                <option value="Andorra">Andorra</option>
                                <option value="Angola">Angola</option>
                                <option value="Anguilla">Anguilla</option>
                                <option value="Antarctica">Antarctica</option>
                                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Armenia">Armenia</option>
                                <option value="Aruba">Aruba</option>
                                <option value="Australia">Australia</option>
                                <option value="Austria">Austria</option>
                                <option value="Azerbaijan">Azerbaijan</option>
                                <option value="Bahamas">Bahamas</option>
                                <option value="Bahrain">Bahrain</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Barbados">Barbados</option>
                                <option value="Belarus">Belarus</option>
                                <option value="Belgium">Belgium</option>
                                <option value="Belize">Belize</option>
                                <option value="Benin">Benin</option>
                                <option value="Bermuda">Bermuda</option>
                                <option value="Bhutan">Bhutan</option>
                                <option value="Bolivia">Bolivia</option>
                                <option value="Bonaire, Sint Eustatius and Saba">Bonaire, Sint Eustatius and Saba
                                </option>
                                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                <option value="Botswana">Botswana</option>
                                <option value="Bouvet Island">Bouvet Island</option>
                                <option value="Brazil">Brazil</option>
                                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                <option value="Brunei Darussalam">Brunei Darussalam</option>
                                <option value="Bulgaria">Bulgaria</option>
                                <option value="Burkina Faso">Burkina Faso</option>
                                <option value="Burundi">Burundi</option>
                                <option value="Cambodia">Cambodia</option>
                                <option value="Cameroon">Cameroon</option>
                                <option value="Canada">Canada</option>
                                <option value="Cape Verde">Cape Verde</option>
                                <option value="Cayman Islands">Cayman Islands</option>
                                <option value="Central African Republic">Central African Republic</option>
                                <option value="Chad">Chad</option>
                                <option value="Chile">Chile</option>
                                <option value="China">China</option>
                                <option value="Christmas Island">Christmas Island</option>
                                <option value="Cocos Islands">Cocos Islands</option>
                                <option value="Colombia">Colombia</option>
                                <option value="Comoros">Comoros</option>
                                <option value="Congo, Democratic Republic of the">Congo, Democratic Republic of the
                                </option>
                                <option value="Congo, Republic of the">Congo, Republic of the</option>
                                <option value="Cook Islands">Cook Islands</option>
                                <option value="Costa Rica">Costa Rica</option>
                                <option value="Croatia">Croatia</option>
                                <option value="Cuba">Cuba</option>
                                <option value="Curaçao">Curaçao</option>
                                <option value="Cyprus">Cyprus</option>
                                <option value="Czech Republic">Czech Republic</option>
                                <option value="Côte d'Ivoire">Côte d'Ivoire</option>
                                <option value="Denmark">Denmark</option>
                                <option value="Djibouti">Djibouti</option>
                                <option value="Dominica">Dominica</option>
                                <option value="Dominican Republic">Dominican Republic</option>
                                <option value="Ecuador">Ecuador</option>
                                <option value="Egypt">Egypt</option>
                                <option value="El Salvador">El Salvador</option>
                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                <option value="Eritrea">Eritrea</option>
                                <option value="Estonia">Estonia</option>
                                <option value="Eswatini (Swaziland)">Eswatini (Swaziland)</option>
                                <option value="Ethiopia">Ethiopia</option>
                                <option value="Falkland Islands">Falkland Islands</option>
                                <option value="Faroe Islands">Faroe Islands</option>
                                <option value="Fiji">Fiji</option>
                                <option value="Finland">Finland</option>
                                <option value="France">France</option>
                                <option value="French Guiana">French Guiana</option>
                                <option value="French Polynesia">French Polynesia</option>
                                <option value="French Southern Territories">French Southern Territories</option>
                                <option value="Gabon">Gabon</option>
                                <option value="Gambia">Gambia</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Germany">Germany</option>
                                <option value="Ghana">Ghana</option>
                                <option value="Gibraltar">Gibraltar</option>
                                <option value="Greece">Greece</option>
                                <option value="Greenland">Greenland</option>
                                <option value="Grenada">Grenada</option>
                                <option value="Guadeloupe">Guadeloupe</option>
                                <option value="Guam">Guam</option>
                                <option value="Guatemala">Guatemala</option>
                                <option value="Guernsey">Guernsey</option>
                                <option value="Guinea">Guinea</option>
                                <option value="Guinea-Bissau">Guinea-Bissau</option>
                                <option value="Guyana">Guyana</option>
                                <option value="Haiti">Haiti</option>
                                <option value="Heard and McDonald Islands">Heard and McDonald Islands</option>
                                <option value="Holy See">Holy See</option>
                                <option value="Honduras">Honduras</option>
                                <option value="Hong Kong">Hong Kong</option>
                                <option value="Hungary">Hungary</option>
                                <option value="Iceland">Iceland</option>
                                <option value="India">India</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Iran">Iran</option>
                                <option value="Iraq">Iraq</option>
                                <option value="Ireland">Ireland</option>
                                <option value="Isle of Man">Isle of Man</option>
                                <option value="Israel">Israel</option>
                                <option value="Italy">Italy</option>
                                <option value="Jamaica">Jamaica</option>
                                <option value="Japan">Japan</option>
                                <option value="Jersey">Jersey</option>
                                <option value="Jordan">Jordan</option>
                                <option value="Kazakhstan">Kazakhstan</option>
                                <option value="Kenya">Kenya</option>
                                <option value="Kiribati">Kiribati</option>
                                <option value="Kuwait">Kuwait</option>
                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                <option value="Lao People's Democratic Republic">Lao People's Democratic Republic
                                </option>
                                <option value="Latvia">Latvia</option>
                                <option value="Lebanon">Lebanon</option>
                                <option value="Lesotho">Lesotho</option>
                                <option value="Liberia">Liberia</option>
                                <option value="Libya">Libya</option>
                                <option value="Liechtenstein">Liechtenstein</option>
                                <option value="Lithuania">Lithuania</option>
                                <option value="Luxembourg">Luxembourg</option>
                                <option value="Macau">Macau</option>
                                <option value="Macedonia">Macedonia</option>
                                <option value="Madagascar">Madagascar</option>
                                <option value="Malawi">Malawi</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Maldives">Maldives</option>
                                <option value="Mali">Mali</option>
                                <option value="Malta">Malta</option>
                                <option value="Marshall Islands">Marshall Islands</option>
                                <option value="Martinique">Martinique</option>
                                <option value="Mauritania">Mauritania</option>
                                <option value="Mauritius">Mauritius</option>
                                <option value="Mayotte">Mayotte</option>
                                <option value="Mexico">Mexico</option>
                                <option value="Micronesia">Micronesia</option>
                                <option value="Moldova">Moldova</option>
                                <option value="Monaco">Monaco</option>
                                <option value="Mongolia">Mongolia</option>
                                <option value="Montenegro">Montenegro</option>
                                <option value="Montserrat">Montserrat</option>
                                <option value="Morocco">Morocco</option>
                                <option value="Mozambique">Mozambique</option>
                                <option value="Myanmar">Myanmar</option>
                                <option value="Namibia">Namibia</option>
                                <option value="Nauru">Nauru</option>
                                <option value="Nepal">Nepal</option>
                                <option value="Netherlands">Netherlands</option>
                                <option value="New Caledonia">New Caledonia</option>
                                <option value="New Zealand">New Zealand</option>
                                <option value="Nicaragua">Nicaragua</option>
                                <option value="Niger">Niger</option>
                                <option value="Nigeria">Nigeria</option>
                                <option value="Niue">Niue</option>
                                <option value="Norfolk Island">Norfolk Island</option>
                                <option value="North Korea">North Korea</option>
                                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                <option value="Norway">Norway</option>
                                <option value="Oman">Oman</option>
                                <option value="Pakistan">Pakistan</option>
                                <option value="Palau">Palau</option>
                                <option value="Palestine, State of">Palestine, State of</option>
                                <option value="Panama">Panama</option>
                                <option value="Papua New Guinea">Papua New Guinea</option>
                                <option value="Paraguay">Paraguay</option>
                                <option value="Peru">Peru</option>
                                <option value="Philippines">Philippines</option>
                                <option value="Pitcairn">Pitcairn</option>
                                <option value="Poland">Poland</option>
                                <option value="Portugal">Portugal</option>
                                <option value="Puerto Rico">Puerto Rico</option>
                                <option value="Qatar">Qatar</option>
                                <option value="Romania">Romania</option>
                                <option value="Russia">Russia</option>
                                <option value="Rwanda">Rwanda</option>
                                <option value="Réunion">Réunion</option>
                                <option value="Saint Barthélemy">Saint Barthélemy</option>
                                <option value="Saint Helena">Saint Helena</option>
                                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                <option value="Saint Lucia">Saint Lucia</option>
                                <option value="Saint Martin">Saint Martin</option>
                                <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines
                                </option>
                                <option value="Samoa">Samoa</option>
                                <option value="San Marino">San Marino</option>
                                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                <option value="Saudi Arabia">Saudi Arabia</option>
                                <option value="Senegal">Senegal</option>
                                <option value="Serbia">Serbia</option>
                                <option value="Seychelles">Seychelles</option>
                                <option value="Sierra Leone">Sierra Leone</option>
                                <option value="Singapore">Singapore</option>
                                <option value="Sint Maarten">Sint Maarten</option>
                                <option value="Slovakia">Slovakia</option>
                                <option value="Slovenia">Slovenia</option>
                                <option value="Solomon Islands">Solomon Islands</option>
                                <option value="Somalia">Somalia</option>
                                <option value="South Africa">South Africa</option>
                                <option value="South Georgia">South Georgia</option>
                                <option value="South Korea">South Korea</option>
                                <option value="South Sudan">South Sudan</option>
                                <option value="Spain">Spain</option>
                                <option value="Sri Lanka">Sri Lanka</option>
                                <option value="Sudan">Sudan</option>
                                <option value="Suriname">Suriname</option>
                                <option value="Svalbard and Jan Mayen Islands">Svalbard and Jan Mayen Islands</option>
                                <option value="Sweden">Sweden</option>
                                <option value="Switzerland">Switzerland</option>
                                <option value="Syria">Syria</option>
                                <option value="Taiwan">Taiwan</option>
                                <option value="Tajikistan">Tajikistan</option>
                                <option value="Tanzania">Tanzania</option>
                                <option value="Thailand">Thailand</option>
                                <option value="Timor-Leste">Timor-Leste</option>
                                <option value="Togo">Togo</option>
                                <option value="Tokelau">Tokelau</option>
                                <option value="Tonga">Tonga</option>
                                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                <option value="Tunisia">Tunisia</option>
                                <option value="Turkey">Turkey</option>
                                <option value="Turkmenistan">Turkmenistan</option>
                                <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                <option value="Tuvalu">Tuvalu</option>
                                <option value="US Minor Outlying Islands">US Minor Outlying Islands</option>
                                <option value="Uganda">Uganda</option>
                                <option value="Ukraine">Ukraine</option>
                                <option value="United Arab Emirates">United Arab Emirates</option>
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="United States">United States</option>
                                <option value="Uruguay">Uruguay</option>
                                <option value="Uzbekistan">Uzbekistan</option>
                                <option value="Vanuatu">Vanuatu</option>
                                <option value="Venezuela">Venezuela</option>
                                <option value="Vietnam">Vietnam</option>
                                <option value="Virgin Islands, British">Virgin Islands, British</option>
                                <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                                <option value="Wallis and Futuna">Wallis and Futuna</option>
                                <option value="Western Sahara">Western Sahara</option>
                                <option value="Yemen">Yemen</option>
                                <option value="Zambia">Zambia</option>
                                <option value="Zimbabwe">Zimbabwe</option>
                                <option value="Åland Islands">Åland Islands</option>
                            </select>
                        </li>

                    </ul>
                    {errors.countryOrState && <p className="text-red-400 error-message">This Field is required.</p>}
                </div>
            </li>
        </>
    )
    const caringTypeData = (
        <>
        <p>Are you caring for someone with a mental or physical health condition?</p>
            <ul className="my-5 flex flex-col">
                                <li className="my-2">
                                    <input type="radio" name="question1" className="invisible input-checkbox"
                                        id="caringType1" value="Mental health condition"
                                        {...register('caringType')} />
                                    <label htmlFor="caringType1"
                                        className="label py-2 px-4 font-semibold cursor-pointer "><span>Mental health condition</span></label>
                                </li>
                                <li className="my-2">
                                    <input type="radio" name="question1" className="invisible input-checkbox"
                                        id="caringType2"
                                        value="Physical health condition"
                                        {...register('caringType')}/>
                                    <label htmlFor="caringType2"
                                        className="label py-2 px-4 font-semibold cursor-pointer "><span>Physical health condition</span></label>
                                </li>
                                <li className="my-2">
                                    <input type="radio" name="question1" className="invisible input-checkbox"
                                        id="caringType3" value="Both mental and physical health conditions" {...register('caringType')} />
                                    <label htmlFor="caringType3"
                                        className="label py-2 px-4 font-semibold cursor-pointer "><span>Both mental and physical health conditions</span></label>
                                </li>
                            </ul>
        </>
    )
    const populationTypeTwo = (e) =>{
        if(e.target.checked===true){
            setCaringType(caringTypeData)
        }
        else if(e.target.checked===false){
            setCaringType('')
        }else{
            setCaringType('')
        }
    }
    const LGBTQSexualData = (
        <>
            <li>
                        <h4 className="mt-2">
                        Which of the following best describes your sexual orientation?
                        </h4>
                    <div>
                    <ul className="my-5 flex">
                        <li>
                        <select className="px-4 py-3 rounded-full border border-gray-300 rounded-full w-52" defaultValue="" {...register('LGBTQSexualOrientation')} >
                        <option value=""></option>
                        <option value="Lesbian or Gay">Lesbian or Gay</option>
                        <option value="Bisexual">Bisexual</option>
                        <option value="Queer">Queer</option>
                        <option value="Pansexual">Pansexual</option>
                        <option value="Asexual">Asexual</option>
                        </select>
                        </li>
                        
                    </ul>
                    {errors.raceOrEthnicity && <p className="text-red-400 error-message">This Field is required.</p>}
                    </div>
                    </li>
        </>
    )
    const LGBTQSexual = (e) => {
        if(e.target.checked===true){
            setLGBTQSexualOrientation(LGBTQSexualData)
        }
        else if(e.target.checked===false){
            setLGBTQSexualOrientation('')
        }else{
            setLGBTQSexualOrientation('')
        }
    }
    const traumaExperData = (
        <>
        <p>Are you caring for someone with a mental or physical health condition?</p>
            <ul className="my-5 flex flex-col">
                                <li className="my-2">
                                    <input type="checkbox" name="question1" className="invisible input-checkbox"
                                        id="traumaExperience1" value="Child abuse/violence"
                                        {...register('traumaExperience')} />
                                    <label htmlFor="traumaExperience1"
                                        className="label py-2 px-4 font-semibold cursor-pointer "><span>Child abuse/violence</span></label>
                                </li>
                                <li className="my-2">
                                    <input type="checkbox" name="question1" className="invisible input-checkbox"
                                        id="traumaExperience2"
                                        value="Intimate partner violence"
                                        {...register('traumaExperience')}/>
                                    <label htmlFor="traumaExperience2"
                                        className="label py-2 px-4 font-semibold cursor-pointer "><span>Intimate partner violence</span></label>
                                </li>
                                <li className="my-2">
                                    <input type="checkbox" name="question1" className="invisible input-checkbox"
                                        id="traumaExperience3" value="Sexual assault/violence" {...register('traumaExperience')} />
                                    <label htmlFor="traumaExperience3"
                                        className="label py-2 px-4 font-semibold cursor-pointer "><span>Sexual assault/violence</span></label>
                                </li>
                                <li className="my-2">
                                    <input type="checkbox" name="question1" className="invisible input-checkbox"
                                        id="traumaExperience4" value="Serious illness/injury/assault" {...register('traumaExperience')} />
                                    <label htmlFor="traumaExperience4"
                                        className="label py-2 px-4 font-semibold cursor-pointer "><span>Serious illness/injury/assault</span></label>
                                </li>
                                <li className="my-2">
                                    <input type="checkbox" name="question1" className="invisible input-checkbox"
                                        id="traumaExperience5" value="Family conflict (identity acceptance/separation/divorce)" {...register('traumaExperience')} />
                                    <label htmlFor="traumaExperience5"
                                        className="label py-2 px-4 font-semibold cursor-pointer "><span>Family conflict (identity acceptance/separation/divorce)</span></label>
                                </li>
                                <li className="my-2">
                                    <input type="checkbox" name="question1" className="invisible input-checkbox"
                                        id="traumaExperience6" value="Traumatic event (natural disaster, accident, witnessing violence, etc.)" {...register('traumaExperience')} />
                                    <label htmlFor="traumaExperience6"
                                        className="label py-2 px-4 font-semibold cursor-pointer "><span>Traumatic event (natural disaster, accident, witnessing violence, etc.)</span></label>
                                </li>
                                <li className="my-2">
                                    <input type="checkbox" name="question1" className="invisible input-checkbox"
                                        id="traumaExperience7" value="Death of a loved one" {...register('traumaExperience')} />
                                    <label htmlFor="traumaExperience7"
                                        className="label py-2 px-4 font-semibold cursor-pointer "><span>Death of a loved one</span></label>
                                </li>
                                <li className="my-2">
                                    <input type="checkbox" name="question1" className="invisible input-checkbox"
                                        id="traumaExperience8" value="Other and/or tell us more about your trauma" {...register('traumaExperience')} />
                                    <label htmlFor="traumaExperience8"
                                        className="label py-2 px-4 font-semibold cursor-pointer "><span>Other and/or tell us more about your trauma</span></label>
                                </li>
                            </ul>
        </>
    )
    const traumaExper =(e) =>{
        if(e.target.checked===true){
            setTraumaExperience(traumaExperData)
        }
        else if(e.target.checked===false){
            setTraumaExperience('')
        }else{
            setTraumaExperience('')
        }
    }

    


      
        // <>
        
        // </>


  return (
    <div className="w-100 md:w-3/5 mx-auto rounded-2xl p-4">
        <div className="container horizantal mt-5">
        <h3 className="text-cyan-600 text-3xl sm:text-5xl font-bold	mb-4">Depression Test</h3>
        <p className="text-justify md:text-left">There was a problem with your submission. Please review the fields below.</p>
        <div className="mx-4 p-4 flex justify-between items-center mb-8">
        <div className="w-full flex items-center">
            <div className="relative flex flex-col items-center text-teal-600">
                <div
                    className="rounded-full transition duration-500 ease-in-out border-8 border-gray-300 h-12 w-12 flex items-center justify-center py-3 border-blue-900 text-white font-bold border-8 bg-blue-900">
                        <span><i className="fa-solid fa-check"></i></span>
                </div>
                <div className="absolute top-0 text-center mt-16 w-100 text-xs text-10px font-medium uppercase text-gray-900">Test
                    Questions</div>
            </div>
            <div className="flex-auto border-t-8 transition duration-500 ease-in-out border-blue-900"></div>
        </div>
        <div className="w-full flex items-center">
            <div className="relative flex flex-col items-center text-teal-600">
                <div
                    className="rounded-full transition duration-500 ease-in-out border-8 border-gray-300 h-12 w-12 flex items-center justify-center py-3 border-blue-900 text-white font-bold border-8 bg-emerald-400">
                </div>
                <div className="absolute top-0 text-center mt-16 w-32 text-xs text-10px font-medium uppercase text-gray-400">
                    Demographic Information</div>
            </div>
            <div className="flex-auto border-t-8 transition duration-500 ease-in-out border-blue-900"></div>
        </div>
        <div className="flex items-center">
            <div className="relative flex flex-col items-center text-teal-600">
                <div
                    className="rounded-full transition duration-500 ease-in-out border-8 border-gray-300 h-12 w-12 flex items-center justify-center py-3">
                </div>
                <div className="absolute top-0 text-center mt-16 w-32 text-xs text-10px font-medium uppercase text-gray-400">Your
                    Results</div>
            </div>
            <div className="flex-auto border-t-8 transition duration-500 ease-in-out border-gray-300"></div>
        </div>
        </div>

        </div>

        <p className="text-justify md:text-left">Please take a moment to answer the following optional questions. Your answers are totally anonymous—we won't be able to identify you based on this information. Your answers help us provide better information and support for people like you.</p>

        <p className="text-justify md:text-left">You can answer as many or as few questions as you would like. When you are done, scroll to the bottom of the survey and click "submit" to receive your screening results.</p>

        <hr />

        <div className="mt-8">
            <form onSubmit={handleSubmit(onSubmit)}>
                <ul>
                    {/* for home */}
                    <li>
                    Are you taking this test for yourself or for someone else?
                    <div>
                    <ul className="my-5 flex flex-col lg:flex-row lg:flex-wrap">
                        <li className="my-4 lg:my-3 xl:my-0">
                            <input type="radio" name="question1" className="invisible input" id="fotMyself" value="For My Self"
                                {...register('forWhom', { required: true })} />
                            <label htmlFor="fotMyself"
                                className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">For My Self</label>
                        </li>
                        <li className="my-4 lg:my-3 xl:my-0">
                            <input type="radio" name="question1" className="invisible input" id="forSomeone" value="For Someone Else"
                                {...register('forWhom', { required: true })} />
                            <label htmlFor="forSomeone"
                                className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">For Someone Else</label>
                        </li>
                    </ul>
                    {errors.forWhom && <p className="text-red-400 error-message">This Field is required.</p>}
                    </div>
                    </li>
                    {/* age range */}
                    <li>
                        <h4 className="text-3xl font-bold mt-2">
                        About You
                        </h4>
                    <div>
                    <ul className="my-5 flex">
                        <li>
                        <select className="px-4 py-3 rounded-full border border-gray-300 rounded-full w-52" defaultValue="" {...register('age', { required: true })} >
                        <option value=""></option>
                        <option value="8-10">8-10</option>
                        <option value="11-13">11-13</option>
                        <option value="14-15">14-15</option>
                        <option value="16-17">16-17</option>
                        <option value="18-24">18-24</option>
                        <option value="25-34">25-34</option>
                        <option value="35-44">35-44</option>
                        <option value="45-54">45-54</option>
                        <option value="55-64">55-64</option>
                        <option value="65+">65+</option>
                        </select>
                        </li>
                        
                    </ul>
                    {errors.age && <p className="text-red-400 error-message">This Field is required.</p>}
                    </div>
                    </li>
                    {/* Gender */}
                    <li>
                    Are you taking this test for yourself or for someone else?
                    <div>
                    <ul className="my-5 flex flex-col lg:flex-row lg:flex-wrap">
                        <li className="my-4 lg:my-3 xl:my-0">
                            <input type="radio" name="question1" className="invisible input" id="female" value="Female"
                                {...register('gender')}/>
                            <label htmlFor="female"
                                className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Female</label>
                        </li>
                        <li className="my-4 lg:my-3 xl:my-0">
                            <input type="radio" name="question1" className="invisible input" id="male" value="Male"
                                {...register('gender')} onClick={textBox}/>
                            <label htmlFor="male"
                                className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Male</label>
                        </li>
                        <li className="my-4 lg:my-3 xl:my-0">
                            <input type="radio" name="question1" className="invisible input" id="nonbinary" value="Non-Binary"                                 {...register('gender')} onClick={textBox}/>
                            <label htmlFor="nonbinary"
                                className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Non-Binary</label>
                        </li>
                    </ul>
                    {textBoxs}
                    {errors.gender && <p className="text-red-400 error-message">This Field is required.</p>}
                    </div>
                    </li>
                    <li>
                
                    <div>
                    <ul className="my-5 flex">
                        <li>
                            <input type="checkbox" name="question1" className="invisible input-checkbox" id="transgender" value="Transgender"
                                {...register('gender')} />
                            <label htmlFor="transgender"
                                className="label py-2 px-4 font-semibold cursor-pointer "><span>Please check this box if you identify as transgender.</span></label>
                        </li>
                    </ul>

                    </div>
                    </li>
                    {/* Race/Ethnicity */}
                    <li>
                        <h4 className="text-xl mt-2">
                        Race/Ethnicity
                        </h4>
                    <div>
                    <ul className="my-5 flex">
                        <li>
                        <select className="px-4 py-3 rounded-full border border-gray-300 rounded-full w-52" defaultValue="" {...register('raceOrEthnicity', { required: true })} >
                        <option value=""></option>
                        <option value="American Indian or Alaska Native">American Indian or Alaska Native</option>
                        <option value="Asian">Asian</option>
                        <option value="Black or African American (non-Hispanic)">Black or African American
                            (non-Hispanic)</option>
                        <option value="Hispanic or Latino">Hispanic or Latino</option>
                        <option value="Middle Eastern or North African">Middle Eastern or North African</option>
                        <option value="Native Hawaiian or other Pacific Islander">Native Hawaiian or other Pacific
                            Islander</option>
                        <option value="White (non-Hispanic)">White (non-Hispanic)</option>
                        <option value="More than one of the above">More than one of the above</option>
                        <option value="Other">Other</option>
                        </select>
                        </li>
                        
                    </ul>
                    {errors.raceOrEthnicity && <p className="text-red-400 error-message">This Field is required.</p>}
                    </div>
                    </li>
                    {/* Household Income */}
                    <li>
                        <h4 className="text-xl mt-2">
                        Household Income
                        </h4>
                    <div>
                    <ul className="my-5 flex">
                        <li>
                        <select className="px-4 py-3 rounded-full border border-gray-300 rounded-full w-52" defaultValue="" {...register('householdIncome', { required: true })} >
                        <option value=""></option>
                        <option value="Less than $20,000">Less than $20,000</option>
                        <option value="$20,000 - $39,999">$20,000 - $39,999</option>
                        <option value="$40,000 - $59,999">$40,000 - $59,999</option>
                        <option value="$60,000 - $79,999">$60,000 - $79,999</option>
                        <option value="$80,000 - $99,999">$80,000 - $99,999</option>
                        <option value="$100,000 - $149,999">$100,000 - $149,999</option>
                        <option value="$150,000+">$150,000+</option>
                        </select>
                        </li>
                        
                    </ul>
                    {errors.householdIncome && <p className="text-red-400 error-message">This Field is required.</p>}
                    </div>
                    </li>
                    {/* United States or another country */}
                    <li>
                    Do you live in the United States or another country?
                    <div>
                    <ul className="my-5 flex flex-col lg:flex-row lg:flex-wrap">
                        <li className="my-4 lg:my-3 xl:my-0">
                            <input type="radio" name="question1" className="invisible input" id="usOrNot1" value="I LIVE IN THE UNITED STATES"
                                {...register('usOrNot', { required: true })} onClick={usaornot}/>
                            <label htmlFor="usOrNot1"
                                className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">I LIVE IN THE UNITED STATES</label>
                        </li>
                        <li className="my-4 lg:my-3 xl:my-0">
                            <input type="radio" name="question1" className="invisible input" id="usOrNot" value="I LIVE IN ANOTHER COUNTRY"
                                {...register('usOrNot', { required: true })} onClick={usaornot}/>
                            <label htmlFor="usOrNot"
                                className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">I LIVE IN ANOTHER COUNTRY</label>
                        </li>
                    </ul>
                    {errors.usOrNot && <p className="text-red-400 error-message">This Field is required.</p>}

                    </div>
                    </li>
                    {/* state or country */}
                    {living}
                    {/* zip code */}
                    <li>
                    Zip/Postal Code
                    <div>
                    <ul className="my-5 flex">
                        <li>
                            <input type="text" name="question1" className="border border-gray-400 input w-50 lg:w-80 p-3 rounded-full" id="zipcode"
                                {...register('postalCode', { required: true })} />
                        </li>
                    </ul>
                    {errors.usOrNot && <p className="text-red-400 error-message">This Field is required.</p>}
                    </div>
                    </li>
                    {/* Which of the following populations describes you?
                    Select all that apply. */}
                    <li>
                        Which of the following populations describes you?
                        <br />
                        Select all that apply.
                        <div>
                            <ul className="my-5 flex flex-col">
                                <li className="my-2">
                                    <input type="checkbox" name="question1" className="invisible input-checkbox"
                                        id="populationType1" value="Veteran or active-duty military"
                                        {...register('populationType')} />
                                    <label htmlFor="populationType1"
                                        className="label py-2 px-4 font-semibold cursor-pointer "><span>Veteran or
                                            active-duty military</span></label>
                                </li>
                                <li className="my-2">
                                    <input type="checkbox" name="question1" className="invisible input-checkbox"
                                        id="populationType2"
                                        value="Caregiver of someone living with emotional or physical illness"
                                        {...register('populationType')} onClick={populationTypeTwo}/>
                                    <label htmlFor="populationType2"
                                        className="label py-2 px-4 font-semibold cursor-pointer "><span>Caregiver of
                                            someone living with emotional or physical illness</span></label>
                                </li>
                                <li className="my-2">
                                    <input type="checkbox" name="question1" className="invisible input-checkbox"
                                        id="populationType3" value="LGBTQ+" {...register('populationType')} onClick={LGBTQSexual} />
                                    <label htmlFor="populationType3"
                                        className="label py-2 px-4 font-semibold cursor-pointer "><span>LGBTQ+</span></label>
                                </li>
                                <li className="my-2">
                                    <input type="checkbox" name="question1" className="invisible input-checkbox"
                                        id="populationType4" value="Student" {...register('populationType')} />
                                    <label htmlFor="populationType4"
                                        className="label py-2 px-4 font-semibold cursor-pointer "><span>Student</span></label>
                                </li>
                                <li className="my-2">
                                    <input type="checkbox" name="question1" className="invisible input-checkbox"
                                        id="populationType5" value="Trauma survivor" {...register('populationType')} onClick={traumaExper} />
                                    <label htmlFor="populationType5"
                                        className="label py-2 px-4 font-semibold cursor-pointer "><span>Trauma
                                            survivor</span></label>
                                </li>
                                <li className="my-2">
                                    <input type="checkbox" name="question1" className="invisible input-checkbox"
                                        id="populationType6" value="New or expecting parent"
                                        {...register('populationType')} />
                                    <label htmlFor="populationType6"
                                        className="label py-2 px-4 font-semibold cursor-pointer "><span>New or expecting
                                            parent</span></label>
                                </li>
                                <li className="my-2">
                                    <input type="checkbox" name="question1" className="invisible input-checkbox"
                                        id="populationType7" value="Healthcare worker"
                                        {...register('populationType')} />
                                    <label htmlFor="populationType7"
                                        className="label py-2 px-4 font-semibold cursor-pointer"><span>Healthcare
                                            worker</span></label>
                                </li>
                            </ul>
                            {caringType}
                            {LGBTQSexualOrientation}
                            {traumaExperience}
                        </div>
                    </li>
                {/* About Your Mental Health */}
                <li>
                    <h4 className="text-3xl font-bold">About Your Mental Health</h4>
                    <p>Have you ever received treatment/support for a mental health problem?</p>
                    <div>
                        <ul className="my-5 flex">
                            <li>
                                <input type="radio" name="question1" className="invisible input" id="previousTreatment1" value="Yes"
                                    {...register('previousTreatment', { required: true })} />
                                <label htmlFor="previousTreatment1"
                                    className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Yes</label>
                            </li>
                            <li>
                                <input type="radio" name="question1" className="invisible input" id="previousTreatment2"
                                    value="No" {...register('previousTreatment', { required: true })} />
                                <label htmlFor="previousTreatment2"
                                    className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">No</label>
                            </li>
                        </ul>
                        {errors.previousTreatment && <p className="text-red-400 error-message">This Field
                            is required.</p>}
                    </div>
                </li>

                     {/* Which of the following populations describes you?
                    Select all that apply. */}
                    <li>
                    Think about your mental health test. What are the main things contributing to your mental health problems right now?
                        <br />
                        Choose up to 3.
                        <div>
                            <ul className="my-5 flex flex-col">
                                <li className="my-2">
                                    <input type="checkbox" name="question1" className="invisible input-checkbox"
                                        id="mainMentalHealthProblems1" value="Abuse or violence"
                                        {...register('mainMentalHealthProblems')} />
                                    <label htmlFor="mainMentalHealthProblems1"
                                        className="label py-2 px-4 font-semibold cursor-pointer "><span>Abuse or violence</span></label>
                                </li>
                                <li className="my-2">
                                    <input type="checkbox" name="question1" className="invisible input-checkbox"
                                        id="mainMentalHealthProblems2"
                                        value="Body image or self-image"
                                        {...register('mainMentalHealthProblems')} />
                                    <label htmlFor="mainMentalHealthProblems2"
                                        className="label py-2 px-4 font-semibold cursor-pointer "><span>Body image or self-image</span></label>
                                </li>
                                <li className="my-2">
                                    <input type="checkbox" name="question1" className="invisible input-checkbox"
                                        id="mainMentalHealthProblems3" value="School or work problem" {...register('mainMentalHealthProblems')} />
                                    <label htmlFor="mainMentalHealthProblems3"
                                        className="label py-2 px-4 font-semibold cursor-pointer "><span>School or work problem</span></label>
                                </li>
                                <li className="my-2">
                                    <input type="checkbox" name="question1" className="invisible input-checkbox"
                                        id="mainMentalHealthProblems4" value="Basic needs (no food or housing)" {...register('mainMentalHealthProblems')} />
                                    <label htmlFor="mainMentalHealthProblems4"
                                        className="label py-2 px-4 font-semibold cursor-pointer "><span>Basic needs (no food or housing)</span></label>
                                </li>
                                <li className="my-2">
                                    <input type="checkbox" name="question1" className="invisible input-checkbox"
                                        id="mainMentalHealthProblems5" value="Relationship problems (friends, family, or significant other)" {...register('mainMentalHealthProblems')} />
                                    <label htmlFor="mainMentalHealthProblems5"
                                        className="label py-2 px-4 font-semibold cursor-pointer "><span>Relationship problems (friends, family, or significant other)</span></label>
                                </li>
                                <li className="my-2">
                                    <input type="checkbox" name="question1" className="invisible input-checkbox"
                                        id="mainMentalHealthProblems6" value="Financial problems"
                                        {...register('mainMentalHealthProblems')} />
                                    <label htmlFor="mainMentalHealthProblems6"
                                        className="label py-2 px-4 font-semibold cursor-pointer "><span>Financial problems</span></label>
                                </li>
                                <li className="my-2">
                                    <input type="checkbox" name="question1" className="invisible input-checkbox"
                                        id="mainMentalHealthProblems7" value="Loneliness or isolation"
                                        {...register('mainMentalHealthProblems')} />
                                    <label htmlFor="mainMentalHealthProblems7"
                                        className="label py-2 px-4 font-semibold cursor-pointer"><span>Loneliness or isolation</span></label>
                                </li>
                                <li className="my-2">
                                    <input type="checkbox" name="question1" className="invisible input-checkbox"
                                        id="mainMentalHealthProblems8" value="Grief or loss of someone or something"
                                        {...register('mainMentalHealthProblems')} />
                                    <label htmlFor="mainMentalHealthProblems8"
                                        className="label py-2 px-4 font-semibold cursor-pointer"><span>Grief or loss of someone or something</span></label>
                                </li>
                                <li className="my-2">
                                    <input type="checkbox" name="question1" className="invisible input-checkbox"
                                        id="mainMentalHealthProblems9" value="Racism, homophobia, transphobia, or discrimination"
                                        {...register('mainMentalHealthProblems')} />
                                    <label htmlFor="mainMentalHealthProblems9"
                                        className="label py-2 px-4 font-semibold cursor-pointer"><span>Racism, homophobia, transphobia, or discrimination</span></label>
                                </li>
                            </ul>

                        </div>
                    </li>






                                    {/* About Your  Health */}
                <li>
                    <h4 className="text-3xl font-bold">About Your Health</h4>
                    <p>Do you currently have health insurance?</p>
                    <div>
                        <ul className="my-5 flex">
                            <li>
                                <input type="radio" name="question1" className="invisible input" id="healthInsurance1" value="Yes"
                                    {...register('healthInsurance', { required: true })} />
                                <label htmlFor="healthInsurance1"
                                    className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">Yes</label>
                            </li>
                            <li>
                                <input type="radio" name="question1" className="invisible input" id="healthInsurance2"
                                    value="No" {...register('healthInsurance', { required: true })} />
                                <label htmlFor="healthInsurance2"
                                    className="uppercase py-2 px-4 border border-gray-300 rounded-full font-semibold cursor-pointer checked-color	hover:bg-gray-300 hover:text-white">No</label>
                            </li>
                        </ul>
                        {errors.previousTreatment && <p className="text-red-400 error-message">This Field
                            is required.</p>}
                    </div>
                </li>

                     {/* Do you have any of the following general health conditions? */}
                    <li>
                    Do you have any of the following general health conditions?
                        <br />
                    Select all that apply.
                        <div>
                            <ul className="my-5 flex flex-col">
                                <li className="my-2">
                                    <input type="checkbox" name="question1" className="invisible input-checkbox"
                                        id="generalHealthCondition1" value="Heart disease"
                                        {...register('generalHealthCondition')} />
                                    <label htmlFor="generalHealthCondition1"
                                        className="label py-2 px-4 font-semibold cursor-pointer "><span>Heart disease</span></label>
                                </li>
                                <li className="my-2">
                                    <input type="checkbox" name="question1" className="invisible input-checkbox"
                                        id="generalHealthCondition2"
                                        value="Reproductive health concerns (PCOS, endometriosis, infertility, etc.)"
                                        {...register('generalHealthCondition')} />
                                    <label htmlFor="generalHealthCondition2"
                                        className="label py-2 px-4 font-semibold cursor-pointer "><span>Reproductive health concerns (PCOS, endometriosis, infertility, etc.)</span></label>
                                </li>
                                <li className="my-2">
                                    <input type="checkbox" name="question1" className="invisible input-checkbox"
                                        id="generalHealthCondition3" value="Diabetes" {...register('generalHealthCondition')} />
                                    <label htmlFor="generalHealthCondition3"
                                        className="label py-2 px-4 font-semibold cursor-pointer "><span>Diabetes</span></label>
                                </li>
                                <li className="my-2">
                                    <input type="checkbox" name="question1" className="invisible input-checkbox"
                                        id="generalHealthCondition4" value="Cancer" {...register('generalHealthCondition')} />
                                    <label htmlFor="generalHealthCondition4"
                                        className="label py-2 px-4 font-semibold cursor-pointer "><span>Cancer</span></label>
                                </li>
                                <li className="my-2">
                                    <input type="checkbox" name="question1" className="invisible input-checkbox"
                                        id="generalHealthCondition5" value="Arthritis or other chronic pain" {...register('generalHealthCondition')} />
                                    <label htmlFor="generalHealthCondition5"
                                        className="label py-2 px-4 font-semibold cursor-pointer "><span>Arthritis or other chronic pain</span></label>
                                </li>
                                <li className="my-2">
                                    <input type="checkbox" name="question1" className="invisible input-checkbox"
                                        id="generalHealthCondition6" value="COPD or other lung conditions"
                                        {...register('generalHealthCondition')} />
                                    <label htmlFor="generalHealthCondition6"
                                        className="label py-2 px-4 font-semibold cursor-pointer "><span>COPD or other lung conditions</span></label>
                                </li>
                                <li className="my-2">
                                    <input type="checkbox" name="question1" className="invisible input-checkbox"
                                        id="generalHealthCondition7" value="Movement Disorders (involuntary tics, tardive dyskinesia, etc.)"
                                        {...register('generalHealthCondition')} />
                                    <label htmlFor="generalHealthCondition7"
                                        className="label py-2 px-4 font-semibold cursor-pointer"><span>Movement Disorders (involuntary tics, tardive dyskinesia, etc.)</span></label>
                                </li>
                            </ul>

                        </div>
                    </li>

                </ul>
                    <div className="flex justify-between">

                <Link to='/'
      className="bg-cyan-600 text-white uppercase py-4 px-12 rounded-tr-xl rounded-tl-xl rounded-br-xl font-semibold cursor-pointer  hover:bg-emerald-300 hover:text-white transition duration-200 ease-in-out">
        Back
      </Link>

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

export default PersonalInfo