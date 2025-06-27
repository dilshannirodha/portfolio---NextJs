'use client'
import HomePage from './home/page'
import AboutPage from './about/page'
import ProjectsPage from './projects/page'
import ContactPage from './contact/page'


export default function Home() {
 
  return (
    <div className="relative bg-gray-900 min-h-screen overflow-x-hidden overflow-y-auto text-white">
    
      <HomePage />
      <AboutPage />
      <ProjectsPage />
      <ContactPage />

    </div>
  )
}
