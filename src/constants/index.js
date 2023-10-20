import { Github, Mail, LinkedIn } from "../assets/icons"
import { spherical_world } from '../assets/images'

export const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/timeline", label: "Timeline" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" }, 
];

export const footer_icons = [
    {src : Github, alt : "github-icon", href: "https://github.com/zexianchoo"},
    {src : LinkedIn, alt : "linkedin-icon", href: "https://www.linkedin.com/in/zexianchoo/"},
    {src : Mail, alt : "github-icon", href: "mailto:zxchoo2@illinois.edu"}
]

export const PURE_text = 'Working with a team to investigate real-time rendering of a spherical 3D world \
using Stable Diffusion and 3D Gaussian Splatting.\
 My portion includes understanding, training and tweaking Stable Diffusion models in a spherical context. \
 This means optimizing the models for generating a seamless, spherical 3D image.'

export const deepfake_text = 'Working with a team to investigate real-time rendering of a spherical 3D world \
using Stable Diffusion and 3D Gaussian Splatting.\
 My portion includes understanding, training and tweaking Stable Diffusion models in a spherical context. \
 This means optimizing the models for generating a seamless, spherical 3D image.'

export const PURE_data = [ 
    {img_class: spherical_world, title: "Spherical World Generation", text: PURE_text, read_more_href: "/"} 
]