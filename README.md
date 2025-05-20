Video Goal Tracker
 
A modern, interactive React-based web application for tracking personal goals with embedded video playback, featuring a sleek dark-mode UI inspired by premium music and video players like Spotify and YouTube Music. Built to demonstrate proficiency in front-end development, UI/UX design, and performance optimization.
Features

Immersive Dark-Mode UI: Neumorphic cards, glassmorphic control panels, and animated SVG progress circles create a visually stunning, user-friendly experience.
Video Playback: Integrates react-player for seamless playback of YouTube videos, with global autoplay and volume controls managed via React Context.
Dynamic State Management: Uses useReducer for managing goal creation, updates, and deletions, with localStorage for data persistence across sessions.
Custom Hook: Implements useVideoPlayback hook to encapsulate video playback logic, tracking play state and watched time.
Form Validation: Includes a controlled form with real-time validation for video URLs, ensuring robust user input handling.
Performance Optimization: Leverages React.memo and useCallback to minimize unnecessary re-renders, ensuring scalability.
Smooth Animations: Powered by Framer Motion for entry/exit transitions, hover effects, tap animations, and dynamic progress circle updates.

Technologies Used

React: Component-based architecture with modern hooks (useState, useReducer, useEffect, useCallback, useContext).
Framer Motion: For fluid animations and transitions.
react-player: For embedded video playback.
CSS: Custom styles with neumorphic and glassmorphic design principles.
localStorage: For persistent goal data storage.

Installation

Clone the Repository:
https://github.com/saumya1016/video-goal-tracker
cd video-goal-tracker


Install Dependencies:
npm install


Run the Application:
npm start

Open http://localhost:3000 in your browser.


Usage

Add Goals: Enter a goal title and a valid video URL (e.g., YouTube) in the form. Invalid URLs trigger error messages.
Track Progress: Use +10% and -10% buttons to update goal progress, visualized with animated SVG progress circles.
Control Playback: Toggle autoplay or adjust volume via the glassmorphic control panel; track watched time per video.
Manage Goals: Delete goals with a smooth exit animation; data persists across page refreshes via localStorage.
Test Optimization: Click the counter button to verify that GoalCard components don’t re-render unnecessarily.

Project Structure
video-goal-tracker/
├── src/
│   ├── App.js              # Main app component
│   ├── GoalDashboard.js    # Manages goal list and controls
│   ├── GoalCard.js         # Renders individual goal with video and progress
│   ├── AddGoalForm.js      # Form for adding new goals with validation
│   ├── VideoContext.js     # Context for global video settings
│   ├── useVideoPlayback.js # Custom hook for video playback logic
│   ├── index.css           # Global styles with dark-mode UI
│   ├── index.js            # Entry point with VideoProvider
├── public/
│   ├── index.html          # HTML template
├── README.md               # Project documentation
├── package.json            # Dependencies and scripts

Screenshots


Future Enhancements

Add user authentication for personalized goal tracking.
Implement goal categories and filtering options.
Integrate a backend (e.g., Firebase) for cloud-based data storage.
Add analytics to track goal completion trends.

License
This project is licensed under the MIT License.
## Contact

Created by Saumya Singh - [rajputsaumya456@gmail.com](mailto:rajputsaumya456@gmail.com)  
GitHub: [saumya1016](https://github.com/saumya1016)  
LinkedIn: [saumya-singh](https://www.linkedin.com/in/saumya-singh-4b97a3314)