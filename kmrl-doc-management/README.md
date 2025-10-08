# KMRL Document Management System

## Overview
The KMRL Document Management System is a comprehensive web application designed to address the document management challenges faced by the Kochi Water Metro Rail Limited (KMRL). This application facilitates efficient information retrieval, compliance tracking, and cross-department coordination, ensuring that all stakeholders have access to the necessary documents and updates.

## Features
- **Information Retrieval**: Users can easily search and retrieve documents based on various criteria, enhancing accessibility and efficiency.
- **Compliance Tracking**: The system tracks compliance statuses of documents, providing alerts and updates to ensure adherence to regulations.
- **Cross-Department Coordination**: Facilitates collaboration between different departments by providing a centralized platform for document sharing and updates.

## Technology Stack
- **Frontend**: React, TypeScript, Axios
- **Backend**: Node.js, Express, MongoDB, Mongoose, TypeScript

## Project Structure
```
kmrl-doc-management
├── backend
│   ├── src
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── frontend
│   ├── src
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── README.md
```

## Setup Instructions

### Backend
1. Navigate to the `backend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm start
   ```

### Frontend
1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the application:
   ```
   npm start
   ```

## API Endpoints
- **GET /api/documents**: Retrieve a list of documents.
- **POST /api/documents**: Upload a new document.
- **GET /api/documents/compliance**: Track compliance status of documents.

## Contribution
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.