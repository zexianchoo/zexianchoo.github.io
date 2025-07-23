## What is a homelab and why should I build one?

The beginning of this article details high level considerations of what is a homelab, when to build one etc. If you are looking for the terraform + docker guide, click here.

### What is a homelab?

A homelab is a personal, self-contained environment set up at home for hosting various services. The power of homelabs come from the infinite customizability and differen open source apps you can run.

### Features

Homelabs give you the power to run many incredible self-hosted, and open source applications. These applications often rival or come close to their paid counterparts, while also giving you the autonomy and control over your own data. 

However, with great power comes great responsibility, and the journey to create a secure, highly available homelab is always a fun challenge which pushes you to the limits of your coding ability.

I highly recommend anyone that is interested in SRE, DevOps, or even cloud engineering play around with using an old laptop or computer as a homeserver to get a feel for the enourmous power at your fingertips as a developer.

### Costs

Homelabs come in all sorts of shapes and sizes. From the humble Raspberry Pi which you could get for less than 50USD (https://www.raspberrypi.com/products/raspberry-pi-4-model-b/), to insane NAS towers costing upwards of a few thousand dollars, homelabs cater to a vast majority of budgets and goals.

I technically paid nothing for my first homelab, as I started off using my old laptop as the server on which I ran my own homelab, and I am now expanding to my purchasing my own NAS and storage (https://www.bee-link.com/products/beelink-me-mini-n150)!

### Choosing your homelab infrastructure
For a few words of guidance on what to choose to run your homelab, what I typically look for are as follows:
- Electricity costs
- Upgrade potential
- Noise 
- Portability

Admittedly, laptops aren't designed to run 24/7, and systems such as the thermal management were not built with running a server in mind. Despite that, you can always start off with using a laptop as your first homelab, while ensuring consistent backups and duplication following the 3-2-1 backup rule.

---

## Open Source App Recommendations

https://github.com/awesome-selfhosted/awesome-selfhosted

I don't think I need to elaborate much on the vast potential of different services and applications that you can self host to improve your life. From blocking ads on the go (https://tailscale.com/ + https://github.com/AdguardTeam/AdGuardHome), to a photo management solution similar to Google Photos (https://immich.app), the posibilities are nigh endless.

Check out some homelab setups on reddit for some inspiration:
- https://www.reddit.com/r/selfhosted/comments/1lv8acd/2_years_self_hosted_finally_proud
- https://www.reddit.com/r/homelab/comments/1kw4kp0/made_a_diagram_of_my_homelab_what_do_you_guys


This is my current homelab setup (work in progress):

![Homelab Diagram](articles/homelab.png)

---

## Terraform + Docker setup for your first Homelab

I recommend that beginners start with just a simple Terraform and Docker set-up as it is a lot less complicated than something like kubernetes, or even proxmox virtualization.

I assume that most of you already know what Docker and Containerization is. If you dont, you can refer to many guides online on what it is and how Docker works (https://docs.docker.com/get-started/).

Terraform, however, might be something that isn't publically as well known. In simple words, Terraform is a Infrastructure-as-Code (IaC) tool, which means that users can write out plans for the terraform operator to spin up both software (docker containers) or hardware (literal instances in aws). 

In our case for the homelab, we will use Terraform as it allows us to have well defined plans detailing what containers to spin up, as well as the potential environment variables that you want passed into the docker container.

This menas that if you ever shift your set up to another server, you can always readily spin up the server with just a few lines of code and commands.

## Cloudflare

![Cloudflare Diagram](articles/cloudflare.png)

People have a serious love hate relationship with Cloudflare. On one hand, it defeats the purpose of having full autonomy since your traffic fully passes through Cloudflare's proxies when you use their tunnel service. On the other hand, the cloudflare tunnel allows you to not need to forward any ports, and effectively masks your ip from the rest of the world when you run a publically accesible home server.

Not to mention, Cloudflare also had a data breach in 2023, which is always a cause for concern as a lot of your own personal data and information could be leaked.

There are many pros and cons, but I decided to start off this guide with using Cloudflare since it is easily accessible, and also easy to set up, while being decently secure, so there are less opporutunities for security screw ups.

When you feel like you are ready, you could look into tailscale as a way to securly expose your private services over your own VPN.

### Setting up Cloudflare


``` C++
int lol = 5;
```