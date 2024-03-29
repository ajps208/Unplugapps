# Single Page Sales Entry Front-end Application

This project is a Single Page Sales entry front-end built using ReactJS and Redux. It features two main sections: the header section and the detail section for managing sales entries.

## UI Example

<div><a href="https://ibb.co/rHRFJkL"><img src="https://i.ibb.co/ZxpGCdw/Screenshot-2024-01-27-191804.png" alt="Screenshot-2024-01-27-191804" border="0" /></a>
<a href="https://ibb.co/Z8hC0X2"><img src="https://i.ibb.co/bBrnkmb/Screenshot-2024-01-27-191835.png" alt="Screenshot-2024-01-27-191835" border="0" /></a></div>
## Features

1. **Header Section:**
   - Display necessary fields from the header_table.

2. **Detail Section:**
   - Allow entry for multiple rows in the detail_table.
   - Include fields for items, quantities, prices, and other relevant details.
   - Implement functionality to dynamically add or remove rows in the detail_table to accommodate multiple entries.

3. **Data Validation:**
   - Validate input data to ensure all required fields are filled.
   - Check the data entered for correct format and validity.

4. **Data Submission:**
   - On submission of the form, save the data entered into the appropriate tables in the database.
   - Save header information in the header_table and detail information in the detail_table.

5. **Printable Version:**
   - Provide a printable version of the saved Voucher for easy documentation.

## Technologies Used

- ReactJS
- Redux
- Other relevant libraries for form management and styling.

## Instructions for Running the Application

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Run the application using `npm start`.
5. Access the application in your browser at the provided URL.

## Project Structure

- **src/**
  - **components/**: Contains React components for different sections.
  - **redux/**: Redux related files for state management.
  - **services/**: API service files for interacting with the backend.
  - **Pages/**: Viewing content.
  - **App.js**: Main component orchestrating the application.
  - **index.js**: Entry point of the application.


