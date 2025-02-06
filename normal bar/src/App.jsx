import { Layout } from "./Layout";
import UserTable from "./components/UserTable"; // Import the UserTable component

const App = () => {
  return (
    <Layout>
      <h1>Welcome to My App</h1>
      <UserTable /> {/* Show the table here */}
    </Layout>
  );
};

export default App;