import Navbar from '@/components/Navbar/Navbar';
import './services.css';
import { Card, CardHeader, Image } from '@heroui/react';

export default function Services() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen pb-20 bg-gradient-to-b from-white to-blue-700">
      <Navbar />

      <p className="what-i-do">What I Do?</p>

      <div className="cards">
        <div className="flex flex-col items-center gap-10 md:flex-row">
          <Card className="card w-full md:w-[500px] h-[300px]">
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
          <div className="card-text">
            <p className="text-2xl font-semibold font-[Poppins]">Web Development</p>
            <p className="text-xl font-[Poppins]">
              I build modern, responsive, and high-performance websites using React, TypeScript, and Node.js.
              With sleek UI/UX designs and powerful backends, I deliver engaging web experiences.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-10 md:flex-row-reverse">
          <Card className="card w-full md:w-[500px] h-[300px]">
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
          <div className="card-text">
            <p className="text-2xl font-semibold font-[Poppins]">AI Development</p>
            <p className="text-xl font-[Poppins]">
              I develop AI-powered solutions, from smart chatbots to predictive analytics.
              Leveraging Python and Machine Learning, I create applications that automate and optimize processes.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-10 md:flex-row">
          <Card className="card w-full md:w-[500px] h-[300px]">
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
          <div className="card-text">
            <p className="text-2xl font-semibold font-[Poppins]">Android Development</p>
            <p className="text-xl font-[Poppins]">
              I create high-performance Android apps with React Native, ensuring seamless user experiences.
              My apps combine speed, efficiency, and sleek UI/UX designs for a professional look and feel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
