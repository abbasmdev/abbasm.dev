const Home = () => {
  return (
    <div className="relative w-full">
      <main className="px-6">
        <section
          id="about"
          className="flex flex-col gap-5 h-screen pb-20 justify-center items-start max-w-xl "
        >
          <h1 className="text-abGreen font-semibold">Hi, my name is</h1>
          <h2 className="text-abSlate-lightest font-semibold text-4xl md:text-5xl">
            Abbas Moharami.
          </h2>
          <h3 className="text-abSlate font-semibold text-4xl md:text-5xl">
            I Build things for the web with JavaScript
          </h3>

          <p className="text-abSlate">I’m a software engineer</p>
        </section>
      </main>
    </div>
  );
};

export default Home;
