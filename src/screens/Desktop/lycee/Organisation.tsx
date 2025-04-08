// import {
//     FacebookIcon,
//     MailIcon,
//     MapPinIcon,
//     PhoneIcon,
//     YoutubeIcon,
//   } from "lucide-react";
//   import { Card, CardContent } from "../../../components/ui/card";
//   import CustomNavigationMenu from "../../../components/ui/navigation-menu";
  
//   export const Organisation = (): JSX.Element => {
//     // Navigation menu items - même que dans le fichier Desktop
//     const navItems = [
//       {
//         label: "LE LYCEE",
//         hasDropdown: true,
//         submenu: [
//           "Présentation",
//           "Mot du Directeur",
//           "Organisation",
//           "Vie Scolaire",
//         ],
//       },
//       {
//         label: "FORMATION",
//         hasDropdown: true,
//         submenu: ["Formation Initiale", "Formation Continue"],
//       },
//       { label: "ACTUALITES", hasDropdown: false },
//       {
//         label: "SERVICES",
//         hasDropdown: true,
//         submenu: ["Nos Produits", "Nos Materiels", "Bibliothèque"],
//       },
//       {
//         label: "INFOS",
//         hasDropdown: true,
//         submenu: [
//           "Admission et Inscription",
//           "Réglement Interieur",
//           "Enregistrement FDFP",
//           "Galerie",
//           "Intranet",
//         ],
//       },
//     ];
  
//     // Structure organisationnelle
//     const departments = [
//       {
//         name: "Direction",
//         positions: [
//           "Directeur",
//           "Secrétaire de Direction",
//           "Responsable Administratif et Financier",
//           "Responsable de la Vie Scolaire",
//         ],
//         description: "L'équipe de direction pilote l'établissement et définit ses orientations stratégiques en accord avec les directives du Ministère de l'Enseignement Technique, de la Formation Professionnelle et de l'Apprentissage.",
//       },
//       {
//         name: "Département Pédagogique",
//         positions: [
//           "Chef de Département Agro-Industrie",
//           "Chef de Département Maintenance Industrielle",
//           "Coordinateurs Pédagogiques",
//           "Formateurs et Enseignants",
//         ],
//         description: "Ce département assure la qualité des enseignements, l'élaboration et la mise en œuvre des programmes de formation, ainsi que le suivi des apprenants.",
//       },
//       {
//         name: "Services Administratifs",
//         positions: [
//           "Service de Scolarité",
//           "Service Comptable",
//           "Service Logistique",
//           "Service Informatique",
//         ],
//         description: "Les services administratifs garantissent le bon fonctionnement quotidien de l'établissement, depuis la gestion des inscriptions jusqu'au suivi budgétaire.",
//       },
//       {
//         name: "Cellule d'Appui",
//         positions: [
//           "Service Orientation et Insertion Professionnelle",
//           "Bibliothèque et Centre de Documentation",
//           "Infirmerie",
//           "Service de Sécurité",
//         ],
//         description: "Ces services apportent un soutien essentiel aux apprenants et au personnel dans divers domaines liés à la vie quotidienne au sein de l'établissement.",
//       },
//     ];
  
//     // Conseil d'établissement
//     const councilMembers = [
//       "Le Directeur du LPS, Président",
//       "Un représentant du Ministère de l'Enseignement Technique",
//       "Deux représentants du personnel enseignant",
//       "Un représentant du personnel administratif",
//       "Deux représentants des parents d'élèves",
//       "Un représentant des élèves",
//       "Deux représentants du secteur productif",
//     ];
  
//     // Footer navigation items
//     const footerNavItems = [
//       "LE LYCEE",
//       "FORMATION",
//       "ACTUALITES",
//       "SERVICES",
//       "INFOS",
//     ];
  
//     return (
//       <div className="bg-white flex flex-row justify-center w-full">
//         <div className="bg-white overflow-hidden w-full max-w-[1440px] relative">
//           {/* Top Bar */}
//           <div className="w-full h-16 flex">
//             <div className="w-1/3 h-full bg-[#e2df73] flex items-center pl-8">
//               <div className="flex items-center gap-3 ml-8">
//                 <span className="font-normal text-white text-xm">
//                   NOUS SUIVRE :
//                 </span>
//                 <div className="w-6 h-6 bg-[#1a3a76] rounded-full flex items-center justify-center">
//                   <FacebookIcon className="w-4 h-4 text-white" />
//                 </div>
//                 <div className="w-6 h-6 bg-[#1a3a76] rounded-full flex items-center justify-center">
//                   <YoutubeIcon className="w-4 h-4 text-white" />
//                 </div>
//               </div>
//             </div>
//             <div className="flex-1 h-full bg-[#1a3a76] flex items-center justify-center pr-8 ">
//               <div className="flex items-center gap-6 text-white text-xs ml-4 ">
//                 <div className="flex items-center gap-2">
//                   <MapPinIcon className="w-6 h-6 text-[#e2df73]" />
//                   <span className="font-normal ">
//                     YOPOUGON BANCO II, CARREFOUR LYCEE
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <MailIcon className="w-6 h-6 text-[#e2df73]" />
//                   <span className="font-normal">infoslps@gmail.com</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <PhoneIcon className="w-6 h-6 text-[#e2df73]" />
//                   <span className="font-normal">0707151163/ 0707862707</span>
//                 </div>
//               </div>
//             </div>
//           </div>
  
//           {/* Navigation */}
//           <div className="w-full py-4 bg-white flex items-center justify-between px-8 shadow-sm">
//             <a href="/">
//               <img
//                 className="w-12 h-12 object-contain ml-20 cursor-pointer"
//                 alt="Logo LPS"
//                 src="/logo-lps-1.png"
//               />
//             </a>
//             <CustomNavigationMenu navItems={navItems} />
//           </div>
  
//           {/* Page Title Banner */}
//           <div className="w-full h-64 relative">
//             <img
//               className="w-full h-full object-cover"
//               alt="Organisation"
//               src="/organisation-banner.jpg"
//             />
//             <div className="absolute inset-0 bg-black opacity-50"></div>
//             <div className="absolute inset-0 flex items-center justify-center">
//               <h1 className="text-white text-5xl font-bold">ORGANISATION</h1>
//             </div>
//           </div>
  
//           {/* Breadcrumb */}
//           <div className="bg-gray-100 py-3 px-8">
//             <div className="flex items-center text-[#1a3a76]">
//               <a href="/" className="hover:text-[#e2df73]">Accueil</a>
//               <span className="mx-2">/</span>
//               <a href="/le-lycee" className="hover:text-[#e2df73]">Le Lycée</a>
//               <span className="mx-2">/</span>
//               <span className="font-medium">Organisation</span>
//             </div>
//           </div>
  
//           {/* Introduction Section */}
//           <div className="w-full py-12 px-8">
//             <h2 className="font-semibold text-[#1a3a76] text-4xl mb-6">
//               STRUCTURE ORGANISATIONNELLE
//             </h2>
//             <Card className="bg-[#1a3a76] rounded-lg mb-8">
//               <CardContent className="p-6">
//                 <p className="font-normal text-white text-lg leading-relaxed">
//                   Le Lycée Professionnel Sectoriel (LPS) de Yopougon est structuré pour offrir un environnement d'apprentissage optimal et une gestion efficace des ressources. Notre organisation est conçue pour répondre aux besoins spécifiques d'un établissement d'enseignement technique et professionnel moderne, tout en assurant une collaboration étroite avec le secteur productif.
//                 </p>
//               </CardContent>
//             </Card>
  
//             {/* Organigramme */}
//             <div className="mb-12">
//               <h3 className="font-semibold text-[#1a3a76] text-3xl mb-6">
//                 ORGANIGRAMME
//               </h3>
//               <div className="flex justify-center mb-8">
//                 <img
//                   className="w-full max-w-3xl h-auto rounded-lg shadow-lg"
//                   alt="Organigramme du LPS"
//                   src="/organigramme.jpg"
//                 />
//               </div>
//             </div>
  
//             {/* Departments Section */}
//             <div className="mb-12">
//               <h3 className="font-semibold text-[#1a3a76] text-3xl mb-6">
//                 DÉPARTEMENTS ET SERVICES
//               </h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {departments.map((department, index) => (
//                   <Card key={index} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//                     <CardContent className="p-6">
//                       <div className="bg-[#1a3a76] text-white p-3 rounded-t-lg mb-4">
//                         <h4 className="font-semibold text-xl">{department.name}</h4>
//                       </div>
//                       <p className="text-gray-700 mb-4">{department.description}</p>
//                       <ul className="list-disc pl-5 text-[#1a3a76]">
//                         {department.positions.map((position, idx) => (
//                           <li key={idx} className="mb-1">{position}</li>
//                         ))}
//                       </ul>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>
  
//             {/* Conseil d'établissement */}
//             <div className="mb-12">
//               <h3 className="font-semibold text-[#1a3a76] text-3xl mb-6">
//                 CONSEIL D'ÉTABLISSEMENT
//               </h3>
//               <Card className="bg-white border border-gray-200 rounded-lg shadow-md">
//                 <CardContent className="p-6">
//                   <p className="text-gray-700 mb-4">
//                     Le Conseil d'Établissement est l'organe décisionnel qui définit les orientations stratégiques du LPS Yopougon. Il se réunit trimestriellement pour examiner les questions relatives au fonctionnement pédagogique et administratif du lycée.
//                   </p>
//                   <h4 className="font-semibold text-[#1a3a76] text-xl mb-3">Composition :</h4>
//                   <ul className="list-disc pl-5 text-gray-700">
//                     {councilMembers.map((member, index) => (
//                       <li key={index} className="mb-1">{member}</li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             </div>
  
//             {/* Partnerships Section */}
//             <div className="mb-12">
//               <h3 className="font-semibold text-[#1a3a76] text-3xl mb-6">
//                 PARTENARIATS
//               </h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <Card className="bg-white border border-gray-200 rounded-lg shadow-md">
//                   <CardContent className="p-6">
//                     <div className="bg-[#1a3a76] text-white p-3 rounded-t-lg mb-4">
//                       <h4 className="font-semibold text-xl">Partenariats Institutionnels</h4>
//                     </div>
//                     <ul className="list-disc pl-5 text-gray-700">
//                       <li className="mb-1">Ministère de l'Enseignement Technique, de la Formation Professionnelle et de l'Apprentissage</li>
//                       <li className="mb-1">Fonds de Développement de la Formation Professionnelle (FDFP)</li>
//                       <li className="mb-1">Union Européenne</li>
//                       <li className="mb-1">Agence Française de Développement (AFD)</li>
//                     </ul>
//                   </CardContent>
//                 </Card>
//                 <Card className="bg-white border border-gray-200 rounded-lg shadow-md">
//                   <CardContent className="p-6">
//                     <div className="bg-[#1a3a76] text-white p-3 rounded-t-lg mb-4">
//                       <h4 className="font-semibold text-xl">Partenariats Professionnels</h4>
//                     </div>
//                     <ul className="list-disc pl-5 text-gray-700">
//                       <li className="mb-1">Entreprises du secteur agro-industriel</li>
//                       <li className="mb-1">Industries de maintenance et de production</li>
//                       <li className="mb-1">Association des Industriels de Côte d'Ivoire</li>
//                       <li className="mb-1">Chambre de Commerce et d'Industrie de Côte d'Ivoire</li>
//                     </ul>
//                   </CardContent>
//                 </Card>
//               </div>
//             </div>
  
//             {/* Call to Action */}
//             <div className="bg-gray-50 p-8 rounded-lg text-center">
//               <h3 className="font-semibold text-[#1a3a76] text-2xl mb-4">
//                 VOUS SOUHAITEZ EN SAVOIR PLUS ?
//               </h3>
//               <p className="text-gray-700 mb-6">
//                 N'hésitez pas à nous contacter pour obtenir des informations supplémentaires sur notre organisation ou à consulter les autres rubriques de notre site.
//               </p>
//               <div className="flex justify-center gap-4">
//                 <div
//                   onClick={() => (window.location.href = "/contact")}
//                   className="px-6 py-3 rounded-sm bg-[#1a3a76] flex items-center justify-center cursor-pointer hover:bg-[#e2df73] text-white hover:text-[#1a3a76] text-lg transition-colors duration-300"
//                 >
//                   <button className="font-normal">NOUS CONTACTER</button>
//                 </div>
//                 <div
//                   onClick={() => (window.location.href = "/le-lycee/vie-scolaire")}
//                   className="px-6 py-3 rounded-sm bg-[#e2df73] flex items-center justify-center cursor-pointer hover:bg-[#1a3a76] text-[#1a3a76] hover:text-white text-lg transition-colors duration-300"
//                 >
//                   <button className="font-normal">VIE SCOLAIRE</button>
//                 </div>
//               </div>
//             </div>
//           </div>
  
//           {/* Partners Section*/}
//           <div className="w-full bg-slate-100 py-8 flex justify-around items-center">
//             <img
//               className="h-[110px] object-contain"
//               alt="Partner 2"
//               src="/unnamed.png"
//             />
//             <img
//               className="h-[100px] object-contain"
//               alt="Partner 3"
//               src="/la-delegation-de-lunion-europeenne-ue-recrute-pour-ces-2-postes-.png"
//             />
//             <img
//               className="h-[110px] object-contain"
//               alt="Partner 1"
//               src="/images1.png"
//             />
//           </div>
  
//           {/* Footer */}
//           <footer>
//             <div className="bg-[#1a3a76] py-2 flex justify-center flex-col">
//               <img
//                 className="h-[110px] object-contain "
//                 alt="Logo LPS"
//                 src="/logo-lps-1.png"
//               />
//               <p className="flex justify-center mt-2 text-lg text-white font-light italic">
//                 Lycée Professionnel Sectoriel de Yopougon
//               </p>
//             </div>
  
//             <div className="w-full">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.1922645388327!2d-4.085218143285839!3d5.355260974688789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1c185fe363ddb%3A0x871dbe6b6f6ccd8c!2sLyc%C3%A9e%20Professionnel%20Sectoriel%20de%20Yopougon!5e0!3m2!1sfr!2sci!4v1743516672624!5m2!1sfr!2sci"
//                 width="100%"
//                 height="350"
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 className="border-0"
//               ></iframe>
//             </div>
  
//             <div className="bg-[#1a3a76] py-8 gap-2">
//               <div className="flex flex-row gap-4 m-4 justify-center">
//                 {/* Contact Information */}
//                 <div className="">
//                   <h3 className="font-medium text-[#e2df73] text-xl mb-4">
//                     NOUS CONTACTER
//                   </h3>
//                   <div className="space-y-4 ">
//                     <div className="flex items-start gap-3 text-white text-xm ">
//                       <MapPinIcon className="w-5 h-5 text-[#e2df73] mt-1 " />
//                       <p className="font-medium  ">
//                         YOPOUGON BANCO II, <br />
//                         CARREFOUR LYCEE
//                       </p>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <MailIcon className="w-5 h-5 text-[#e2df73]" />
//                       <p className="font-medium text-white text-xm">
//                         infoslps@gmail.com
//                       </p>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <PhoneIcon className="w-5 h-5 text-[#e2df73]" />
//                       <p className="font-medium text-white text-xm">
//                         0707151163/ 0707862707/
//                         <br />
//                         0707907235 / 0707720261
//                       </p>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <FacebookIcon className="w-5 h-5 text-[#e2df73] " />
//                       <p className="font-medium text-white text-xm">
//                         LPS YOPOUGON
//                       </p>
//                     </div>
//                   </div>
//                 </div>
  
//                 {/* Navigation */}
//                 <div className=" w-[150px]">
//                   <h3 className="font-medium text-[#e2df73] text-xl mb-4">
//                     NAVIGATION
//                   </h3>
//                   <ul className="space-y-2">
//                     {footerNavItems.map((item, index) => (
//                       <li key={index} className="pl-4">
//                         <a
//                           href="#"
//                           className="font-medium text-white text-xm hover:text-[#e2df73] transition-colors"
//                         >
//                           {item}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
  
//                 {/* Useful Links and School Info */}
  
//                 <div className="">
//                   <h3 className="font-medium text-[#e2df73] text-xl mb-4">
//                     LIENS UTILES
//                   </h3>
//                   <ul className="space-y-2 ">
//                     <a
//                       href=""
//                       className="font-medium text-white text-xl hover:text-[#e2df73] transition-colors cursor-pointer"
//                     >
//                       Sites Internet du METFPA
//                     </a>
//                     <br />
//                     <a
//                       href=""
//                       className="font-medium text-white text-xl hover:text-[#e2df73] transition-colors cursor-pointer"
//                     >
//                       formation-professionnelle.gouv.ci
//                     </a>
//                     <br />
//                     <a
//                       href=""
//                       className="font-medium text-white text-xl hover:text-[#e2df73] transition-colors cursor-pointer"
//                     >
//                       dexcci.net
//                     </a>
//                     <br />
//                     <a
//                       href=""
//                       className="font-medium text-white text-xl hover:text-[#e2df73] transition-colors cursor-pointer"
//                     >
//                       decobci.net
//                     </a>
//                     <br />
//                     <a
//                       href=""
//                       className="font-medium text-white text-xl hover:text-[#e2df73] transition-colors cursor-pointer"
//                     >
//                       ersys-ci.net
//                     </a>
//                   </ul>
//                 </div>
//                 <div className=" w-[450px] pl-4">
//                   <h3 className="flex font-medium text-[#e2df73] text-xl mb-4  items-center ">
//                     LE LYCEE
//                   </h3>
//                   <div className="flex flex-row gap-6 pb-6 m-2  ">
//                     <p className=" h-60 w-1/2 font-medium text-white text-xm leading-relaxed ">
//                       1 bloc administratif <br />
//                       3 bâtiments de 9 salles de classe <br />
//                       1 bailment de 4 salles spécialisées <br />
//                       1 bâtiment de 6 laboratoires <br />
//                       1 bâtiment halle agro industrie <br />
//                     </p>
//                     <p className="h-60 w-1/2 font-medium text-white text-xm leading-relaxed">
//                       1 salle d'exposition <br />
//                       1 bâtiment cantine <br />
//                       3 terrains de sport <br />
//                       1 espace vert d'environ 2,5 hectares <br />
//                       1 parking 25 véhicules <br />
//                       1 clôture de 800 mètres <br />
//                       1 bâtiment halle maintenance industrielle <br />
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="text-center text-white text-xs mt-4 border-t border-gray-700 pt-4">
//                 © {new Date().getFullYear()} Lycée Professionnel Sectoriel de
//                 Yopougon - Tous droits réservés
//               </div>
//             </div>
//           </footer>
//         </div>
//       </div>
//     );
//   };
  
//   export default Organisation;