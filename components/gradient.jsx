const Gradient = () => {
  return (
    <>
      <div className="m-6 p-8 rounded-lg text-5xl font-bold border-2 w-[900px]  bg-gradient-to-br from-purple-500 via-blue-400 to-green-400 ">
        <h3>How to make bg-gradient in tailwindcss </h3>
        <p className="text-black text-2xl">
          bg-gradient-to-br from-purple-500 via-blue-400 to-green-400
        </p>
      </div>
      <div className="m-6 p-8 rounded-lg text-5xl font-bold border-2 w-[900px]  bg-gradient-to-br from-purple-500 via-blue-400 to-green-400 bg-clip-text text-transparent">
        <h3>How to put gradient in text !</h3>
        <h5>This will make my </h5>
        <p className="text-white text-2xl">bg-clip-text | text-transparent</p>
      </div>
    </>
  );
};

export default Gradient;
