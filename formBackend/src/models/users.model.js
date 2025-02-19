const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    personalInfo: {
      fullName:
      {
        type: String,
        required: true
      },
      dateOfBirth:
      {
        type: Date,
        required: true
      },
      gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        required: true,
      },
      maritalStatus: {
        type: String,
        enum: ["Single", "Married", "Divorced", "Widowed"],
      },
      contactNumber:
      {
        type: String,
        required: true
      },
      alternateNumber:
      {
        type: String
      },
      email:
      {
        type: String,
        required: true, unique: true
      },
      address: {
        current: { type: String, required: true },
        permanent: { type: String },
      },
      governmentID: {
        type: {
          type: String,
          enum: ["Aadhaar", "PAN", "Passport", "Voter ID"],
          required: true,
        },
        number: {
          type: String,
          required: true,
          unique: true
        },
      },
      Photo: {
        type: String,
        required:true
      }
    },
    financialDetails: {
      occupation: {
        type: String,
        enum: ["Salaried", "Self-Employed", "Business"],
        required: true,
      },
      employerName: {
        type: String,
        required: function () {
          return this.financialDetails.occupation === "Salaried";
        },
      },
      employerAddress: {
        type: String,
        required: function () {
          return this.financialDetails.occupation === "Salaried";
        },
      },
      monthlyIncome: {
        type: Number,
        required: true
      },
      annualIncome:
      {
        type: Number 
          
        },
      incomeProof:
      {
        type: String 
          
        }, 
      businessRegistration: {
        type: String,
        required: function () {
          return this.financialDetails.occupation === "Business";
        },
      },
      financialStatements: {
        type: String,
        required: function () {
          return this.financialDetails.occupation === "Business";
        },
      }, 
    },
    loanDetails: {
      existingLoans: [
        {
          loanType: {
            type: String,
            enum: ["Personal", "Home", "Business", "Auto", "Gold", "Other"],
          },
          loanAmount:
          {
            type: Number
          },
          loanTenure:
          {
            type: Number
          }, 
          interestRate:
          {
            type: Number
          },
          emiAmount:
          {
            type: Number
          }, 
        },
      ],
      requiredLoan: {
        loanType: {
          type: String,
          enum: ["Personal", "Home", "Business", "Auto", "Gold", "Other"],
          required: true,
        },
        amountRequired:
        {
          type: Number,
          required: true
        },
        tenure:
        {
          type: Number,
          required: true
        },
        purpose:
        {
          type: String,
          required: true
        },
      },
      creditScore:
      {
        type: Number
      },
    },
    assets: {
      property: {
        address: {
          type: String,
          required: function () {
            return this.assets.property.estimatedValue > 0;
          },
        },
        estimatedValue: { type: Number },
      },
      vehicle: {
        model: {
          type: String,
          required: function () {
            return this.assets.vehicle.registrationNumber;
          },
        },
        registrationNumber:
        {
          type: String
        },
      },
      gold: {
        weightInGrams:
        {
          type: Number
        },
        estimatedValue:
        {
          type: Number
        },
      },
    },
    bankDetails: {
      accountNumber:
      {
        type: String,
        required: true
      },
      panCard: {
        type: String,
        required:true
      },
      bankName:
      {
        type: String,
        required: true
      },
      branch:
      {
        type: String
      },
      ifscCode:
      {
        type: String,
        required: true
      },
      transactionHistory:
      {
        type: String
      }, 
    },
    references: [
      {
        name:
        {
          type: String,
          required: true
        },
        relationship:
        {
          type: String
        },
        contactNumber:
        {
          type: String,
          required: true
        },
      },
    ],
    nominee: {
      name:
      {
        type: String,
        required: true
      },
      relationship:
      {
        type: String,
        required: true
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", customerSchema);
