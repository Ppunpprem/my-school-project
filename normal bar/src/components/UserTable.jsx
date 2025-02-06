import { user_data } from "../data/userData";

const UserTable = () => {
  return (
    <div>
      <h2>User Data</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {user_data.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.number}</td>
              <td>{user.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
