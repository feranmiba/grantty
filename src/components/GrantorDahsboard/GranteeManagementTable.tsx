
const grantees = [
    { name: "Agrinext", amount: "₦60,000", progress: "Completed", next: "28-05-2025" },
    { name: "Agrinext", amount: "₦60,000", progress: "Completed", next: "29-05-2025" },
    { name: "Agrinext", amount: "₦60,000", progress: "Completed", next: "29-05-2025" },
    { name: "Agrinext", amount: "₦60,000", progress: "Completed", next: "29-05-2025" },
  ];
  
  const GranteeManagementTable = () => (
    <div className="bg-white rounded-xl p-5 border border-gray-100 h-full flex-1">
      <div className="font-semibold text-gray-700 mb-4">Grantee management</div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-gray-400">
            <tr>
              <th className="text-left font-medium pb-2">Project</th>
              <th className="text-left font-medium pb-2">Amount</th>
              <th className="text-left font-medium pb-2">Progress</th>
              <th className="text-left font-medium pb-2">Next Milestone</th>
            </tr>
          </thead>
          <tbody>
            {grantees.map((g, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="py-1">{g.name}</td>
                <td>{g.amount}</td>
                <td>
                  <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-600 text-xs">{g.progress}</span>
                </td>
                <td>{g.next}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  
  export default GranteeManagementTable;