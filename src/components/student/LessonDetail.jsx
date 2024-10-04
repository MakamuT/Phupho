import { Link } from "react-router-dom";

const LessonDetail = ({ lesson }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{lesson.title}</h1>
        <Link to={`/pathways/${lesson.pathwayId}`} className="text-blue-500">
          Back to Pathway
        </Link>
      </div>

      <div className="mb-4">
        <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
          <div
            className="bg-blue-600 h-4 rounded-full"
            style={{ width: `${lesson.progress}%` }}
          ></div>
        </div>
        <p>Estimated Duration: {lesson.duration} mins</p>
      </div>

      <p>{lesson.content}</p>

      <div className="my-4">
        <h3 className="font-semibold">Resources:</h3>
        <ul>
          {lesson.resources.map((resource, idx) => (
            <li key={idx}>
              <a href={resource} target="_blank" className="text-blue-500">
                {resource}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between">
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Mark as Completed
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Next Lesson
        </button>
      </div>
    </div>
  );
};

export default LessonDetail;
