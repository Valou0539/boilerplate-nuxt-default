<template>
  <section class="flex flex-col items-center justify-center p-4 pt-16 min-h-screen overflow-hidden">
    <h1 class=" absolute top-4 left-4 md:left-10 font-heading text-4xl leading-none">TheWild<span class="text-accent">.com</span></h1>

    <div class="relative flex flex-col justify-between md:flex-row items-center bg-accent/10 w-full max-w-96 md:max-w-[730px] max-h-[640px] p-6 gap-12 before:w-[120%] before:h-[120%] before:absolute before:left-[-10%] before:top-[-10%] before:z-[-1] before:bg-desert before:opacity-15 before:blur-[140px]">
      <form
          id="signup"
          @submit.prevent
          class="w-full md:w-1/2"
          :class="login ? 'hidden md:block' : 'block'"
      >
        <h2 class="font-heading text-[32px] mb-4">Sign up</h2>

        <label for="name" class="block text-lg font-medium leading-snug mb-1">Name</label>
        <input
            ref="signUpFirstInput"
            v-model="signupName"
            type="text"
            id="name"
            name="name"
            class="w-full px-2 py-1 border-none bg-text/10 mb-4"
            placeholder="John Doe"
            autocomplete="name"
            :tabindex="login ? -1 : 0"
        />

        <label for="signup-email" class="block text-lg font-medium leading-snug mb-1">E-mail</label>
        <input
            v-model="signupEmail"
            type="email"
            id="signup-email"
            name="email"
            class="w-full px-2 py-1 border-none bg-text/10 mb-4"
            placeholder="john.doe@example.com"
            autocomplete="email"
            :tabindex="login ? -1 : 0"
        />

        <label for="signup-password" class="block text-lg font-medium leading-snug mb-1">Password</label>
        <input
            v-model="signupPassword"
            type="password"
            id="signup-password"
            name="password"
            class="w-full px-2 py-1 border-none bg-text/10 mb-4 tracking-wider"
            placeholder="••••••"
            autocomplete="new-password"
            :tabindex="login ? -1 : 0"
        />

        <label for="signup-password-confirm" class="block text-lg font-medium leading-snug mb-1">Repeat password</label>
        <input
            v-model="signupPasswordConfirm"
            type="password"
            id="signup-password-confirm"
            name="password-confirm"
            class="w-full px-2 py-1 border-none bg-text/10 mb-10 tracking-wider"
            placeholder="••••••"
            autocomplete="new-password"
            :tabindex="login ? -1 : 0"
        />

        <div class="flex items-center gap-2 mb-4">
          <div class="relative">
            <input
                v-model="signupTerms"
                type="checkbox"
                id="terms"
                name="terms"
                class="w-12 h-6 block opacity-0 peer"
                :tabindex="login ? -1 : 0"
            >
            <div class="absolute top-0 left-0 w-full h-full border border-text rounded-full pointer-events-none peer-checked:bg-accent peer-focus-visible:outline peer-focus-visible:outline-1 peer-focus-visible:outline-text transition-colors duration-200"></div>
            <div class="absolute left-1 bottom-1/2 translate-y-1/2 w-4 h-4 rounded-full bg-accent pointer-events-none peer-checked:translate-x-6 peer-checked:bg-text transition-all duration-200 shadow-[0_0_#00000088]"></div>
          </div>
          <label for="terms" class="text-sm">
            I do accept the
            <a href="#signup" class="underline" :tabindex="login ? -1 : 0">terms and conditions</a>
          </label>
        </div>

        <button
            type="submit"
            class="bg-primary-btn text-primary-btn-text px-4 py-2 w-full text-lg font-medium hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary-btn/20 transition-all duration-200"
            :tabindex="login ? -1 : 0"
        >
          Sign Up
        </button>
      </form>
      <form
          id="login"
          @submit.prevent
          class="w-full md:w-1/2"
          :class="login ? 'block' : 'hidden md:block'"
      >
        <h2 class="font-heading text-[32px] mb-4">Log In</h2>

        <label for="login-email" class="block text-lg font-medium leading-snug mb-1">E-mail</label>
        <input
            ref="loginFirstInput"
            v-model="loginEmail"
            type="email"
            id="login-email"
            name="email"
            class="w-full px-2 py-1 border-none bg-text/10 mb-4"
            placeholder="john.doe@example.com"
            autocomplete="email"
            :tabindex="login ? 0 : -1"
        />

        <label for="login-password" class="block text-lg font-medium leading-snug mb-1">Password</label>
        <input
            v-model="loginPassword"
            type="password"
            id="login-password"
            name="password"
            class="w-full px-2 py-1 border-none bg-text/10 mb-10 tracking-wider"
            placeholder="••••••"
            autocomplete="current-password"
            :tabindex="login ? 0 : -1"
        />

        <div class="flex items-center gap-2 mb-4">
          <div class="relative">
            <input
                v-model="stayConnected"
                type="checkbox"
                id="stay-connected"
                name="terms"
                class="w-6 h-6 block opacity-0 peer"
                :tabindex="login ? 0 : -1"
            >
            <div class="absolute top-0 left-0 w-full h-full border border-text pointer-events-none peer-focus-visible:outline peer-focus-visible:outline-1 peer-focus-visible:outline-text peer-active:outline peer-active:outline-1 peer-active:outline-text"></div>
            <div class="absolute right-1/2 translate-x-1/2 bottom-1/2 translate-y-1/2 w-4 h-4 bg-text pointer-events-none scale-0 peer-checked:scale-100 transition-all duration-200"></div>
          </div>
          <label for="stay-connected" class="text-sm">Stay connected</label>
        </div>

        <button
            type="submit"
            class="bg-primary-btn text-primary-btn-text px-4 py-2 w-full text-lg font-medium hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary-btn/20 transition-all duration-200"
            :tabindex="login ? 0 : -1"
        >
          Log In
        </button>
      </form>

      <a
          :href="login ? '#signup' : '#login'"
          class="flex md:hidden gap-0.5 items-center leading-none px-3 py-2 bg-secondary-btn text-secondary-btn-text ml-auto group"
      >
        {{ login ? "First time here" : "Already have an account" }}
        <Icon name="octicon:chevron-right-12" size="12px" class="mt-0.5 group-hover:translate-x-0.5 transition-transform duration-200" />
      </a>

      <div
          class="hidden md:block absolute overflow-hidden w-1/2 h-full top-0 bg-desert transition-all duration-500 ease-out"
          :class="login ? 'left-0' : 'left-1/2'"
      >
        <div
            class="absolute top-0 w-full h-full flex items-center text-center transition-all duration-500 ease-out"
            :class="login ? 'left-0' : 'left-[-100%] opacity-0'"
        >
          <em class="font-heading leading-tight text-[84px] not-italic">Welcome Back</em>
          <a
              href="#signup"
              class="absolute bottom-2 right-2 flex gap-0.5 items-center leading-none px-3 py-2 bg-secondary-btn text-secondary-btn-text ml-auto group"
              :tabindex="login ? 1 : -1"
          >
            First time here
            <Icon name="octicon:chevron-right-12" size="12px" class="mt-0.5 group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
        </div>
        <div
            class="absolute top-0 w-full h-full flex items-center text-center p-6 transition-all duration-500 ease-out"
            :class="login ? 'left-full opacity-0' : 'left-0'"
        >
          <div>
            <em class="font-heading leading-tight text-[84px] not-italic mb-4">Welcome in The Wild</em>
            <p class="text-xl">Create a free account to save money during your most beautiful journey ! </p>
          </div>
          <a
              href="#login"
              class="absolute bottom-2 right-2 flex gap-0.5 items-center leading-none px-3 py-2 bg-secondary-btn text-secondary-btn-text ml-auto group"
              :tabindex="login ? -1 : 0"
          >
            Already have an account
            <Icon name="octicon:chevron-right-12" size="12px" class="mt-0.5 group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
useHead({
  title: "TheWild | Connection",
});

const login = ref(false);

const signUpFirstInput = ref(null);
const loginFirstInput = ref(null);

const signupName = ref("");
const signupEmail = ref("");
const signupPassword = ref("");
const signupPasswordConfirm = ref("");
const signupTerms = ref(false);

const loginEmail = ref("");
const loginPassword = ref("");
const stayConnected = ref(false);

const setInterface = (e, onPageLoad = false) => {
    login.value = window.location.hash === "#login";

    setTimeout(() => {
      if (window.location.hash === "#login") {
        loginFirstInput.value.focus();
      } else {
        signUpFirstInput.value.focus();
      }
    }, 20)

    if (!onPageLoad) {
      setTimeout(() => {
        signupName.value = "";
        signupEmail.value = "";
        signupPassword.value = "";
        signupPasswordConfirm.value = "";
        signupTerms.value = false;
        loginEmail.value = "";
        loginPassword.value = "";
        stayConnected.value = false;
      }, 500)
    }
};

onMounted(() => {
  setInterface(null, true);
  window.addEventListener("hashchange", setInterface)
});

onUnmounted(() => {
  window.removeEventListener("hashchange", setInterface);
});
</script>
