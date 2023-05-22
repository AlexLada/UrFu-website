import Image from "next/image";
import a from "next/link";
import Hamburger from "hamburger-react";
const drawerList = [
  { index: 0, title: "Функции", keyword: "функции" },
  { index: 1, title: "Новости", keyword: "новости" },
  { index: 2, title: "Урфу", keyword: "урфу" },
  { index: 4, title: "О проекте", keyword: "проект" },

];
export default function Drawer({  isOpen, setIsOpen }) {
  return (
    <div
      className={
        " fixed overflow-auto flex  z-[1000] bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out" +
        (isOpen ? " transition-opacity opacity-100 duration-100 translate-x-0  " : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          "divide-t max-w-lg left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform" +
          (isOpen ? " translate-x-0 " : " -translate-x-full ")
        }
      >
          <div className="bg-orange-600 grid grid-cols-1 justify-items-stratch rounded-lg w-96 text-gray-900">
            
            {drawerList.map((item) => (
              <a
                key={item.index}
                //слова в drawerе
                className="flex p-2 m-2 border-b border-green-500 focus:outline-none focus:ring-0 focus:bg-yellow-200 transition duration-500 cursor-pointer"
                href={`/searchResult/test`}
              >
                {item.title}
              </a>
            ))}{" "}
          </div>

                <div className="top-0 right-0 fixed z-[1001]"><Hamburger toggled={isOpen} toggle={setIsOpen}/></div>
      </section>
      <section className=" w-screen h-full cursor-pointer"
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
      
    </div>
  );
}