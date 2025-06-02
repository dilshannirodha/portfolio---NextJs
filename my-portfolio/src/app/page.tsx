import { ArrowRight, Mail, Github, Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex">
      {/* Left Section - Dark */}
      <div className="flex-1 bg-gray-900 text-white p-12 flex flex-col justify-center relative">
        {/* Header */}
        <div className="absolute top-8 left-12">
          <h1 className="text-xl font-bold tracking-wider">PORTFOLIO.</h1>
        </div>
        
        {/* Main Content */}
        <div className="max-w-lg">
          <p className="text-green-400 text-lg mb-4 font-light">Hello Everyone.</p>
          
          <h1 className="text-6xl font-bold mb-8 leading-tight">
            I'M Dilshan<br />
            Nirodha
          </h1>
          
          <div className="flex items-center mb-12">
            <div className="border-2 border-green-400 px-8 py-3 flex items-center gap-3 hover:bg-green-400 hover:text-gray-900 transition-all duration-300 cursor-pointer group">
              <span className="font-semibold tracking-wider">FULLSTACK DEVELOPER</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            A passionate Fullstack Developer (React, Node.js, Next.js, MongoDB). 
            I love building scalable web apps and creating amazing user experiences.
          </p>
          
          {/* Skills Pills */}
          <div className="flex flex-wrap gap-3 mb-8">
            {['ReactJs','AngularJs', 'NodeJs', 'NextJs', 'MongoDB', 'JavaScript', 'TypeScript', '.NET Web API','Spring Boot'].map((skill) => (
              <span key={skill} className="px-4 py-2 bg-gray-800 rounded-full text-sm border border-gray-700 hover:border-green-400 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Right Section */}
      <div className="flex-1 bg-green-400 relative overflow-hidden">
        {/* Contact Icons */}
        <div className="absolute top-8 right-12 flex items-center gap-4">
      <span className="text-gray-900 font-semibold">Contact Me</span>
      <div className="flex gap-3">

        <a
          href="mailto:nirodhadilshan123@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
        >
          <Mail className="w-5 h-5 text-white" />
        </a>

        <a
          href="https://github.com/dilshannirodha "
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
        >
          <Github className="w-5 h-5 text-white" />
        </a>

      
        <a
          href="https://www.linkedin.com/in/dilshan-nirodha-585a5631b"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
        >
          <Linkedin className="w-5 h-5 text-white" />
        </a>
      </div>
    </div>
        
        {/* Profile Image Placeholder */}
        <div className="absolute bottom-0 right-12 w-80 h-96 bg-gray-800 rounded-t-full flex items-end justify-center overflow-hidden">
          {/* Profile silhouette */}
          <div className="w-64 h-80 bg-gray-700 rounded-t-full relative">
            {/* Simple face representation */}
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
              <div className="w-32 h-32 bg-gray-600 rounded-full mb-4"></div>
              <div className="w-40 h-48 bg-gray-600 rounded-t-full"></div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-8 w-3 h-3 bg-gray-900 rounded-full opacity-20"></div>
        <div className="absolute top-1/3 left-16 w-2 h-2 bg-gray-900 rounded-full opacity-30"></div>
        <div className="absolute bottom-1/4 left-12 w-4 h-4 bg-gray-900 rounded-full opacity-10"></div>
      </div>
    </div>
  );
}