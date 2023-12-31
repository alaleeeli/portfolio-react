export default function HeroSection({ path, title }) {
  return (
    <div class="relative">
      <img src={path} alt="Intro" />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="absolute bottom-0 w-full">
        <path fill="#ffffff" d="M0,96L60,80C120,64,240,32,360,58.7C480,85,600,171,720,213.3C840,256,960,256,1080,234.7C1200,213,1320,171,1380,149.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
      <div>
        <p class="absolute md:text-5xl text-3xl text-white font-semibold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:text-yellow-500">
          <span class="bg-gradient-to-r from-green-300 via-blue-500 to to-purple-600 bg-[length:100%_5px] bg-no-repeat bg-bottom">
            {title}
          </span>
        </p>
      </div>
    </div>
  );
}
