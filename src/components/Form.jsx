import React, { useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Form = ({ formType, submitForm, authMode }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confurmPassword, setConfurmPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showCpass, setShowCpass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formType == "SignUp") {
      if(!name){
        toast.warning("Name is required!")
        return
      }
      if(!email){
        toast.warning("Email is required!")
        return
      }
      if(!password){
        toast.warning("Password is required!")
        return
      }
      if(!confurmPassword){
        toast.warning("Confurm Password is required!")
        return
      }
      if(password !== confurmPassword){
        toast.warning("Confurm Password is not match!")
        return
      }
      submitForm({name,email,password})
    }
    else if(formType == "Login") {
      if(!email){
        toast.warning("Email is required!")
        return
      }
      if(!password){
        toast.warning("Password is required!")
        return
      }
      submitForm({email,password})
    }
  }

  return (
    <section className="w-[80%] md:w-[70%] lg:w-[30%]  p-4 rounded-2xl bg-blue-50 shadow-md shadow-blue-200">
      <form 
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 p-2">
        {formType == "SignUp" ? (
        <div className="w-full px-4 py-1 bg-blue-200 backdrop-blur-3xl border-2 border-blue-300 rounded-xl box-border">
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
            className="w-[95%] outline-none text-black placeholder-zinc-600"
          />
        </div>
      ) : null}
        <div className="w-full px-4 py-1 bg-blue-200 backdrop-blur-3xl border-2 border-blue-300 rounded-xl box-border">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className="w-[95%] outline-none text-black placeholder-zinc-600"
          />
        </div>
        <div className="w-full px-4 py-1 bg-blue-200 backdrop-blur-3xl border-2 border-blue-300 rounded-xl box-border">
          <input
            type={showPass ? "taxt" : "password"}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password"
            className="w-[95%] outline-none text-black placeholder-zinc-600"
          />
          <i
            className="absolute right-3 top-[50%] translate-[-50%] cursor-pointer"
            onClick={() => setShowPass((pre) => !pre)}
          >
            {showPass ? <FaEyeSlash /> : <FaRegEye />}
          </i>
        </div>
        {
          formType == "SignUp" ? (
            <div className="w-full px-4 py-1 bg-blue-200 backdrop-blur-3xl border-2 border-blue-300 rounded-xl box-border relative">
          <input
            type={showCpass ? "taxt" : "password"}
            name="cPassword"
            value={confurmPassword}
            onChange={(e) => setConfurmPassword(e.target.value)}
            placeholder="Confurm Password"
            className="w-[95%] outline-none text-black placeholder-zinc-600"
          />
          <i
            className="absolute right-3 top-[50%] translate-[-50%] cursor-pointer"
            onClick={() => setShowCpass((pre) => !pre)}
          >
            {showCpass ? <FaEyeSlash /> : <FaRegEye />}
          </i>
        </div>
          ) : null
        }
        <div className="flex flex-col gap-2.5">
          <div className="text-sm text-neutral-800 font-mono">
            <p>
              {authMode.text}{" "}
              <Link to={`/${authMode.link}`}>
              <span className="text-blue-600 cursor-pointer ">{authMode.link}</span>
              </Link>
            </p>
          </div>
          <div className="flex justify-center">
            <button
            type="submit"
            className="py-1 px-4 bg-blue-600 text-white font-medium rounded-2xl hover:bg-blue-800 cursor-pointer">
              {formType}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;
