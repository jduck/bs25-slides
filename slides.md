# Agenda

- Introduction
- The Linux Foundation
- Rust for Linux
- Comparison with SDLC
- Bug Case Study
- Conclusion

---

<!-- .slide: class="ctitle" -->
# Introduction
<div class="ctitle-line"></div>

## A bit of background


# About me

<div class="delphos">

* Principal Security Researcher at <img src="/lib/img/delphos.png" />
</div>

<div class="magsec">

* Founder at <img height=120px src="/lib/img/magsec-bgb.png" /> Magnetite Security
</div>

Previously:
<div class="about-logos">
 <img height=120px src="/lib/img/amsec-trans-w.png" />
 <img height=120px src="/lib/img/sflogo.png" />
 <img height=120px src="/lib/img/ahh.png" />
 <img height=120px src="/lib/img/msf.svg" />
 <img height=40px src="/lib/img/idef.png" />
</div>


## Acknowledgments

Tremendous thanks to all of the Linux kernel contributors, especially those working to secure Linux.

Thanks to kees, ilja, roddux, all the awesome people from my workplace, family, and friends.


## Background of Involvement

1. User of Linux since 1993, steadily since
2. Vulnerability research and exploit development
3. Kernel chapter author in Android Hacker's Handbook.
4. Developed and reverse-engineered exploits.

No. I have never tried to upstream anything.


## Disclaimer

The information presented here is the result of research.

As always, I could have missed something.

I try my best to be objective.


## What is the Linux Kernel?

<div class="site-quote">
"The Linux Kernel Organization is a California Public Benefit Corporation established in 2002 to distribute the Linux kernel and other Open Source software to the public without charge. We are recognized by the IRS as a 501(c)3 private operating foundation."
</div>

The low-level OS software in Linux distributions, Android, etc.

It runs with high privilege (ring 0) and has direct access to hardware.

<aside class="notes">
Raise your hand if... <br />
 You know what the Linux kernel is <br />
 You used Linux on your own computer <br />
 You have compiled your own kernel <br />
 You have read kernel source code
</aside>


## Why research Linux Kernel Security?

1. Ubiquitous - on billions of devices
   * Supply chain attack risk
2. Extremely large attack surface
3. Complicated C codebase
4. Persistent and surreptitious access domain
   * Think rootkits...
5. Security features - LSM (SELinux, SMACK, etc), crypto, fscrypt, keyring
   * Can be attack surface too

<aside class="notes">
</aside>

---

<!-- .slide: class="ctitle" -->
# The Linux Foundation
<div class="ctitle-line"></div>

## What is that?


# Linux Foundation - Intro

<div class="site-quote">
"Decentralized innovation. Built on trust.

The Linux Foundation is a neutral, trusted hub for developers and organizations to code, manage, and scale open technology projects and ecosystems."
</div>

Revenue of 250+ million annually
* Spends < 5 million on Kernel Org


# Linux Foundation - Projects

<div class="footnote">
1. <a href="https://www.linuxfoundation.org/projects">Linux Foundation Projects - https://www.linuxfoundation.org/projects</a><br />
<br />
</div>

* Currently 700+ projects listed.
* The Linux kernel is *ONE* of those.

<img height="350px" src="/lib/img/projects-screeny.png" />


# Linux Foundation - Research

<div class="footnote">
1. <a href="https://www.linuxfoundation.org/research">Linux Foundation Research - https://www.linuxfoundation.org/research </a><br />
</div>

<div class="site-quote">
"LF Research publishes actionable and decision-useful insights into open source software, hardware, standards, and data based on empirical research methodologies. Through leveraging community networks, project databases, surveys, and qualitative findings, and through its commitment to best practices in primary research, Linux Foundation Research is the definitive home for data-driven insights into open source for the benefit of governments, enterprises, and society at large."
</div>

It's market research.


# Linux Foundation - Training

<div class="footnote">
1. <a href="https://training.linuxfoundation.org/full-catalog/?_sft_topic_area=cybersecurity">https://training.linuxfoundation.org/full-catalog/?_sft_topic_area=cybersecurity</a><br />
</div>

They have lots of relevant classes!

Costs $0, $995, or $3250

Do contributors take these?

What about maintainers?


# Linux Foundation - Security

<div class="footnote">
1. <a href="https://www.linuxfoundation.org/lf-security">Linux Foundation Security - https://www.linuxfoundation.org/lf-security</a><br />
2. <a href="https://openssf.org/">https://openssf.org/</a><br />
</div>

Relevant projects:
* Events (ie Linux Security Summit)
* Alpha Omega
* OpenSSF
  * <div class="site-quote">"seeks to make it easier to sustainably secure the development, maintenance, and consumption of the open source software (OSS) we all depend on."</div>
  * Participating in Memory Safety SIG and Slack
* Kernel CI

<aside class="notes">
We'll come back to Kernel CI...<br />
</aside>

---

<!-- .slide: class="ctitle" -->
# Rust for Linux
<div class="ctitle-line"></div>

## Are we there yet?


## Rust for Linux - Drama?

Lots of recent (and past) drama
* Protesting Rust and multi-language codebases
* Maintainers quitting
* Removing selves from subsystems
* Quitting social media

<aside class="notes">
One protest even occurred IRL during a conference talk!
</aside>


## Rust for Linux - Thoughts 1

- A challenging project!
- Linus and Greg KH are providing fair leadership
- However, if you want Rust in your running kernel, use:
  - Asahi Linux on your Mac
  - Android (binder)

AFAIK No Rust code in other shipping kernels

:-/


## Rust for Linux - Thoughts 2

- Rust is versatile (low-level *and* high-level)
- A focus on Rust bindings for Kernel C APIs
  - Rust drivers use the bindings
- IMHO need Rust acceleration
- Would it be better to fork?
- Alternatives like Redox OS's micro-kernel

---

<!-- .slide: class="ctitle" -->
# A Linux SDLC?
<div class="ctitle-line"></div>

## Wait, what?


# What is an SDLC?

<div class="footnote">
1. <a href="https://www.cl.cam.ac.uk/research/security/ctsrd/cheri/">https://www.cl.cam.ac.uk/research/security/ctsrd/cheri/</a><br />
2. <a href="https://www.morello-project.org/">https://www.morello-project.org/</a>
</div>

TODO: Lifecycle image


# Linux Development Model

* Tree maintainers and subsystem maintainers
* 80% of developers work on Linux for their employer
* A few employed by Kernel Org project (guess who)
* An organization of source trees
  * Varied ownership and practices
  * Often along maintainer lines
* Regular release cadence
* "next", "stable", etc
* Strange metrics (number of contributors, lines of code)
* Then: All bugs are bugs and security bugs are no different
* Now: All bugs are security bugs and CVEs are assigned


# Threat Modeling


# Testing

* TODO: Torture tests?


# Linux Kernel CI

* A separate LF project

TODO: MORE on Kernel CI


# KASAN

1. Finds bugs and output is actionable (pointing directly to where to look)
2. Unfortunately requires triggering a big to find it


# KCSAN

1. Doesn't even boot with CONFIG_KCSAN_STRICT=y
2. Does work to identify race bugs, but output often not actionable


# KCOV

Kernel covereage


# syzkaller

1. Bugs found vs. bugs fixed
2. Completely open to the public, including PoC


# Coverity

1. Quasi-public. Anyone can sign up
2. 120 members currently
3. Defect density is number of bugs per thousand lines
4. ~ 1.0 defect density, 20m lines of code - 22,000 outstanding defects
5. Somewhat understandable that these don't get burned down
    1. Coverity has a lot of false positives.


# Other Tools

https://github.com/a13xp0p0v/kernel-hardening-checker

Coccinelle
Smatch
grsecurity (commercial)
Linux Kernel Hardening Checker


# Security Response

Linux Kernel CNA
1. Every bug gets a CVE
2. Lots of top-notch public vulnerability research
    1. Are the kernel developers watching??


# Community Projects

1. Almost all ran by Google employees
2. KSPP / kernel-hardening
    1. Meaningful patches to improve security
    2. KASLR - Argued to be marginally useful.
    3. Lately a bunch of "kcalloc" and "strscpy" changes


# Kernel CTF

1. Google buys exploits for Linux kernel vulns
2. Bonuses for 0day
3. Exploits published
4. Goal is to learn from bugs and create mitigations
5. Cross-cache attacks are the hotness

---

<!-- .slide: class="ctitle" -->
# A Case Study
<div class="ctitle-line"></div>

## Linux Keys UAF


# Backstory

Recently decided to dig for kernel CTF
Signed up for Coverity access
Correlating syzkaller findings


# Technical details I

Race condition leads to UAF
Takes a while to trigger


# Technical details II

Patch that introduced the issue


# Technical details III

TODO: sequence diagram of what's happening


# Exploitable?

Consequence seems pretty limited
More research is needed


# Disclosure

Getting it fixed...

TODO: about how disclosure went

---

<!-- .slide: class="ctitle" -->
# Conclusion
<div class="ctitle-line"></div>

## Let's wrap up


# Conclusions

* Many improvements over the past 5-10 years
* More progress is needed
* Linux kernel concurrency is complicated


# Recommendations

1. Build a threat model
1. Limit attack surface
1. Embrace secure development processes
2. Invest in safe programming practices
    1. All the safeties (Memory, Thread, Type)
    2. Accelerate Rust adoption
3. Fix bug classes (ie cross-cache attacks)
1. Fund security research (ie bug bounty)
4. Developer education / learn from mistakes
5. Train maintainers on security
  * Especially on commonly occurring classes of bugs
7. Prioritize fixing bugs from syzkaller
8. Learn from exploits in kernelCTF


# Call to Action I

TODO: call people to action!

---

<!-- .slide: class="discussion" -->
# Thanks for your time!

## Any questions or comments?

Find me later:
<div class="contactinfo">
Joshua J. Drake<br />
jduck on the Internet<br />
<a href="https://jduck.me/">https://jduck.me/</a>
</div>

---

# About these slides

Slides were created in <a href="https://revealjs.com/markdown/">markdown with reveal.js</a>

You can export by printing the <a href="/?print-pdf">PDF</a>

---

<div class="fin">the real end. really.</div>

