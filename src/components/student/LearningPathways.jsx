import React, { useEffect, useState } from "react";
import { getLearningPathways } from "../../services/pathwayService";

function LearningPathways() {
  const [pathways, setPathways] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getLearningPathways();
        setPathways(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Learning Pathways</h1>
      <ul>
        {pathways.map((pathway) => (
          <li key={pathway._id}>
            <h3>{pathway.title}</h3>
            <p>{pathway.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LearningPathways;
