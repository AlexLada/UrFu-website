export default function CardBox({}) {
  return (
    <section class="bg-[#1c2227] text-white">
      <section>
        <div class="mx-auto max-w-screen-xl   px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div class="max-w-3xl">
            <h2 class="text-3xl font-bold sm:text-4xl">
              Цель проекта
            </h2>
          </div>

          <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <img
                alt="Party"
                src = "/uralskij-universitet.jpg"
                class="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div class="lg:py-16">
              <article class="text-3xl tracking-wider font-light space-y-4 text-white">
                <p>
                  Многие студенты и другие гости института, зачастую
                  сталкивались с проблемой поиска нужного им места в
                  институте.< br></br> Наша команда нашла решение для этой проблемы. < br></br>Карта
                  УРФУ с функцией "Где пара?" поможет всем попасть в нужную
                  точку учебного заведения.
                </p>

                <p></p>
              </article>
            </div>
          </div>
        </div>
      </section>
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
        <div class="mx-auto max-w-lg text-center ">
          <h2 class=" bg-gradient-to-r from-[#1c2227] via-[#ff5900a2] to-[#1c2227]  text-3xl font-bold sm:text-6xl">
            Создатели проекта
          </h2>
        </div>

        <div class="mt-8 grid xl:grid-cols-3 md:grid-cols-3 gap-8  lg:grid-cols-3">
          <a
            class="block  rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-[#ff5900]/10 hover:shadow-[#ff5900]/10"
            href="https://vk.com/andrewz2000"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 text-[#ff5900]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h2 class="mt-4 text-3xl font-bold mb-6  text-white">
              Зиновьев Андрей
            </h2>

            <p class="mt-1 text-xl text-gray-300">
              Team-лидер. Руководитель проекта.
            </p>
          </a>

          <a
            class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-[#ff5900]/10 hover:shadow-[#ff5900]/10"
            href="https://vk.com/id325152590"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 text-[#ff5900]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h2 class="mt-4 text-3xl font-bold mb-6 text-white">
              Чусовитин Александр
            </h2>

            <p class="mt-1 text-xl text-gray-300">Администратор.</p>
          </a>

          <a
            class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-[#ff5900]/10 hover:shadow-[#ff5900]/10"
            href="https://vk.com/celovik"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 text-[#ff5900]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h2 class="mt-4 text-3xl font-bold mb-6 text-white">Волик Глеб</h2>

            <p class="mt-1 text-xl text-gray-300">Креативный руководитель.</p>
          </a>

          <a
            class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-[#ff5900]/10 hover:shadow-[#ff5900]/10"
            href="https://vk.com/kevgena"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 text-[#ff5900]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h2 class="mt-4 text-3xl font-bold mb-6 text-white">
              Курочкин Евгений
            </h2>

            <p class="mt-1 text-xl text-gray-300">Аналитик.</p>
          </a>

          <a
            class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-[#ff5900]/10 hover:shadow-[#ff5900]/10"
            href="https://vk.com/prosto_kartofel"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 text-[#ff5900]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h2 class="mt-4 text-3xl font-bold mb-6 text-white">Попов Семён</h2>

            <p class="mt-1 text-xl text-gray-300">Дизайнер.</p>
          </a>

          <a
            class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-[#ff5900]/10 hover:shadow-[#ff5900]/10"
            href="https://vk.com/alex.lada"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 text-[#ff5900]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h2 class="mt-4 text-3xl font-bold mb-6 text-white">
              Лада Александр
            </h2>

            <p class="mt-1 text-xl text-gray-300">Frontend - Программист</p>
          </a>

          <div className="xl:col-end-3  md:col-end-3 col-span-1">
            {" "}
            <a
              class=" block  rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-[#ff5900]/10 hover:shadow-[#ff5900]/10"
              href="https://vk.com/vvkrlvv"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 text-[#ff5900]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h2 class="mt-4 text-3xl font-bold mb-6 text-white">
                Филиппов Кирилл
              </h2>

              <p class="mt-1 text-xl text-gray-300">Дизайнер интерфейса сайта.</p>
            </a>
          </div>
        </div>
      </div>
      
    </section>
  );
}
