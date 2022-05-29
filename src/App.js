import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import MyForm from "./MyForm";

function App() {
  return (
    <div className="App">
      <MyForm />
    </div>
  );
}

// const API_ENDPOINT = "https://jsonplaceholder.typicode.com/posts/";

// function App() {
//   const [items, setItems] = useState([]);
//   const [loaded, setLoaded] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const callAPI = useCallback(async () => {
//     if (isLoading) return;
//     setIsLoading(true);
//     try {
//       const response = await fetch(API_ENDPOINT);
//       if (!response.ok) throw response;
//       const data = await response.json();
//       setItems(data);
//     } catch (err) {
//       console.log(err);
//       setError(err);
//     } finally {
//       setLoaded(true);
//       setIsLoading(false);
//     }
//   }, [isLoading]);
//   useEffect(() => {
//     callAPI();
//   }, [loaded]);

//   if (isLoading) return <p>Is loading</p>;
//   if (error) return <p>{error.message}</p>;

//   return (
//     <div className="App">
//       <button onClick={() => setLoaded(false)}>Reload</button>
//       <ul>
//         {items.map((item, i) => (
//           <li key={i}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

export default App;
