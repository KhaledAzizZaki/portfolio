import React, { useRef } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { IoLogoWhatsapp } from "react-icons/io";
import { Fade } from "react-awesome-reveal";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_service_id,
        import.meta.env.VITE_template_id,
        form.current,
        import.meta.env.VITE_public_key
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Message sent successfully!",
            showConfirmButton: false,
            timer: 1500,
            background: "#0f0f0f",
            color: "#04df72",
            iconColor: "#04df72",
            customClass: {
              popup: "rounded-xl shadow-xl",
              title: "text-lg font-medium",
            },
          });
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to send message.",
          });
          console.error(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div
      id="contact"
      className="py-20 px-3 sm:px-6 max-w-7xl mx-auto text-white"
    >
      <Fade direction="up" duration={1000} triggerOnce>
        <h1 className="mb-20 text-center text-4xl">
          Contact <span className="text-neutral-500">Me</span>
        </h1>
      </Fade>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Contact Form */}
        <Fade direction="left" triggerOnce delay={500}>
          <div className="bg-[#1A1A1A] sm:p-10 p-7 rounded-xl">
            <h2 className="text-3xl font-semibold text-green-400 mb-2">
              Let's work together
            </h2>
            <p className="text-sm text-gray-400 mb-6">
              Whether you have a project in mind, want to collaborate, or just
              want to say hello — I’d love to hear from you. Fill out the form
              and I’ll get back to you as soon as possible.
            </p>

            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="flex flex-col gap-4 sm:flex-row">
                <input
                  type="text"
                  name="first_name"
                  placeholder="Firstname"
                  required
                  className="w-full sm:w-1/2 p-3 bg-[#121212] rounded-md outline-none text-sm"
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Lastname"
                  required
                  className="w-full sm:w-1/2 p-3 bg-[#121212] rounded-md outline-none text-sm"
                />
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email address"
                  required
                  className="w-full sm:w-1/2 p-3 bg-[#121212] rounded-md outline-none text-sm"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  required
                  className="w-full sm:w-1/2 p-3 bg-[#121212] rounded-md outline-none text-sm"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full p-3 bg-[#121212] rounded-md outline-none text-sm"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Type your message here."
                required
                className="w-full p-3 bg-[#121212] rounded-md outline-none text-sm"
              ></textarea>
              <button
                type="submit"
                className="bg-green-500 text-black px-6 py-2 rounded-md font-medium hover:bg-green-400"
              >
                Send message
              </button>
            </form>
          </div>
        </Fade>

        {/* Right: Contact Info */}

        <div className="flex flex-col justify-center space-y-6 px-6">
          <Fade direction="right" triggerOnce delay={500}>
            <div className="sm:flex items-center gap-4 space-y-3">
              <div className="flex gap-4">
                <FaPhoneAlt className="text-green-400 text-6xl mt-1 bg-[#1A1A1A] p-4 rounded-lg" />
                <IoLogoWhatsapp className="text-green-400 text-6xl mt-1 bg-[#1A1A1A] p-4 rounded-lg" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-base">+880 171 170 6800</p>
              </div>
            </div>
            <div className="sm:flex space-y-3 items-center gap-4">
              <FaEnvelope className="text-green-400 text-6xl mt-1 bg-[#1A1A1A] p-4 rounded-lg" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-base">khaledazizzaki@gmail.com</p>
              </div>
            </div>
            <div className="sm:flex space-y-3 items-center gap-4">
              <FaMapMarkerAlt className="text-green-400 text-6xl mt-1 bg-[#1A1A1A] p-4 rounded-lg" />
              <div>
                <p className="text-sm text-gray-400">Address</p>
                <p className="text-base">Narsingdi, Dhake, Bangladesh</p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Contact;
