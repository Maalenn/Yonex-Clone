// start nav 

// horizontal slideshow 


// end nav 
// start footer
class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="bg-[#24292b] h-[870px] md:h-[370px] mt-[200px]">
            <div class="max-w-[1300px] mx-auto">
                <div class="md:justify-between md:items-center md:flex md:h-[50%]">
                    <div class="flex items-center justify-center">
                        <img src="https://www.yonex.com/static/version1712695184/frontend/Yonex/base/en_US/images/Yonex_Logo.svg" alt="" class="items-center flex justify-center size-[130px] Logo ml-3">
                    </div>
                    
                    <div
                class="flex justify-between items-center max-w-[400px] mx-auto md:mr-[30px] md:gap-6"
            >
                <img
                src="../assets/images/icons/facebook-icon.svg"
                alt="facebook-icon"
                class="size-[40px] ml-4"
                />
                <img
                src="../assets/images/icons/twitter_icon.svg"
                alt="twittter-icon"
                class="size-[40px]"
                />
                <img
                src="../assets/images/icons/youtube_icon.svg"
                alt="youtube-icon"
                class="size-[40px]"
                />
                <img
                src="../assets/images/icons/instagram_icon.svg"
                alt="instagram-icon"
                class="size-[40px] mr-4"
                />
            </div>
                </div>
                <hr class="my-4 border-gray-500 opacity-30">
                <div class="md:flex md:justify-between md:items-center">
                    <div>
                        <ul class="md:flex md:flex-row gap-4 text-[#f5f5f5] text-[15px] py-2 flex flex-col justify-center items-center font-[Oswald]">
                            <li class="tracking-[2px]">BADMINTON</li>
                            <li class="tracking-[2px]">GOLF</li>
                            <li class="tracking-[2px]">TENNIS</li>
                            <li class="tracking-[2px]">RUNNING</li>
                            <li class="tracking-[2px]">SNOWBOARDING</li>
                        </ul>
                    </div>
                    <hr class="md:hidden my-4 border-gray-500 opacity-30 ">
                    <div class="flex items-center justify-center">
                        <img src="https://www.yonex.com/static/version1712695184/frontend/Yonex/base/en_US/images/menu-icons/accessibility_icon.svg" alt="" class="size-[50px] cursor-pointer">
                    </div>
                </div>
                <hr class="my-4 border-gray-500 opacity-30">
                <div class="md:flex md:justify-between md:items-center">
                    <div class="md:flex md:flex-row gap-4 text-[#a8a8a8] text-[14px] py-2 flex flex-col justify-center items-center">
                        © 2012-2024 YONEX Co., Ltd.
                    </div>
                    <hr class="md:hidden my-4 border-gray-500 opacity-30">
                    <div class="md:flex md:flex-row gap-4 text-[#a8a8a8] text-[14px] py-2 flex flex-col justify-center items-center">
                        <a href="">Terms & Conditions</a>
                        <a href=""> Accessibility </a>
                        <a href="">Privacy Policy</a>
                        <a href="">Using Yonex Products Safely</a>
                    </div>
                </div>
            </div>
        </footer>
        `;
    }
}
customElements.define('my-footer', Footer)

class Sidebar extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <div
        id="mySidenav"
        class="hidden bg-white absolute z-[100] w-[80%] h-screen overflow-y-auto transform transition-transform ease-in-out duration-300 top-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="relative left-3 right-0 w-[35px] top-2"
          onclick="closeNav()"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
        <ul class="mt-4 ml-4 flex-col gap-[24px] flex font-[Oswald]">
          <li class="border-b">
            <div class="flex justify-between">
              <a
                href="#"
                class="py-2 px-4 block text-[#1f2427] transition duration-300 tracking-[1px] text-[18px]"
                >BADMINTON</a
              >
              <button
                onclick="showDropdown(1)"
                class=""
              >
                <img
                  src="../assets/images/icons/dropdown.png"
                  alt="dropdown"
                  class="size-6 mr-3"
                />
              </button>
            </div>
            <ul
              class="max-h-0 overflow-y-hidden duration-300 pl-10 bg-[#F7F8F9] font-[Oswald] mt-4"
              id="badminton-drop"
            >
              <li class="tracking-[2px] pb-2"><a href="">RAQUEST</a></li>
              <li class="tracking-[2px] pb-2"><a href="">STRINGS</a></li>
              <li class="tracking-[2px] pb-2"><a href="">SHUTTLECOCKS</a></li>
              <li class="tracking-[2px] pb-2"><a href="">APPAREL</a></li>
              <li class="tracking-[2px] pb-2"><a href="">SHOES</a></li>
              <li class="tracking-[2px] pb-2"><a href="">BAGS</a></li>
              <li class="tracking-[2px] pb-2"><a href="">ACCESSORIES</a></li>
              <li class="tracking-[2px] pb-2"><a href="">ATHLETES</a></li>
            </ul>
          </li>
          <li class="border-b">
            <div class="flex justify-between">
              <a
                href="#"
                class="py-2 px-4 block text-[#1f2427] transition duration-300 tracking-[1px] text-[18px]"
                >GOLF</a
              >
              <button
                onclick="showDropdown(2)"
                class=""
              >
                <img
                  src="../assets/images/icons/dropdown.png"
                  alt="dropdown"
                  class="size-6 mr-3"
                />
              </button>
            </div>
            <ul
              class="max-h-0 overflow-y-hidden duration-300 pl-10 bg-[#F7F8F9] font-[Oswald] mt-4"
              id="golf-drop"
            >
              <li class="tracking-[2px] pb-2"><a href="">CLUBS</a></li>
              <li class="tracking-[2px] pb-2"><a href="">SHAFTS</a></li>
              <li class="tracking-[2px] pb-2"><a href="">GEAR</a></li>
              <li class="tracking-[2px] pb-2"><a href="">ATHLETES</a></li>
            </ul>
          </li>
          <li class="border-b">
            <div class="flex justify-between">
              <a
                href="#"
                class="py-2 px-4 block text-[#1f2427] transition duration-300 tracking-[1px] text-[18px]"
                >TENNIS</a
              >
              <button
                onclick="showDropdown(3)"
                class=""
              >
                <img
                  src="../assets/images/icons/dropdown.png"
                  alt="dropdown"
                  class="size-6 mr-3"
                />
              </button>
            </div>
            <ul
              class="max-h-0 overflow-y-hidden duration-300 pl-10 bg-[#F7F8F9] font-[Oswald] mt-4"
              id="tennis-drop"
            >
              <li class="tracking-[2px] pb-2"><a href="">RAQUEST</a></li>
              <li class="tracking-[2px] pb-2"><a href="">STRINGS</a></li>
              <li class="tracking-[2px] pb-2"><a href="">BALLS</a></li>
              <li class="tracking-[2px] pb-2"><a href="">APPAREL</a></li>
              <li class="tracking-[2px] pb-2"><a href="">FOOTWEAR</a></li>
              <li class="tracking-[2px] pb-2"><a href="">BAGS</a></li>
              <li class="tracking-[2px] pb-2"><a href="">ACCESSORIES</a></li>
              <li class="tracking-[2px] pb-2"><a href="">ATHLETES</a></li>
            </ul>
          </li>
          <li class="border-b">
            <div class="flex justify-between">
              <a
                href="#"
                class="py-2 px-4 block text-[#1f2427] transition duration-300 tracking-[1px] text-[18px]"
                >RUNNING</a
              >
              <button
                onclick="showDropdown(4)"
                class=""
              >
                <img
                  src="../assets/images/icons/dropdown.png"
                  alt="dropdown"
                  class="size-6 mr-3"
                />
              </button>
            </div>
            <ul
              class="max-h-0 overflow-y-hidden duration-300 pl-10 bg-[#F7F8F9] font-[Oswald] mt-4"
              id="running-drop"
            >
              <li class="tracking-[2px] pb-2"><a href="">MEN</a></li>
              <li class="tracking-[2px] pb-2"><a href="">WOMEN</a></li>
              <li class="tracking-[2px] pb-2"><a href="">UNISEX</a></li>
            </ul>
          </li>
          <li class="border-b">
            <div class="flex justify-between">
              <a
                href="#"
                class="py-2 px-4 block text-[#1f2427] transition duration-300 tracking-[1px] text-[18px]"
                >SNOWBOARDING</a
              >
              <button
                onclick="showDropdown(5)"
                class=""
              >
                <img
                  src="../assets/images/icons/dropdown.png"
                  alt="dropdown"
                  class="size-6 mr-3"
                />
              </button>
            </div>
            <ul
              class="max-h-0 overflow-y-hidden duration-300 pl-10 bg-[#F7F8F9] font-[Oswald] mt-4"
              id="snowboard-drop"
            >
              <li class="tracking-[2px] pb-2"><a href="">BOARDS</a></li>
              <li class="tracking-[2px] pb-2"><a href="">BOOTS & BINDING</a></li>
              <li class="tracking-[2px] pb-2"><a href="">APPAREL</a></li>
              <li class="tracking-[2px] pb-2"><a href="">ACCESSORIES</a></li>
              <li class="tracking-[2px] pb-2"><a href="">TEAM</a></li>
            </ul>
          </li>
          <li class="border-b">
            <a
              href="#"
              class="py-2 px-4 block text-[#1f2427] transition duration-300 tracking-[1px] text-[18px]"
              >NEWS</a
            >
          </li>
          <li class="border-b">
            <div class="flex justify-between">
              <a
                href="#"
                class="py-2 px-4 block text-[#1f2427] transition duration-300 tracking-[1px] text-[18px]"
                >ABOUT</a
              >
              <button
                onclick="showDropdown(6)"
                class=""
              >
                <img
                  src="../assets/images/icons/dropdown.png"
                  alt="dropdown"
                  class="size-6 mr-3"
                />
              </button>
            </div>
            <ul
              class="max-h-[0] overflow-y-hidden duration-300 pl-10 bg-[#F7F8F9] font-[Oswald] mt-4 border-t"
              id="about-drop"
            >
              <li class="tracking-[2px] pb-2"><a href="">ABOUT US</a></li>
              <li class="tracking-[2px] pb-2"><a href="">YONEX GROUP</a></li>
              <li class="tracking-[2px] pb-2">
                <a href="">YONEX DISTRIBUTIORS</a>
              </li>
              <li class="tracking-[2px] pb-2">
                <a href="">INVESTOR RELATIONS</a>
              </li>
              <li class="tracking-[2px] pb-2">
                <a href="">PRODUCT CATATLOGS</a>
              </li>
              <li class="tracking-[2px] pb-2"><a href="">MADE BY YONEX</a></li>
            </ul>
          </li>
        </ul>
        <div class="flex mt-4 ml-8 items-center gap-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 356.926 356.926"
            width="18"
            height="18"
          >
            <title>International Sites</title>
            <path
              d="M211.89 213.669c0-10.475-8.521-18.997-18.996-18.997-.401 0-.799.017-1.193.041v2.406c.396-.028.79-.061 1.193-.061 9.158 0 16.608 7.452 16.608 16.611s-7.45 16.61-16.608 16.61c-.269 0-.53-.027-.795-.041v7.129H186.2v3.182h13.388v-3.182h-5.104v-4.774c9.734-.812 17.406-8.986 17.406-18.924zM260.072 79.408l.326 2.637-3.951.837-.534 5.635h4.764l6.321-.604 3.253-3.892-3.463-1.343-1.905-2.19-2.859-4.63-1.347-6.529-5.391 1.08-1.487 2.312v2.591l2.579 1.772z"
            ></path>
            <path
              d="M255.495 81.569l.278-3.532-3.136-1.354-4.404 1.023-3.288 5.234v3.404h3.823zM164.852 96.598l-.976 2.498h-4.7v2.428h1.121s.07.511.168 1.191l2.876-.238 1.783-1.121.465-2.248 2.335-.204.912-1.888-2.138-.442-1.846.024zM152.739 101.001l-.174 2.365 3.411-.285.348-2.376-2.045-1.609z"
            ></path>
            <path
              d="M356.868 176.633a179.671 179.671 0 00-.802-15.505 177.018 177.018 0 00-11.828-48.589c-.441-1.127-.859-2.283-1.336-3.41-8.121-19.183-19.531-36.646-33.474-51.721a161.937 161.937 0 00-2.765-2.916c-2.649-2.736-5.333-5.415-8.156-7.971C266.788 17.631 224.642 0 178.463 0 131.896 0 89.447 17.957 57.635 47.271c-7.413 6.832-14.221 14.303-20.408 22.285C13.919 99.717 0 137.49 0 178.463c0 98.398 80.059 178.463 178.463 178.463 69.225 0 129.316-39.643 158.897-97.399a176.73 176.73 0 0016.777-49.879c1.801-10.137 2.788-20.56 2.788-31.196-.023-.593-.057-1.203-.057-1.819zm-33.59-71.327l1.022-1.162a143.83 143.83 0 013.846 8.028l-1.708-.07-3.172.436v-7.233h.012zm-25.794-31.15l.023-7.971a162.178 162.178 0 018.087 9.214l-3.207 4.781-11.247-.111-.696-2.341 7.04-3.572zM82.214 54.364v-.302h3.567l.325-1.226h5.838v2.55l-1.691 2.236h-8.052v-3.259h.013zm5.711 7.959s3.578-.61 3.892-.61c.296 0 0 3.573 0 3.573l-8.081.511-1.534-1.847 5.723-1.627zm246.717 70.833h-13.06l-7.971-5.92-8.365.808v5.112h-2.648l-2.848-2.033-14.512-3.671v-9.4l-18.38 1.423-5.705 3.062h-7.285l-3.59-.36-8.854 4.926v9.254l-18.097 13.065 1.5 5.583h3.677l-.964 5.315-2.58.953-.133 13.884 15.633 17.823h6.819l.407-1.081h12.246l3.531-3.265h6.948l3.812 3.811 10.328 1.069-1.359 13.757 11.503 20.28-6.064 11.572.406 5.438 4.775 4.752v13.095l6.251 8.412v10.897h5.391c-30.046 36.913-75.823 60.534-127.026 60.534-90.312 0-163.783-73.454-163.783-163.777 0-22.732 4.665-44.401 13.077-64.089v-5.106l5.855-7.11a159.322 159.322 0 016.542-11.235l.25 2.974-6.791 8.261c-2.108 3.985-4.084 8.052-5.855 12.217v9.312l6.791 3.276v12.955l6.535 11.136 5.316.808.68-3.817-6.245-9.661-1.237-9.388h3.677l1.557 9.673 9.051 13.193-2.33 4.27 5.734 8.795 14.291 3.532v-2.306l5.711.808-.534 4.078 4.484.825 6.948 1.888 9.8 11.171 12.507.941 1.237 10.207-8.58 5.984-.39 9.115-1.237 5.588 12.386 15.5.947 5.32s4.49 1.209 5.048 1.209c.535 0 10.062 7.227 10.062 7.227v28.024l3.393.964-2.294 12.92 5.71 7.634-1.068 12.827 7.563 13.269 9.696 8.47 9.731.197.952-3.148-7.163-6.029.418-2.986 1.272-3.684.273-3.741-4.839-.14-2.44-3.066 4.021-3.881.546-2.916-4.496-1.29.261-2.719 6.402-.976 9.73-4.672 3.265-6.006 10.196-13.06-2.312-10.213 3.131-5.438 9.399.278 6.327-5.02 2.051-19.693 7.04-8.877 1.237-5.704-6.39-2.045-4.224-6.942-14.419-.145-11.444-4.351-.534-8.162-3.811-6.675-10.335-.145-5.995-9.382-5.298-2.585-.273 2.858-9.672.569-3.532-4.926-10.079-2.045-8.302 9.603-13.065-2.23-.953-14.727-9.527-1.632 3.805-7.221-1.092-4.148-12.531 8.371-7.877-.964-2.817-6.158 1.737-6.355 4.339-8.005 9.998-5.072h19.322l-.064 5.891 6.948 3.235-.558-10.062 5.007-5.037 10.103-6.64.703-4.659 10.068-10.486 10.707-5.937-.941-.773 7.256-6.826 2.655.703 1.214 1.522 2.76-3.062.68-.296-3.021-.43-3.084-.987v-2.963l1.632-1.33h3.579l1.655.726 1.418 2.858 1.737-.267v-.244l.5.163 5.02-.772.714-2.463 2.852.726v2.667l-2.666 1.818h.018l.377 2.928 9.115 2.794s0 .035.023.11l2.079-.18.146-3.939-7.209-3.282-.396-1.894 5.972-2.033.273-5.722-6.245-3.805-.412-9.667-8.581 4.218h-3.143l.837-7.355-11.688-2.748-4.816 3.654v11.119l-8.673 2.754-3.486 7.244-3.758.604v-9.277L124.11 76.3l-4.096-2.667-1.639-6.007 14.611-8.54 7.14-2.179.72 4.804 3.991-.215.308-2.411 4.166-.599.07-.842-1.784-.738-.407-2.544 5.118-.43 3.091-3.213.18-.238.035.012.941-.976 10.753-1.354 4.746 4.032-12.467 6.64 15.871 3.747 2.045-5.31h6.948l2.44-4.625-4.903-1.226v-5.856l-15.359-6.803-10.62 1.226-6.001 3.125.407 7.628-6.257-.953-.964-4.212 6.007-5.449-10.898-.535-3.125.953-1.359 3.677 4.084.686-.813 4.084-6.936.406-1.092 2.725-10.075.277s-.273-5.711-.703-5.711c-.389 0 7.901-.145 7.901-.145l5.995-5.85-3.271-1.632-4.339 4.223-7.222-.406-4.403-6.019h-9.254l-9.661 7.21h8.848l.796 2.597-2.307 2.172 9.807.279 1.487 3.532-11.032-.407-.546-2.725-6.925-1.499-3.689-2.033-8.255.069c27.043-19.699 60.284-31.358 96.226-31.358 41.403 0 79.263 15.476 108.124 40.915l-1.929 3.474-7.564 2.962-3.194 3.462.743 4.02 3.893.546 2.358 5.867 6.704-2.713 1.127 7.86h-2.045l-5.519-.819-6.111 1.022-5.926 8.377-8.458 1.319-1.221 7.25 3.579.842-1.046 4.665-8.412-1.69-7.703 1.69-1.639 4.293 1.325 9.01 4.531 2.115 7.61-.046 5.123-.465 1.58-4.078 8.018-10.422 5.264 1.081 5.193-4.7.976 3.678 12.78 8.621-1.557 2.108-5.763-.308 2.23 3.137 3.556.79 4.159-1.737-.093-5.002 1.859-.923-1.487-1.575-8.528-4.758-2.254-6.314h7.099l2.243 2.248 6.134 5.257.244 6.367 6.332 6.733 2.348-9.231 4.392-2.394.802 7.552 4.287 4.7 8.54-.139a150.819 150.819 0 014.427 12.978l-.929.834zM97.324 81.092l4.27-2.044 3.881.929-1.324 5.211-4.183 1.319-2.644-5.415zm22.749 12.258v3.37h-9.783l-3.689-1.028.918-2.341 4.7-1.94h6.437v1.94h1.417zm4.509 4.7v3.259l-2.463 1.58-3.044.575v-5.415h5.507zm-2.76-1.33v-3.893l3.363 3.067-3.363.826zm1.533 7.848v3.178l-2.347 2.347h-5.211l.813-3.573 2.463-.215.5-1.226 3.782-.511zM110.39 98.05h5.408l-6.948 9.696-2.852-1.534.616-4.084 3.776-4.078zm22.139 5.414v3.166h-5.211l-1.417-2.062v-2.951h.406l6.222 1.847zm-4.781-4.368l1.475-1.557 2.498 1.557-1.999 1.656-1.974-1.656zm209.543 42.332l.511-.61c.232.93.441 1.859.662 2.789l-1.173-2.179z"
            ></path>
            <path
              d="M27.734 109.268v5.106c1.771-4.177 3.747-8.231 5.855-12.223l-5.855 7.117z"
            ></path>
          </svg>
          <p class="text-gray-600">INTERNATIONAL SITE</p>
        </div>
        <img
              src="../assets/images/icons/accessibility_icon.svg"
              alt=""
              class="size-[50px] cursor-pointer mb-[7.5px] ml-7"
            />
      </div>
        `
    }
}

customElements.define('my-sidebar', Sidebar)