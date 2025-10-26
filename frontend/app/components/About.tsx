const About = () => {
  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '5+', label: 'Years Experience' },
    { number: '100+', label: 'Happy Clients' },
    { number: '24/7', label: 'AI Support' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Transforming Ideas into Intelligent Solutions
            </h3>
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400">
              <p>
                I'm a passionate full-stack developer and AI specialist with expertise
                in creating modern web applications powered by cutting-edge artificial
                intelligence.
              </p>
              <p>
                My journey in tech has led me to specialize in Next.js for frontend
                development and Python for backend services, particularly focusing on
                OpenAI integration and AI agent frameworks.
              </p>
              <p>
                I believe in creating seamless, intelligent experiences that make
                technology accessible and beneficial for everyone.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 rounded-3xl p-8 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Floating code blocks */}
                <div className="absolute top-0 left-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <code className="text-sm text-gray-800 dark:text-white">
                    {'<div>AI Powered</div>'}
                  </code>
                </div>

                <div className="absolute bottom-0 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <code className="text-sm text-gray-800 dark:text-white">
                    {'const ai = new Assistant()'}
                  </code>
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="text-6xl animate-pulse">🤖</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

