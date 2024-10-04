const RewardsBadges = ({ badges }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Rewards & Badges</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {badges.map((badge, idx) => (
          <div key={idx} className="border p-4 rounded shadow-lg">
            <img src={badge.image} alt={badge.name} className="w-16 h-16" />
            <h3 className="text-lg font-semibold">{badge.name}</h3>
            <p>{badge.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RewardsBadges;
