import { Link } from "react-router-dom";

const LearningPathwayDetail = ({ pathway }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{pathway.title}</h1>
        <Link to="/pathways" className="text-blue-500">
          Back to Pathways
        </Link>
      </div>

      <p>{pathway.description}</p>
      <div className="w-full bg-gray-200 rounded-full h-4 my-4">
        <div
          className="bg-blue-600 h-4 rounded-full"
          style={{ width: `${pathway.progress}%` }}
        ></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {pathway.lessons.map((lesson) => (
          <div key={lesson.id} className="border p-4 rounded shadow-lg">
            <h2 className="text-xl font-semibold">{lesson.title}</h2>
            <p>{lesson.description}</p>
            <p>Duration: {lesson.duration} mins</p>
            <p>Status: {lesson.completed ? "Completed" : "Pending"}</p>
            <Link
              to={`/lessons/${lesson.id}`}
              className="text-white bg-blue-500 px-4 py-2 rounded"
            >
              View Lesson
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPathwayDetail;
