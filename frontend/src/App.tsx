import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState("");

  const getData = async () => {
    try {
      // Axios uses the base URL of the current environment (in this case, your development environment where the Vite proxy is set up).
      const response = await axios.get("/api/getData");
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>{data}</div>;
};

export default App;
