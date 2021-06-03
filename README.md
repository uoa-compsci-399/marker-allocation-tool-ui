# Classe: A Web-Based Tool For Organising Markers

One of the most important aspects of any student's university life is undoubtedly their grades; therefore, timeliness in the delivery of course grades plays a critical part in creating a positive university experience. Over the last few years, the University of Auckland has seen a large increase in its student body, meaning that more markers are being sought after to match the growing workload. Currently, the marker allocation process is performed manually and is time-consuming. Classe aims to simplify marker allocation and create a more efficient and streamlined process. In doing so, we hope to enhance the university experience for both students and teaching staff alike.

## Technologies Used

- Frontend
  - Node.js v14.14.37
  - React.js v17.0.0
  - Tailwind CSS v1.7.0
  - TypeScript v4.1.2

- Backend
  - Express.js v4.17.1  
  - SAML2-js v3.0.1
  - SQLite3 v5.0.2
  - TypeScript v4.2.3

- Pre-Commit Hooks
  - Eslint v7.23.0 
  - Husky v6.0.0
  - Prettier v2.2.1

## Installation and Setup

### Frontend

1. Install Node.js.

2. Then to install Yarn: `npm install -g yarn`

3. Install https://volta.sh/ for automatic node version management

4. From project root run `yarn install`

5. Run `yarn dev`.

5. Open in http://localhost:3000/

### Backend

1. After cloning the repository, run `yarn install`.

2. Then to install Yarn: `npm install -g yarn`

3. Install https://volta.sh/ for automatic node & yarn version management

4. From project root run `yarn install`

5. Run `yarn dev`.

6. Open in http://localhost:8000/

## Usage Examples

- Marker Coordinator 
  - Create courses
  - Create course coordinator accounts
  - Assign course coordinators to courses
  - View list of applicants and their applications 
  - Accept or reject applicants
- Course Coordinator
  - View applicants for courses that they manage
  - Accept or reject applicants for their courses
- Marker
  - Access information about each course
  - Apply for marker positions
  - See the status of their application
  - Receive an email notification when a decision about their application has been made

## Website URL

https://dev.classe.wumbo.co.nz/

## Future Plans

- Redesign aspects of the user interface to be more scalable 
- Move to a commercialised database structure for more efficient backend hosting
- Incorporate the use of an algorithm to automate marker allocation
