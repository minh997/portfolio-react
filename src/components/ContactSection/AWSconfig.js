import AWS from "aws-sdk";

AWS.config.region = "us-east-1"; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: "us-east-1:630becbc-a771-444a-902b-9b97eee2e80e"
});

export const ses = new AWS.SES({ apiVersion: "2010-12-01" });
