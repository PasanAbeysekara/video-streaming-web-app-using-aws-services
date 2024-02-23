
# Video Streaming Web Application Using AWS Services

## Overview

This project is a scalable video streaming web application built on AWS. It allows users to upload, store, process, and stream video content efficiently. Utilizing a serverless architecture, the application is designed to scale automatically with demand, ensuring a smooth streaming experience for a large number of users.

## Architecture

Describe the overall architecture of the application, including how each AWS service is utilized:

- **Amazon S3**: Stores original and processed video content securely.
- **Amazon CloudFront**: Distributes video content globally with low latency.
- **AWS Lambda**: Handles video processing and integration logic.
- **Amazon API Gateway**: Provides RESTful APIs for uploading and managing videos.
- **Amazon DynamoDB**: Stores metadata about videos, users, and viewing statistics.
- **Amazon Amplify**: Deploy the appplication.

![image](https://github.com/PasanAbeysekara/video-streaming-web-app-using-aws-services/assets/69195287/963dd89f-2657-4987-bf63-004fd8b4d90a)

## Features

- Video uploading and storage
- Automatic video processing (e.g., transcoding)
- Secure and scalable video streaming
- User authentication and authorization
- Analytics on video views and user engagement

## Prerequisites

- AWS Account
- AWS CLI installed and configured
- Node.js and npm (for Lambda function development)

## Setup and Deployment

### Step 1: Setup AWS Services

1. **Amazon S3**: Create buckets for storing original and processed videos.
2. **Amazon CloudFront**: Set up a distribution to serve video content from S3.
3. **AWS Lambda**: Deploy Lambda functions for video processing.
4. **Amazon API Gateway**: Create an API for uploading and video management.
5. **Amazon DynamoDB**: Create tables for storing metadata.

### Step 2: Configure IAM Roles

- Create IAM roles with appropriate permissions for Lambda functions, API Gateway, and other services to access S3, DynamoDB, and CloudFront.

### Step 3: Deploy the Web Application

Completing Step 3 involves detailing how to deploy the front-end part of the video streaming web application, typically hosted on a service like Amazon S3, configured for website hosting, or using AWS Amplify for more integrated front-end and back-end deployments. Here's a detailed guide on deploying the web application using both methods.

#### Deploying with Amazon S3

Amazon S3 can be used to host static web resources including HTML, CSS, JavaScript, and media files. S3 is cost-effective, scalable, and does not require a server to run your website.

##### Steps

1. **Create an S3 Bucket for Web Hosting:**
   - Log in to the AWS Management Console.
   - Navigate to the S3 service and create a new bucket.
   - Ensure the bucket name is unique and adheres to DNS naming conventions.
   - Uncheck "Block all public access" settings and acknowledge the bucket will be publicly accessible.
   - Choose a region close to your target audience for better performance.

2. **Enable Static Website Hosting:**
   - Once the bucket is created, navigate to its properties.
   - Find the "Static website hosting" option and enable it.
   - Set the index document as `index.html` and the error document as `error.html` (or your custom pages).
   - Note the Bucket website endpoint URL for future reference.

3. **Upload Your Web Application:**
   - Build your web application if you haven't already.
   - Use the AWS CLI or the Management Console to upload your files to the bucket.
   - Set the appropriate permissions to make the files publicly accessible. You can use a bucket policy to allow public read access to all objects in the bucket.

4. **Configure a Bucket Policy:**
   - Go to the Permissions tab of your bucket.
   - Edit the bucket policy to grant public read access to the website files. Example policy:

    ```json
    {
      "Version": "2012-10-17",
      "Statement": [{
        "Sid": "PublicReadGetObject",
        "Effect": "Allow",
        "Principal": "*",
        "Action": "s3:GetObject",
        "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
      }]
    }
    ```

5. **Access Your Website:**
   - Use the Bucket website endpoint URL noted earlier to access your site.

#### Deploying with AWS Amplify

AWS Amplify provides a complete suite of services for building full-stack applications, including continuous deployment from your source code repository to a global content delivery network (CDN).

##### Prerequisites

- Your web application's source code hosted on a Git repository (GitHub, GitLab, Bitbucket, etc.).
- AWS Account and Amplify CLI installed.

##### Steps

1. **Connect Your Repository:**
   - Navigate to the AWS Amplify Console.
   - Click "Connect app" and choose your source code provider.
   - Follow the prompts to connect your repository and branch.

2. **Configure Build Settings:**
   - Amplify detects the build settings from your repository. You can adjust these settings if necessary.
   - Review the build settings and make any needed adjustments for your project's build commands and output directory.

3. **Deploy Your Application:**
   - Click "Save and deploy." AWS Amplify will build your application from the source code and deploy it to a globally available CDN.
   - Once the build and deploy process completes, Amplify provides a URL to access your web application.

Both methods offer scalable, reliable ways to deploy a web application with different levels of complexity and flexibility. Choose the one that best fits your project's needs and infrastructure.

## Usage

- **Uploading Videos**
- **Streaming Videos**: Liking and Commenting also included 
