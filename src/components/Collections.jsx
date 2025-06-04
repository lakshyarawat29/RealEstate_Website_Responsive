import React from 'react'

const Collections = () => {
  return (
    <section className="py-10 px-6 bg-white mb-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">
          Our Collection<br />
          <span className="text-blue-500">Best Project</span>
        </h1>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5">
          <img src="src/assets/Collection/1.png" alt="Collection 1" className="w-full h-auto rounded-sm shadow-md" />
          <img src="src/assets/Collection/2.png" alt="Collection 2" className="w-full h-auto rounded-sm shadow-md" />
          <img src="src/assets/Collection/3.png" alt="Collection 3" className="w-full h-auto rounded-sm shadow-md" />
          <img src="src/assets/Collection/4.png" alt="Collection 4" className="w-full h-auto rounded-sm shadow-md" />
        </div>
      </div>
    </section>
  )
}

export default Collections
