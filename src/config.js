export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-2",
    BUCKET: "scratch-note-files"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://l8u95yx9eb.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_PCHDoywJB",
    APP_CLIENT_ID: "25vv9aqmf1bnpcpm21j0nn88ea",
    IDENTITY_POOL_ID: "us-east-2:8c00130c-e37b-496a-8f3f-5a291e7c5ddb"
  }
};