import React from "react";
import { login, signup } from './actions'

const LoginPage = () => {
  return (
    <>
      <form className="">
        <label htmlFor="email" className="block">Email:</label>
        <input id="email" name="email" type="email" required  className="block text-black placeholder:text-black"/>
        <label htmlFor="password" className="block">Password:</label>
        <input id="password" name="password" type="password" required className="block text-black placeholder:text-black" />
        <div>
        <button formAction={login} className="block">Log in</button>
        <button formAction={signup} className="block">Sign up</button>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
