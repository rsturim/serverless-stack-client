// export default {
//     s3: {
//         REGION: "YOUR_S3_UPLOADS_BUCKET_REGION",
//         BUCKET: "YOUR_S3_UPLOADS_BUCKET_NAME",
//     },
//     apiGateway: {
//         REGION: "YOUR_API_GATEWAY_REGION",
//         URL: "YOUR_API_GATEWAY_URL",
//     },
//     cognito: {
//         REGION: "YOUR_COGNITO_REGION",
//         USER_POOL_ID: "YOUR_COGNITO_USER_POOL_ID",
//         APP_CLIENT_ID: "YOUR_COGNITO_APP_CLIENT_ID",
//         IDENTITY_POOL_ID: "YOUR_IDENTITY_POOL_ID",
//     },
// };

const dev = {
    s3: {
        REGION: "us-east-1",
        BUCKET: "rsturim-notes-app-uploads-dev",
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://api.rsturim.com/dev",
        // URL: "https://rlou1qij01.execute-api.us-east-1.amazonaws.com/dev",
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_yP0rbUL5i",
        APP_CLIENT_ID: "2hjmbdqrf9l60gogef2bq9mj3e",
        IDENTITY_POOL_ID: "us-east-1:6a586b09-06b9-4067-b0e2-593135e2cb1c",
    },
    STRIPE_KEY: "pk_test_JhrwRETWAsrkfeTAVISfRpMv004VRdRINz",
};

const prod = {
    s3: {
        REGION: "us-east-1",
        BUCKET: "rsturim-notes-app-uploads",
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "http://api.rsturim.com/prod",
        // URL: "https://sju98p28oc.execute-api.us-east-1.amazonaws.com/prod",
        // URL: "https://8zhs7cihh5.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_4gt1vuJxz",
        APP_CLIENT_ID: "2f3i5a6qn84rtfb4flivm56ib6",
        IDENTITY_POOL_ID: "us-east-1:0f0793b1-556e-4b40-a413-aa3389fb4ea4",
        // IDENTITY_POOL_ID: "us-east-1:ef8e6c83-2f32-4094-b8fc-45a91c956ad9",
    },
    STRIPE_KEY: "pk_test_JhrwRETWAsrkfeTAVISfRpMv004VRdRINz",
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config,
};
