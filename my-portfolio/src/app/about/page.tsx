
export default function AboutPage() {
  return (
    <section className="min-h-screen bg-gray-900 text-white p-12">
      {/* Header */}
  
      <div className="max-w-7xl mx-auto pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Green accent border */}
              <div className="absolute -left-6 top-0 w-6 h-full bg-green-400"></div>
              
              {/* Profile Image Container */}
              <div className="bg-gray-300 w-80 h-96 rounded-lg overflow-hidden shadow-2xl">
                {/* Profile Image Placeholder */}
                <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                  {/* Simple profile silhouette */}
                  <div className="w-64 h-80 bg-gray-500 relative">
                    {/* Head */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gray-600 rounded-full"></div>
                    {/* Body */}
                    <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-32 h-48 bg-gray-600 rounded-t-full"></div>
                    {/* Arms crossed */}
                    <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-40 h-8 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* About Me Header */}
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-5xl font-bold">About Me</h2>
              <div className="flex-1 h-1 bg-green-400 rounded"></div>
            </div>
            
            {/* Description */}
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I&apos;m a passionate <span className="text-green-400 font-semibold">fullstack developer</span> with 
                experience in modern frontend and backend technologies. 
                <div className="flex flex-wrap gap-3 mb-8">
                    
            {['ReactJs','AngularJs', 'NodeJs', 'NextJs', 'MongoDB', 'JavaScript', 'TypeScript', '.NET Web API','Spring Boot'].map((skill) => (
              <span key={skill} className="px-4 py-2 bg-gray-800 rounded-full text-sm border border-gray-700 hover:border-green-400 transition-colors">
                {skill}
              </span>
            ))}
          </div>
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                I enjoy building <span className="text-green-400 italic">web apps that solve real problems</span> and 
                improve user experiences through clean code, scalable architecture, and thoughtful design. 
                My goal is to create digital solutions that make a meaningful impact.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing my knowledge with the developer community.
              </p>
            </div>
            
            
            
            {/* Skills or Stats (Optional) */}
            
          </div>
        </div>
      </div>
    </section>
  );
}