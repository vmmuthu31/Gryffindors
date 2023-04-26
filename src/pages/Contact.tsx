import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Image from "next/image";
import ContactImg from "../Assets/contact.png";
import emailjs from "@emailjs/browser";
interface FormState {
  name: string;
  email: string;
  message: string;
}
function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { target } = e;
    const { name, value } = target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    console.log("submitted");
    e.preventDefault();
    setLoading(true);
    //service id, template id, api public key
    emailjs
      .send(
        "service_qwgga5x",
        "template_4lbousk",
        {
          from_name: form.name,
          to_name: "Thirumurugan Sivalingam",
          from_email: "thirumurugan82003@gmail.com",
          message: form.message,
        },
        "fHWYuIZubjz6j95Kn"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong");
        }
      );
  };

  return (
    <div>
      <Navbar />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1055/428] w-[36.125rem] -translate-x-1/2 rotate-[50deg] bg-gradient-to-tr from-[#001DFF] to-[#001DFF] opacity-80 sm:left-[calc(60%-20rem)] sm:w-[62.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <p className="text-3xl text-center font-bold mt-16">Contact US</p>
        <div>
          <div className="relative isolate overflow-hidden py-10 md:mx-40 contactcard mt-10 shadow-lg sm:rounded-3xl">
            <div className="sm:px-16 flex flex-col md:flex-row  lg:flex lg:gap-x-20 lg:px-10 lg:pt-0">
              <form onSubmit={handleSubmit}>
                <div className=" flex flex-col  gap-4 md:w-1/2 bg-opacity-40 py-5 rounded-xl">
                  <label className="text-xl pl-10 ">Your Name</label>
                  <input
                    className="bg-[#151030] h-10 md:w-[400px] opacity-60 outline-none mx-10 bg-opacity-100 text-xl rounded-md px-3 "
                    placeholder="What is your name?"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                  />
                  <label className="text-xl pl-10 ">Your Email</label>
                  <input
                    className="bg-[#151030] h-10 md:w-[400px] outline-none opacity-60 mx-10 bg-opacity-100 text-xl rounded-md px-3"
                    placeholder="What is your email?"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                  />
                  <label className="text-xl pl-10 ">Description</label>
                  <textarea
                    className="bg-[#151030] h-32 md:w-[400px] outline-none opacity-60 mx-10 bg-opacity-100 text-xl rounded-md px-3"
                    placeholder="What do you want to say??"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                  />
                  <div className="mt-2">
                    <button
                      type="submit"
                      className=" ml-10 border-2 border-white px-6 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      {loading ? "Sending..." : "Send"}
                    </button>
                  </div>
                </div>
              </form>
              <div className="flex justify-center">
                <Image
                  className="md:w-[600px] h-full "
                  src={ContactImg}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
