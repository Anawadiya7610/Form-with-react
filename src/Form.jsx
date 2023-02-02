import React, { useState } from "react";
import "./form.css/formsty.css";

// http://localhost:3000/?fname=ashkn&mname=dsaa&lname=adsfasf&fathname=asdfasd&age=24&male=&marri=&email=1999ashokkumawat%40gmail.com&mobile=7610966855&addlineone=dfgsd32&addlinetwo=fgddsfgd&city=Jaipur&dob=2022-10-03&indian=

export default function Form() {
  const [user, setUser] = useState({
    fname: "",
    mname: "",
    lname: "",
    fathname: "",
    gender: "",
    married: "",
    email: "",
    mobile: "",
    addlineone: "",
    addlinetwo: "",
    city: "",
    dob: "",
    indian: "",
  });

  const handleChange = (e) => {
    const { name, value: elementValue, type, checked } = e.target;
    let value = type === "checkbox" ? checked : elementValue;
    setUser({ ...user, [ name]:value})
     

    // setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // console.log("user values", user);
    // pass user values to api
  };

  return (
    <div className="container">
      <h1 id="railway-header" className="text-center">
        Railway Requirement Bord
      </h1>
      <form id="railwayform" onSubmit={handleSubmit}>
        <fieldset id="field-1">
          <legend>
            <h2>Personal Information</h2>
          </legend>
          <div className="names-ash ash-1">
            <label htmlFor="nameid" className="labels first">
              First Name :{" "}
            </label>

            <input
              type="text"
              className=""
              name="fname"
              id="nameid"
              placeholder="Enter Your First Name"
              onChange={handleChange}
              value={user.fname}
              required
            />

            <label htmlFor="lastnameid" className="labels last">
              Last Name :{" "}
            </label>
            <input
              type="text"
              name="lname"
              id="lastnameid"
              onChange={handleChange}
              value={user.lname}
              placeholder="Enter Your Last Name"
              required
            />
          </div>
          <div className="names-ash ash-2">
            <label htmlFor="namemidid" className="labels middle">
              Midle Name :{" "}
            </label>
            <input
              type="text"
              name="mname"
              id="namemidid"
              onChange={handleChange}
              value={user.mname}
              placeholder="Enter Your Mid Name"
            />

            <label htmlFor="fanameid" className="labels father">
              Father Name :{" "}
            </label>
            <input
              type="text"
              name="fathname"
              id="fanameid"
              onChange={handleChange}
              value={user.fathname}
              placeholder="Enter Your Father Name"
              required
            />
          </div>
          <div className="genmarriage">
            <div className="gender">
              <span className="labels genderspan">Gender :</span>
              <label htmlFor="men" className="labels male">
                Male
              </label>
              <input
                type="radio"
                name="gender"
                id="men"
                onChange={handleChange}
                value={"male"}
                checked={user.gender === "male"}
              />
              <label htmlFor="female" className="labels female">
                Female
              </label>
              <input
                type="radio"
                name="gender"
                id="female"
                onChange={handleChange}
                value={"female"}
                checked={user.gender === "female"}
              />
              <label htmlFor="fema" className="labels  transgender">
                Transgender
              </label>
              <input
                type="radio"
                name="gender"
                id="fema"
                onChange={handleChange}
                value={"transgender"}
                checked={user.gender === "transgender"}
              />
            </div>

            <div className="married">
              <span className="labels">married Status :</span>
              <label htmlFor="married" className="labels marriedlabel">
                Married
              </label>

              <select
                name="married"
                className="labels"
                onChange={handleChange}
                value={user.married}
              >
                <option value="">Not Select</option>
                <option value="married">Married</option>
                <option value="unmarried">Unmarried</option>
              </select>
            </div>
          </div>
        </fieldset>
        <fieldset id="field-2">
          <legend>
            <h2>Contact Details</h2>
          </legend>
          <div className="email-mob">
            <div className="email-div">
              <label htmlFor="emailid" className="labels email">
                Email Id :{" "}
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                id="emailid"
                value={user.email}
                placeholder=" Email your email"
                required
              />
            </div>
            <div className="mobile-div">
              <label htmlFor="mobileid" className="labels mobile">
                Mobile Number :{" "}
              </label>
              <input
                type="tel"
                name="mobile"
                onChange={handleChange}
                value={user.mobile}
                id="mobileid"
                placeholder="mobile number"
                required
              />
            </div>
          </div>
        </fieldset>

        <fieldset id="field-3">
          <legend>
            <h2>Present Address : </h2>
          </legend>
          <div className="addre">
            <div className="addline">
              <label htmlFor="homeno" className="labels">
                {" "}
                Line No - 1 :
              </label>
              <input
                type="text"
                name="addlineone"
                onChange={handleChange}
                value={user.addlineone}
                id="homeno"
                placeholder="Home No./ Flat No."
              />
            </div>
            <div className="addline">
              <label htmlFor="city" className="labels">
                Line No - 2 :
              </label>
              <input
                type="text"
                name="addlinetwo"
                onChange={handleChange}
                value={user.addlinetwo}
                id="city"
                placeholder="Localaty"
              />
            </div>

            <div className="addline">
              <label htmlFor="town" className="labels">
                City/Village :
              </label>
              <input
                type="text"
                name="city"
                onChange={handleChange}
                value={user.city}
                id="town"
                placeholder="City / Village"
              />
            </div>
          </div>
          <div>
            <label htmlFor="mordern-time" className="labels dob">
              D.O.B :{" "}
            </label>
            <input
              type="date"
              id="mordern-time"
              name="dob"
              onChange={handleChange}
              value={user.dob}
              // value="2022-07-22"
              min="1990-01-01"
              max="2022-10-30"
            />
          </div>
          <div className="indian">
            <label htmlFor="indian" className="labels">
              Are You Indian :{" "}
            </label>
            <input
              type="checkbox"
              onChange={handleChange}
              name="indian"
              id="indian"
              checked={user.indian}
            />
          </div>
          <div>
            <button type="submit">Submit </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
