import { BrowserRouter } from 'react-router-dom'
import { About ,Contact, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works } from './components'
import Preloader from './components/Preloader'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <BrowserRouter>
      <Preloader />
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            maxWidth: "1000px",
            fontSize: "16px",
          },
          duration: 1500,
        }}
      />
    </BrowserRouter>
  )
}

export default App
