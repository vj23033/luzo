// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';



const Testimonial = () => {
  return (
    <div className="bg-[#13357B] flex sm:flex-row flex-col sm:gap-[200px]  py-[40px] px-[10px] sm:px-[120px]">
        <div className="sm:max-w-[41%]">
            <h1 className="text-white text-[30px] font-bold">Why customers love LUZO?</h1>
             
             <div className="flex flex-row py-[20px] gap-[60px] ">
                    
                <div className="text-[30px]  text-white">
                    <h1 className="text-[30px] font-medium">85%</h1>
                    <p className="text-[16px]">Repeat Customers</p>
                </div>

                <div className="text-[30px]  text-white">
                    <h1 className="text-[30px] font-medium">4.8</h1>
                    <p className="text-[16px]">Star rating</p>
                </div>
             </div>

        </div>

        <div className="w-[636px]">
        <Swiper      
                    
                    slidesPerView={1}
                    spaceBetween={20}
                    // navigation={{nextEl : ".next", prevEl : ".prev"}}
                    loop={true}
                    modules={[Autoplay,Navigation]}
                    autoplay={{
                      delay : 1000,
                      // disableOnInteraction : false
                  }}
                >
              <SwiperSlide>             
                <div className="text-white">
                      <div className="flex flex-row gap-[20px] items-center mb-[30px] ">
                        <img src="/testimonals/1.webp" alt="img" width="60" className="border border-none rounded-full" />
                        <div>
                            <h3>Jehan</h3>
                            <p>31 yo | mumbai</p>
                        </div>
                      </div>
                      <p>There are so many great salons to choose from! I have used LUZO several times to get my hair, nails and spa done too! It is a must have app for me now.</p>
                </div>

             </SwiperSlide>
             <SwiperSlide>             
                <div className="text-white">
                      <div className="flex flex-row gap-[20px] items-center mb-[30px] ">
                        <img src="/testimonals/2.webp" alt="img" width="60" className="border border-none rounded-full" />
                        <div>
                            <h3>Jehan</h3>
                            <p>31 yo | mumbai</p>
                        </div>
                      </div>
                      <p>There are so many great salons to choose from! I have used LUZO several times to get my hair, nails and spa done too! It is a must have app for me now.</p>
                </div>

             </SwiperSlide>

             <SwiperSlide>             
                <div className="text-white">
                      <div className="flex flex-row gap-[20px] items-center mb-[30px] ">
                        <img src="/testimonals/3.webp" alt="img" width="60" className="border border-none rounded-full" />
                        <div>
                            <h3>Jehan</h3>
                            <p>31 yo | mumbai</p>
                        </div>
                      </div>
                      <p>There are so many great salons to choose from! I have used LUZO several times to get my hair, nails and spa done too! It is a must have app for me now.</p>
                </div>

             </SwiperSlide>
             <SwiperSlide>             
                <div className="text-white">
                      <div className="flex flex-row gap-[20px] items-center mb-[30px] ">
                        <img src="/testimonals/4.webp" alt="img" width="60" className="border border-none rounded-full" />
                        <div>
                            <h3>Jehan</h3>
                            <p>31 yo | mumbai</p>
                        </div>
                      </div>
                      <p>There are so many great salons to choose from! I have used LUZO several times to get my hair, nails and spa done too! It is a must have app for me now.</p>
                </div>

             </SwiperSlide>


        </Swiper>

        </div>

    </div>
  )
}

export default Testimonial