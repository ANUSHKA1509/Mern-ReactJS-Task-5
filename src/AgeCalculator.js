import React, { useState } from 'react';

function AgeCalculator() {
    const [startDate, setStartDate] = useState(new Date());
    const [age, setAge] = useState("");

    const handleDateChange = (e) => {
        setStartDate(new Date(e.target.value));
    };

    const calculateAge = () => {
        var today = new Date();
        var ageNow = today.getFullYear() - startDate.getFullYear();
        var m = today.getMonth() - startDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < startDate.getDate())) {
            ageNow--;
        }
        if (startDate > today) {
            setAge("Your Selected date is in the future");
        } else if (ageNow === 0 && m >= 0 && today.getDate() >= startDate.getDate()) {
            setAge("Less than a year old");
        } else {
            setAge(`You are ${ageNow} years old`);
        }
    }
      

    return (
        <div>
            <h1 style={{textAlign: "center"}}>ReactJS Task - 5</h1>
            <br/>
            <h1>Age Calculator</h1>
            <br/>
            <h3>Enter your date of birth</h3>
            <br/>
            <div style={{display: "flex", justifyContent: "center"}}>
        <input type="date" className="form-control" name="date" onChange={handleDateChange} style={{width: "30%"}} />
    </div>
            

            
            <br/>
            <button type="button" className="btn btn-primary" onClick={calculateAge}>Calculate Age</button>
            <br/><br/>

            <h3>{age}</h3>
        </div>
    );
}

export default AgeCalculator;
