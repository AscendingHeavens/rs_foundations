import React from 'react'

const TechFeature = () => {
  return (
<section className="bg-white pb-6">
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto px-6 p-6 bg-white">
        <div className="mb-16 text-center">
          <h4 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h4>
          <p className="mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900">
            How we change the game
          </p>
        </div>
        <div className="flex flex-wrap my-12">
          {/* Feature Items */}
          {[
            {
              title: 'Increase sales',
              description:
                'Consectetur pariatur irure exercitation sit amet id consectetur consectetur magna et Lorem labore qui velit.',
            },
            {
              title: 'Enterprise-ready',
              description:
                'Labore duis pariatur est exercitation laboris cupidatat amet cillum. Amet nisi ullamco.',
            },
            {
              title: 'Unlimited growth',
              description:
                'Elit deserunt nisi esse duis cupidatat proident sit minim mollit officia pariatur incididunt in tempor.',
            },
            {
              title: 'Recommended by experts',
              description:
                'Velit sit tempor pariatur quis pariatur incididunt culpa dolor voluptate officia incididunt velit dolore.',
            },
            {
              title: 'Modern platform',
              description:
                'Laboris elit consectetur sint nisi eu mollit proident sit magna velit adipisicing consequat amet reprehenderit.',
            },
            {
              title: 'Integrations',
              description:
                'Nostrud excepteur incididunt proident sit nulla ipsum sunt nostrud est esse adipisicing irure officia consectetur.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`w-full border-b md:w-1/2 lg:w-1/3 p-8 ${
                index % 3 === 2 ? 'lg:border-r-0' : 'lg:border-r'
              } ${index < 3 ? 'lg:border-b-0' : ''}`}
            >
              <div className="flex items-center mb-6">
               
                <div className="ml-4 text-xl">{item.title}</div>
              </div>
              <p className="leading-loose text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  )
}

export default TechFeature