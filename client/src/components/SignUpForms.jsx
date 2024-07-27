function SignUpForms({ setRender }) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center py-4 w-1/3 border-none bg-custom-gradient-3 rounded-3xl h-72 justify-center ">
        <input
          type="text"
          placeholder="Your name"
          className="bg-white font-iceland text-2xl w-80 h-12 border-none rounded-lg text-center mt-4 mb-4"
        />

        <input
          type="text"
          placeholder="email"
          className="bg-white font-iceland text-2xl w-80 h-12  border-none rounded-lg text-center mb-4 "
        />

        <input
          type="text"
          placeholder="password"
          className="bg-white font-iceland text-2xl w-80 h-12  border-none rounded-lg text-center mb-6 "
        />
        <button className="bg-custom-gradient-2 font-judson text-lg mt-2 w-32 h-12 rounded-full mb-2 text-white align-middle">
          Sign Up
        </button>
        <p
          className="cursor-pointer text-white"
          onClick={() => setRender(true)}
        >
          Already a user? Sign In
        </p>
      </div>
    </div>
  );
}

export default SignUpForms;
