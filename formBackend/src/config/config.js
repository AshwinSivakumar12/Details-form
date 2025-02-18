const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.join(__dirname, "../../.env") });
const Joi = require("joi");
// const { default: mongoose } = require('mongoose');

const envVarSchema = Joi.object()
  .keys({
    PORT: Joi.number().default(3333),
    MONGODB_URL: Joi.string().required().description("MongoDB URL"),

    SMTP_HOST: Joi.string().description("Email host"),
    SMTP_PORT: Joi.number().description("Smtp port"),
    SMTP_EMAIL_FROM: Joi.string().description("admin email"),
    SMTP_EMAIL_PASS: Joi.string().description("email pass key"),
    ADMIN_EMAIL: Joi.string().description("admin email"),
  })
  .unknown();

const { value: envVars, error } = envVarSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  env: envVars.NODE_ENV,
  PORT: envVars.PORT,
  mongoose: {
    url: envVars.MONGODB_URL,
  },
  email: {
    smtp: {
      host: envVars.SMTP_HOST,
      port: envVars.SMTP_PORT,
      auth: {
        user: "ashwinsiva992@gmail.com",
        pass: "koxm ktsp uvsq wnaz",
      },
      tls: {
        rejectUnauthorized: false, // Ignore self-signed certificate error
      },
    },
    adminEmail: envVars.ADMIN_EMAIL,
  },
};
