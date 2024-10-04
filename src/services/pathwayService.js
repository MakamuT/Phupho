import axios from "axios";

const API_URL = "http://localhost:8080/api/pathways"; // Your backend API URL

// Fetch all learning pathways
export const getLearningPathways = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching pathways: " + error.message);
  }
};

// Fetch a single learning pathway by ID
export const getLearningPathwayById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching pathway: " + error.message);
  }
};
