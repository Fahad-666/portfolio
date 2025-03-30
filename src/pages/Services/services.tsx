import Navbar from '@/components/Navbar'
import './services.css';
import { Card, CardHeader } from '@heroui/Card';
import { Image } from '@heroui/Image';

export default function Services() {
  return (
    <div className="flex max-w-[100%] h-[200vh] bg-gradient-to-b from-white to-blue-700">
      <Navbar />

      <p className="what-i-do">What I Do?</p>

      <div className="cards">
      <div className="flex flex-row">
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="font-bold uppercase text-tiny text-white/60">Website Development</p>
            <h4 className="font-medium text-white text-large">The Art of Building Modern Websites</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 object-cover w-full h-full"
            src="https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png"
          />
        </Card>
        <div className="flex flex-col mt-10 ml-5">
          <p className="text-2xl font-semibold font-[Poppins]">Web Development</p>
          <p className="max-w-[600px] text-xl font-[Poppins]">I build modern, responsive, and high-performance websites using React, TypeScript, and Python/Node.js. From UI/UX design to backend development, I create sleek, fast, and secure web applications.</p>
        </div>
      </div>
      <div className="absolute flex flex-row top-[450px]">
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="font-bold uppercase text-tiny text-white/60">AI Development</p>
            <h4 className="font-medium text-white text-large">Making Machines Think Like Humans</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 object-cover h-full w-[550px]"
            src="https://cdn.pixabay.com/photo/2022/04/04/16/24/waves-7111758_1280.jpg"
          />
        </Card>
        <div className="flex flex-col mt-10 ml-5">
          <p className="text-2xl font-semibold font-[Poppins]">AI Development</p>
          <p className="max-w-[600px] text-xl font-[Poppins]">I specialize in AI-powered solutions, leveraging Python, machine learning, and automation to build smart applications. From chatbots to data-driven AI models, I create intelligent systems that enhance efficiency and decision-making.</p>
        </div>
      </div>
      <div className="absolute flex flex-row top-[900px]">
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="font-bold uppercase text-tiny text-white/60">Android Development</p>
            <h4 className="font-medium text-white text-large">Developing Applications Supporting Mobile Devices</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 object-cover h-full w-[550px]"
            src="https://cdn.pixabay.com/photo/2020/09/25/14/29/smartphone-5601536_1280.jpg"
          />
        </Card>
        <div className="flex flex-col mt-10 ml-5">
          <p className="text-2xl font-semibold font-[Poppins]">Android Development</p>
          <p className="max-w-[600px] text-xl font-[Poppins]">I build fast, user-friendly, and high-performance Android apps using React Native. From sleek UI/UX designs to seamless real-time functionality, I create apps that provide a smooth user experience.</p>
        </div>
      </div>
      </div>

    </div>
  )
}
