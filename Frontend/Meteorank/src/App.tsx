import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/Routes"; // your routes file


function App() {
  return (
    
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
   
  );
}

export default App;
