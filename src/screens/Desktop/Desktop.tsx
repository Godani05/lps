import {
  FacebookIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../components/ui/navigation-menu";

export const Desktop = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
    {
      label: "LE LYCEE",
      hasDropdown: true,
      submenu: ["A propos", "Mot du Proviseur", "Organisation", "Vie Scolaire"],
    },

    { label: "FORMATION", hasDropdown: false },
    { label: "ACTUALITES", hasDropdown: false },

    {
      label: "SERVICES",
      hasDropdown: true,
      submenu: ["Nos Produits", "Nos Materiels"],
    },
    {
      label: "INFOS",
      hasDropdown: true,
      submenu: ["Admission et Inscription", "Reglement Interieur", "Intranet"],
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
      image: "/mi.png",
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
      <div className="bg-white overflow-hidden w-[1440px] relative">
        {/* Top Bar */}
        <div className="w-full h-[80px] flex">
          <div className="w-[456px] h-full bg-[#e2df73] flex items-center pl-[72px]">
            <div className="flex items-center gap-4">
              <span className="font-normal text-white text-sm">
                NOUS SUIVRE :
              </span>
              <div className="w-[25px] h-[25px] bg-[#1a3a76] rounded-full flex items-center justify-center">
                <FacebookIcon className="w-5 h-5 text-white" />
              </div>
              <div className="w-[25px] h-[25px] bg-[#1a3a76] rounded-full flex items-center justify-center">
                <YoutubeIcon className="w-[18px] h-[18px] text-white" />
              </div>
            </div>
          </div>
          <div className="flex-1 h-full bg-[#1a3a76] flex items-center justify-end pr-[100px]">
            <div className="flex items-center gap-8 text-white">
              <div className="flex items-center gap-2 ml-3">
                <MapPinIcon className="w-6 h-6 text-[#e2df73]" />
                <span className="font-normal text-xs w-[230px] ">
                  YOPOUGON BANCO II, CARREFOUR LYCEE
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon className="w-6 h-6 text-[#e2df73]" />
                <span className="font-normal text-xm">infoslps@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-6 h-6 text-[#e2df73]" />
                <span className="font-normal text-xm w-[200px] ">
                  0707010201 / 0100020405
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="w-full h-[px] mt-[10px] bg-white flex items-center justify-center">
          <div className="flex items-center">
            <img
              className="w-[45px] h-[50px] mr-[373px] mb-4"
              alt="Logo LPS"
              src="/logo-lps-1.png"
            />
            <NavigationMenu>
              <NavigationMenuList className="flex gap-8">
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index} className="relative">
                    {item.hasDropdown ? (
                      <NavigationMenuTrigger className="font-bold text-[#1a3a76] text-[13px] bg-transparent hover:bg-transparent focus:text-[#e2df73]  hover:text-[#e2df73]">
                        {item.label}
                        {/* <ChevronDownIcon className="w-5 h-5 ml-2" /> */}
                      </NavigationMenuTrigger>
                    ) : (
                      <span className="font-bold text-[#1a3a76] text-[13px] cursor-pointer bg-transparent hover:bg-transparent focus:text-[#e2df73]  hover:text-[#e2df73]">
                        {item.label}
                      </span>
                    )}
                    {item.hasDropdown && (
                      <NavigationMenuContent>
                        <div className="p-4 w-[250px] bg-white rounded-md shadow-lg">
                          <ul className="space-y-2">
                            {item.submenu?.map((subItem, subIndex) => (
                              <li
                                key={subIndex}
                                className="px-2 py-1.5 text-[#1a3a76] text-sm hover:bg-[#e2df73] hover:text-white rounded cursor-pointer transition-colors"
                              >
                                {subItem}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </NavigationMenuContent>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Hero Section */}
        <div className="w-full h-[906px] relative">
          <img
            className="w-full h-full object-cover"
            alt="Campus"
            src="/rectangle-5.png"
          />
          <div className="absolute bottom-[45px] left-[73px] w-[248px] h-[80px] bg-[#1a3a76] flex items-center justify-center cursor-pointer hover:bg-[#e2df73]">
            <button className="font-normal text-white text-2xl">
              NOUS DECOUVRIR
            </button>
          </div>
        </div>

        {/* Qui Sommes Nous Section */}
        <div className="w-full h-90 px-10 mt-[10px] border">
          <div className="flex items-center ">
            <img
              className="w-[502px] h-[561px] object-cover rounded-lg mt-[50px] absolute"
              alt="Campus"
              src="/129145710-147881587116174-1814296285761364023-n.png"
            />

            <div className="flex-col mt-24 ml-[440px]">
              <h2 className="font-semibold text-[#1a3a76] text-[65px] text-center mb-[20px] ml-[30px] ">
                QUI SOMMES NOUS ?
              </h2>
              <Card className="bg-[#1a3a76] rounded-[54px] w-[770px] ">
                <CardContent className="p-8">
                  <p className="font-normal text-white text-[28px] leading-normal ml-[45px]">
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
        <div className="w-full px-10 mt-[25px] border">
          <h2 className="font-semibold text-[#1a3a76] text-[70px] mb-[20px]">
            NOTRE MISSION
          </h2>
          <Card className="bg-[#1a3a76] rounded-[54px] w-full">
            <CardContent className="p-8">
              <p className="font-normal text-white text-[32px] mb-8">
                La mission du LPS Yopougon, dans le cadre de la formation
                professionnelle, est de,
              </p>
              <div className="space-y-8">
                {missionItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <img
                      className="w-[65px] h-16 flex-shrink-0"
                      alt="Target"
                      src="/target.svg"
                    />
                    <p className="font-normal text-white text-[28px]">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Notre Vision Section */}
        <div className="w-full px-10 mt-[25px]">
          <h2 className="font-semibold text-[#1a3a76] text-[70px] mb-[20px]">
            NOTRE VISION
          </h2>
          <p className="font-normal text-[#1a3a76] text-[32px] mb-6 max-w-[1020px]">
            À l'horizon 2028, le LPS YOPOUGON se positionne comme un pôle
            d'excellence en Agro-Industrie et en Maintenance Industrielle :
          </p>
          <div className="space-y-8">
            {visionItems.map((item, index) => (
              <Card key={index} className="bg-[#1a3a76] rounded-[15px] w-full">
                <CardContent className="p-6 flex items-center gap-8">
                  <img
                    className="w-[65px] h-16 flex-shrink-0"
                    alt="Eye"
                    src="/eye.svg"
                  />
                  <p className="font-normal text-white text-[32px]">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Nos Filières Section */}
        <div className="w-full px-10 mt-[40px]">
          <h2 className="font-semibold text-[#1a3a76] text-[70px] mb-[20px]">
            NOS FILIERES
          </h2>
          <div className="flex justify-between gap-16">
            {filieres.map((filiere, index) => (
              <div key={index} className="flex flex-col">
                <div className="relative">
                  <img
                    className="h-[632px] object-cover rounded-lg w-90"
                    alt={filiere.name}
                    src={filiere.image}
                  />
                  <div className="absolute top-[26px] -left-8 ">
                    <div className="bg-[#e2df73] rounded-[15px] px-5 py-3 flex items-center">
                      <img
                        className="w-6 h-6 mr-2"
                        alt="Bookmark"
                        src="/bookmark.svg"
                      />
                      <span className="font-semibold text-white text-[15px]">
                        {filiere.name}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="font-normal text-[#1a3a76] text-2xl mt-8 max-w-[720px] ">
                  {filiere.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Nos Produits Section */}
        <div className="w-full px-10 mt-[40px]">
          <h2 className="font-semibold text-[#1a3a76] text-[70px] mb-[20px]">
            NOS PRODUITS
          </h2>
          <div className="w-full">
            <img
              className="w-full h-[390px] object-cover"
              alt="Products"
              src="/rectangle-4.png"
            />
            <p className="font-normal text-[#1a3a76] text-[32px] mt-8">
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

        {/* Partners Section */}
        <div className="w-full bg-[#eee8d5] mt-[100px] py-6 flex justify-around items-center">
          <img
            className="h-[251px] object-contain"
            alt="Partner 1"
            src="/unnamed.png"
          />
          <img
            className="h-[243px] object-contain"
            alt="Partner 2"
            src="/images1.png"
          />
          <img
            className="h-[243px] object-contain"
            alt="Partner 3"
            src="/la-delegation-de-lunion-europeenne-ue-recrute-pour-ces-2-postes-.png"
          />
        </div>

        {/* Footer */}
        <footer className="mt-[100px]">
          <div className="bg-[#1a3a76] py-8 flex justify-center">
            <img
              className="h-[207px] object-contain"
              alt="Logo LPS"
              src="/logo-lps-1.png"
            />
          </div>

          <div className="w-full">
            {/* <img
              className="w-full h-[838px] object-cover"
              alt="Campus Map"
              src="/rectangle-19.png"
            /> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.1922645388327!2d-4.085218143285839!3d5.355260974688789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1c185fe363ddb%3A0x871dbe6b6f6ccd8c!2sLyc%C3%A9e%20Professionnel%20Sectoriel%20de%20Yopougon!5e0!3m2!1sfr!2sci!4v1743516672624!5m2!1sfr!2sci"
              width="1262"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="bg-[#1a3a76] py-16">
            <div className="container mx-auto grid grid-cols-3 gap-6">
              {/* Contact Information */}
              <div>
                <h3 className="font-medium text-[#e2df73] text-[32px] mb-8">
                  NOUS CONTACTER
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPinIcon className="w-[30px] h-[27px] text-[#e2df73]" />
                    <p className="font-medium text-white text-[32px]">
                      YOPOUGON BANCO II, <br />
                      CARREFOUR LYCEE
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <MailIcon className="w-[30px] h-[27px] text-[#e2df73]" />
                    <p className="font-medium text-white text-[32px]">
                      infoslps@gmail.com
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <PhoneIcon className="w-[30px] h-[27px] text-[#e2df73]" />
                    <p className="font-medium text-white text-[28px]">
                      0707010201 / 0100020405
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <FacebookIcon className="w-8 h-8 text-[#e2df73]" />
                    <p className="font-medium text-white text-[32px]">
                      LPS YOPOUGON
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div>
                <h3 className="font-medium text-[#e2df73] text-[32px] mb-8">
                  NAVIGATION
                </h3>
                <ul className="space-y-4">
                  {footerNavItems.map((item, index) => (
                    <li key={index} className="pl-8">
                      <a
                        href="#"
                        className="font-medium text-white text-[32px]"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Useful Links and School Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-[#e2df73] text-[28px] mb-8 mr-50">
                    LIENS UTILES
                  </h3>
                  <ul className="space-y-6">
                    <li className="font-medium text-white text-[32px]">
                      lien1
                    </li>
                    <li className="font-medium text-white text-[32px]">
                      lien2
                    </li>
                    <li className="font-medium text-white text-[32px]">
                      lien3
                    </li>
                    <li className="font-medium text-white text-[32px]">
                      lien4
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-[#e2df73] text-[32px] mb-8">
                    LE LYCEE
                  </h3>
                  <p className="font-medium text-white text-[20px]">
                    1 bloc administratif <br />3 bâtiments de 9 salles de classe{" "}
                    <br />1 bailment de 4 salles spécialisées <br />1 bâtiment
                    de 6 laboratoires <br />1 bâtiment halle agro industrie{" "}
                    <br />1 bâtiment halle maintenance industrielle <br />1
                    salle d'exposition <br />1 bâtiment cantine <br />3 terrains
                    de sport (basket-ball, hand-ball, volley-ball) <br />1
                    espace vert d'environ 2,5 hectares <br />1 parking 25
                    véhicules <br />1 clôture de 800 mètres
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
