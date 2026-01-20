import React, { useState } from 'react';

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password);
    // console.log('Email:', email);
    // console.log('Password:', password);

    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="border-2 border-emerald-600 rounded-xl">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center p-20"
        >
          <input
            type="email"
            placeholder="Enter Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-emerald-600 rounded-full py-3 px-5 text-xl outline-none placeholder:text-gray-400"
          />

          <input
            type="password"
            placeholder="Enter Your Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-emerald-600 rounded-full py-3 px-5 text-xl outline-none mt-3 placeholder:text-gray-400"
          />

          <button
            type="submit"
            className="mt-5 bg-emerald-600 border-2 border-emerald-600 rounded-full py-3 px-5 text-xl text-black hover:bg-transparent hover:text-emerald-600 transition-colors duration-300 hover:scale-95 cursor-pointer active:scale-90"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
