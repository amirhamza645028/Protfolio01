import { motion } from "framer-motion";
import { FaUsers, FaBullseye, FaGlobe, FaPhone } from "react-icons/fa";
import pic1 from '../assets/hasubl.png';
import pic2 from '../assets/nadiya.png';
import pic3 from '../assets/shila.jpeg';
import pic4 from '../assets/sorna.png';
import pic5 from '../assets/trikul.png';
import pic7 from '../assets/Rahman.png';
import pic6 from '../assets/nfij.png';
import pic8 from '../assets/Antor.jfif';
import me from '../assets/meItpark2.jpeg'

const About = () => {
  const numberHandelar = ()=>{
    window.location.href = "https://wa.me/+8801729007747";
  }
  return (
    <div className="bg-[#0b0f24] text-white py-16 px-6 md:px-20 space-y-16">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#00ffff] mb-4 drop-shadow-[0_0_15px_#00ffff]">
          About Me
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
          Empowering the next generation through code and creativity.
        </p>
      </motion.div>

      {/* Our Story */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-8 items-center"
      >
        <img
          src={me}
          alt="My Journey"
          className="rounded-xl shadow-lg hover:scale-105 transition duration-300 border-2 border-[#00ffaa] w-72"
        />
        <div>
          <h3 className="text-2xl font-bold mb-2 text-[#00ffaa] drop-shadow-[0_0_10px_#00ffaa]">
            My Journey
          </h3>
          <p className="text-gray-300">
            I am AmirHamza, a student at Faridpur Polytechnic Institute, passionate about web
            development. From a dorm room coder to helping brands build clean and responsive
            websites – this is my story of learning and growth.
          </p>
        </div>
      </motion.div>

      {/* Mission & Vision */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-10"
      >
        <div className="bg-[#111936] p-6 rounded-xl shadow-md hover:shadow-[0_0_20px_#00ffff] transition hover:scale-[1.03]">
          <FaBullseye className="text-4xl mb-2 text-[#00ffff]" />
          <h4 className="text-xl font-semibold mb-1 text-[#00ffff]">My Mission</h4>
          <p className="text-gray-300">
            To develop user-friendly, efficient, and elegant websites that solve real-world
            problems.
          </p>
        </div>
        <div className="bg-[#111936] p-6 rounded-xl shadow-md hover:shadow-[0_0_20px_#00ffaa] transition hover:scale-[1.03]">
          <FaGlobe className="text-4xl mb-2 text-[#00ffaa]" />
          <h4 className="text-xl font-semibold mb-1 text-[#00ffaa]">My Vision</h4>
          <p className="text-gray-300">
            To become a leading full-stack web developer who brings ideas to life with performance
            and design.
          </p>
        </div>
      </motion.div>

      {/* Services */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h3 className="text-2xl font-bold text-center text-[#00e0ff] drop-shadow-[0_0_10px_#00e0ff]">
          What I Do
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Frontend Development",
            "Responsive Design",
            "Tailwind + React",
            "API Integration",
            "Git & GitHub",
            "UI Improvement",
          ].map((service, index) => (
            <div
              key={index}
              className="bg-[#111936] p-4 rounded-xl shadow-md hover:bg-[#00ffee1a] hover:shadow-[0_0_15px_#00ffcc] transition duration-300 border border-[#1f2937]"
            >
              <p className="text-lg font-medium text-white">{service}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Meet the Team */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center space-y-6"
      >
        <h3 className="text-2xl font-bold text-[#00ffff] drop-shadow-[0_0_12px_#00ffff]">
          <FaUsers className="inline-block mr-2 mb-1" />
          Meet The Team
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Hasibul", role: "Networking", image: pic1 },
            { name: "Nadiya sultana Nur", role: "UI/UX Designer", image: pic2 },
            { name: "Md.Nafiz", role: "Founder & Developer", image: pic6 },
            { name: "Sowra Hok", role: "Marketing Lead", image: pic4 },
            { name: "Md. Torikul", role: "Backend Developer", image: pic5 },
            { name: "Mst. Shila", role: "CSE Specialist", image: pic3 },
            { name: "S.A Rahman", role: "Hardware", image: pic7 },
            { name: "Antor Islam", role: "SEO Specialist", image: pic8 },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-[#111936] p-5 hover:shadow-[0_0_20px_#00ffff] transition duration-300 ring ring-primary rounded-xl mx-auto w-72 h-60"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full border-2 border-[#00ffff] mb-4 hover:scale-105 transition mx-auto"
              />
              <h4 className="text-lg font-bold text-[#00ffff]">{member.name}</h4>
              <p className="text-gray-300">{member.role}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Contact CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mt-10"
      >
        <h4 className="text-xl font-bold mb-2 text-[#00ffff]">Want to work with me?</h4>
        <button 
        onClick={numberHandelar}
        className="btn bg-[#00ffff] text-black border-none hover:bg-[#00ffaa] transition duration-300 hover:shadow-[0_0_15px_#00ffaa]">
          <FaPhone className="mr-2" />
          Contact Me
        </button>
{/* bikolpo  */}
        {/* <a 
  href="tel:+8801234567890" // আপনার ফোন নাম্বার দিয়ে রিপ্লেস করুন
  className="btn bg-[#00ffff] text-black border-none hover:bg-[#00ffaa] transition duration-300 hover:shadow-[0_0_15px_#00ffaa] inline-flex items-center justify-center"
>
  <FaPhone className="mr-2" />
  Contact Me
</a> */}
      </motion.div>
    </div>
  );
};

export default About;