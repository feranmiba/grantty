
const applications = [
    { name: "Yakubu David", project: "Agrinext", amount: "₦60,000", status: "Successful" },
    { name: "Yakubu David", project: "Agrinext", amount: "₦60,000", status: "Successful" },
    { name: "Yakubu David", project: "Agrinext", amount: "₦60,000", status: "Successful" },
    { name: "Yakubu David", project: "Agrinext", amount: "₦60,000", status: "Successful" },
  ];
  
  const ApplicationManagementTable = () => (
    <div className="bg-white rounded-xl p-5 border border-gray-100 h-full flex-1">
      <div className="font-semibold text-gray-700 mb-4">Application management</div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-gray-400">
            <tr>
              <th className="text-left font-medium pb-2">Name</th>
              <th className="text-left font-medium pb-2">Project</th>
              <th className="text-left font-medium pb-2">Amount</th>
              <th className="text-left font-medium pb-2">Status</th>
              <th className="text-left font-medium pb-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((a, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="py-1">{a.name}</td>
                <td>{a.project}</td>
                <td>{a.amount}</td>
                <td>
                  <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-600 text-xs">{a.status}</span>
                </td>
                <td>
                  <button className="px-2 py-0.5 rounded border border-gray-200 text-gray-600 text-xs bg-gray-50">Review</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  
  export default ApplicationManagementTable;