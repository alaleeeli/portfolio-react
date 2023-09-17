import '../index.css';
import { Footer } from '../Components/Footer'
import { ContactForm } from '../Components/ContactForm';
import { IntroImage } from '../Components/IntroImage';

export default function Contact() {
  return (
    <>
    <IntroImage path="assets/images/IMG_2847.jpg" title="CONTACT US" />
    
    <section class="relative z-10 overflow-hidden bg-white py-20 lg:py-[120px]">
      <div class="container mx-auto">
        <div class="-mx-4 flex flex-wrap lg:justify-between">
          <div class="w-full px-4 lg:w-1/2 xl:w-6/12 ">
            <div class="mb-12 max-w-[570px] lg:mb-0 ml-5 mr-4">
              
              <h2 class="mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                Contact Information
              </h2>
              <p class="mb-9 text-base leading-relaxed">
                If you have any questions or inquiries, feel free to reach out to us. We are here to assist you with any information you may need.
              </p>
              
              <ContactInfo img="assets/icons/telephone.png" type="Phone Number" info="(+971) 50 851 2124" />
              <ContactInfo img="assets/icons/mail.png" type="Email Address" info="ralaleeli@gmail.com" />
              
            </div>
          </div>

          <ContactForm />
          
        </div>
      </div>
    </section>

    <Footer />
    </>
  
  );
}

function ContactInfo({img, type, info}) {
  return (
    <div class="mb-8 flex w-full max-w-[370px]">
      <div class="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
        <img src={img} alt="mail" class="h-10 mb-2" />
      </div>
      <div class="w-full">
        <h4 class="text-dark mb-1 text-xl font-bold">{type}</h4>
        <a href="mailto:ralaleeli@gmail.com" class="text-base">{info}</a>
      </div>
    </div>
  );
}

