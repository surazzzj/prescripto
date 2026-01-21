import React, { useContext, useMemo, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'

const Doctors = () => {

  const { speciality } = useParams()
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)

  const [showFilter, setShowFilter] = useState(false)

  // Memoized filtering (performance optimization)
  const filteredDoctors = useMemo(() => {
    if (speciality) {
      return doctors.filter(doc => doc.speciality === speciality)
    }
    return doctors
  }, [doctors, speciality])

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialist.</p>

      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button
          onClick={() => setShowFilter(!showFilter)}
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${
            showFilter ? 'bg-primary text-white' : ''
          }`}
        >
          Filters
        </button>

        {/* Filters */}
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          {[
            'General physician',
            'Gynecologist',
            'Dermatologist',
            'Pediatricians',
            'Neurologist',
            'Gastroenterologist'
          ].map((item) => (
            <p
              key={item}
              onClick={() =>
                speciality === item ? navigate('/doctors') : navigate(`/doctors/${item}`)
              }
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
                speciality === item ? 'bg-[#E2E5FF] text-black' : ''
              }`}
            >
              {item}
            </p>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {filteredDoctors.map((item) => (
            <div
              key={item._id}
              onClick={() => {
                navigate(`/appointment/${item._id}`)
                scrollTo(0, 0)
              }}
              className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
            >
              {/* Lazy loaded image */}
              <img
                className='bg-[#EAEFFF]'
                src={item.image}
                alt={item.name}
                loading="lazy"
              />

              <div className='p-4'>
                <div
                  className={`flex items-center gap-2 text-sm ${
                    item.available ? 'text-green-500' : 'text-gray-500'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      item.available ? 'bg-green-500' : 'bg-gray-500'
                    }`}
                  ></span>
                  <p>{item.available ? 'Available' : 'Not Available'}</p>
                </div>

                <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
                <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Doctors
