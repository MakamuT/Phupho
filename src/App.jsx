import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import individual component files for different pages
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";

// Import your new learning platform components
import LearningPathways from "./components/student/LearningPathways";
import LearningPathwayDetail from "./components/student/LearningPathwayDetail";
import LessonDetail from "./components/student/LessonDetail";
import Enrollment from "./components/student/Enrollment";
import ProgressDashboard from "./components/student/ProgressDashboard";
import RewardsBadges from "./components/student/RewardsBadges";

import CreateLesson from "./components/instructor/CreateLesson";

// Define the main App component
function App() {
  return (
    // Wrap the entire application to enable routing
    <BrowserRouter>
      {/* Render the navigation bar */}
      <Navigation />

      {/* Define different routes for the application */}
      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<Home />} />

        {/* Route for the about page */}
        <Route path="/about" element={<About />} />

        {/* Route for the contact us page */}
        <Route path="/contact-us" element={<ContactUs />} />

        {/* Route for the login page */}
        <Route path="/login" element={<Login />} />

        {/* Route for the signup page */}
        <Route path="/signup" element={<Signup />} />

        {/* Route for the team page */}
        <Route path="/team" element={<Team />} />

        {/* Route for the testimonial page */}
        <Route path="/testimonial" element={<Testimonial />} />

        {/* Learning platform routes */}
        <Route path="/learning-pathways" element={<LearningPathways />} />
        <Route path="/pathways/:id" element={<LearningPathwayDetail />} />
        <Route path="/lessons/:id" element={<LessonDetail />} />
        <Route path="/enrollment/:id" element={<Enrollment />} />
        <Route path="/progress-dashboard" element={<ProgressDashboard />} />
        <Route path="/rewards-badges" element={<RewardsBadges />} />

        <Route path="/create-lesson" element={<CreateLesson />} />
      </Routes>

      {/* Render the footer */}
      <Footer />
    </BrowserRouter>
  );
}

// Make the App component available for use in other parts of the application
export default App;
