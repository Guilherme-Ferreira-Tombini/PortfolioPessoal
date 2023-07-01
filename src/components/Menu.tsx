import Logo from "./Logo"
import Menu_icon from "./Menu_icon"

export default function Menu() {
  return (
    // Menu lateral do site
    <>
    {/* Logo do site em componente para o modo mobile*/}
    <div className="hidden" id="logo">
     <Logo/>
    </div>

     <div id="menu" className="bg-green-950 w-[90px] h-screen p-3 text-white">

    {/* Logo do site em componente */}
    <Logo/>

    {/* Menu do Site em componente */}
    <Menu_icon/>

   </div>

    </>
  )
}
