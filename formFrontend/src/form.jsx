import React, { useState } from "react";

const LoanForm = () => {
  const [formData, setFormData] = useState({
    hasExistingLoan: false, // Track if user has existing loans
    existingLoans: [
      {
        loanType: "",
        loanAmount: "",
        loanTenure: "",
        interestRate: "",
        emiAmount: "",
      },
    ],
    requiredLoan: {
      loanType: "Personal",
      amountRequired: "",
      tenure: "",
      purpose: "",
    },
    creditScore: "",
  });

  // Handle toggle for existing loan section
  const handleExistingLoanToggle = (value) => {
    setFormData({ ...formData, hasExistingLoan: value });
  };

  // Handle input change for existing loans
  const handleExistingLoanChange = (index, field, value) => {
    const updatedLoans = [...formData.existingLoans];
    updatedLoans[index][field] = value;
    setFormData({ ...formData, existingLoans: updatedLoans });
  };

  // Add a new existing loan
  const addExistingLoan = () => {
    setFormData({
      ...formData,
      existingLoans: [
        ...formData.existingLoans,
        {
          loanType: "",
          loanAmount: "",
          loanTenure: "",
          interestRate: "",
          emiAmount: "",
        },
      ],
    });
  };

  // Remove an existing loan
  const removeExistingLoan = (index) => {
    const updatedLoans = formData.existingLoans.filter((_, i) => i !== index);
    setFormData({ ...formData, existingLoans: updatedLoans });
  };

  // Handle input change for required loan
  const handleRequiredLoanChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      requiredLoan: { ...formData.requiredLoan, [name]: value },
    });
  };

  // Handle input change for credit score
  const handleCreditScoreChange = (e) => {
    setFormData({ ...formData, creditScore: e.target.value });
  };

  // Handle form submission (logs data)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Loan Details Submitted:", formData);
    alert("Check console for submitted data!");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
        Loan Details Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Existing Loan Toggle */}
        <h3 className="text-xl font-semibold text-gray-700">
          Do you have existing loans?
        </h3>
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={() => handleExistingLoanToggle(true)}
            className={`px-4 py-2 rounded ${
              formData.hasExistingLoan
                ? "bg-green-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            Yes
          </button>
          <button
            type="button"
            onClick={() => handleExistingLoanToggle(false)}
            className={`px-4 py-2 rounded ${
              !formData.hasExistingLoan
                ? "bg-red-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            No
          </button>
        </div>

        {/* Existing Loans Section (Only Visible if 'Yes' is Selected) */}
        {formData.hasExistingLoan && (
          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              Existing Loans
            </h3>
            {formData.existingLoans.map((loan, index) => (
              <div
                key={index}
                className="p-4 bg-white shadow rounded-lg space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Loan Type"
                    value={loan.loanType}
                    onChange={(e) =>
                      handleExistingLoanChange(
                        index,
                        "loanType",
                        e.target.value
                      )
                    }
                    className="p-2 border rounded w-full"
                  />
                  <input
                    type="number"
                    placeholder="Loan Amount"
                    value={loan.loanAmount}
                    onChange={(e) =>
                      handleExistingLoanChange(
                        index,
                        "loanAmount",
                        e.target.value
                      )
                    }
                    className="p-2 border rounded w-full"
                  />
                  <input
                    type="number"
                    placeholder="Tenure (Months)"
                    value={loan.loanTenure}
                    onChange={(e) =>
                      handleExistingLoanChange(
                        index,
                        "loanTenure",
                        e.target.value
                      )
                    }
                    className="p-2 border rounded w-full"
                  />
                  <input
                    type="number"
                    step="0.1"
                    placeholder="Interest Rate (%)"
                    value={loan.interestRate}
                    onChange={(e) =>
                      handleExistingLoanChange(
                        index,
                        "interestRate",
                        e.target.value
                      )
                    }
                    className="p-2 border rounded w-full"
                  />
                  <input
                    type="number"
                    placeholder="EMI Amount"
                    value={loan.emiAmount}
                    onChange={(e) =>
                      handleExistingLoanChange(
                        index,
                        "emiAmount",
                        e.target.value
                      )
                    }
                    className="p-2 border rounded w-full"
                  />
                </div>

                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeExistingLoan(index)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                  >
                    Remove Loan
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addExistingLoan}
              className="bg-green-500 text-white px-4 py-2 rounded-md mt-2"
            >
              + Add Existing Loan
            </button>
          </div>
        )}

        {/* Required Loan */}
        <h3 className="text-xl font-semibold text-gray-700">Required Loan</h3>
        <div className="p-4 bg-white shadow rounded-lg space-y-4">
          <select
            name="loanType"
            value={formData.requiredLoan.loanType}
            onChange={handleRequiredLoanChange}
            className="p-2 border rounded w-full"
          >
            <option value="Personal">Personal Loan</option>
            <option value="Home">Home Loan</option>
            <option value="Car">Car Loan</option>
            <option value="Education">Education Loan</option>
          </select>
          <input
            type="number"
            name="amountRequired"
            value={formData.requiredLoan.amountRequired}
            onChange={handleRequiredLoanChange}
            className="p-2 border rounded w-full"
            placeholder="Amount Required"
          />
          <input
            type="number"
            name="tenure"
            value={formData.requiredLoan.tenure}
            onChange={handleRequiredLoanChange}
            className="p-2 border rounded w-full"
            placeholder="Tenure (Months)"
          />
          <input
            type="text"
            name="purpose"
            value={formData.requiredLoan.purpose}
            onChange={handleRequiredLoanChange}
            className="p-2 border rounded w-full"
            placeholder="Purpose"
          />
        </div>

        {/* Credit Score */}
        <h3 className="text-xl font-semibold text-gray-700">Credit Score</h3>
        <input
          type="number"
          value={formData.creditScore}
          onChange={handleCreditScoreChange}
          className="p-2 border rounded w-full"
          placeholder="Credit Score"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Submit Loan Details
        </button>
      </form>
    </div>
  );
};

export default LoanForm;
