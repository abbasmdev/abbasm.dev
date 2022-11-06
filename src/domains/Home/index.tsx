import Link from "next/link";
import GitlabIcon from "../../assets/gitlab.svg";
import LinkedinIcon from "../../assets/linkedin.svg";
import Header from "./Header";

const Home = () => {
  return (
    <div className="relative w-full">
      <Header />
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
      <footer className="flex flex-col items-center gap-3">
        <div className="flex justify-center items-center gap-4">
          <Link href={"https://www.linkedin.com/in/abbas-moharami/"} passHref>
            <a rel="noreferrer" title="Linkedin" target="_blank">
              <LinkedinIcon />
            </a>
          </Link>
          <Link href={"https://github.com/abbasmdev/"} passHref>
            <a rel="noreferrer" title="Github" target="_blank">
              <GitlabIcon />
            </a>
          </Link>
        </div>
        <div className="text-base">
          <span>Built by Abbas Moharami. Inspired by </span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/bchiang7/v4"
          >
            Brittany Chiang
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
