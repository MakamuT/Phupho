const ProgressDashboard = ({ user }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-6">
        <img src={user.picture} alt={user.name} className="rounded-full w-16" />
        <h1 className="text-3xl font-bold ml-4">{user.name}</h1>
      </div>

      <h2 className="text-xl font-semibold mb-4">Your Progress</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {user.pathways.map((pathway) => (
          <div key={pathway.id} className="border p-4 rounded shadow-lg">
            <h3 className="text-lg font-semibold">{pathway.title}</h3>
            <div className="w-full bg-gray-200 rounded-full h-4 my-2">
              <div
                className="bg-blue-600 h-4 rounded-full"
                style={{ width: `${pathway.progress}%` }}
              ></div>
            </div>
            <p>
              {pathway.lessonsCompleted} of {pathway.totalLessons} lessons
              completed
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressDashboard;
