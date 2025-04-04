import React, { useState, useRef } from "react";
import { ChevronDownIcon } from "lucide-react";
// import { useNavigate } from 'react-router-dom'; // Si vous utilisez React Router
// Définition des types
// interface SubmenuItem {
//   label: string;
// }

interface NavItem {
  label: string;
  hasDropdown: boolean;
  submenu?: string[];
}

interface CustomNavigationMenuProps {
  navItems: NavItem[];
}

// Composant de menu personnalisé avec types
const CustomNavigationMenu: React.FC<CustomNavigationMenuProps> = ({
  navItems,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    // Utiliser un délai pour permettre à la souris de se déplacer vers le sous-menu
    timeoutRef.current = window.setTimeout(() => {
      setHoveredIndex(null);
    }, 100);
  };

  return (
    <div className="flex gap-8 mr-28">
      {navItems.map((item, index) => (
        <div
          key={index}
          className="relative"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {item.hasDropdown ? (
            <>
              <button className="font-bold text-[#1a3a76] text-[15px] bg-transparent hover:text-[#e2df73] flex items-center">
                {item.label}
                <ChevronDownIcon
                  className={`w-6 h-6 ml-1 transition-transform ${
                    hoveredIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {hoveredIndex === index && (
                <div 
                  className="absolute top-full left-0 mt-2 w-[210px] bg-white rounded-md shadow-lg z-50"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <ul className="py-2">
                    {item.submenu?.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="px-4 py-2 text-[#1a3a76] text-xm hover:bg-[#e2df73] hover:text-white cursor-pointer transition-colors"
                      >
                        {subItem}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          ) : (
            <span className="font-bold text-[#1a3a76] text-[15px] cursor-pointer hover:text-[#e2df73]">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CustomNavigationMenu;

