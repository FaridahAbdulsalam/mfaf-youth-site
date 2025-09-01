import amir from './assets/images/shura/Gaphar.jpg'
import amirah from './assets/images/shura/Faridah.jpg'  
import islamicEd from './assets/images/shura/Halimah.jpg'
import viceAmirah from './assets/images/shura/Rahimah.jpg'
import social from './assets/images/shura/Ameenah .jpg'
import treasurer from './assets/images/shura/Tiwa.jpg'
import welfareSrs from './assets/images/shura/Rahmat.jpg'
import treasurer2 from './assets/images/shura/Muhammad.jpg'
import SM from './assets/images/shura/Hibatullah.jpg'



export const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 2000, min: 1024 },
      items: 3,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
      slidesToSlide: 2
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  export const shuraMembersData = [{
    src: amir,
    alt: 'Picture of Amir',
    name: 'Gaphar',
    position: 'Amir',
    description: 'is embracing 2 rich, intertwined aspects of my identity'
  }, 
  {
    src: amirah,
    alt: 'Picture of Amirah',
    name: 'Faridah',
    position: 'Amirah',
    description: 'is having an identity I cherish.'
  }, 
  {
    src: islamicEd,
    alt: 'Picture of Islamic Ed Officer',
    name: 'Halimah',
    position: 'Islamic Education',
    description: 'means I\'m blessed twice - double homicide!'
  },

   {
    src: SM,
    alt: 'Picture of Social Media Officer',
    name: 'Hibatullah',
    position: 'Social Media Officer',
    description: 'means I have access to two immensly deep and unique sociteies.'
  },

   {
    src: treasurer,
    alt: 'Picture of Treasurer',
    name: 'Tiwa',
    position: 'Treasurer',
    description: 'is embracing two powerful identities that shape my purpose, charcter, and how i show up in the world.'
  },

   {
    src: social,
    alt: 'Picture of Social Officer',
    name: 'Ameenah',
    position: 'Social Officer',
    description: 'means everything to me!'
  },
   {
    src: welfareSrs,
    alt: 'Picture of Welfare Officer',
    name: 'Rahmat',
    position: 'Welfare Officer',
    description: 'is getting represent my faith and culture unappologetically.'
  },
   
   {
    src: viceAmirah,
    alt: 'Picture of Vice Amirah',
    name: 'Rahimah',
    position: 'Vice Amirah',
    description: 'means having a great sense of community and belonging.'
  },
   {
    src: treasurer2,
    alt: 'Picture of Finance Officer',
    name: 'Muhammad',
    position: 'Finance Officer',
    description: 'is like having a membership to 2 exclusive societies.'
  }
]

export const testimonyData = [
  {
    name: "John Doe",
    about: "Member since 2020",   
    testimony: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,"
  },
  {
    name: "Jane Doe",
    about: "Member since 2020",   
    testimony: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,"      
  },
  {
    name: "Jack Doe",
    about: "Member since 2020", 
    testimony: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,"
  },
  {
    name: "Jamila Doe",
    about: "Member since 2020",
    testimony: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,"
  },
  // Add more testimonies here
]