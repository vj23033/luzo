import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"


const Bblunt = () => {
  return (
    <>
    <Navbar />
    <div className="mt-[60px]">
        
          <img src="/SalonPhotos/bblunt.webp" alt="BBlunt" className="col-12 rounded-4 w-full h-[40vh] object-cover"/>
          
          <div className="sm:px-[120px] px-[10px]">
              <h1 className="font-semibold text-[50px]">BBlunt</h1>
              <p className="text-[16px] mb-[10px]">BBlunt A leading brand that offers high-quality salon services for customers and is dedicated to providing their customers with the best possible experience by delivering exceptional value, quality, and customer service.</p>
              <p className="text-[16px] mb-[10px]">Their salon services are designed to meet the unique needs of customers, and are committed to ensuring that their customers are satisfied with every interaction. They believe that everyone deserves the best, which is why they only use the finest and skilled professionals to create their salon services.</p>
              <p className="text-[16px] mb-[10px]">Founded back in the early 90s, they understand Indian trends, colours, styles, and fashion like no one else. With years of experience and expertise with anything and everything to do with hair, they believe that copy pasting is just not an option. Deeply inspired by people who love to express their personality through their hair and are not afraid to experiment.</p>
              <p className="text-[16px] mb-[10px]">With over 1 million haircuts and over 100 years behind the salon chair, they understand Indian hair and its needs like no one else. They are BBLUNT!</p>
          </div>

          <div className="sm:px-[120px] px-[10px] my-[20px]">
            <h1 className="font-medium text-[20px]">Apple Branches</h1>
             <div className="flex sm:flex-row flex-col gap-[30px]">
                <div className="border rounded px-[50px] py-[20px]  shadow-sm "><span className="flex gap-[10px] ite"><img src="/img/pin.svg" height='20' width='20'/>Kemps Corner, Mumbai</span></div>
                <div className="border rounded px-[50px] py-[20px]  shadow-sm"><span className="flex gap-[10px] ite"><img src="/img/pin.svg" height='20' width='20'/>Kemps Corner, Mumbai</span></div>
                <div className="border rounded px-[50px] py-[20px]  shadow-sm"><span className="flex gap-[10px] ite"><img src="/img/pin.svg" height='20' width='20'/>Kemps Corner, Mumbai</span></div>
             </div>
             <div className="flex sm:flex-row flex-col gap-[30px] mt-[20px]">
                <div className="border rounded px-[50px] py-[20px]  shadow-sm"><span className="flex gap-[10px] ite"><img src="/img/pin.svg" height='20' width='20'/>Kemps Corner, Mumbai</span></div>
                <div className="border rounded px-[50px] py-[20px]  shadow-sm"><span className="flex gap-[10px] ite"><img src="/img/pin.svg" height='20' width='20'/>Kemps Corner, Mumbai</span></div>
             </div>
          </div>
    </div>
    <div className="flex flex-row gap-[10px] items-center justify-center mb-[60px] py-[15px]">
      <img src="/img/appstore.webp" alt="img" width='150'  />
      <img src="/img/playstore.webp" alt="img" width='150'  />

    </div>
    <Footer />
    </>
  )
}

export default Bblunt