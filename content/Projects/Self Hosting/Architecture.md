---
date: 2025-03-01
featured: 'true'
image: UnraidArchitecture.png
public: 'true'
summary: Discover how to efficiently manage and deploy a variety of self-hosted services
  by balancing local infrastructure tools like Docker on Unraid with external platforms
  such as GitHub Actions. Learn about optimizing different applications, from blogs
  to task management tools, leveraging automation and seamless integration for robust
  online solutions.
title: Self-Hosted Services with Unraid
---

![](/UnraidArchitecture.png)
## Purpose
- Self hosted backup and network storage including multi-tier storage:
	- NVME Docker Drive (1TB): Host Docker Services
	- NVME Cache Drive(1TB): Cache drive for Array 
		- Automatically moved to Array periodically
	- SSD ZFS Raid-Z1 (4x2 tb): High speed local storage for requiring quick access:
		- Photo Storage
		- Cloud Services
	- Array(Spinning Rust): 
		- XFS(14 tb):  Primary long term storage of local files
		- ZFS(14 tb): Backup from SSD Cache
		- Parity Disk (20 tb)
- Privacy: Remove dependancies on google/apple cloud services
- Personal Knowledge Management


## Hardware
- Case: Jonsbo N4 https://www.jonsbo.com/en/products/N4Black.html
- Motherboard: ASRock X570M Pro4 https://www.asrock.com/mb/AMD/X570M%20Pro4/
- CPU: Ryzen 5 PRO 4650GE https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen-pro/ryzen-pro-4000-series/amd-ryzen-5-pro-4650ge.html
- RAM: 64gb ECC: Kingston KSM26ED8 x4 https://www.kingston.com/datasheets/KSM26ED8_16HD.pdf
- GPU: Nvidia ada 4000 sff: https://www.nvidia.com/en-us/design-visualization/rtx-4000-sff/
- Cache: NVME: 2x 1TB Crucial
- ZFS: SSD: 4x 2TB Various
- Array: HDD: 2x 14 TB & 1x 20TB Ironwolf NAS Drives
- ICY DOCK 4 Bay 2.5"
- Slim USB Blu-ray RW Drive

### Case Modifications
Removed HDD/SSD Cage bottom right of case to make room for Icy Dock 2.5".  Only the the left hdd cage in the unit had a back plane.
Resources:
- 5.25 Drawer: https://makerworld.com/en/models/29034-5-25-inch-pc-drawer-v2
![](/Pasted image 20250317082250.png)
## Internal Services
- Gitea 
- Home Assistant
- Ollama
- Open WebUI
- Traefik
- Immich
- Authentik
- Traefik
- Dashy
- Cups
- Obsidian
- VS-Code

## External Services

- Cloudflare
- Github