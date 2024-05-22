# Video Streaming Web Application Using AWS Services

This is a video streaming web application built using AWS. It allows users to upload, store, process, and stream videos. The serverless architecture ensures scalability and a seamless streaming experience.

## Tech Stack

<div align="center">

  ![React.js Badge](https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=white)
  ![Node.js Badge](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
  ![AWS Lambda Badge](https://img.shields.io/badge/AWS_Lambda-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)
  ![AWS API Gateway Badge](https://img.shields.io/badge/AWS_API_Gateway-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)
  ![AWS S3 Badge](https://img.shields.io/badge/AWS_S3-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)
  ![AWS CloudFront Badge](https://img.shields.io/badge/AWS_CloudFront-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)
  ![AWS Amplify Badge](https://img.shields.io/badge/AWS_Amplify-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)
</div>


## Architecture Overview

- **Amazon S3**: Stores videos securely.
- **Amazon CloudFront**: Ensures fast global video delivery.
- **AWS Lambda**: Manages video processing.
- **Amazon API Gateway**: Handles video uploads and management.
- **Amazon DynamoDB**: Keeps track of video metadata and user stats.
- **Amazon Amplify**: Simplifies app deployment.

<p align="center">
  <img src="https://github.com/PasanAbeysekara/video-streaming-web-app-using-aws-services/assets/69195287/ce11875f-933d-4f8b-a71c-d0feba739a72" />
</p>


## Features

- Upload and store videos.
- Automatic video processing.
- Secure and scalable streaming.
- User authentication.
- Analytics on video engagement.

## Backend Testing Overview

Our backend testing suite ensures robust and reliable operation through:

1. **Model Testing with Mocha & Chai:**
   - Verifies that the `Video` model behaves as expected, including data integrity for attributes like `name`, `views`, and `likes`.

2. **API Endpoint Testing using Chai-HTTP:**
   - Ensures the `/api/videos` route fetches all videos correctly, checking for a `200` status and an array response.

### Running the Tests

Execute our comprehensive test suite to validate backend functionality before deployment:

```bash
npm run mocha
```

## Setup

### Prerequisites

- AWS Account
- AWS CLI
- Node.js and npm

### Deployment Steps

1. **AWS Setup**:
   - Create S3 buckets for video storage.
   - Set up a CloudFront distribution for video delivery.
   - Deploy Lambda functions for video processing.
   - Configure Amazon API Gateway for video management.
   - Set up DynamoDB tables for metadata.

2. **IAM Configuration**:
   - Create roles for Lambda, API Gateway, and other services.

3. **Web Application Deployment**:
   - **Amazon S3 Hosting**:
     - Create an S3 bucket for hosting.
     - Enable static website hosting.
     - Upload your application and set public read permissions.
   - **AWS Amplify**:
     - Connect your Git repository.
     - Configure build settings.
     - Deploy your application.

## Usage

To use the app, start by uploading videos. You can then stream videos, and interact with features like liking and commenting.
