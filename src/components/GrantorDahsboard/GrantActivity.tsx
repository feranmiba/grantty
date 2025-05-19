
type Grant = {
    type: string;
    start: string;
    end: string;
    milestone: number; // percent
  };
  
  const grants: Grant[] = [
    { type: "Monthly", start: "16-05-2025", end: "1-10-2025", milestone: 90 },
    { type: "Monthly", start: "16-05-2025", end: "1-10-2025", milestone: 60 },
    { type: "Monthly", start: "16-05-2025", end: "1-10-2025", milestone: 40 },
    { type: "Quarterly", start: "16-05-2025", end: "1-10-2025", milestone: 70 },
    { type: "Quarterly", start: "16-05-2025", end: "1-10-2025", milestone: 30 },
  ];
  
  const GrantActivity = () => (
    <div className="bg-white rounded-xl p-5 border border-gray-100 h-full flex-1">
      <div className="font-semibold text-gray-700 mb-4">Grant Activity</div>
      <div className="space-y-3">
        {grants.map((g, i) => (
          <div className="flex items-center gap-3" key={i}>
            <div className="w-20 text-gray-500 text-xs">{g.type}</div>
            <div className="w-24 text-xs text-gray-400">{g.start}</div>
            <div className="w-24 text-xs text-gray-400">{g.end}</div>
            <div className="flex-1 h-2 bg-gray-100 rounded-full mx-2 relative">
              <div
                className="h-2 rounded-full bg-green-400 transition-all"
                style={{ width: `${g.milestone}%` }}
              ></div>
            </div>
            <div className="text-xs text-green-600 font-semibold">{g.milestone}%</div>
          </div>
        ))}
      </div>
    </div>
  );
  
  export default GrantActivity;