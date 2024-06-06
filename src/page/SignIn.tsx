import React from "react";

import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import logoGoogle from "../assets/img/Google_Icon.webp";
import { auth, provider } from "../firebase";

const SignIn: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        const userLocal = {
          userName: data.user.displayName,
          email: data.user.email,
          image: data.user.photoURL,
          userId: data.user.uid,
        };

        localStorage.setItem("userLocal", JSON.stringify(userLocal));
        toast.success("success");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <>
      <div className="flex flex-col items-center gap-10 mt-20">
        <h2 className="font-bold text-5xl">Hi there! 👋 Let's chat now!</h2>
        <p>
          Let's chat now, everyone! 🚀 Join the conversation and share your
          thoughts.
        </p>
        <div
          onClick={handleLoginWithGoogle}
          className="flex items-center bg-bgGoogle shadow-lg rounded-lg py-1 px-4 hover:opacity-80 hover:cursor-pointer"
        >
          <img src={logoGoogle} alt="" className="w-10" />
          <span className="font-light ">Sign in with Google</span>
        </div>
      </div>
    </>
  );
};

export default SignIn;
