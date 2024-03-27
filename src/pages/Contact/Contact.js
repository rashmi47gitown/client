import React, { useState } from "react";
import "./Contact.css";
import { toast } from "react-toastify";
import Jump from "react-reveal/Jump";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("Please provide all fields");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="card card0 border-0">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
            <div className="card1">
              <div className="row border-line">
                <img src="contactme.png" alt="contact" className="image" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <Jump>
              <div className="card2 d-flex card border-0 px-5 py-5">
                <div className="row">
                  <div className="row">
                    <h5 className="hdr">
                      Contact with
                      <a
                        href="https://www.linkedin.com/in/rashmi-k-36786623b"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin
                          color="#5A4FCF"
                          size={30}
                          className="ms-2"
                        />
                      </a>
                      <a
                        href="https://github.com/rashmi47gitown"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub color="#5A4FCF" size={30} className="ms-2" />
                      </a>
                      <a href="mailto:rashmikumari4477@gmail.com">
                        <MdAttachEmail
                          color="#5A4FCF"
                          size={30}
                          className="ms-2"
                        />
                      </a>
                    </h5>
                  </div>
                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      className="mb-3"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your Email"
                      className="mb-3"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <textarea
                      type="text"
                      name="msg"
                      placeholder="Write your message"
                      className="mb-2"
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <button className="button" onClick={handleSubmit}>
                      Send message
                    </button>
                  </div>
                </div>
              </div>
            </Jump>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
