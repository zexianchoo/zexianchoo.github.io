import React from 'react';

const iconUrls = [
  // DevOps & Cloud Native
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg',
    href: 'https://kubernetes.io/',
    desc: 'Kubernetes',
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg',
    href: 'https://www.terraform.io/',
    desc: 'Terraform',
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
    href: 'https://www.docker.com/',
    desc: 'Docker',
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/helm/helm-original.svg',
    href: 'https://helm.sh/',
    desc: 'Helm',
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/argocd/argocd-original.svg',
    href: 'https://argo-cd.readthedocs.io/',
    desc: 'ArgoCD',
  },
  {
    url: 'https://framerusercontent.com/images/3IoQfdzvZUuQxJzxvc2ikExMapc.png?scale-down-to=512',
    href: 'https://kargo.akuity.io/',
    desc: 'Kargo',
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg',
    href: 'https://www.jenkins.io/',
    desc: 'Jenkins',
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg',
    href: 'https://github.com/features/actions',
    desc: 'GH Actions',
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg',
    href: 'https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/',
    desc: 'GitLab CI',
  },
  // Observability
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg',
    href: 'https://prometheus.io/',
    desc: 'Prometheus',
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg',
    href: 'https://grafana.com/',
    desc: 'Grafana',
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openstack/openstack-original.svg',
    href: 'https://www.openstack.org/',
    desc: 'OpenStack',
  },
  // Machine Learning
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg',
    href: 'https://pytorch.org/',
    desc: 'PyTorch',
  },
  {
    url: 'https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg',
    href: 'https://huggingface.co/',
    desc: 'HuggingFace',
  },
  // Web & Backend
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    href: 'https://react.dev/',
    desc: 'React',
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    href: 'https://tailwindcss.com/',
    desc: 'Tailwind CSS',
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg',
    href: 'https://www.djangoproject.com/',
    desc: 'Django',
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg',
    href: 'https://flask.palletsprojects.com/',
    desc: 'Flask',
  },
  // Databases
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg',
    href: 'https://www.mongodb.com/',
    desc: 'MongoDB',
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
    href: 'https://www.mysql.com/',
    desc: 'MySQL',
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    href: 'https://www.postgresql.org/',
    desc: 'PostgreSQL',
  },
];

const TechStack = () => {
  return (
    <div className="border-4 border-[#fda4af]">
      <p className="px-2 tech-text">My Tech Stack:</p>

      <div className="px-3 py-2">
        <div className="flex flex-wrap justify-center gap-3">
          {iconUrls.map((icon, index) => (
            <a
              key={index}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center rounded-md border-2 border-transparent p-2 hover:border-slate-800 hover:bg-[#fda4af] max-sm:w-10 max-sm:scale-75"
            >
              <img className="icon-size" src={icon.url} alt={icon.desc} />
              <span className="desc-text mt-2">{icon.desc}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;