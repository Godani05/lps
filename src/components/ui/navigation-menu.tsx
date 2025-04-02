import React, { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

// Définition des types
interface SubmenuItem {
  label: string;
}

interface NavItem {
  label: string;
  hasDropdown: boolean;
  submenu?: string[];
}

interface CustomNavigationMenuProps {
  navItems: NavItem[];
}

// Composant de menu personnalisé avec types
const CustomNavigationMenu: React.FC<CustomNavigationMenuProps> = ({ navItems }) => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  return (
    <div className="flex gap-8">
      {navItems.map((item, index) => (
        <div key={index} className="relative">
          {item.hasDropdown ? (
            <>
              <button
                className="font-bold text-[#1a3a76] text-[13px] bg-transparent hover:text-[#e2df73] flex items-center"
                onClick={() => toggleDropdown(index)}
              >
                {item.label}
                <ChevronDownIcon 
                  className={`w-4 h-4 ml-1 transition-transform ${
                    activeDropdown === index ? "rotate-180" : ""
                  }`} 
                />
              </button>
              {activeDropdown === index && (
                <div className="absolute top-full left-0 mt-2 w-[250px] bg-white rounded-md shadow-lg z-50">
                  <ul className="py-2">
                    {item.submenu?.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="px-4 py-2 text-[#1a3a76] text-sm hover:bg-[#e2df73] hover:text-white cursor-pointer transition-colors"
                      >
                        {subItem}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          ) : (
            <span className="font-bold text-[#1a3a76] text-[13px] cursor-pointer hover:text-[#e2df73]">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CustomNavigationMenu;