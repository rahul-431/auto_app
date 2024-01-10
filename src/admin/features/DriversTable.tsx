export default function DriversTable() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm  text-center text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Driver Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Contact
            </th>
            <th scope="col" className="px-6 py-3">
              Liscense Number
            </th>
            <th scope="col" className="px-6 py-3">
              Vehicle Number
            </th>
            <th scope="col" className="px-6 py-3">
              User Type
            </th>
            <th scope="col" className="px-6 py-3">
              Available
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <td>Bikal Rumba</td>
            <td className="px-6 py-4">Bikal123@gmail.com</td>
            <td className="px-6 py-4">98105555610</td>
            <td className="px-6 py-4">10-204589-22</td>
            <td className="px-6 py-4">Prades-003 12 pa 1243</td>
            <td className="px-6 py-4">Driver</td>
            <td className="px-6 py-4">Active</td>
            <td className="px-6 py-4">Edit/Delete</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
