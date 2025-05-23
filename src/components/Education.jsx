import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const education = [
  {
    degree: 'Master of Technology (M.Tech)',
    institution: 'IIIT Hyderabad',
    field: 'Computer Science and Engineering',
    period: '2016 - 2018',
    description: 'Specialized in Machine Learning and Artificial Intelligence'
  },
  {
    degree: 'Bachelor of Technology (B.Tech)',
    institution: 'IIIT Hyderabad',
    field: 'Computer Science and Engineering',
    period: '2012 - 2016',
    description: 'Focus on Software Engineering and Data Structures'
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-gray-50/50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.1),transparent_25%),radial-gradient(circle_at_30%_70%,rgba(37,99,235,0.08),transparent_35%)]"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent mb-4 animate-gradient-x">
            Education
          </h2>
          <p className="text-lg text-center text-blue-700/80 mb-12">Academic journey and achievements</p>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-blue-400 to-blue-200"></div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-md"></div>

                  <div className="group ml-16 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="p-3 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                          <FaGraduationCap className="text-blue-600 text-2xl group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                            {edu.degree}
                          </h3>
                          <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium border border-blue-100 group-hover:bg-blue-100 transition-colors">
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-blue-600 font-semibold mt-2">{edu.institution}</p>
                        <p className="text-gray-600 mt-1 font-medium">{edu.field}</p>
                        <p className="text-gray-600 mt-3 group-hover:text-gray-700 transition-colors">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
