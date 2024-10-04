// Enrollment.js
const Enrollment = ({ pathway }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{pathway.title}</h1>
      <p>{pathway.description}</p>

      <div className="my-6">
        <h2 className="text-xl font-semibold">Rewards:</h2>
        <p>{pathway.badges.join(", ")}</p>
      </div>

      <button className="bg-green-500 text-white px-6 py-3 rounded">
        {pathway.enrolled ? "Go to Lessons" : "Enroll Now"}
      </button>
    </div>
  );
};

export default Enrollment;
