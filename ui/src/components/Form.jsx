import React, { useState } from "react";
import api from "../service/UserService";
import "../styles/form.css";
function Form() {
  const [bmi, setBmi] = useState();
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [result, setResult] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSurname = (e) => {
    setSurname(e.target.value);
  };

  const handleWeight = (e) => {
    setWeight(e.target.value);
  };

  const handleHeight = (e) => {
    setHeight(e.target.value);
  };

  const calculateBMI = () => {
    // Calculating BMI
    const calc = (weight / ((height * height) / 10000)).toFixed(2);
    setBmi("VKI değeriniz: " + calc);

    // Output depending on BMI

    if (calc < 18.5) {
      setResult("İdeal kilonun altındasınız!");
    } else if (calc < 25 && calc >= 18.5) {
      setResult("İdeal kilodasınız tebrikler!");
    } else if (calc < 30 && calc >= 25) {
      setResult("Fazla kilolusunuz!");
    } else if (calc < 35 && calc >= 30) {
      setResult("1. dereceden obezitesiniz!");
    } else if (calc < 40 && calc >= 35) {
      setResult("2. dereceden obezitesiniz!");
    } else {
      setResult("3. dereceden obezitesiniz!");
    }
  };

  const addUser = async (i, e) => {
    // Adding to DB
    let user = {
      firstName: name,
      lastName: surname,
      kgValue: weight,
      lengthValue: height,
    };
    await api.post("", user).then((res) => {
      console.log(res.data);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateBMI();
    addUser()
  };

  return (
    <div className="form-container">
      <div className="row">
        <div className="form col-md-7">
          <div>
            <label for="uname">Adınız:</label>
            <input
              type="text"
              class="input_class"
              name="uname"
              id="uname"
              placeholder="Adınız ..."
              required
              autofocus
              onChange={handleName}
              title="Adınızı giriniz !"
            />
          </div>
          <div>
            <label for="usurname">Soyadınız:</label>
            <input
              type="text"
              class="input_class"
              name="usurname"
              id="usurname"
              placeholder="Soyadınız ..."
              required
              onChange={handleSurname}
              title="Soyadınızı giriniz !"
            />
          </div>
          <div>
            <label for="uweight">(kg)Kilonuz:</label>
            <input
              type="text"
              class="input_class"
              name="uweight"
              id="uweight"
              placeholder="Kilonuz ..."
              required
              onChange={handleWeight}
              title="Kilonuzu giriniz !"
            />
          </div>
          <div>
            <label for="ulength">(cm)Boyunuz:</label>
            <input
              type="text"
              class="input_class"
              name="ulength"
              id="ulength"
              placeholder="Boyunuz ..."
              required
              onChange={handleHeight}
              title="Boyunuzu giriniz !"
            />
          </div>

          <button onClick={handleSubmit} className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
      <p>{bmi}</p>
      <p>{result}</p>
    </div>
  );
}

export default Form;
