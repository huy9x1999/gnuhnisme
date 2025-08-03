import React from "react";
export default function MyWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 via-blue-500 to-blue-400 relative overflow-hidden">
      {/* Top Logo */}
      {/* <div className="absolute top-4 left-4 z-10">
        <div className="bg-yellow-400 text-black px-2 py-1 text-xs font-bold rounded">
          📱 DESIGN
        </div>
      </div> */}

      {/* Top Right Dots */}
      {/* <div className="absolute top-4 right-4 flex gap-2">
        <div className="w-3 h-3 bg-white rounded-full"></div>
        <div className="w-3 h-3 bg-white rounded-full"></div>
      </div> */}

      {/* Main Content */}
      <div className="flex flex-col items-center justify-start pt-20 px-8">
        {/* Title */}
        <h1 className="text-yellow-400 text-4xl font-bold mb-12 tracking-wider">
          MY WORKS
        </h1>

        {/* Works List */}
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="text-white text-2xl font-bold opacity-80">
            AURALIS<br />ACADEMY
          </div>
          
          <div className="text-white text-2xl font-bold opacity-80">
            ME&YOU
          </div>
          
          <div className="text-white text-2xl font-bold opacity-80">
            COOKIFY
          </div>
          
          <div className="text-white text-2xl font-bold opacity-80">
            BABY<br />STEPS
          </div>
          
          <div className="text-white text-2xl font-bold opacity-80">
            AO DAI<br />HUE
          </div>
          
          <div className="text-white text-2xl font-bold opacity-80">
            MAKE<br />IT FUN
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* Contact Info Card */}
        <div className="absolute bottom-32 right-8 bg-blue-300 bg-opacity-50 p-4 rounded-lg text-white text-sm">
          <div className="space-y-1">
            <div><span className="text-yellow-400">Phone:</span> +84 123 456 789</div>
            <div><span className="text-yellow-400">Email:</span> contact@example.com</div>
            <div><span className="text-yellow-400">LinkedIn:</span> linkedin.com/in/example</div>
            <div><span className="text-yellow-400">Instagram:</span> @example</div>
          </div>
        </div>

        {/* Character with Speech Bubble */}
        <div className="absolute bottom-16 left-8 flex items-end">
          {/* Speech Bubble */}
          <div className="bg-pink-200 text-black p-3 rounded-lg text-xs font-medium mr-4 relative">
            DREAM BIG TOGETHER AND<br />LET ME A MESSAGE
            <div className="absolute bottom-0 right-0 transform translate-x-2 translate-y-2">
              <div className="w-0 h-0 border-l-8 border-l-pink-200 border-t-8 border-t-transparent border-b-8 border-b-transparent"></div>
            </div>
          </div>
          
          {/* Character */}
          <div className="w-20 h-20 bg-pink-400 rounded-full relative">
            {/* Eyes */}
            <div className="absolute top-6 left-4 w-3 h-3 bg-black rounded-full"></div>
            <div className="absolute top-6 right-4 w-3 h-3 bg-black rounded-full"></div>
            {/* Mouth */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-black rounded-full"></div>
          </div>
        </div>

        {/* Bottom Logo */}
        <div className="absolute bottom-4 left-4">
          <div className="bg-yellow-400 text-black px-2 py-1 text-xs font-bold rounded">
            📱 DESIGN
          </div>
        </div>

        {/* Bottom Right Buttons */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          <div className="w-8 h-6 bg-yellow-400 rounded"></div>
          <div className="w-8 h-6 bg-yellow-400 rounded"></div>
          <div className="w-8 h-6 bg-yellow-400 rounded"></div>
        </div>

        {/* Screen Size Indicator */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white text-sm pb-2">
          863 × 4096
        </div>
      </div>
    </div>
  );
}