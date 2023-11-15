import React, { useState } from "react";
import api from "../service/UserService";
import "../styles/form.css";
import { useTranslation } from "react-i18next";

function Form() {
  const [bmi, setBmi] = useState();
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [result, setResult] = useState();

  const { t, i18n } = useTranslation();

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
    setBmi(t("bmi") + calc);

    // Output depending on BMI

    if (calc < 18.5) {
      setResult(t("result1"));
    } else if (calc < 25 && calc >= 18.5) {
      setResult(t("result2"));
    } else if (calc < 30 && calc >= 25) {
      setResult(t("result3"));
    } else if (calc < 35 && calc >= 30) {
      setResult(t("result4"));
    } else if (calc < 40 && calc >= 35) {
      setResult(t("result5"));
    } else {
      setResult(t("result6"));
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
    addUser();
  };

  return (
    <div className="form-container">
      <div className="row">
        <form className="form col-md-7" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="uname">{t("name")}</label>
            <input
              type="text"
              className="input_class"
              name="uname"
              id="uname"
              required
              autoFocus
              onChange={handleName}
              value={name}
            />
          </div>
          <div>
            <label htmlFor="usurname">{t("surname")}</label>
            <input
              type="text"
              className="input_class"
              name="usurname"
              id="usurname"
              required
              onChange={handleSurname}
              value={surname}
            />
          </div>
          <div>
            <label htmlFor="uweight">{t("weight")}</label>
            <input
              type="text"
              className="input_class"
              name="uweight"
              id="uweight"
              required
              onChange={handleWeight}
              value={weight}
            />
          </div>
          <div>
            <label htmlFor="ulength">{t("height")}</label>
            <input
              type="text"
              className="input_class"
              name="ulength"
              id="ulength"
              required
              onChange={handleHeight}
              value={height}
            />
          </div>

          <button className="btn btn-primary">{t("submit")}</button>
        </form>
      </div>
      <p>{bmi}</p>
      <p>{result}</p>
    </div>
  );
}

export default Form;
