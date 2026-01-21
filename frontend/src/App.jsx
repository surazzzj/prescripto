// import React from 'react'
// import Navbar from './components/Navbar'
// import { Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
// import Doctors from './pages/Doctors'
// import Login from './pages/Login'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Appointment from './pages/Appointment'
// import MyAppointments from './pages/MyAppointments'
// import MyProfile from './pages/MyProfile'
// import Footer from './components/Footer'
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Verify from './pages/Verify'
// // import AdminLogin from '../../admin/src/pages/Login'

// const App = () => {
//   return (
//     <div className='mx-4 sm:mx-[10%]'>
//       <ToastContainer />
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/doctors' element={<Doctors />} />
//         <Route path='/doctors/:speciality' element={<Doctors />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path='/appointment/:docId' element={<Appointment />} />
//         <Route path='/my-appointments' element={<MyAppointments />} />
//         <Route path='/my-profile' element={<MyProfile />} />
//         <Route path='/verify' element={<Verify />} />

//         {/* <Route path="/admin/login" element={<AdminLogin />} /> */}
//       </Routes>
//       <Footer />
//     </div>
//   )
// }

// export default App








import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Lazy loaded pages
const Home = lazy(() => import('./pages/Home'))
const Doctors = lazy(() => import('./pages/Doctors'))
const Login = lazy(() => import('./pages/Login'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Appointment = lazy(() => import('./pages/Appointment'))
const MyAppointments = lazy(() => import('./pages/MyAppointments'))
const MyProfile = lazy(() => import('./pages/MyProfile'))
const Verify = lazy(() => import('./pages/Verify'))

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer />
      <Navbar />

      {/* Suspense handles lazy loading fallback */}
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-[60vh]">
            <p className="text-lg font-medium">Loading...</p>
          </div>
        }
      >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/doctors' element={<Doctors />} />
          <Route path='/doctors/:speciality' element={<Doctors />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/appointment/:docId' element={<Appointment />} />
          <Route path='/my-appointments' element={<MyAppointments />} />
          <Route path='/my-profile' element={<MyProfile />} />
          <Route path='/verify' element={<Verify />} />

          {/* <Route path="/admin/login" element={<AdminLogin />} /> */}
        </Routes>
      </Suspense>

      <Footer />
    </div>
  )
}

export default App
