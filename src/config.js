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

export default {
    s3: {
        REGION: "us-east-1",
        BUCKET: "rsturim-notes-app-uploads",
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://8zhs7cihh5.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_wQ4MZmYE0",
        APP_CLIENT_ID: "4793l22j0f4l1rr1srtm34c30l",
        IDENTITY_POOL_ID: "us-east-1:ef8e6c83-2f32-4094-b8fc-45a91c956ad9",
    },
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_JhrwRETWAsrkfeTAVISfRpMv004VRdRINz",
};
