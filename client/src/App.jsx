import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
  return (
  
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="container mx-auto flex-grow">
          <Outlet />
          <ToastContainer  />
        </main>
        <Footer />
      </div>
    
  );
}
