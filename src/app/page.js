import Image from "next/image";

export default function Home() {
  return (
    <div className="p-8 bg-gray-200">
      <div className="max-w-screen-xl mx-auto">
        <div className="md:flex md:space-x-8">
          {/* Left Column */}
          <div className="md:w-1/3">
            <div className="h-full bg-white text-gray-700 shadow-lg rounded-lg">
              {/* Avatar and Info */}
              <div className="relative">
                <Image
                  src="/assets/danius.jpg"
                  alt="Foto de Gabriel Danius"
                  className="w-full rounded-t-lg"
                  width={400}
                  height={400}
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4">
                  <h2 className="text-white text-2xl">Gabriel Danius</h2>
                </div>
              </div>
              <div className="p-6">
                <p className="flex items-center mb-4">
                  <i className="fa fa-briefcase text-teal-600 mr-3"></i>Desenvolvedor full stack
                </p>
                <p className="flex items-center mb-4">
                  <i className="fa fa-home text-teal-600 mr-3"></i>São Paulo, SP
                </p>
                <p className="flex items-center mb-4">
                  <i className="fa fa-envelope text-teal-600 mr-3"></i>
                  gabrieldanius@yahoo.com.br
                </p>
                <p className="flex items-center mb-4">
                  <i className="fa fa-phone text-teal-600 mr-3"></i>+11 98887 5043
                </p>
                <hr className="my-4" />

                <h3 className="text-xl font-bold mb-4">
                  <i className="fa fa-asterisk text-teal-600 mr-3"></i>Habilidades
                </h3>
                <p>Front-end</p>
                <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
                  <div
                    className="bg-teal-600 h-2 rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <p>Back-end</p>
                <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
                  <div
                    className="bg-teal-600 h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
                <p>Devops</p>
                <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
                  <div
                    className="bg-teal-600 h-2 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <p>UX/UI</p>
                <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
                  <div
                    className="bg-teal-600 h-2 rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-2/3 space-y-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl text-teal-600 font-bold mb-4">
                <i className="fa fa-suitcase mr-3"></i>Experiência Profissional
              </h2>
              <div className="mb-6">
                <h5 className="font-bold text-lg">
                  Desenvolvedor front-end / Challenger Fórmula E
                </h5>
                <p className="text-teal-600">
                  <i className="fa fa-calendar mr-2"></i>05/2024 - 10/2024{" "}
                  <span className="bg-teal-600 text-white px-2 rounded-lg">
                    Atual
                  </span>
                </p>
                <p className="mt-2">
                 Criação de wireframes e mockups no figma para visualização e planejamento inicial de projetos. 
                 Desenvolvimento da landing page do projeto, incluindo a criação de seções estratégicas como 
                 call to action e área de login, focando na experiência do usuário e na conversão.
                 Utilização de ferramentas como Jira e Confluence para gestão e organização de projetos.
                </p>
              </div>

              <div className="mb-6">
                <h5 className="font-bold text-lg">
                Desenvolvedor front-end / Interface Airbnb
                </h5>
                <p className="text-teal-600">
                  <i className="fa fa-calendar mr-2"></i>09/2024
                </p>
                <p className="mt-2">
                Aplicação de um projeto da FIAP que tive de trabalhar com estruturação semântica do HTML5 e utilizar técnicas de layout com CSS.
                </p>
              </div>

              <div className="mb-6">
                <h5 className="font-bold text-lg">
                  Desenvolvedor front-end / Interface Responsiva com Dark Mode/Light Mode
                </h5>
                <p className="text-teal-600">
                  <i className="fa fa-calendar mr-2"></i>03/2024
                </p>
                <p className="mt-2">
                Projetei e desenvolvi uma página web responsiva utilizando HTML, CSS e JavaScript e 
                implementei funcionalidades de alternância entre Dark Mode e Light Mode para melhorar a experiência 
                do usuário em diferentes condições de iluminação e preferências visuais.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl text-teal-600 font-bold mb-4">
                <i className="fa fa-certificate mr-3"></i>Educação
              </h2>
              <div className="mb-6">
                <h5 className="font-bold text-lg">Engenharia de Software</h5>
                <p className="text-teal-600">
                  <i className="fa fa-calendar mr-2"></i>FIAP
                </p>
                <p className="mt-2">
                02/2024 – 12/2027
                </p>
              </div>

              <div className="mb-6">
                <h5 className="font-bold text-lg">Análise e Desenvolvimento de Sistemas</h5>
                <p className="text-teal-600">
                  <i className="fa fa-calendar mr-2"></i>01/2022 - 06/2024
                </p>
                <p className="mt-2">Universidade Presbiteriana Mackenzie</p>
              </div>

              <div className="mb-6">
                <h5 className="font-bold text-lg">Jornalismo</h5>
                <p className="text-teal-600">
                  <i className="fa fa-calendar mr-2"></i>2005 - 2009
                </p>
                <p className="mt-2">Universidade Presbiteriana Mackenzie</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
