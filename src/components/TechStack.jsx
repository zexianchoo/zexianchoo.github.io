import React from 'react'
const iconUrls = [

    {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
        href: "https://www.terraform.io/",
        desc: "Terraform"
    },

    {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
        href: "https://kubernetes.io/",
        desc: "Kubernetes"
    },

    {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        href: "https://www.docker.com/",
        desc: "Docker"
    },

    {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        href: "https://aws.amazon.com/",
        desc: "AWS"
    },
    
    {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
        href: "https://pytorch.org/",
        desc: "pytorch"
    },

    {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
        href: "https://www.tensorflow.org/",
        desc: "tensorflow"
    },

    {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original-wordmark.svg",
        href: "https://opencv.org//",
        desc: "OpenCV"
    },

    {
        url: "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg",
        href: "https://huggingface.co/",
        desc: "HuggingFace"
    },

    {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        href: "https://react.dev/",
        desc: "React"
    },

    {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        href: "https://tailwindcss.com/",
        desc: "tailwindcss"
    },

    {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
        href: "https://www.mongodb.com/",
        desc: "mongoDB"
    },
    {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        href: "https://www.mysql.com/",
        desc: "MySQL"
    },

    {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        href: "https://www.postgresql.org/",
        desc: "PostgreSQL"
    },
    {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
        href: "https://cloud.google.com/",
        desc: "GCP"
    },

    {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        href: "https://www.java.com/en/",
        desc: "Java"
    },
    {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
        href: "https://angular.io/",
        desc: "Angular"
    },
    {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
        href: "https://cplusplus.com/",
        desc: "C++"
    },
    {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
        href: "https://www.djangoproject.com/",
        desc: "django"
    },
    {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
        href: "https://flask.palletsprojects.com/en/3.0.x/",
        desc: "flask"
    },


  ];

const TechStack = () => {
  return (
    <div className='border-gradient-to-b border-4 border-[#fda4af]'>

    <p className='px-2 tech-text'>
        My Tech Stack:
    </p>

    <div className='py-2 px-6'>

    <div className='flex flex-wrap gap-x-4 gap-y-4'>
        {iconUrls.map((icon, index) => (
            <div key={index} className='flex flex-col items-center w-20 max-sm:scale-75 max-sm:w-10
                border-slate-800 border-2 border-transparent hover:bg-[#fda4af] hover:border-slate-800'>
                <a href={icon.href} target="_blank" rel="noopener noreferrer">
                    <img className='icon-size' src={icon.url} alt={`Icon ${index}`} />
                </a>
                <a href={icon.href} target="_blank" rel="noopener noreferrer">
                    <button className="desc-text mt-2">
                        {icon.desc}
                    </button>
                </a>
            </div>
        ))}
    </div>
    </div>
    </div>
  )
}

export default TechStack