<template>
  <nav class="nav us bg-slate-50 shadow flex flex-wrap items-center justify-between px-4">
    <div class="flex flex-no-shrink items-center mr-6 py-3 text-gray-500">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 stroke-2 fill-emerald-400 " fill="none"
        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      <span class="font-semibold text-text-gray-500 text-xl tracking-tight">Finance</span>
    </div>

    <input class="menu-btn hidden" type="checkbox" id="menu-btn">
    <label class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
      <span class="navicon bg-grey-darkest flex items-center relative"></span>
    </label>

    <ul class="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
      <li class="border-t md:border-none">
        <a href="#"
          class="block md:inline-block px-4 py-3 no-underline cursor-pointer text-gray-500 hover:text-emerald-600 font-bold">Home</a>
      </li>

      <li class="border-t md:border-none">
        <a href="#"
          class="block md:inline-block px-4 py-3 no-underline cursor-pointer text-gray-500 hover:text-emerald-600 font-bold">About</a>
      </li>

      <li class="border-t md:border-none">
        <a href="#"
          class="block md:inline-block px-4 py-3 no-underline cursor-pointer text-gray-500 hover:text-emerald-600  font-bold">Blog</a>
      </li>

    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.us{
    font-family: 'Poppins', sans-serif;
}
.do{
    height: 500px;
}

.to{
    display: flex;
  justify-content: center;
}
.let {
    padding: 0 2px;
    
  box-shadow: inset 0 -6px 0 0 #09bd80;
}
@media (max-width: 767px) {
  .navicon {
    width: 1.125em;
    height: .125em;
  }

  .navicon::before,
  .navicon::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all .2s ease-out;
    content: '';
    background: #3D4852;
  }

  .navicon::before {
    top: 5px;
  }

  .navicon::after {
    top: -5px;
  }

  .menu-btn:not(:checked) ~ .menu {
    display: none;
  }

  .menu-btn:checked ~ .menu {
    display: block;
  }

  .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }

  .menu-btn:checked ~ .menu-icon .navicon::before {
    transform: rotate(-45deg);
  }

  .menu-btn:checked ~ .menu-icon .navicon::after {
    transform: rotate(45deg);
  }

  .menu-btn:checked ~ .menu-icon .navicon::before,
  .menu-btn:checked ~ .menu-icon .navicon::after {
    top: 0;
  }
}

</style>