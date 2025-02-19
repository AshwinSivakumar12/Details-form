import { useState } from "react";

const MultiPageForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    idType: "",
    idNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      {/* Progress Bar */}
      <div className="relative mb-6">
        <div className="flex justify-between mb-2">
          <span
            className={`text-sm font-semibold ${
              step >= 1 ? "text-blue-600" : "text-gray-400"
            }`}
          >
            Personal Details
          </span>
          <span
            className={`text-sm font-semibold ${
              step >= 2 ? "text-blue-600" : "text-gray-400"
            }`}
          >
            ID Proof
          </span>
          <span
            className={`text-sm font-semibold ${
              step >= 3 ? "text-blue-600" : "text-gray-400"
            }`}
          >
            Review & Submit
          </span>
        </div>
        <div className="w-full bg-gray-300 h-1 rounded-full">
          <div
            className={`h-1 rounded-full transition-all duration-300 ${
              step === 1
                ? "w-1/3 bg-blue-600"
                : step === 2
                ? "w-2/3 bg-blue-600"
                : "w-full bg-blue-600"
            }`}
          ></div>
        </div>
      </div>

      {step === 1 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-3"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-3"
          />
          <button
            onClick={nextStep}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Next →
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">ID Proof Details</h2>
          <select
            name="idType"
            value={formData.idType}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-3"
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
            className="w-full p-2 border rounded mb-3"
          />
          <div className="flex justify-between">
            <button
              onClick={prevStep}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              ← Back
            </button>
            <button
              onClick={nextStep}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Next →
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Review Your Details</h2>
          <p className="mb-2">
            <strong>Name:</strong> {formData.name}
          </p>
          <p className="mb-2">
            <strong>Address:</strong> {formData.address}
          </p>
          <p className="mb-2">
            <strong>ID Type:</strong> {formData.idType}
          </p>
          <p className="mb-2">
            <strong>ID Number:</strong> {formData.idNumber}
          </p>
          <div className="flex justify-between mt-4">
            <button
              onClick={prevStep}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              ← Back
            </button>
            <button
              onClick={handleSubmit}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Submit ✔
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiPageForm;
