import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import User from './components/getUser/User';
import AddUser from './components/addUser/AddUser';

function App() {
  
  const route = createBrowserRouter([
    {
      path:"/",
      element: <User/>,
    },
    {
      path: "/add",
      element: <AddUser/>,
    },
    {
      path:"/edit",
      element: "Update user page",
    },
  ])

  return (
    <div className="App">
      <RouterProvider router={route}>
      </RouterProvider>
    </div>
  );
}

export default App;
