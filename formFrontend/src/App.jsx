<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPanel from "./admin";
import LoanForm from "./form";
=======
import { useState } from "react";

const MultiPageForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    dob: "",
    maritalStatus: "",
    mobile: "",
    email: "",
    currentAddress: "",
    permanentAddress: "",
    occupation: "",
    monthlyincome: "",
    aadharNumber: "",
    pan: "",
    voteid: "",
    passport: "",
    driving: "",
    photo: null,
    idType: "",
    idNumber: "",
    loantype: "",
    amount: "",
    bankname: "",
    accountnumber: "",
    ifsc: "",
    transaction: null,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "photo" || e.target.name === "transaction") {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const validateStep = (step) => {
    let isValid = true;
    let errorMessage = "";

    if (step === 1) {
      if (!formData.name.trim()) {
        isValid = false;
        errorMessage = "Full Name is required.";
      } else if (!formData.gender) {
        isValid = false;
        errorMessage = "Gender is required.";
      } else if (!formData.dob) {
        isValid = false;
        errorMessage = "Date of Birth is required.";
      } else if (!formData.maritalStatus) {
        isValid = false;
        errorMessage = "Marital Status is required.";
      } else if (!formData.mobile) {
        isValid = false;
        errorMessage = "Mobile Number is required.";
      } else if (!formData.email) {
        isValid = false;
        errorMessage = "Email is required.";
      } else if (!formData.currentAddress.trim()) {
        isValid = false;
        errorMessage = "Current Address is required.";
      } else if (!formData.permanentAddress.trim()) {
        isValid = false;
        errorMessage = "Permanent Address is required.";
      } else if (!formData.occupation.trim()) {
        isValid = false;
        errorMessage = "Occupation is required.";
      } else if (!formData.monthlyincome.trim()) {
        isValid = false;
        errorMessage = "Monthly Income is required.";
      } else if (!formData.idType.trim()) {
        isValid = false;
        errorMessage = "Id Type is required.";
      } else if (!formData.idNumber.trim()) {
        isValid = false;
        errorMessage = "Id Number is required.";
      } else if (!formData.photo) {
        isValid = false;
        errorMessage = "Photo is required.";
      }
    } else if (step === 2) {
      if (!formData.loantype) {
        isValid = false;
        errorMessage = "Loan Type is required.";
      } else if (!formData.amount) {
        isValid = false;
        errorMessage = "Loan Amount is required.";
      } else if (!formData.bankname.trim()) {
        isValid = false;
        errorMessage = "Bank Name is required.";
      } else if (!formData.accountnumber.trim()) {
        isValid = false;
        errorMessage = "Account Number is required.";
      } else if (!formData.ifsc.trim()) {
        isValid = false;
        errorMessage = "IFSC Code is required.";
      } else if (!formData.pan.trim()) {
        isValid = false;
        errorMessage = "PAN Number is required.";
      } else if (!formData.transaction) {
        isValid = false;
        errorMessage = "Transaction History is required.";
      }
    }

    return { isValid, errorMessage };
  };

  const nextStep = () => {
    const { isValid, errorMessage } = validateStep(step);
    if (isValid) {
      setStep((prev) => prev + 1);
      setError("");
    } else {
      setError(errorMessage);
    }
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { isValid, errorMessage } = validateStep(3); // Validate all steps
    if (isValid) {
      console.log("Form Data Submitted:", formData);
      alert("Form submitted successfully!");
    } else {
      setError(errorMessage);
    }
  };
>>>>>>> b1853b4b0a2e99f0b304d328d497757dd6334047

function App() {
  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/form" element={<LoanForm/>} />
      </Routes>
    </BrowserRouter>
=======
    <div className="max-w-lg mx-auto p-6 bg-gradient-to-br from-purple-50 to-blue-50 shadow-2xl rounded-2xl mt-10 border border-gray-100">
      {/* Progress Bar */}
      <div className="relative mb-8">
        <div className="flex justify-between mb-2">
          {[1, 2, 3, 4].map((s) => (
            <span
              key={s}
              className={`text-sm font-semibold transition-all duration-300 ${
                step >= s ? "text-purple-700" : "text-gray-400"
              }`}
            >
              Step {s}
            </span>
          ))}
        </div>
        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
          <div
            className={`h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 ease-in-out ${
              step === 1 ? "w-1/3" : step === 2 ? "w-2/3" : "w-full"
            }`}
          ></div>
        </div>
      </div>

      {/* Form Steps */}
      <div className="space-y-6">
        {step === 1 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold text-purple-800 mb-6">
              Personal Details
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
              <select
                name="gender"
                required
                value={formData.gender}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="transgender">Transgender</option>
              </select>

              <input
                type="date"
                name="dob"
                required
                placeholder="Date of Birth"
                value={formData.dob}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
              <select
                name="maritalStatus"
                required
                value={formData.maritalStatus}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              >
                <option value="" disabled>
                  Select Marital Status
                </option>
                <option value="single">Single</option>
                <option value="married">Married</option>
              </select>

              <input
                type="number"
                name="mobile"
                required
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email Id"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
              <input
                type="text"
                name="currentAddress"
                required
                placeholder="Current Address"
                value={formData.currentAddress}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
              <input
                type="text"
                name="permanentAddress"
                required
                placeholder="Permanent Address"
                value={formData.permanentAddress}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
              <input
                type="text"
                name="occupation"
                required
                placeholder="Occupation"
                value={formData.occupation}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
              <input
                type="number"
                name="monthlyincome"
                required
                placeholder="Monthly Income"
                value={formData.monthlyincome}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
              <select
                name="idType"
                value={formData.idType}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all mb-4"
              >
                <option value="">Select ID Type</option>
                <option value="Aadhar">Aadhar</option>
                <option value="Passport">Passport</option>
                <option value="Driving License">Driving License</option>
              </select>
              <input
                type="text"
                name="idNumber"
                placeholder="ID Number"
                value={formData.idNumber}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all mb-6"
              />
              {/* Photo Upload Input */}
              <div className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all">
                <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Photo
                </label>
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
            </div>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <button
              onClick={nextStep}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg mt-6 hover:from-purple-700 hover:to-blue-700 transition-all"
            >
              Next →
            </button>
          </div>
        )}

{step === 2 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold text-purple-800 mb-6">
              Loan Details
            </h2>
            <select
              name="loantype"
              value={formData.loantype}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all mb-4"
            >
              <option value="">Loan Type</option>
              <option value="Personal">Personal</option>
              <option value="Home">Home</option>
              <option value="Business">Business</option>
              <option value="vehicle">Vehicle</option>
            </select>
            <input
              type="number"
              name="amount"
              placeholder="Loan Amount"
              required
              value={formData.amount}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all mb-4"
            />
            <input
              type="text"
              name="bankname"
              placeholder="Bank Name"
              value={formData.bankname}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all mb-4"
            />
            <input
              type="text"
              name="accountnumber"
              placeholder="Account Number"
              value={formData.accountnumber}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all mb-4"
            />
            <input
              type="text"
              name="ifsc"
              placeholder="IFSC Code"
              value={formData.ifsc}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all mb-4"
            />
            <input
              type="text"
              name="pan"
              placeholder="PAN Number"
              value={formData.pan}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all mb-4"
            />
            <div className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all mb-4">
                <label htmlFor="transaction" className="block text-sm font-medium text-gray-700 mb-2">
                  Transaction History (6 months)
                </label>
                <input
                  type="file"
                  id="transaction"
                  name="transaction"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full"
                />
              </div>

            {error && <div className="text-red-500 mb-4">{error}</div>}
            <div className="flex justify-between mt-0">
              <button
                onClick={prevStep}
                className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-all"
              >
                ← Back
              </button>
              <button
                onClick={nextStep}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all"
              >
                Next →
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold text-purple-800 mb-6">
              Loan Details
            </h2>
            <select
              name="loantype"
              value={formData.loantype}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all mb-4"
            >
              <option value="">Loan Type</option>
              <option value="Personal">Personal</option>
              <option value="Home">Home</option>
              <option value="Business">Business</option>
              <option value="vehicle">Vehicle</option>
            </select>
            <input
              type="number"
              name="amount"
              placeholder="Loan Amount"
              required
              value={formData.amount}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all mb-4"
            />
            <input
              type="text"
              name="bankname"
              placeholder="Bank Name"
              value={formData.bankname}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all mb-4"
            />
            <input
              type="text"
              name="accountnumber"
              placeholder="Account Number"
              value={formData.accountnumber}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all mb-4"
            />
            <input
              type="text"
              name="ifsc"
              placeholder="IFSC Code"
              value={formData.ifsc}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all mb-4"
            />
            <input
              type="text"
              name="pan"
              placeholder="PAN Number"
              value={formData.pan}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all mb-4"
            />
            <div className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all mb-4">
                <label htmlFor="transaction" className="block text-sm font-medium text-gray-700 mb-2">
                  Transaction History (6 months)
                </label>
                <input
                  type="file"
                  id="transaction"
                  name="transaction"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full"
                />
              </div>

            {error && <div className="text-red-500 mb-4">{error}</div>}
            <div className="flex justify-between mt-0">
              <button
                onClick={prevStep}
                className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-all"
              >
                ← Back
              </button>
              <button
                onClick={nextStep}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all"
              >
                Next →
              </button>
            </div>
          </div>
        )}

      {step === 4 && (
  <div className="animate-fade-in">
    <h2 className="text-2xl font-bold text-purple-800 mb-6">
      Review Your Details
    </h2>
    <div className="space-y-4">
      <p className="text-gray-700">
        <strong>Name:</strong> {formData.name}
      </p>
      <p className="text-gray-700">
        <strong>Gender:</strong> {formData.gender}
      </p>
      <p className="text-gray-700">
        <strong>Date of Birth:</strong> {formData.dob}
      </p>
      <p className="text-gray-700">
        <strong>Marital Status:</strong> {formData.maritalStatus}
      </p>
      <p className="text-gray-700">
        <strong>Mobile Number:</strong> {formData.mobile}
      </p>
      <p className="text-gray-700">
        <strong>Email:</strong> {formData.email}
      </p>
      <p className="text-gray-700">
        <strong>Current Address:</strong> {formData.currentAddress}
      </p>
      <p className="text-gray-700">
        <strong>Permanent Address:</strong> {formData.permanentAddress}
      </p>
      <p className="text-gray-700">
        <strong>Occupation:</strong> {formData.occupation}
      </p>
      <p className="text-gray-700">
        <strong>Monthly Income:</strong> {formData.monthlyincome}
      </p>
      {/* Conditionally render ID fields based on idType */}
      {formData.idType === "Aadhar" && (
        <p className="text-gray-700">
          <strong>Aadhar Number:</strong> {formData.idNumber}
        </p>
      )}
      {formData.idType === "Vote ID" && (
        <p className="text-gray-700">
          <strong>Vote ID:</strong> {formData.idNumber}
        </p>
      )}
      {formData.idType === "Passport" && (
        <p className="text-gray-700">
          <strong>Passport:</strong> {formData.idNumber}
        </p>
      )}
      {/* Show N/A for non-selected ID types */}
      {formData.idType !== "Aadhar" && (
        <p className="text-gray-700">
          <strong>Aadhar Number:</strong> N/A
        </p>
      )}
      {formData.idType !== "Vote ID" && (
        <p className="text-gray-700">
          <strong>Vote ID:</strong> N/A
        </p>
      )}
      {formData.idType !== "Passport" && (
        <p className="text-gray-700">
          <strong>Passport:</strong> N/A
        </p>
      )}
      <p className="text-gray-700">
        <strong>Driving License:</strong> {formData.driving}
      </p>
      <p className="text-gray-700">
        <strong>Photo:</strong> {formData.photo ? formData.photo.name : "No file selected"}
      </p>
      <p className="text-gray-700">
        <strong>Loan Type:</strong> {formData.loantype}
      </p>
      <p className="text-gray-700">
        <strong>Loan Amount:</strong> {formData.amount}
      </p>
      <p className="text-gray-700">
        <strong>Bank Number:</strong> {formData.bankname}
      </p>
      <p className="text-gray-700">
        <strong>Account Number:</strong> {formData.accountnumber}
      </p>
      <p className="text-gray-700">
        <strong>IFSC Code:</strong> {formData.ifsc}
      </p>
      <p className="text-gray-700">
        <strong>PAN Number:</strong> {formData.pan}
      </p>
    </div>
    {error && <div className="text-red-500 mb-4">{error}</div>}
    <div className="flex justify-between mt-8">
      <button
        onClick={prevStep}
        className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-all"
      >
        ← Back
      </button>
      <button
        onClick={handleSubmit}
        className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-lg hover:from-green-600 hover:to-teal-600 transition-all"
      >
        Submit ✔
      </button>
    </div>
  </div>
)}
      </div>
    </div>
>>>>>>> b1853b4b0a2e99f0b304d328d497757dd6334047
  );
}

<<<<<<< HEAD
export default App;
=======
export default MultiPageForm;
>>>>>>> b1853b4b0a2e99f0b304d328d497757dd6334047
