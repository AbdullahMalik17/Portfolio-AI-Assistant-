const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['Next.js', 'React', 'TypeScript','HTML/CSS','Chainlit for Chatbots'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Backend',
      skills: ['Python', 'OpenAI SDK', 'REST APIs', 'PostgreSQL'],
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'AI/ML',
      skills: ['OpenAI Agent','Vector DBs', 'LLM Integration', 'N8N for Automation' , 'Openai Agent Kit'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Tools',
      skills: ['Git', 'Mem0', 'AWS', 'Vercel'],
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className={`w-2 h-8 bg-gradient-to-b ${category.color} rounded-full`}></div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-white rounded-full text-sm font-medium hover:scale-105 transform transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
            <div className="text-4xl mb-4">🚀</div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Fast Development</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Rapid prototyping and deployment
            </p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
            <div className="text-4xl mb-4">🎯</div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Quality First</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Clean, maintainable code
            </p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
            <div className="text-4xl mb-4">🤝</div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Team Player</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Collaborative approach
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

