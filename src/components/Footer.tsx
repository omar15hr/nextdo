import { GithubIcon, LinkedinIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="bg-gray-700 text-indigo-100 py-5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold">Omar Hernández</h2>
            <p className="mt-2">Desarrollador Web Full Stack</p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <h3 className="font-bold">Social Links</h3>
            <a
              href="#"
              className="hover:text-indigo-100 transition-colors duration-300 cursor-pointer"
            >
              <LinkedinIcon />
            </a>
            <a
              href="#"
              className="hover:text-indigo-100 transition-colors duration-300 cursor-pointer"
            >
              <GithubIcon />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p>
              © {new Date().getFullYear()} - Todos los derechos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}