# Forensixplore - Department Club Website

Forensixplore is the official website for the Forensixplore Club, A cybersecurity club of csit department at KL University dedicated to advancing knowledge and skills in digital forensics, cybersecurity, and technology. Built with the MERN stack (MongoDB, Express.js, React, Node.js), this platform serves as a dynamic hub for club events, resources, member engagement, and community outreach.

## Features
- **Event Portal**: View and register for club events like workshops, CTFs (Capture The Flag), and seminars.
- **Resource Library**: Access curated tutorials, forensic tools, and cybersecurity articles.
- **User Authentication**: Sign up, log in, and manage member profiles.
- **Announcements**: Stay updated with club news and achievements.
- **Responsive UI**: Modern, mobile-friendly design for seamless browsing.

## Tech Stack
- **Frontend**: React, Tailwind CSS (or specify your CSS framework)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT-based (or specify if using another method)
- **Deployment**: (Update with platform, e.g., Vercel, Heroku, or AWS if applicable)

## Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- Git
- NPM or Yarn

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/niranjansah87/Forensixplore.git
   cd Forensixplore
   ```
2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```
3. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in the `backend` folder with the following:
     ```
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     PORT=5000
     ```
   - (Add other variables as needed, e.g., API keys)
5. Start the backend server:
   ```bash
   cd backend
   npm start
   ```
6. Start the frontend development server:
   ```bash
   cd ../frontend
   npm start
   ```
   - Backend runs at `http://localhost:5000`.
   - Frontend runs at `http://localhost:3000`.

## Usage

### Accessing the Website
- **Home**: Explore club highlights, upcoming events, and news.
- **Events**: Register for events or view past activities.
- **Resources**: Browse or download forensic and cybersecurity resources.
- **Profile**: Log in to manage your membership and preferences.

### Example API Endpoints
- **Register User**: `POST /api/users/register`
- **Login User**: `POST /api/users/login`
- **Get Events**: `GET /api/events`

Run the backend and use tools like Postman to test APIs.

## Contributing

We encourage contributions from club members and developers! To contribute:
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request.

Ensure code follows ESLint rules (if configured) and includes clear comments.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

Reach out to the Forensixplore Club for support or collaboration:
- **Maintainer**: Niranjan Sah ([niranjansah87](https://github.com/niranjansah87))
- **Email**: forensixplore@kluniversity.in (replace with actual club email)
- **Website**: [Forensixplore Club](#) (update with deployed URL)

Join us in exploring the exciting world of digital forensics and cybersecurity!
