// import {
//   FacebookIcon,
//   MailIcon,
//   MapPinIcon,
//   PhoneIcon,
//   YoutubeIcon,
// } from "lucide-react";
// import React from "react";
// import { Card, CardContent } from "../../components/ui/card";
// import CustomNavigationMenu from "../../components/ui/navigation-menu";

// export const Organisation = (): JSX.Element => {
//   // Navigation menu items
//   const navItems = [
//     {
//       label: "LE LYCEE",
//       hasDropdown: true,
//       submenu: [
//         "Présentation",
//         "Mot du Proviseur",
//         "Organisation",
//         "Vie Scolaire",
//       ],
//     },
//     {
//       label: "FORMATION",
//       hasDropdown: true,
//       submenu: ["Formation Initiale", "Formation Continue"],
//     },
//     { label: "ACTUALITES", hasDropdown: false },
//     {
//       label: "SERVICES",
//       hasDropdown: true,
//       submenu: ["Nos Produits", "Nos Materiels", "Bibliothèque"],
//     },
//     {
//       label: "INFOS",
//       hasDropdown: true,
//       submenu: [
//         "Admission et Inscription",
//         "Réglement Interieur",
//         "Enregistrement FDFP",
//         "Galerie",
//         "Intranet",
//       ],
//     },
//   ];

//   // Organigramme structure data
//   const departements = [
//     {
//       title: "Direction",
//       responsable: "Proviseur",
//       description: "Direction et supervision générale de l'établissement",
//       missions: [
//         "Définir la stratégie globale de l'établissement",
//         "Superviser l'ensemble des activités pédagogiques et administratives",
//         "Assurer la liaison avec les autorités ministérielles",
//         "Représenter l'établissement auprès des partenaires"
//       ]
//     },
//     {
//       title: "Direction des Études",
//       responsable: "Directeur des Études",
//       description: "Coordination des activités pédagogiques et académiques",
//       missions: [
//         "Élaborer et suivre les programmes pédagogiques",
//         "Coordonner les emplois du temps et les évaluations",
//         "Superviser le travail des enseignants",
//         "Analyser les résultats scolaires et proposer des améliorations"
//       ]
//     },
//     {
//       title: "Vie Scolaire",
//       responsable: "Conseiller d'Éducation",
//       description: "Gestion de la discipline et de la vie quotidienne des élèves",
//       missions: [
//         "Assurer le suivi des absences et retards des élèves",
//         "Gérer les questions disciplinaires",
//         "Organiser les activités extra-scolaires",
//         "Accompagner les élèves dans leur parcours"
//       ]
//     },
//     {
//       title: "Département Agro-Industrie",
//       responsable: "Chef de Département",
//       description: "Pilotage de la filière Agro-Industrie",
//       missions: [
//         "Coordonner les enseignements spécifiques à la filière",
//         "Développer les partenariats avec le secteur agro-industriel",
//         "Superviser les travaux pratiques et les ateliers",
//         "Assurer la veille technologique dans le domaine"
//       ]
//     },
//     {
//       title: "Département Maintenance Industrielle",
//       responsable: "Chef de Département",
//       description: "Pilotage de la filière Maintenance Industrielle",
//       missions: [
//         "Coordonner les enseignements spécifiques à la filière",
//         "Développer les partenariats avec le secteur industriel",
//         "Superviser les travaux pratiques en atelier",
//         "Assurer l'innovation technique et technologique"
//       ]
//     },
//     {
//       title: "Service Administratif et Financier",
//       responsable: "Responsable Administratif",
//       description: "Gestion administrative, financière et des ressources humaines",
//       missions: [
//         "Gérer le budget et les ressources financières",
//         "Assurer la gestion des ressources humaines",
//         "Superviser la maintenance des infrastructures",
//         "Coordonner les aspects logistiques"
//       ]
//     }
//   ];

//   // Conseil d'établissement
//   const conseilEtablissement = [
//     "Le Proviseur (Président)",
//     "Le Directeur des Études",
//     "Le Responsable Administratif et Financier",
//     "Les Chefs de Départements",
//     "Le Conseiller d'Éducation",
//     "Représentants des enseignants",
//     "Représentants des élèves",
//     "Représentants des parents d'élèves",
//     "Représentants du secteur productif"
//   ];

//   // Footer navigation items
//   const footerNavItems = [
//     "LE LYCEE",
//     "FORMATION",
//     "ACTUALITES",
//     "SERVICES",
//     "INFOS",
//   ];

//   return (
//     <div className="bg-white flex flex-row justify-center w-full">
//       <div className="bg-white overflow-hidden w-full max-w-[1440px] relative">
//         {/* Top Bar */}
//         <div className="w-full h-16 flex">
//           <div className="w-1/3 h-full bg-[#e2df73] flex items-center pl-8">
//             <div className="flex items-center gap-3 ml-8">
//               <span className="font-normal text-white text-xm">
//                 NOUS SUIVRE :
//               </span>
//               <div className="w-6 h-6 bg-[#1a3a76] rounded-full flex items-center justify-center">
//                 <FacebookIcon className="w-4 h-4 text-white" />
//               </div>
//               <div className="w-6 h-6 bg-[#1a3a76] rounded-full flex items-center justify-center">
//                 <YoutubeIcon className="w-4 h-4 text-white" />
//               </div>
//             </div>
//           </div>
//           <div className="flex-1 h-full bg-[#1a3a76] flex items-center justify-center pr-8">
//             <div className="flex items-center gap-6 text-white text-xs ml-4">
//               <div className="flex items-center gap-2">
//                 <MapPinIcon className="w-6 h-6 text-[#e2df73]" />
//                 <span className="font-normal">
//                   YOPOUGON BANCO II, CARREFOUR LYCEE
//                 </span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <MailIcon className="w-6 h-6 text-[#e2df73]" />
//                 <span className="font-normal">infoslps@gmail.com</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <PhoneIcon className="w-6 h-6 text-[#e2df73]" />
//                 <span className="font-normal">0707151163/ 0707862707</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Navigation */}
//         <div className="w-full py-4 bg-white flex items-center justify-between px-8 shadow-sm">
//           <img
//             className="w-12 h-12 object-contain ml-20"
//             alt="Logo LPS"
//             src="/logo-lps-1.png"
//           />
//           <CustomNavigationMenu navItems={navItems} />
//         </div>

//         {/* Hero Section */}
//         <div className="w-full h-[300px] relative">
//           <img
//             className="w-full h-full object-cover"
//             alt="Organisation LPS"
//             src="/bannière.png"
//           />
//           <div className="absolute inset-0 bg-[#1a3a76] bg-opacity-60 flex items-center justify-center">
//             <h1 className="text-white text-5xl font-bold">ORGANISATION</h1>
//           </div>
//         </div>

//         {/* Organisation Introduction */}
//         <div className="w-full py-12 px-8">
//           <h2 className="font-semibold text-[#1a3a76] text-4xl mb-6">
//             ORGANISATION DU LYCÉE
//           </h2>
//           <Card className="bg-[#1a3a76] rounded-lg w-full">
//             <CardContent className="p-6">
//               <p className="font-normal text-white text-lg leading-relaxed">
//                 Le Lycée Professionnel Sectoriel de Yopougon est doté d'une structure organisationnelle 
//                 cohérente visant à assurer une formation de qualité ainsi qu'une gestion efficace
//                 des ressources humaines, matérielles et pédagogiques. Notre établissement dispose d'une 
//                 équipe de direction expérimentée et de départements spécialisés qui travaillent en 
//                 synergie pour offrir le meilleur environnement d'apprentissage à nos apprenants.
//               </p>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Organigramme Section */}
//         <div className="w-full py-8 px-8 bg-gray-50">
//           <h2 className="font-semibold text-[#1a3a76] text-4xl mb-8">
//             ORGANIGRAMME
//           </h2>
//           <div className="grid grid-cols-2 gap-6">
//             {departements.map((departement, index) => (
//               <Card key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
//                 <div className="bg-[#1a3a76] py-4 px-6">
//                   <h3 className="font-semibold text-white text-xl">{departement.title}</h3>
//                   <p className="text-[#e2df73] text-lg">{departement.responsable}</p>
//                 </div>
//                 <CardContent className="p-6">
//                   <p className="font-normal text-[#1a3a76] text-lg mb-4">{departement.description}</p>
//                   <h4 className="font-semibold text-[#1a3a76] text-lg mb-2">Missions principales:</h4>
//                   <ul className="space-y-2">
//                     {departement.missions.map((mission, mIndex) => (
//                       <li key={mIndex} className="flex items-start gap-2">
//                         <div className="w-2 h-2 rounded-full bg-[#e2df73] mt-2 flex-shrink-0"></div>
//                         <p className="font-normal text-gray-700">{mission}</p>
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>

//         {/* Conseil d'Établissement Section */}
//         <div className="w-full py-12 px-8">
//           <h2 className="font-semibold text-[#1a3a76] text-4xl mb-6">
//             CONSEIL D'ÉTABLISSEMENT
//           </h2>
//           <Card className="bg-white rounded-lg shadow-md overflow-hidden">
//             <div className="bg-[#1a3a76] py-4 px-6">
//               <h3 className="font-semibold text-white text-xl">Composition du Conseil</h3>
//             </div>
//             <CardContent className="p-6">
//               <p className="font-normal text-[#1a3a76] text-lg mb-6">
//                 Le Conseil d'Établissement est l'organe de délibération et de décision du LPS Yopougon. Il se réunit trimestriellement et traite des questions relatives à la vie pédagogique, administrative et financière de l'établissement.
//               </p>
//               <div className="grid grid-cols-2 gap-4">
//                 {conseilEtablissement.map((membre, index) => (
//                   <div key={index} className="flex items-center gap-3">
//                     <div className="w-3 h-3 rounded-full bg-[#e2df73] flex-shrink-0"></div>
//                     <p className="font-normal text-gray-700 text-lg">{membre}</p>
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Infrastructures Section */}
//         <div className="w-full py-8 px-8 bg-gray-50">
//           <h2 className="font-semibold text-[#1a3a76] text-4xl mb-6">
//             INFRASTRUCTURES ADMINISTRATIVES
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div>
//               <img
//                 className="w-full h-64 object-cover rounded-lg"
//                 alt="Bâtiment administratif"
//                 src="/Image3.jpg" 
//               />
//               <h3 className="font-semibold text-[#1a3a76] text-xl mt-4 mb-2">
//                 Bloc Administratif
//               </h3>
//               <p className="font-normal text-gray-700">
//                 Notre bloc administratif regroupe la direction, les services administratifs et financiers, 
//                 ainsi que la vie scolaire. Cette infrastructure moderne facilite la coordination entre 
//                 les différents services et offre un accueil de qualité aux visiteurs, parents et partenaires.
//               </p>
//             </div>
//             <div>
//               <img
//                 className="w-full h-64 object-cover rounded-lg"
//                 alt="Salle de réunion"
//                 src="/129145710-147881587116174-1814296285761364023-n.png"
//               />
//               <h3 className="font-semibold text-[#1a3a76] text-xl mt-4 mb-2">
//                 Salles de Réunion et de Conseil
//               </h3>
//               <p className="font-normal text-gray-700">
//                 Le LPS Yopougon dispose d'espaces dédiés aux réunions pédagogiques, aux conseils 
//                 de classe et aux rencontres avec les partenaires. Ces espaces sont équipés de matériel 
//                 moderne pour faciliter les échanges et la prise de décision collective.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Partners Section */}
//         <div className="w-full bg-slate-100 py-8 flex justify-around items-center">
//           <img
//             className="h-[110px] object-contain"
//             alt="Partner 1"
//             src="/unnamed.png"
//           />
//           <img
//             className="h-[110px] object-contain"
//             alt="Partner 2"
//             src="/images1.png"
//           />
//           <img
//             className="h-[100px] object-contain"
//             alt="Partner 3"
//             src="/la-delegation-de-lunion-europeenne-ue-recrute-pour-ces-2-postes-.png"
//           />
//         </div>

//         {/* Footer */}
//         <footer>
//           <div className="bg-[#1a3a76] py-2 flex justify-center flex-col">
//             <img
//               className="h-[110px] object-contain"
//               alt="Logo LPS"
//               src="/logo-lps-1.png"
//             />
//             <p className="flex justify-center mt-2 text-lg text-white font-light italic">
//               Lycée Professionnel Sectoriel de Yopougon
//             </p>
//           </div>

//           <div className="w-full">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.1922645388327!2d-4.085218143285839!3d5.355260974688789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1c185fe363ddb%3A0x871dbe6b6f6ccd8c!2sLyc%C3%A9e%20Professionnel%20Sectoriel%20de%20Yopougon!5e0!3m2!1sfr!2sci!4v1743516672624!5m2!1sfr!2sci"
//               width="100%"
//               height="350"
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               className="border-0"
//             ></iframe>
//           </div>

//           <div className="bg-[#1a3a76] py-8 gap-2">
//             <div className="flex flex-row gap-4 m-4 justify-center">
//               {/* Contact Information */}
//               <div className="">
//                 <h3 className="font-medium text-[#e2df73] text-xl mb-4">
//                   NOUS CONTACTER
//                 </h3>
//                 <div className="space-y-4">
//                   <div className="flex items-start gap-3">
//                     <MapPinIcon className="w-5 h-5 text-[#e2df73] mt-1" />
//                     <p className="font-medium text-white text-xm">
//                       YOPOUGON BANCO II, <br />
//                       CARREFOUR LYCEE
//                     </p>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <MailIcon className="w-5 h-5 text-[#e2df73]" />
//                     <p className="font-medium text-white text-xm">
//                       infoslps@gmail.com
//                     </p>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <PhoneIcon className="w-5 h-5 text-[#e2df73]" />
//                     <p className="font-medium text-white text-xm">
//                       0707151163/ 0707862707/
//                       <br />
//                       0707907235 / 0707720261
//                     </p>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <FacebookIcon className="w-5 h-5 text-[#e2df73] " />
//                     <p className="font-medium text-white text-xm">
//                       LPS YOPOUGON
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Navigation */}
//               <div className=" w-[150px]">
//                 <h3 className="font-medium text-[#e2df73] text-xl mb-4">
//                   NAVIGATION
//                 </h3>
//                 <ul className="space-y-2">
//                   {footerNavItems.map((item, index) => (
//                     <li key={index} className="pl-4">
//                       <a
//                         href="#"
//                         className="font-medium text-white text-xm hover:text-[#e2df73] transition-colors"
//                       >
//                         {item}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Useful Links and School Info */}
//               <div className="">
//                 <h3 className="font-medium text-[#e2df73] text-xl mb-4">
//                   LIENS UTILES
//                 </h3>
//                 <ul className="space-y-2 ">
//                   <a
//                     href=""
//                     className="font-medium text-white text-xl hover:text-[#e2df73] transition-colors cursor-pointer"
//                   >
//                     Sites Internet du METFPA
//                   </a>
//                   <br />
//                   <a
//                     href=""
//                     className="font-medium text-white text-xl hover:text-[#e2df73] transition-colors cursor-pointer"
//                   >
//                     formation-professionnelle.gouv.ci
//                   </a>
//                   <br />
//                   <a
//                     href=""
//                     className="font-medium text-white text-xl hover:text-[#e2df73] transition-colors cursor-pointer"
//                   >
//                     dexcci.net
//                   </a>
//                   <br />
//                   <a
//                     href=""
//                     className="font-medium text-white text-xl hover:text-[#e2df73] transition-colors cursor-pointer"
//                   >
//                     decobci.net
//                   </a>
//                   <br />
//                   <a
//                     href=""
//                     className="font-medium text-white text-xl hover:text-[#e2df73] transition-colors cursor-pointer"
//                   >
//                     ersys-ci.net
//                   </a>
//                 </ul>
//               </div>
//               <div className=" w-[450px] pl-4">
//                 <h3 className="flex font-medium text-[#e2df73] text-xl mb-4  items-center ">
//                   LE LYCEE
//                 </h3>
//                 <div className="flex flex-row gap-6 pb-6 m-2 ">
//                   <p className=" h-60 w-1/2 font-medium text-white text-xm leading-relaxed">
//                     1 bloc administratif <br />
//                     3 bâtiments de 9 salles de classe <br />
//                     1 bailment de 4 salles spécialisées <br />
//                     1 bâtiment de 6 laboratoires <br />
//                     1 bâtiment halle agro industrie <br />
//                   </p>
//                   <p className="h-60 w-1/2 font-medium text-white text-xm leading-relaxed">
//                     1 salle d'exposition <br />
//                     1 bâtiment cantine <br />
//                     3 terrains de sport <br />
//                     1 espace vert d'environ 2,5 hectares <br />
//                     1 parking 25 véhicules <br />
//                     1 clôture de 800 mètres <br />
//                     1 bâtiment halle maintenance industrielle <br />
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="text-center text-white text-xs mt-4 border-t border-gray-700 pt-4">
//               © {new Date().getFullYear()} Lycée Professionnel Sectoriel de
//               Yopougon - Tous droits réservés
//             </div>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// };



// import React from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";

// const Organisation = (): JSX.Element => {
//   // Structure organisationnelle
//   const structureItems = [
//     {
//       title: "Direction",
//       description: "La direction du LPS Yopougon assure le pilotage de l'établissement et coordonne l'ensemble des activités pédagogiques et administratives."
//     },
//     {
//       title: "Service Pédagogique",
//       description: "Ce service est responsable de la planification et de la supervision des formations en Agro-Industrie et en Maintenance Industrielle."
//     },
//     {
//       title: "Service Vie Scolaire",
//       description: "Il assure le suivi des élèves, gère les questions de discipline et organise les activités parascolaires."
//     },
//     {
//       title: "Service Administratif",
//       description: "Ce service gère les ressources humaines, financières et matérielles de l'établissement."
//     },
//     {
//       title: "Service Technique",
//       description: "Il est responsable de la maintenance des équipements et des infrastructures de l'établissement."
//     }
//   ];

//   return (
//     <div className="bg-white flex flex-row justify-center w-full">
//       <div className="bg-white overflow-hidden w-full max-w-[1440px] relative py-12 px-8">
//         <h1 className="font-semibold text-[#1a3a76] text-4xl mb-8 text-center">ORGANISATION DU LYCÉE</h1>
        
//         <div className="max-w-3xl mx-auto mb-12">
//           <Card className="bg-[#1a3a76] rounded-lg mb-8">
//             <CardContent className="p-6">
//               <p className="font-normal text-white text-lg leading-relaxed">
//                 Le Lycée Professionnel Sectoriel de Yopougon est organisé de manière à offrir un environnement 
//                 d'apprentissage optimal pour les formations en Agro-Industrie et en Maintenance Industrielle. 
//                 Notre structure organisationnelle est conçue pour faciliter la coordination entre les différents 
//                 services et assurer une formation de qualité.
//               </p>
//             </CardContent>
//           </Card>

//           <h2 className="font-semibold text-[#1a3a76] text-3xl mb-6">STRUCTURE ORGANISATIONNELLE</h2>
          
//           <div className="space-y-4">
//             {structureItems.map((item, index) => (
//               <Card key={index} className="shadow-md">
//                 <CardHeader className="bg-[#e2df73] py-3">
//                   <CardTitle className="text-[#1a3a76] text-xl">{item.title}</CardTitle>
//                 </CardHeader>
//                 <CardContent className="p-5">
//                   <p className="text-[#1a3a76] text-lg">{item.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>

//         <div className="max-w-3xl mx-auto">
//           <h2 className="font-semibold text-[#1a3a76] text-3xl mb-6">ORGANIGRAMME</h2>
//           <Card className="shadow-md p-4">
//             <CardContent className="flex justify-center">
//               <img 
//                 src="/organigramme.png" 
//                 alt="Organigramme du LPS Yopougon" 
//                 className="max-w-full h-auto"
//                 onError={(e) => {
//                   e.currentTarget.src = "/api/placeholder/800/500";
//                   e.currentTarget.alt = "Organigramme (placeholder)";
//                 }}
//               />
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Organisation;