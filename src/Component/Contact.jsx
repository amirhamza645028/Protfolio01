import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

const Contact = () => {
    const SubmitHaandel = (e) => {
        e.preventDefault(); // form refresh ঠেকাতে

        Swal.fire({
            title: "Do you want to contact with Hamza?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save Contact",
            denyButtonText: `Send `
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Saved!", "", "success");
            } else if (result.isDenied) {
                Swal.fire("Your request send ", "", "success");
            }
        });
    }

    return (
        <motion.div
            className="min-h-screen flex justify-center items-center bg-gray-900 px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
        >
            <div className="w-full max-w-2xl bg-gray-800 rounded-xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-center text-white mb-6">
                    Contact <span className="text-[#00ffff]">Me!</span>
                </h2>

                <Marquee
                    className="custom-class text-shadow-emerald-300 font-sans font-medium text-[#00ffff] pb-4"
                    play={true}
                    pauseOnHover={true}
                    pauseOnClick={true}
                    direction="left"
                >
                    IF YOU FACE ANY PROBLEM!? YOU CAN HIRE ME FOR SOLVE YOUR PROBLEM.......
                </Marquee>

                {/* ✅ এখানে onSubmit দাও */}
                <form onSubmit={SubmitHaandel} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="input input-bordered w-full bg-gray-700 text-[#00ffff] focus:outline-none focus:ring-2 focus:ring-[#00ffff]"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="input input-bordered w-full bg-gray-700 text-[#00ffff] focus:outline-none focus:ring-2 focus:ring-[#00ffff]"
                        />
                        <input
                            type="text"
                            placeholder="Mobile Number"
                            className="input input-bordered w-full bg-gray-700 text-[#00ffff] focus:outline-none focus:ring-2 focus:ring-[#00ffff]"
                        />
                        <input
                            type="text"
                            placeholder="Email Subject"
                            className="input input-bordered w-full bg-gray-700 text-[#00ffff] focus:outline-none focus:ring-2 focus:ring-[#00ffff]"
                        />
                    </div>
                    <textarea
                        placeholder="Your Message"
                        className="textarea textarea-bordered w-full bg-gray-700 text-[#00ffff] focus:outline-none focus:ring-2 focus:ring-[#00ffff] h-32"
                    ></textarea>          <div className="flex justify-center">
                        {/* ✅ এখানে আর onSubmit দিতে হবে না */}
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="btn bg-[#00ffff] text-[#0d0e0e] hover:bg-[#00ffff] border-none px-6 py-2 rounded-lg shadow-lg"
                        >
                            Submit
                        </motion.button>
                        <ToastContainer />
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default Contact;



 