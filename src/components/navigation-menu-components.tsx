
// import React, { useState } from "react";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "./navigation-menu-components";
// import { cn } from "../../lib/utils";

// interface NavItem {
//   label: string;
//   hasDropdown: boolean;
//   submenu?: string[];
// }

// interface CustomNavigationMenuProps {
//   navItems: NavItem[];
// }

// const CustomNavigationMenu: React.FC<CustomNavigationMenuProps> = ({
//   navItems,
// }) => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   // Fonction pour générer les URL des sous-menus
//   const getSubmenuUrl = (mainLabel: string, submenuItem: string) => {
//     // Conversion pour les URLs (minuscules et avec des tirets)
//     const mainLabelForUrl = mainLabel.toLowerCase().replace(/ /g, "-");
//     const submenuItemForUrl = submenuItem.toLowerCase().replace(/ /g, "-");

//     // Cas spécifiques de redirection
//     if (mainLabel === "LE LYCEE") {
//       switch (submenuItem) {
//         case "Présentation":
//           return "/le-lycee/presentation";
//         case "Mot du Directeur":
//           return "/le-lycee/mot-directeur";
//         case "Organisation":
//           return "/le-lycee/organisation";
//         case "Vie Scolaire":
//           return "/le-lycee/vie-scolaire";
//         default:
//           return `/${mainLabelForUrl}/${submenuItemForUrl}`;
//       }
//     } else if (mainLabel === "FORMATION") {
//       switch (submenuItem) {
//         case "Formation Initiale":
//           return "/formation/formation-initiale";
//         case "Formation Continue":
//           return "/formation/formation-continue";
//         default:
//           return `/${mainLabelForUrl}/${submenuItemForUrl}`;
//       }
//     } else if (mainLabel === "SERVICES") {
//       switch (submenuItem) {
//         case "Nos Produits":
//           return "/services/nos-produits";
//         case "Nos Materiels":
//           return "/services/nos-materiels";
//         case "Bibliothèque":
//           return "/services/bibliotheque";
//         default:
//           return `/${mainLabelForUrl}/${submenuItemForUrl}`;
//       }
//     } else if (mainLabel === "INFOS") {
//       switch (submenuItem) {
//         case "Admission et Inscription":
//           return "/infos/admission-inscription";
//         case "Réglement Interieur":
//           return "/infos/reglement-interieur";
//         case "Enregistrement FDFP":
//           return "/infos/enregistrement-fdfp";
//         case "Galerie":
//           return "/infos/galerie";
//         case "Intranet":
//           return "/infos/intranet";
//         default:
//           return `/${mainLabelForUrl}/${submenuItemForUrl}`;
//       }
//     }

//     // URL par défaut
//     return `/${mainLabelForUrl}/${submenuItemForUrl}`;
//   };

//   const getMainMenuUrl = (label: string) => {
//     switch (label) {
//       case "ACTUALITES":
//         return "/actualites";
//       default:
//         return `/${label.toLowerCase().replace(/ /g, "-")}`;
//     }
//   };

//   return (
//     <NavigationMenu className="mr-20">
//       <NavigationMenuList>
//         {navItems.map((item, index) => (
//           <NavigationMenuItem key={index}>
//             {item.hasDropdown ? (
//               <>
//                 <NavigationMenuTrigger
//                   onClick={() =>
//                     setActiveIndex(activeIndex === index ? null : index)
//                   }
//                   className={cn(
//                     "bg-white hover:bg-gray-50 text-[#1a3a76] font-semibold cursor-pointer",
//                     activeIndex === index &&
//                       "bg-[#1a3a76] text-white hover:bg-[#1a3a76]"
//                   )}
//                 >
//                   {item.label}
//                 </NavigationMenuTrigger>
//                 <NavigationMenuContent>
//                   <ul className="grid gap-2 p-4 w-60">
//                     {item.submenu?.map((submenuItem, submenuIndex) => (
//                       <li key={submenuIndex}>
//                         <NavigationMenuLink asChild>
//                           <a
//                             href={getSubmenuUrl(item.label, submenuItem)}
//                             className="block select-none space-y-1 rounded-md p-2 hover:bg-gray-100 hover:text-[#1a3a76] font-medium"
//                           >
//                             {submenuItem}
//                           </a>
//                         </NavigationMenuLink>
//                       </li>
//                     ))}
//                   </ul>
//                 </NavigationMenuContent>
//               </>
//             ) : (
//               <NavigationMenuLink asChild>
//                 <a
//                   href={getMainMenuUrl(item.label)}
//                   className={cn(
//                     "group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-[#1a3a76] hover:bg-gray-50 font-semibold cursor-pointer"
//                   )}
//                 >
//                   {item.label}
//                 </a>
//               </NavigationMenuLink>
//             )}
//           </NavigationMenuItem>
//         ))}
//       </NavigationMenuList>
//     </NavigationMenu>
//   );
// };

// export default CustomNavigationMenu;
