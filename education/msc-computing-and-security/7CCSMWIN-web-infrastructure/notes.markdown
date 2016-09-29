---
layout: page
title: 7CCSMWIN Web Infrastructure
---

## Internet Backbones, NAPs and ISPs

Internet is loosely hierarchial:

 - **Level 1** NAPs
 - **Level 2** National Backbones
 - **Level 3** Regional ISPs Commercial
 - **Level 4** Local ISPs
 - **Level 5** End user and Business Networks (LAN)

### Scalability
The internet has hierarchial addressing (aaa.bbb.ccc.ddd (4 octets in IPv4)).

## Internet Structure

 - **Tier 1** links: OC-192 (10 Gbps) links.
 - **Tier 2** links: somewhat slower, ranging from OC-48 (2.5 Gbps) to OC-12 (620 Mbps). Usually serve large scale ISPs
 - **Tier 3** links: speeds range from OC-12 (620 Mbps) to OC-3 (155 Mbps). Connect smaller ISPs, universities and large businesses


## Cloud computing
> In a nutshell, cloud computing provides computation, software,
data access, and storage resources without requiring cloud users
to know the location and other details of the computing
infrastructure. - Wiki

- Pay as you go
- Elastic resource scalability
- on-demand

### Mobile Cloud Computing
Computation happens away from a mobile device in an application.

 - Extends battery life/energy efficiency.
 - Task migration.
 - Faster on dedicated hardware than varying capabilities of mobile devices.


## Caching
**Two main reasons:**

 - Reduce latency
 - Reduce network traffic

- Browser cache
- Proxy cache

## Domain Name System (DNS)
Translate between human-readable names to machine addresses (IP addresses).

### Anycast

A *multicast* address is used for one-to-many communication, with delivery to multiple interfaces. An *anycast* address is used for one-to-one-of-many communication, with delivery to a single interface.
