import React from 'react'
import { Autoplay, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const HeaderCrousal = () => {
  return (
    <div>
        <Swiper
        modules={[Autoplay, EffectFade]}
        slidesPerView={1}
        autoplay={{
            delay : 4000,
            disableOnInteraction : false
        }}
        loop={true}
        effect='fade'
        >
            <SwiperSlide>
                <div className='flex flex-col items-center  justify-center min-h-[60vh] bg-[url("/img/11.webp")]  bg-cover bg-no-repeat relative'>
            <div className='w-full h-full absolute left-0 top-0 overlay'></div>
                    <div className='flex flex-col items-center z-10'>
                        <h1 className='font-bold text-[white] text-[50px]'>40% OFF</h1>
                        <p className='text-[white] text-[20px] font-medium text-center leading-[29px] sm:max-w-[60%]'>Get 40% OFF on your first appointment via Luzo</p>
                        <div className='flex flex-row gap-[10px] mt-[20px]'>
                           <img src='/img/playstore.webp' alt='img' width='150px'/>
                           <img src='/img/appstore.webp' alt='img' width='150px'/>
                           
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex flex-col items-center justify-center min-h-[60vh] bg-[url("/img/12.webp")] bg-cover bg-no-repeat relative'>
            <div className='w-full h-full absolute left-0 top-0 overlay'></div>
                    <div className='flex flex-col items-center z-10'>
                            <h1 className='font-bold text-[white] text-[50px]'>40% OFF</h1>
                            <p className='text-[white] text-[20px] text-center sm:max-w-[60%] font-medium leading-[29px]'>Pamper yourself at favourite salon and spa</p>
                            <div className='flex flex-row gap-[10px] mt-[20px]'>
                            <img src='/img/playstore.webp' alt='img' width='150px'/>
                            <img src='/img/appstore.webp' alt='img' width='150px'/>
                            
                            </div>
                        </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex flex-col items-center justify-center min-h-[60vh] bg-[url("/img/13.webp")] bg-cover bg-no-repeat relative'>
            <div className='w-full h-full absolute left-0 top-0 overlay'></div>
                    <div className='flex flex-col items-center z-10'>
                            <h1 className='font-bold text-[white] text-[50px]'>40% OFF</h1>
                            <p className='text-[white] text-[20px] text-center font-medium leading-[29px] '>valid on all services at 200+ salons and spas</p>
                            <div className='flex flex-row gap-[10px] mt-[20px]'>
                            <img src='/img/playstore.webp' alt='img' width='150px'/>
                            <img src='/img/appstore.webp' alt='img' width='150px'/>
                            
                            </div>
                        </div>
                </div>
            </SwiperSlide>
            
        </Swiper>
    </div>
  )
}

export default HeaderCrousal