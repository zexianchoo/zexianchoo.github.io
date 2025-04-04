import { Github, Mail, LinkedIn } from "../assets/icons"
import { spherical_world, obama_fake, driving_test, plane, chatbot } from '../assets/images'

export const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    // { href: "/timeline", label: "Timeline" },
    { href: "/contact", label: "Contact" }, 
    { href: "/poetry", label: "Poetry" }, 
];

export const footer_icons = [
    {src : Github, alt : "github-icon", href: "https://github.com/zexianchoo"},
    {src : LinkedIn, alt : "linkedin-icon", href: "https://www.linkedin.com/in/zexianchoo/"},
    {src : Mail, alt : "github-icon", href: "mailto:zxchoo2@illinois.edu"}
]


export const PURE_text = 'Working with a team to investigate real-time rendering of a spherical 3D world \
using Stable Diffusion and 3D Gaussian Splatting.\
 My portion includes understanding, training and tweaking Stable Diffusion models in a spherical context. \
 This includes optimizing the models to generate a seamless, spherical 3D world.'

 export const PURE_data = [ 
    {img_class: spherical_world, title: "Spherical World Generation", text: PURE_text, read_more_href: "/spherical"} 
]

export const deepfake_text = 'I managed to achieved ~95% AUC on an ensemble Deepfake Detection model, \
improving on state-of-the-art models with innovative use of video quality data as input. During \
 this project I worked with Vision Transformers and multimodal data models. I designed a UI for the detector,\
  and also published a open source Github repo with a multiprocessing video frame extractor.'

 export const Deepfake_data = [ 
    {img_class: obama_fake, title: "Deepfake Detection", text: deepfake_text, read_more_href: "/deepfake"} 
]

export const BBDC_text = 'I created an open source Github Repo with an automated Robotic Process\
 Automation bot, which automatically visits and books classes on the driving center\'s website \
 to book driving lessons, using Selenium. The bot was connected with Telegram through Heroku and Flask\
  to provide updates to the user.'

 export const BBDC_data = [ 
    {img_class: driving_test, title: "Automated Driving Lesson Booking Bot", text: BBDC_text, read_more_href: "/booking-bot"} 
]

export const GCP_text = 'Full-Stack Website'

 export const GCP_data = [ 
    {img_class: plane, title: "Full-Stack Airplane Evaluation Tool", text: GCP_text, read_more_href: "/full-stack"} 
]

export const ChatBot_text = 'Retrieval Augmented Generation (RAG) ChatBot'

 export const ChatBot_data = [ 
    {img_class: chatbot, title: "Retrieval Augmented Generation (RAG) ChatBot", text: ChatBot_text, read_more_href: "/chatbot"} 
]
