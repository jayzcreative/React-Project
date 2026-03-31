export default function TabButton({label,onSelect}){ 

  return (
    <li>
      <button className="px-6 py-2 rounded-md font-medium text-[#a18aba] 
                         transition-all duration-200 
                         hover:bg-[#3d2e54] hover:text-white 
                         focus:bg-[#7a49df] focus:text-white" onClick={onSelect} >{label}</button>
    </li>
  );
}