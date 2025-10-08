# KMRL Document Management Frontend

This project is the frontend application for the KMRL Document Management System. It provides a user-friendly interface for managing documents, tracking compliance, and facilitating cross-department coordination.

## Features

- **Document List**: View and filter documents based on various criteria.
- **Document Upload**: Upload new documents with relevant details.
- **Compliance Tracker**: Monitor compliance status and receive updates.
- **Department Coordination**: Collaborate across departments by accessing shared documents and updates.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static types.
- **React Router**: For handling routing within the application.
- **Axios**: For making HTTP requests to the backend API.

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd kmrl-doc-management/frontend
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm start
   ```

4. **Access the application**: Open your browser and navigate to `http://localhost:3000`.

## Component Overview

- **App.tsx**: Main component that sets up routing.
- **DocumentList.tsx**: Displays a list of documents.
- **DocumentUpload.tsx**: Form for uploading new documents.
- **ComplianceTracker.tsx**: Displays compliance status updates.
- **Home.tsx**: Landing page of the application.
- **DepartmentCoordination.tsx**: Page for cross-department collaboration.

## API Integration

The frontend communicates with the backend API to perform operations such as fetching documents and uploading new ones. The API functions are defined in `src/services/api.ts`.

## Contribution

Feel free to contribute to this project by submitting issues or pull requests. Your feedback and contributions are welcome!