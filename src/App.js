import UserRoutes from "./routes/UserRoutes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="main">
        <UserRoutes />
      </div>
    </Router>
  );
}

export default App;
