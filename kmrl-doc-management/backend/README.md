# KMRL Document Management Backend

## Overview
The KMRL Document Management backend is designed to facilitate efficient document management, compliance tracking, and cross-department coordination for the Kochi Water Metro Rail Limited (KMRL). This application provides a robust API for managing documents, ensuring compliance, and enabling seamless communication between departments.

## Features
- **Document Retrieval**: Easily fetch documents based on various criteria.
- **Document Upload**: Upload new documents with relevant details.
- **Compliance Tracking**: Monitor the compliance status of documents.
- **Authentication**: Secure access to the API with authentication middleware.

## Technologies Used
- **Node.js**: JavaScript runtime for building the backend.
- **Express**: Web framework for building the API.
- **Mongoose**: ODM for MongoDB, used for data modeling.
- **TypeScript**: Superset of JavaScript that adds static types.

## Setup Instructions
1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd kmrl-doc-management/backend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root of the backend directory and add the necessary environment variables (e.g., database connection string).

4. **Run the Application**
   ```bash
   npm start
   ```

5. **API Endpoints**
   - `GET /api/documents`: Retrieve a list of documents.
   - `POST /api/documents`: Upload a new document.
   - `GET /api/documents/compliance`: Track compliance status.

## Directory Structure
- **src/**: Contains the source code for the backend application.
  - **controllers/**: Contains controller files for handling requests.
  - **models/**: Contains Mongoose models for data representation.
  - **routes/**: Contains route definitions for the API.
  - **services/**: Contains business logic for document management.
  - **middleware/**: Contains authentication middleware.
  - **utils/**: Contains utility functions.

## Contribution
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.