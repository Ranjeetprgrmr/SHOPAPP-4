import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";


export default function App() {
  return (
    <div>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="container mx-auto flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
