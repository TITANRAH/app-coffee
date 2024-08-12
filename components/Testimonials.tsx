import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { IoMdQuote } from 'react-icons/io'

const testimonials = [
    {
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Donec nec nisl nec nisl.",
        name: "Alice Johnson",
        professio: "CEO at Zenbrew"
    },
    {
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Donec nec nisl nec nisl.",
        name: "Alexandra",
        professio: "CEO at Zenbrew"
    },
    {
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Donec nec nisl nec nisl.",
        name: "Josefa",
        professio: "CEO at Zenbrew"
    }
]

function Testimonials() {
  return (
    <section className='h-[60vh] md:h-[70vh] '>
            <div className="container mx-auto flex items-center">
                <Swiper navigation={true} modules={[Navigation]} className='h-[480px]'>
                    {testimonials.map((person, index) => (
                        <SwiperSlide key={index} className='w-full h-full'>
                           <div className='flex justify-center h-full xl:pt-14'>
                            <div className='max-w-[60%] text-primary'> 
                                <IoMdQuote className='text-6xl text-primary mb-12 mx-auto'/>
                                <p className='text-2xl font-secondary tet-center mb-8'>{person.message}</p>
                                <div className='text-center'>
                                    <p className='text-xl font-bold mb-1'>{person.name}</p>
                                    <p className='text-secondary'>{person.name}</p>
                                </div>
                            </div>
                            </div>     
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
    </section>
  )
}

export default Testimonials