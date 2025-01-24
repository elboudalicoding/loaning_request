import "./formStyles.css";
import Modal from "./Modal";
import { useState } from "react";
export default function LaonForm() {
  const [loanInputs, setloanInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });
  const [isShowModal, setIsShowModal] = useState(false);
  const [messagetype, setMessagetype] = useState("");
  const btnIsDisabled =
    loanInputs.name === "" ||
    loanInputs.phoneNumber === "" ||
    loanInputs.age === "";
  function handleDivClick() {
    if (isShowModal) {
      setIsShowModal(false);
    }
  }
  const { age, phoneNumber } = loanInputs;
  function handleButtonClick(event) {
    event.preventDefault();
    setIsShowModal(true);
    setMessagetype("");
    if (age < 18 || age > 100) {
      setMessagetype(" error =>(the age is not allowed Yaasijneh)");
    } else {
      if (phoneNumber.length < 10 || phoneNumber.length > 14) {
        setMessagetype(
          " error =>( the phone number format is incorrect + house branch added  )"
        );
      }
    }
  }
  return (
    <div
      onClick={handleDivClick}
      className="flex"
      style={{ flexDirection: "column" }}
    >
      <form id="loan-form" className="flex" style={{ flexDirection: "column" }}>
        <h1>Requeasting Loan</h1>
        <hr></hr>
        <label>Name :</label>
        <input
          value={loanInputs.name}
          onChange={(event) => {
            setloanInputs({ ...loanInputs, name: event.target.value });
          }}
        />
        <label>Phone number :</label>
        <input
          value={loanInputs.phoneNumber}
          onChange={(event) => {
            setloanInputs({ ...loanInputs, phoneNumber: event.target.value });
          }}
        />
        <label>Age :</label>
        <input
          value={loanInputs.age}
          onChange={(event) => {
            setloanInputs({ ...loanInputs, age: event.target.value });
          }}
        />
        <label>Are you an employee ?</label>
        <input
          type="checkbox"
          checked={loanInputs.isEmployee}
          onChange={(event) => {
            setloanInputs({ ...loanInputs, isEmployee: event.target.checked });
          }}
        />
        <label>Salary</label>
        <select
          value={loanInputs.salaryRange}
          onChange={(event) => {
            setloanInputs({ ...loanInputs, salaryRange: event.target.value });
          }}
        >
          <option>less than 500$</option>
          <option>between 500$ and 1000$</option>
          <option>above 1000$</option>
        </select>

        <button
          className={btnIsDisabled ? "isDisable" : ""}
          disabled={btnIsDisabled}
          id="loan-btn"
          onClick={handleButtonClick}
        >
          Submit
        </button>
      </form>
      <Modal message={messagetype} isVisible={isShowModal} />
    </div>
  );
}
