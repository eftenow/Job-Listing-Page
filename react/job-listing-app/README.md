# Job Listings Page

Welcome! This web application is built using React, MobX, TypeScript, and SCSS it allows users to explore different job listings, personal account can apply to job listings and company users can create new job listings.

## Features

### User Authentication

- **Login Page**: Users can log in using their credentials.
- **Register Page**: New users can register,  during registration, they choose between a company account or a standard personal account.
- **Validation**: Both login and register pages have validation, which checks to ensure the input is valid.

### User Roles

- **Standard Users**: Can view job listings and apply for jobs.
- **Company Users**: Can create new job listings or edit/delete their existing ones.

### Job Listings

- **Create Job Listings**: Company users can create new job listings, specifying details such as job position, role,  required programming languages for their candidates, required programming tools, part-time or full-time,  etc.
- **Visibility**: Job listings are visible to all users, including guests.
- **Job listing filtration**: Users can filtrate job listings according to their needs.
- **Job application**: Applying for a job listing is only visible for registered (standard) users.
- **Edit/Delete Listings**: Registered companies have the option to edit or delete their own job listings.

### Navigation

- **Dynamic Navigation**: Navigation changes based on whether a user is logged in or not.
- **Role-Based Navigation**: Different navigation buttons are displayed for standard and company users.

### Persistence

- **User Session**: User sessions are persisted using local storage.

### Responsive Design

- **Fully Responsive**: All pages are designed to be fully responsive, providing a consistent experience across various devices.

## Getting Started

1. Clone the repository: `git clone https://gitlab.com/zestlabs-io/education/job-listing-app-react-tsvetan.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`



## Technologies Used

- React
- TypeScript
- MobX
- SCSS

## Screenshots

### Desktop home page  

![Home page](/screenshots/01_home.png)

### Register page - upon invalid registration input, the client returns list with the errors:  

![Register page](/screenshots/02_register_invalid_data.png)

### After entering valid data, the registration is successful and the user gets redirected to the home page. This time, the user can see his profile picture, which was entered during registration, in the top right corner. The apply button on the bottom left corner of each job listing is only visible to logged-in users of type 'standard'.

![Home page logged in user](/screenshots/03_home_logged_in.png)

### Filtration, based on the specified requirements of the user.

![Filtration](/screenshots/04_home_filtered_listings.png)

### Applying for jobs:

![Applying](/screenshots/05_home_apply.png)


### Now lets register once again, this time as company user and see the difference

![Applying](/screenshots/06_register_as_company.png)


### Logged-in company accounts can see "Add Listing" button in their navbar, which leads them to this page:

![Add listing](/screenshots/07_job_listing_creation.png)
![adding listing](/screenshots/08_job_listing_creatin_data.png)

### After entering all the fields and submitting the form, the user gets redirected to the home page, where he can see his newly created listing:

![newly created listing](/screenshots/09_newly_created_job_listing.png)


### The edit button brings the user to a page similar to the create page, here we are making changes to the "Position" and the "Employment type":

![edit listing](/screenshots/10_edit_job_listing.png)

### After submitting the edit form, the user gets redirected to the home page, where he can see his edited listing:

![edited listing](/screenshots/11_edited_job_listing.png)

### Responsive design:


![responsive](/screenshots/12_responsive_design.png)
![responsive](/screenshots/12_responsive_create.png)
![responsive](/screenshots/13_responsive_login.png)
