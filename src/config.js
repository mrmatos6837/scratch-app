// export default {
//   MAX_ATTACHMENT_SIZE: 5000000,
//   s3: {
//     REGION: "us-east-2",
//     BUCKET: "scratch-note-files"
//   },
//   apiGateway: {
//     REGION: "us-east-2",
//     URL: "https://l8u95yx9eb.execute-api.us-east-2.amazonaws.com/dev"
//   },
//   cognito: {
//     REGION: "us-east-2",
//     USER_POOL_ID: "us-east-2_PCHDoywJB",
//     APP_CLIENT_ID: "25vv9aqmf1bnpcpm21j0nn88ea",
//     IDENTITY_POOL_ID: "us-east-2:8c00130c-e37b-496a-8f3f-5a291e7c5ddb"
//   }
// };

// const dev = {
//   s3: {
//     REGION: "YOUR_DEV_S3_UPLOADS_BUCKET_REGION",
//     BUCKET: "YOUR_DEV_S3_UPLOADS_BUCKET_NAME"
//   },
//   apiGateway: {
//     REGION: "YOUR_DEV_API_GATEWAY_REGION",
//     URL: "YOUR_DEV_API_GATEWAY_URL"
//   },
//   cognito: {
//     REGION: "YOUR_DEV_COGNITO_REGION",
//     USER_POOL_ID: "YOUR_DEV_COGNITO_USER_POOL_ID",
//     APP_CLIENT_ID: "YOUR_DEV_COGNITO_APP_CLIENT_ID",
//     IDENTITY_POOL_ID: "YOUR_DEV_IDENTITY_POOL_ID"
//   }
// };

const dev = {
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

const prod = {
  s3: {
    REGION: "YOUR_PROD_S3_UPLOADS_BUCKET_REGION",
    BUCKET: "YOUR_PROD_S3_UPLOADS_BUCKET_NAME"
  },
  apiGateway: {
    REGION: "YOUR_PROD_API_GATEWAY_REGION",
    URL: "YOUR_PROD_API_GATEWAY_URL"
  },
  cognito: {
    REGION: "YOUR_PROD_COGNITO_REGION",
    USER_POOL_ID: "YOUR_PROD_COGNITO_USER_POOL_ID",
    APP_CLIENT_ID: "YOUR_PROD_COGNITO_APP_CLIENT_ID",
    IDENTITY_POOL_ID: "YOUR_PROD_IDENTITY_POOL_ID"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};