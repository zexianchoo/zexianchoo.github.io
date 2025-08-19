## What is a homelab and why should I build one?

The beginning of this article details high level considerations of what is a homelab, when to build one etc. If you are looking to go straight to the terraform + docker guide, click here.

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

In addition, cloudflare also provides DDos protection, caching, as well as a fast backbone network that may route traffic faster than if we just relied on BGP through other routers.

Not to mention, Cloudflare also had a data breach in 2023, which is always a cause for concern as a lot of your own personal data and information could be leaked.

There are many pros and cons, but I decided to start off this guide with using Cloudflare since it is easily accessible, and also easy to set up, while being decently secure, so there are less opporutunities for security screw ups.

When you feel like you are ready, you could look into tailscale or wireguard as a way to securly expose your private services over your own VPN. I will also be making a guide on tailscale in the future.

# Terraform + Cloudflare guide

## Setting up Cloudflare

We will be looking to use cloudflare tunnels because it masks your ip. Your server runs a small piece of software called cloudflared. This software creates a connection to Cloudflare's edge network, forming a secure tunnel. When a user visits your domain (e.g., yourwebsite.com), the DNS record will point to Cloudflare. Traffic to your domain will be routed to a Cloudflare edge server which is then sent through the tunnel that your server established. The traffic flows from the Cloudflare edge server directly to your server via this secure connection. 

Sign up for cloudflare here, and make an account. https://dash.cloudflare.com/sign-up

## Getting a domain

I recommend porkbun.com for a domain because they are generally cheaper. You can pick domains with weird top-level domains (TLDs) because they are generally cheaper. However, a weird tld may have an impact on your search engine optimization (SEO) if you are looking to run a business with your homeserver. In addition, a future consideration would also be your domain reputation / filtering if you are ever thinking of hosting an (Simple Mail Transfer Protocol) SMTP server, but it really isnt a huge factor.

There are a multitude of other places you can get domains too, so do your own research for your favorite domain name!

[image for onboarding]

## Setting up DNS Nameservers (NS):

Cloudflare provides an excellent onboarding process, so if you follow it you should most probably be fine. One of the key things is ensuring that you update the nameservers to be cloudflare here:

[image for NS]

It may take up to a day for your domain to migrate to cloudflare NS. in the meantime:

## Setting up your homeserver:

You are presented with a huge amount of choices:
- proxmox ve
- linux based servers
- windows servers
- red hat images 

so on and so forth. You technically do not need to change your OS or partition for a new OS, but i highly recommend starting off with ubuntu or debian just because they are usually very highly supported.

If you wish to stick with Windows (or whatever you have), you can skip to the next section. I will be describing how to dual boot ubuntu below:

1. Install BalenaEtcher https://etcher.balena.io/
2. Download the ISO for ubuntu https://ubuntu.com/download/server (generally pick a LTS (long term support) iso, its stable)
3. Flash the OS onto an external disk like a USB using Balena Etcher
4. Right-click the Start button and select Disk Management from the menu. You can also press Windows + R, type diskmgmt.msc, and hit Enter.
5. Find a partition which has empty space for the server. I recommend at least 100GB, and if you really need to keep files on the windows partition, you can mount the windows partition into the linux filesystem later on to access the files.
6. Shrink the partition by right clicking on it and format it as NTFS.
I highly recommend following this video: https://www.youtube.com/watch?v=pXUemLOEv9I
7. Take note of the disk letter. 
8. Search for whatever your manufacturer's button is to enter BIOS on restart
9. Plug your USB in and restart your computer. spam that button you found in step 8.
10. Go into BIOS, change the boot order to boot from the USB
11. Start the Ubuntu Installer and select the empty partition you made earlier, and run the installer. Do not yank the USB at any point.
12. Now you are done!!! There are many guides on youtube that you walk you through this process

Such as: https://www.youtube.com/watch?v=GXxTxBPKecQ

## Homeserver set up:

1. Make a gh repo to track your homeserver infra. Usually, you can leave this as private because you may accidentally leak api keys (been there done that). 
I made an example gh repo that you can fork to get a head start:

https://github.com/zexianchoo/example-homelab-terraform

2. install terraform and terragrunt and docker, https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli, https://terragrunt.gruntwork.io/docs/getting-started/install/, https://docs.docker.com/engine/install/
3. Get a cloudflare api key. https://developers.cloudflare.com/fundamentals/api/get-started/create-token/ and put it into `env-vars.yml`
4. Set up the rest of `global-vars.yml`
5. Now, install cloudflared https://pkg.cloudflare.com/index.html
6. Now, set up a cloudflared tunnel following this guide: https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/get-started/create-remote-tunnel/

7. I tend to prefer having my own config.yml, which i run 
`cloudflared tunnel --config config.yml run <tunnel_name>`

The config.yml looks something like this:

``` yaml
#config.yaml
tunnel: {tunnel UUID}
credentials-file: /path/to/cred/file

ingress:
  - hostname: '{subdomain}.{domain}'
    service: http://{local_ip}:{port}
  - hostname: {subdomain}.{domain}
    service: http://{local_ip}:"{port}"
    originRequest:
      httpHostHeader: {subdomain}.{domain}
  - hostname: "*.{domain}"
    service: http://{local_ip}:80
  - service: http_status:404
```
the creds file should have been populated in your set up earlier in step 6.

The last http_status:404 is mandatory. The tunnel UUID should be visible on the cloudflare dashboard, as well as during the setup in step 6.

Now, there should really only be one hostname, which is `*.yourdomain.com`, with the service pointing to localhost:80. This is because we will be installing caddy as a reverse proxy to route all traffic to their respective containers.

### What about HTTPS?? why are we using port 80???
TLS will be terminated at the cloudflare tunnel, and all of the networking from then on will be local to your homeserver, so TLS is not required. If you really want HTTPS wihtin your homeserver (which is completely valid), you will have to install cloudflare certs on all of your containers (or just caddy), and route your requests to :443 instead.

# Reverse Proxy set up:
I started off with caddy since it is simpler, and i also provided a caddy image which auto-issues certs for HTTPS within the homeserveri fy ou want it. You can also explore other reverse proxies, like nginx and traefik.

Navigate to infra-live and run `terragrunt run-all apply`. This will spin up all of the containers listed within infra-live directory with a terragrunt hcl within them, which points to the terraform modules in infra-modules directory.

After it spins up, you should see that the docker containers will have created their mounts in the volumes directory (./volumes)

navigate to ./volumes/caddy/caddy-config/Caddyfile

## Caddyfile
The caddyfile is the most important place to route all traffic. It is what tells caddy which routes are valid and which routes are not, as well as which are the port numbers each subdomain points to.

The simplest config is as follows: 
``` yaml
{
http://glance.yourdomain.com {
	reverse_proxy http://127.0.0.1:8080
}
```
This tells caddy that if it receives any traffic for the domain `glance.yourdomain.com`, it will route it to localhost port 8080, which should be where glance exposes its port.

One last thing you have to ensure is to got to your domain on cloudflare and click on the DNS tab.

There, create a new CNAME record, with subdomain being `glance` and target being `<your_tunnel_uuid>.cfargotunnel.com`. Remember the `cfargotunnel.com` suffix for the cloudflare argo tunnel, and to ensure that the proxy status is set to be on (i.e. orange)

The link is now complete!!

User -> cloudflare edge server -> cloudflare tunnel -> caddy -> glance container.

And with that, you have created your own home server!! 

Feel free to add other docker containers you may want, and update the different configurations on dash.cloudflare.com as well as the Caddyfile., and run `terragrunt run-all apply`.

There is so so so much more that I can get into, but I hope that this little guide served as a great starting resources for anyone that has a spare laptop and a love for building!

