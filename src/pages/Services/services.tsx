import Navbar from '@/components/Navbar';
import './services.css';
import { Card, CardHeader, Image } from '@heroui/react';

export default function Services() {
  return (
    <div className="flex flex-col items-center max-w-[100%] h-auto min-h-screen bg-gradient-to-b from-white to-blue-700">
      <Navbar />

      <p className="what-i-do">What I Do?</p>

      <div className="cards">
        {/* Web Development */}
        <div className="flex-container">
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
          <div className="flex flex-col card-text">
            <p className="text-2xl font-semibold font-[Poppins]">Web Development</p>
            <p className="text-xl font-[Poppins]">
              I build modern, responsive, and high-performance websites using React, TypeScript, and Python/Node.js.
            </p>
          </div>
        </div>

        {/* AI Development */}
        <div className="flex-container">
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="font-bold uppercase text-tiny text-white/60">AI Development</p>
              <h4 className="font-medium text-white text-large">Making Machines Think Like Humans</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 object-cover w-full h-full"
              src="https://cdn.pixabay.com/photo/2022/04/04/16/24/waves-7111758_1280.jpg"
            />
          </Card>
          <div className="flex flex-col card-text">
            <p className="text-2xl font-semibold font-[Poppins]">AI Development</p>
            <p className="text-xl font-[Poppins]">
              I specialize in AI-powered solutions, leveraging Python, machine learning, and automation to build smart applications.
            </p>
          </div>
        </div>

        {/* Android Development */}
        <div className="flex-container">
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="font-bold uppercase text-tiny text-white/60">Android Development</p>
              <h4 className="font-medium text-white text-large">Developing Applications Supporting Mobile Devices</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 object-cover w-full h-full"
              src="https://cdn.pixabay.com/photo/2020/09/25/14/29/smartphone-5601536_1280.jpg"
            />
          </Card>
          <div className="flex flex-col card-text">
            <p className="text-2xl font-semibold font-[Poppins]">Android Development</p>
            <p className="text-xl font-[Poppins]">
              I build fast, user-friendly, and high-performance Android apps using React Native.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
