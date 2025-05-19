
const activities = [
    "New application received",
    "Milestone report submitted",
    "Payment released",
    "Message from grantee",
  ];
  
  const RecentActivity = () => (
    <div className="bg-white rounded-xl p-5 border border-gray-100 h-full flex-1">
      <div className="font-semibold text-gray-700 mb-4">Recent Activity</div>
      <ul className="space-y-3">
        {activities.map((a, i) => (
          <li
            className="flex items-center gap-3"
            key={i}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
            <span className="text-gray-600 text-sm">{a}</span>
          </li>
        ))}
      </ul>
    </div>
  );
  
  export default RecentActivity;