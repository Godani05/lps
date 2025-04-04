import {
  FacebookIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  YoutubeIcon,
} from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import CustomNavigationMenu from "../../components/ui/navigation-menu";

export const Desktop = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
    {
      label: "LE LYCEE",
      hasDropdown: true,
      submenu: [
        // { name: "Présentation", url: "/presentation" },
        // { name: "Mot du Proviseur", url: "/mot-proviseur" },
        // { name: "Organisation", url: "/organisation" },
        // { name: "Vie Scolaire", url: "/vie-scolaire" },

        "Présentation",
        "Mot du Proviseur",
        "Organisation",
        "Vie Scolaire",
      ],
    },
    {
      label: "FORMATION",
      hasDropdown: true,
      submenu: ["Formation Initiale", "Formation Continue"],
    },
    { label: "ACTUALITES", hasDropdown: false },
    {
      label: "SERVICES",
      hasDropdown: true,
      submenu: ["Nos Produits", "Nos Materiels", "Bibliothèque"],
    },
    {
      label: "INFOS",
      hasDropdown: true,
      submenu: [
        "Admission et Inscription",
        "Réglement Interieur",
        "Enregistrement FDFP",
        "Galerie",
        "Intranet",
      ],
    },
  ];

  // Mission items
  const missionItems = [
    "Dispenser une formation initiale d'ouvriers, techniciens et techniciens supérieurs dans les domaines de l'Agro-Industrie et de la Maintenance Industrielle.",
    "Proposer des formations continues aux travailleurs.",
    "Offrir des formations qualifiantes aux demandeurs d'emploi.",
    "Mettre en place des formations en apprentissage et en alternance adaptées aux métiers concernés.",
  ];

  // Vision items
  const visionItems = [
    "Offrant une formation professionnelle de qualité, reconnue et appréciée par le secteur productif.",
    "Intègrant également un pôle de recherche et d'ingénierie innovant, contribuant efficacement à la valorisation des matières premières agricoles en Côte d'Ivoire.",
  ];

  // Filières (programs) data
  const filieres = [
    {
      name: "Maintenance Industrielle",
      image: "/Image3.jpg",
      description:
        "FORMER DES TECHNICIENS POUR ASSURER LA MAINTENANCE DES EQUIPEMENTS DE PRODUCTION INDUSTRIELLE",
    },
    {
      name: "Agro-Industrie",
      image: "/agro-industrie.png",
      description:
        "PREPARER LES ELEVES AUX METIERS DE LA TRANSFORMATION ALIMENTAIRE ET COSMETIQUE, AVEC DES COMPETENCES THEORIQUES ET PRATIQUES DANS LES PROCEDES DE PRODUCTION ET DE GESTION DE LA QUALITE",
    },
  ];

  // Footer navigation items
  const footerNavItems = [
    "LE LYCEE",
    "FORMATION",
    "ACTUALITES",
    "SERVICES",
    "INFOS",
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1440px] relative">
        {/* Top Bar */}
        <div className="w-full h-16 flex">
          <div className="w-1/3 h-full bg-[#e2df73] flex items-center pl-8">
            <div className="flex items-center gap-3 ml-8">
              <span className="font-normal text-white text-xm">
                NOUS SUIVRE :
              </span>
              <div className="w-6 h-6 bg-[#1a3a76] rounded-full flex items-center justify-center">
                <FacebookIcon className="w-4 h-4 text-white" />
              </div>
              <div className="w-6 h-6 bg-[#1a3a76] rounded-full flex items-center justify-center">
                <YoutubeIcon className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          <div className="flex-1 h-full bg-[#1a3a76] flex items-center justify-center pr-8 ">
            <div className="flex items-center gap-6 text-white text-xs ml-4 ">
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-6 h-6 text-[#e2df73]" />
                <span className="font-normal ">
                  YOPOUGON BANCO II, CARREFOUR LYCEE
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon className="w-6 h-6 text-[#e2df73]" />
                <span className="font-normal">infoslps@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-6 h-6 text-[#e2df73]" />
                <span className="font-normal">0707151163/ 0707862707</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="w-full py-4 bg-white flex items-center justify-between px-8 shadow-sm">
          <a href="/">
            <img
              className="w-12 h-12 object-contain ml-20 cursor-pointer"
              alt="Logo LPS"
              src="/logo-lps-1.png"
            />
          </a>
          <CustomNavigationMenu navItems={navItems} />
        </div>

        {/* Hero Section */}
        <div className="w-full h-[440px] relative">
          <img
            className="w-full h-full object-cover"
            alt="Campus"
            src="/bannière.png"
          />
          <div
            onClick={() => (window.location.href = "/le-lycee/presentation")}
            className="absolute bottom-8 left-8 px-6 py-3 rounded-sm bg-[#1a3a76] flex items-center justify-center cursor-pointer hover:bg-[#e2df73] text-white hover:text-[#1a3a76] text-lg transition-colors duration-300"
          >
            <button className="font-normal ">
              NOUS DECOUVRIR
            </button>
          </div>
        </div>

        {/* Qui Sommes Nous Section */}
        <div className="w-full py-16 px-8">
          <div className="flex flex-row items-center">
            <div className="w-2/5 absolute">
              <img
                className="w-full rounded-lg object-cover h-96 "
                alt="Campus"
                src="/129145710-147881587116174-1814296285761364023-n.png"
              />
            </div>
            <div className="w-3/5 pt-10 ml-[475px]">
              <h2 className="font-semibold text-[#1a3a76] text-4xl mb-4 pl-10">
                QUI SOMMES NOUS ?
              </h2>
              <Card className="bg-[#1a3a76] rounded-lg ">
                <CardContent className="p-6">
                  <p className="font-normal text-white text-xl leading-relaxed mb-4 pl-4">
                    Le Lycée Professionnel Sectoriel (LPS) de Yopougon est une
                    institution éducative située à Yopougon, une commune
                    d'Abidjan en Côte d'Ivoire.
                    <br />
                    Notre Lycée se distingue par sa capacité à offrir des
                    formations en adéquation avec les emplois de
                    l'Agro-industrie et de la Maintenance Industrielle.
                    <br />
                    <br />
                    Le Lycée Professionnel Sectoriel (LPS) de Yopougon a été
                    créé le 03 juillet 2018 par l'arrêté N° 2018-027/SE-ETFP/CAB
                    et a ouvert ses portes à la rentrée scolaire 2020-2021.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Notre Mission Section */}
        <div className="w-full py-0 px-8 bg-gray-50">
          <h2 className="font-semibold text-[#1a3a76] text-4xl mb-6">
            NOTRE MISSION
          </h2>
          <Card className="bg-[#1a3a76] rounded-lg w-full">
            <CardContent className="p-6">
              <p className="font-normal text-white text-lg mb-6">
                La mission du LPS Yopougon, dans le cadre de la formation
                professionnelle, est de :
              </p>
              <div className="space-y-4">
                {missionItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <img
                      className="w-8 h-8 flex-shrink-0 mt-1"
                      alt="Target"
                      src="/target.svg"
                    />
                    <p className="font-normal text-white text-lg mt-1">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Notre Vision Section */}
        <div className="w-full py-12 px-8">
          <h2 className="font-semibold text-[#1a3a76] text-4xl mb-6">
            NOTRE VISION
          </h2>
          <p className="font-normal text-[#1a3a76] text-lg mb-6">
            À l'horizon 2028, le LPS YOPOUGON se positionne comme un pôle
            d'excellence en Agro-Industrie et en Maintenance Industrielle :
          </p>
          <div className="space-y-4">
            {visionItems.map((item, index) => (
              <Card key={index} className="bg-[#1a3a76] rounded-lg w-full">
                <CardContent className="p-4 flex items-center gap-4">
                  <img
                    className="w-8 h-8 flex-shrink-0"
                    alt="Eye"
                    src="/eye.svg"
                  />
                  <p className="font-normal text-white text-lg">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Nos Filières Section */}
        <div className="w-full py-8 px-8 bg-gray-50">
          <h2 className="font-semibold text-[#1a3a76] text-4xl mb-6">
            NOS FILIÈRES
          </h2>
          <div>
            <a href="" className="grid grid-cols-2 gap-8">
              {filieres.map((filiere, index) => (
                <div key={index} className="flex flex-col cursor-pointer">
                  <div className="relative">
                    <img
                      className="h-80 w-full object-cover rounded-lg"
                      alt={filiere.name}
                      src={filiere.image}
                    />
                    <div className="absolute top-4 -left-6">
                      <div className="bg-[#e2df73] rounded-md px-3 py-2 flex items-center">
                        <img
                          className="w-4 h-4 mr-2"
                          alt="Bookmark"
                          src="/bookmark.svg"
                        />
                        <span className="font-semibold text-white text-xs">
                          {filiere.name}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="font-normal text-[#1a3a76] text-lg mt-4">
                    {filiere.description}
                  </p>
                </div>
              ))}
            </a>
            {/* Formation Continue Section */}
            <div className="w-full py-12 px-8 bg-gray-50">
              <h2 className="font-semibold text-[#1a3a76] text-3xl mb-6">
                FORMATION CONTINUE
              </h2>
              <div className="flex flex-row  justify-center gap-3">
                <img
                  className=" rounded-lg object-cover h-96 "
                  alt="formation continue"
                  src="/form-continue.jpg"
                />
                <CardContent className="w-1/2 p-6">
                  <p className="font-normal text-[#1a3a76] text-lg  mb-4">
                    Le Lycée Professionnel Sectoriel de Yopougon propose des
                    programmes de formation continue adaptés aux professionnels
                    et aux entreprises des secteurs de l'Agro-Industrie et de la
                    Maintenance Industrielle. Nos formations sont conçues pour
                    renforcer les compétences techniques et managériales des
                    travailleurs en activité, favorisant ainsi leur évolution
                    professionnelle et l'amélioration de leur productivité.
                    Dispensées par des formateurs expérimentés et dans des
                    installations modernes, nos programmes répondent aux besoins
                    spécifiques du milieu productif ivoirien tout en intégrant
                    les innovations technologiques les plus récentes.
                  </p>
                  <div className="flex justify-center">
                    <div
                      onClick={() =>
                        (window.location.href = "/formation/formation-continue")
                      }
                      className="px-6 py-3 rounded-sm bg-[#1a3a76] flex items-center justify-center cursor-pointer hover:bg-[#e2df73] text-white hover:text-[#1a3a76] text-lg transition-colors duration-300"
                    >
                      <button className="font-medium  ">
                        PLUS D'INFORMATIONS
                      </button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </div>
        </div>

        {/* Nos Produits Section */}
        <div className="w-full px-8 py-8">
          <h2 className="font-semibold text-[#1a3a76] text-3xl mb-6">
            NOS PRODUITS
          </h2>
          <div className="w-full">
            <div
              onClick={() => (window.location.href = "")}
              className="flex flex-row gap-6"
            >
              <img
                className="w-1/3 h-64 object-cover rounded-lg"
                alt="Products"
                src="/Image7.png"
              />
              <img
                className="w-1/3 h-64 object-cover rounded-lg"
                alt="Products"
                src="/Image4.png"
              />
              <img
                className="w-1/3 h-64 object-cover rounded-lg"
                alt="Products"
                src="/Image5.png"
              />
            </div>
            <p className="font-normal text-[#1a3a76] text-lg mt-6">
              Au Lycée Professionnel Sectoriel de Yopougon, les apprenants
              bénéficient d'une formation approfondie en transformation
              alimentaire et en fabrication de produits cosmétiques.
              <br />
              <br />
              Les apprenant développent une expertise polyvalente en phase avec
              les besoins du milieu productif.
              <br />
              Ils produisent divers produits agroalimentaires et cosmétiques,
              ils utilisent des techniques de conservation telles que la
              réfrigération, la congélation, la déshydratation, et
              l'lyophilisation. La formation met également l'accent sur les
              bonnes pratiques d'hygiène et de sécurité, et les bonnes pratiques
              de production.
            </p>
          </div>
        </div>

        {/* Partners Section*/}
        <div className="w-full bg-slate-100 py-8 flex justify-around items-center">
          <img
            className="h-[110px] object-contain"
            alt="Partner 2"
            src="/unnamed.png"
          />
          <img
            className="h-[100px] object-contain"
            alt="Partner 3"
            src="/la-delegation-de-lunion-europeenne-ue-recrute-pour-ces-2-postes-.png"
          />
          <img
            className="h-[110px] object-contain"
            alt="Partner 1"
            src="/images1.png"
          />
        </div>

        {/* Footer */}
        <footer>
          <div className="bg-[#1a3a76] py-2 flex justify-center flex-col">
            <img
              className="h-[110px] object-contain "
              alt="Logo LPS"
              src="/logo-lps-1.png"
            />
            <p className="flex justify-center mt-2 text-lg text-white font-light italic">
              Lycée Professionnel Sectoriel de Yopougon
            </p>
          </div>

          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.1922645388327!2d-4.085218143285839!3d5.355260974688789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1c185fe363ddb%3A0x871dbe6b6f6ccd8c!2sLyc%C3%A9e%20Professionnel%20Sectoriel%20de%20Yopougon!5e0!3m2!1sfr!2sci!4v1743516672624!5m2!1sfr!2sci"
              width="100%"
              height="350"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            ></iframe>
          </div>

          <div className="bg-[#1a3a76] py-8 gap-2">
            <div className="flex flex-row gap-4 m-4 justify-center">
              {/* Contact Information */}
              <div className="">
                <h3 className="font-medium text-[#e2df73] text-xl mb-4">
                  NOUS CONTACTER
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPinIcon className="w-5 h-5 text-[#e2df73] mt-1" />
                    <p className="font-medium text-white text-xm">
                      YOPOUGON BANCO II, <br />
                      CARREFOUR LYCEE
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <MailIcon className="w-5 h-5 text-[#e2df73]" />
                    <p className="font-medium text-white text-xm">
                      infoslps@gmail.com
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <PhoneIcon className="w-5 h-5 text-[#e2df73]" />
                    <p className="font-medium text-white text-xm">
                      0707151163/ 0707862707/
                      <br />
                      0707907235 / 0707720261
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FacebookIcon className="w-5 h-5 text-[#e2df73] " />
                    <p className="font-medium text-white text-xm">
                      LPS YOPOUGON
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className=" w-[150px]">
                <h3 className="font-medium text-[#e2df73] text-xl mb-4">
                  NAVIGATION
                </h3>
                <ul className="space-y-2">
                  {footerNavItems.map((item, index) => (
                    <li key={index} className="pl-4">
                      <a
                        href="#"
                        className="font-medium text-white text-xm hover:text-[#e2df73] transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Useful Links and School Info */}

              <div className="">
                <h3 className="font-medium text-[#e2df73] text-xl mb-4">
                  LIENS UTILES
                </h3>
                <ul className="space-y-2 ">
                  <a
                    href=""
                    className="font-medium text-white text-xl hover:text-[#e2df73] transition-colors cursor-pointer"
                  >
                    Sites Internet du METFPA
                  </a>
                  <br />
                  <a
                    href=""
                    className="font-medium text-white text-xl hover:text-[#e2df73] transition-colors cursor-pointer"
                  >
                    formation-professionnelle.gouv.ci
                  </a>
                  <br />
                  <a
                    href=""
                    className="font-medium text-white text-xl hover:text-[#e2df73] transition-colors cursor-pointer"
                  >
                    dexcci.net
                  </a>
                  <br />
                  <a
                    href=""
                    className="font-medium text-white text-xl hover:text-[#e2df73] transition-colors cursor-pointer"
                  >
                    decobci.net
                  </a>
                  <br />
                  <a
                    href=""
                    className="font-medium text-white text-xl hover:text-[#e2df73] transition-colors cursor-pointer"
                  >
                    ersys-ci.net
                  </a>
                </ul>
              </div>
              <div className=" w-[450px] pl-4">
                <h3 className="flex font-medium text-[#e2df73] text-xl mb-4  items-center ">
                  LE LYCEE
                </h3>
                <div className="flex flex-row gap-6 pb-6 m-2 ">
                  <p className=" h-60 w-1/2 font-medium text-white text-xm leading-relaxed">
                    1 bloc administratif <br />
                    3 bâtiments de 9 salles de classe <br />
                    1 bailment de 4 salles spécialisées <br />
                    1 bâtiment de 6 laboratoires <br />
                    1 bâtiment halle agro industrie <br />
                  </p>
                  <p className="h-60 w-1/2 font-medium text-white text-xm leading-relaxed">
                    1 salle d'exposition <br />
                    1 bâtiment cantine <br />
                    3 terrains de sport <br />
                    1 espace vert d'environ 2,5 hectares <br />
                    1 parking 25 véhicules <br />
                    1 clôture de 800 mètres <br />
                    1 bâtiment halle maintenance industrielle <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center text-white text-xs mt-4 border-t border-gray-700 pt-4">
              © {new Date().getFullYear()} Lycée Professionnel Sectoriel de
              Yopougon - Tous droits réservés
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
