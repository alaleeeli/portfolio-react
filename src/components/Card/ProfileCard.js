// import {Instagram} from '../SocialMedia/Instagram';
// import {Twitter} from '../SocialMedia/Twitter';
// import {LinkedIn} from '../SocialMedia/LinkedIn';
// import {GitHub} from '../SocialMedia/GitHub';
// import HorizontalLine from '../Lines/HorizontalLine';

export default function ProfileCard() {
  return  (
  <div className="w-full mt-7 gap-4 grid grid-cols-1 md:flex-wrap md:flex justify-center items-center">
    <div className="w-80 p-2 bg-white rounded-xl shadow-lg hover:shadow-2xl md:mx-0 mx-auto">
      <div className="flex">
        <div id="image-background" className="relative flex h-[200px] w-screen items-center justify-center before:absolute before:h-[150px] before:w-[120px] before:rounded-full before:bg-gradient-to-t before:from-coffee-800 before:to-coffee-300">
          <img className="z-10 h-[120px] mb-5 " src="assets/images/memoji.PNG" type="image" alt="" />
        </div>
      </div>

      <div className="text-center">
        <h2 className="font-semibold text-lg mb-2 text-gray-800">Rashed Alaleeli</h2>
        <p className="text-sm text-gray-600">Frontend Developer / Design Enthusiast.</p>
      </div>

      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-10/12 h-px mb-3 bg-gray-200 border-0" />
      </div>

      <ul className="flex justify-center mb-2 space-x-5">
        <li>
            <a href="https://www.instagram.com/alaleeeli/?hl=am-et" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-blue-600">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clip-rule="evenodd"></path>
                </svg>
            </a>
        </li>
        <li>
            <a href="https://twitter.com/alaleeeli" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-blue-600">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
                    </path>
                </svg>
            </a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/rashed-alaleeli" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-blue-600 hover:drop-shadow-2xl">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 448 512" aria-hidden="true">
                    <path fill-rule="evenodd"
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                        clip-rule="evenodd"></path>
                </svg>
            </a>
        </li>
        <li>
          <a href="https://github.com/alaleeeli" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-blue-600 hover:drop-shadow-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 26 24">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </li>
      </ul>
      {/* <HorizontalLine width={'10/12'}/>

      <ul className="flex justify-center mb-2 space-x-5">
        <li> <Instagram height={7} width={7} /> </li>
        <li> <Twitter height={7} width={7} /> </li>
        <li> <LinkedIn height={7} width={7} /> </li>
        <li> <GitHub height={7} width={7} /></li>
      </ul> */}

    </div>
  </div>
  )
  ;
}
