import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';


export default function App() {
  return (
    <div>
      <BrowserRouter>
       <div className='min-h-screen flex flex-col'>
        <Header />
        <main className='container mx-auto flex-grow'>
          sdfsdfdsf

        </main>
        <Footer />
       </div>
      </BrowserRouter>
     
    </div>
  )
}

