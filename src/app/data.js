/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "Chat Application (Ongoing)",
    description:
      " The project is to create a fully-functional real-time chat application with an user-friendly interface",
    type: "MERN Stack | SocketIO | bcrypt",
    demoLink: "https://github.com/Vindyani1999/Chat-App",
    image:
      "data:image/jpeg;base64,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",
  },

  {
    id: 2,
    name: "FriendZone - FB Clone",
    description:
      " The project is to develop an FB clone application including light/dark theme and profile, marketplace pages",
    type: "HTML | CSS | JavaScript",
    demoLink: "https://github.com/Vindyani1999/Plant-Disease-Detecting-Project",
    image: "/images/fb.png",
  },
  {
    id: 3,
    name: "Plant Disease Prediction",
    description:
      " The project is to create an user-friendly application which can predict the disease of a plant leaves",
    type: "Deep Learning | TF | Streamlit",
    demoLink: "https://github.com/Vindyani1999/Plant-Disease-Detecting-Project",
    image: "https://www.acs.edu.au/database/images/course_1566885.jpg",
  },
  {
    id: 4,
    name: "Power BI Dashboard ",
    description:
      "Sales insights project to create a dynamic dashboard, updating real-time data from database",
    type: "Power BI | Data | MySQL",
    demoLink: "https://github.com/Vindyani1999/Sales-Insights-Project",
    image:
      "https://miro.medium.com/v2/resize:fit:1024/1*aJDTiR2Wt2MiaRngFhnXRg.png",
  },
  {
    id: 5,
    name: "CropXchange",
    description:
      "The online marketplace provides effective communication between farmers, sellers & delivery",
    type: "MERN Stack | bcrypt | JWT",
    demoLink: "https://github.com/Chamindu77/CropMaeketplace",
    image:
      "https://media1.popsugar-assets.com/files/thumbor/rwuqUNQorYRMwDniO5pR3NnHgT8=/fit-in/792x528/top/filters:format_auto():upscale()/2020/04/22/015/n/1922195/tmp_1aog7x_909bbab25309146b_GettyImages-154320019.jpg",
  },
  {
    id: 6,
    name: "Brain Tumor Prediction",
    description:
      " The project is to train a model to predict brain tumors based on the MRI scan images",
    type: "Deep Learning | TensorFlow",
    demoLink: "https://github.com/Vindyani1999/Brain-Tumor-Prediction",
    image:
      "https://media.istockphoto.com/id/1335843440/photo/brain-cancer-showing-presence-of-tumor-inside-brain-3d-illustration.webp?b=1&s=170667a&w=0&k=20&c=lTytSEAusaFEUcYlcokCrZkV0JlXv0SLNUPGAr7k94c=",
  },

  {
    id: 7,
    name: "Loan Status Prediction",
    description:
      " The project is to identify the most suitable machine learning algorithm for given dataset",
    type: "ML | Logistic Regression | SVM  ",
    demoLink:
      "https://github.com/Vindyani1999/Machine-Learning-Loan-Status-Prediction",
    image:
      "https://moneyfactscompare.co.uk/media/wwqhe14b/loans-shark-cash-400x400px.png?center=0.760597660739639,0.44790751132445406&mode=crop&width=320&height=240",
  },
  {
    id: 8,
    name: "SpiceeExpress",
    description:
      " E commerce website which facilitate users to buy spices and delivery them to doorstep ",
    type: "MERN | TailwindCSS",
    demoLink: "https://github.com/Vindyani1999/Spicy-Delivery-System",
    image:
      "https://ca.brodandtaylor.com/cdn/shop/articles/Mixed_Spices_thumb_31c7029d-1d10-46a5-ab26-90d8c3f44b08_1024x.jpg?v=1648657023",
  },
  {
    id: 9,
    name: "E-School Mobile App ",
    description:
      "Mobile application which facilitates learning materials for school student in an attractive way.",
    type: " Android | Kotlin | Figma",
    demoLink: "https://github.com/Vindyani1999/E-School",
    image:
      "https://www.ionos.com/digitalguide/fileadmin/DigitalGuide/Websites/apps-c.jpg",
  },

  {
    id: 10,
    name: "Weather App(Figma Design)",
    description:
      "The figma design is for an user-friendly weather monitoring and forecasting website",
    type: " Figma | UI/UX",
    demoLink:
      "https://www.figma.com/design/ARsOtlpLE6imZGDQ6VYArr/LYXUX-Home-Page?node-id=264-7&t=OxzocZCWLGpTGejB-0",
    image: "/images/weather.png",
  },

  {
    id: 11,
    name: "Customize Figma Design",
    description:
      "The figma design is an user-friendly redesign for the home page of a given website.",
    type: " Figma | UI/UX",
    demoLink:
      "https://www.figma.com/design/ARsOtlpLE6imZGDQ6VYArr/LYXUX-Home-Page?node-id=264-7&t=OxzocZCWLGpTGejB-0",
    image: "/images/figma.png",
  },

  {
    id: 12,
    name: "CalBuddy ",
    description:
      " Creating a mobile app for standard calculator with basic functionalities",
    type: " Figma | UI/UX",
    demoLink: "https://github.com/Vindyani1999/Standard-Calculator",
    image:
      "https://thumbs.dreamstime.com/b/close-up-orange-power-button-c-calculator-150547599.jpg",
  },
  {
    id: 13,
    name: "3D Portfolio Website",
    description:
      "Personal website including projects page, about page, access to github, linkedin and medium",
    type: " NextJS | ThreeJS | Playground AI",
    demoLink: "https://github.com/sithuminikaushalya/My-Portfolio",
    image: "/images/portfolio.png",
  },
  {
    id: 14,
    name: "Pic2Text Mobile App",
    description:
      "The mobile application is developed for converting pictures into text  with copy and clear the screen features ",
    type: "Android | Java | GoogleML",
    demoLink: "https://github.com/Vindyani1999/Image-2-Text-Coverter",
    image:
      "https://thedatascientist.com/wp-content/uploads/2023/11/best-image-text-converter.jpg",
  },
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/sithuminikaushalya",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/sithumini-amarasinghe/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "X",
    link: "https://x.com/sithumini1215?t=A3mD3bFvRnME1ri8TWhSuQ&s=08",
    icon: "twitter",
    newTab: true,
  },
  {
    label: "Medium",
    link: "https://medium.com/@amarasinghesithumini",
    icon: "resume",
    newTab: true,
  },
];
