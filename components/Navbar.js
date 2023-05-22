import Drawer from "./Drawer";
import Hamburger from "hamburger-react";
import { useState } from "react";
import Image from "next/image";


export default function Footer() {
  const [drawer, setDrawer] = useState(false);

  return (
    <header className="text-gray-600 body-font">
      {/* <div className="text-orange-600  m-auto flex md:hidden mx-1 ">
        <Hamburger toggled={drawer} toggle={setDrawer} />
        <Drawer isOpen={drawer} setIsOpen={setDrawer} />
      </div> */}
      <div className="container mx-auto flex flex-wrap  p-5 flex-col md:flex-row items-center">
        <a
          href="/"
          className="flex title-font font-medium  items-center text-gray-900 mb-4 md:mb-0"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          <Image className="items-center" src = "/logo_urfu4.png" height="122" width="71"></Image>
          <span className="ml-3 text-3xl">URFUMAP</span>
        </a>
        <nav className="hidden md:flex md:ml-auto md:mr-auto text-3xl flex-wrap items-center justify-center text-1xl md:space-x-14  lg:space-x-28">
          <li className="list-none">
            <a
              className="#ffb6b9 transition duration-500 hover:text-fuchsia-900 font-bold"
              href="/news"
            >
              Функции
            </a>
          </li>
          <li className="list-none">
            <a
              className="#ffb6b9 transition duration-500 hover:text-fuchsia-900 font-bold"
              href="/description"
            >
              О проекте
            </a>
          </li>
        </nav>
      </div>
    </header>

    // <div
    //   className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-12"
    // >
    //   <a className="block text-teal-600" href="/">
    //     <span className="sr-only">Home</span>
    //   </a>

    //   <div className="flex flex-1 items-center justify-end md:justify-between">

    //     <nav aria-label="Site Nav" className=" pr-10 m-auto  flex md:justify-between justify-around space-x-32">

    //     <div className="text-orange-600 m-auto flex md:hidden mx-0 ">
    //           <Hamburger toggled={drawer} toggle={setDrawer} />
    //           <Drawer isOpen={drawer} setIsOpen={setDrawer} />
    //       </div>
    //     <div  className="relative flex justify-between inset-y-2 md:py-2 w-12 h-12 animate-bounce ">
    //             <Link href="/">
    //               <Image
    //                 src="/ppg.png"  layout="fill" objectFit="contain" alt="wqeqeqw"
    //               />
    //             </Link>
    //           </div>
    //       <ul className=" items-center gap-6 space-x-10 hidden md:flex animate-none">
    //         <li>
    //           <a className="#ffb6b9 transition duration-500 hover:text-fuchsia-900 font-bold" href="/description">
    //             Функции
    //           </a>
    //         </li>

    //         <li>
    //           <a className="#ffb6b9 transition duration-500 hover:text-fuchsia-900 font-bold" href="/news">
    //             Новости
    //           </a>
    //         </li>

    //         <li>
    //           <a className="#ffb6b9 transition duration-500 hover:text-fuchsia-900 font-bold" href="/">
    //             Урфу
    //           </a>
    //         </li>

    //         <li>
    //           <a className="#ffb6b9 transition duration-500 hover:text-fuchsia-900 font-bold" href="/news">
    //             Новости
    //           </a>
    //         </li>

    //         <li>
    //           <a className="#ffb6b9 transition duration-500 hover:text-fuchsia-900 font-bold" href="/">
    //             О проекте
    //           </a>
    //         </li>
    //       </ul>
    //     </nav>
    //     </div>
    // </div>
  );
}

// import { useRouter } from "next/router";
// import Image from "next/image"

// const navigation = [
//     { id: 2, title: 'Новости', path: '/news' },
//     { id: 3, title: 'Сообщества', path: '/community' },
//   ];

// const Navbar = ()=>{
//     const { pathname } = useRouter();
//     return (
//         <nav classNameName = " pr-1 m-auto flex  items-center space-x-5 ">
//             <div classNameName = "flex left-10 top-5">
//                 <Image src = "/urfu.jpeg" width={50} height={110} />
//             </div>
//             <div classNameName = "h-full py-6 flex space-x-5 ">
//                 {navigation.map(({id,title,path})=>(
//                         <div
//                             classNameName={pathname === path ? `bg-blue-300` : null} key ={id}><a href = {path}>{title}</a>
//                         </div>
//                 ))}
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
