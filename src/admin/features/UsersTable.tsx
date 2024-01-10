export default function UsersTable() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm  text-center text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Full Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Contact
            </th>
            <th scope="col" className="px-6 py-3">
              User Type
            </th>
            <th scope="col" className="px-6 py-3">
              Account status
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Sagar Adhikari
            </td>
            <td className="px-6 py-4">Sagar@123gmail.com</td>
            <td className="px-6 py-4">9810564221</td>
            <td className="px-6 py-4">Admin</td>
            <td className="px-6 py-4">Active</td>
            <td className="px-6 py-4">Edit/Delete</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
