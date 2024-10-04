import React, { useState } from "react";
import axios from "axios"; // Make sure you have axios installed: npm install axios

function CreateLesson() {
  // State for holding form inputs
  const [lessonData, setLessonData] = useState({
    title: "",
    description: "",
    content: "",
    resources: [""], // Assuming resources can be an array of links
    duration: "",
  });

  // State for handling success or error messages
  const [message, setMessage] = useState("");

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLessonData({
      ...lessonData,
      [name]: value,
    });
  };

  // Handle resource input changes
  const handleResourceChange = (index, value) => {
    const newResources = [...lessonData.resources];
    newResources[index] = value;
    setLessonData({
      ...lessonData,
      resources: newResources,
    });
  };

  // Add a new resource field
  const addResourceField = () => {
    setLessonData({
      ...lessonData,
      resources: [...lessonData.resources, ""],
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your API (replace with your actual endpoint)
      const response = await axios.post(
        "http://localhost:8080/api/lessons",
        lessonData
      );

      // Handle success
      setMessage("Lesson created successfully!");
      setLessonData({
        title: "",
        description: "",
        content: "",
        resources: [""],
        duration: "",
      });
    } catch (error) {
      // Handle error
      setMessage("Error creating lesson. Please try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create a New Lesson</h1>

      {/* Message Section */}
      {message && <div className="mb-4 text-red-500">{message}</div>}

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block font-medium mb-1">
            Lesson Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={lessonData.title}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block font-medium mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={lessonData.description}
            onChange={handleInputChange}
            required
            rows="4"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Content */}
        <div className="mb-4">
          <label htmlFor="content" className="block font-medium mb-1">
            Lesson Content
          </label>
          <textarea
            id="content"
            name="content"
            value={lessonData.content}
            onChange={handleInputChange}
            required
            rows="6"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="HTML or Markdown"
          />
        </div>

        {/* Resources */}
        <div className="mb-4">
          <label htmlFor="resources" className="block font-medium mb-1">
            Resources (Links)
          </label>
          {lessonData.resources.map((resource, index) => (
            <div key={index} className="mb-2">
              <input
                type="text"
                value={resource}
                onChange={(e) => handleResourceChange(index, e.target.value)}
                placeholder="https://example.com"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addResourceField}
            className="text-blue-500"
          >
            Add Another Resource
          </button>
        </div>

        {/* Duration */}
        <div className="mb-4">
          <label htmlFor="duration" className="block font-medium mb-1">
            Estimated Duration (minutes)
          </label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={lessonData.duration}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Create Lesson
        </button>
      </form>
    </div>
  );
}

export default CreateLesson;
