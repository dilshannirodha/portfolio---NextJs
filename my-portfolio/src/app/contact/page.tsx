import { Mail, Linkedin, Github } from 'lucide-react';

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-gray-900 text-white p-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-5xl font-bold">Contact</h2>
          <div className="flex-1 h-1 bg-green-400 rounded"></div>
        </div>

        {/* Contact Info Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Email */}
          <div className="border border-green-400 rounded-lg p-6 flex items-center gap-4 hover:bg-gray-800 transition">
            <div className="bg-green-500 p-2 rounded-full">
              <Mail className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <a
                href="mailto:nirodhadilshan123@gmail.com"
                className="text-green-300 hover:underline break-all"
              >
                nirodhadilshan123@gmail.com
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="border border-green-400 rounded-lg p-6 flex items-center gap-4 hover:bg-gray-800 transition">
            <div className="bg-green-500 p-2 rounded-full">
              <Linkedin className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-400">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/dilshan-nirodha-585a5631b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-300 hover:underline break-all"
              >
                linkedin.com/in/dilshan-nirodha-585a5631b
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className="border border-green-400 rounded-lg p-6 flex items-center gap-4 hover:bg-gray-800 transition">
            <div className="bg-green-500 p-2 rounded-full">
              <Github className="text-white w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-400">GitHub</p>
              <a
                href="https://github.com/dilshannirodha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-300 hover:underline break-all"
              >
                github.com/dilshannirodha
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
