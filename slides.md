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


## Acknowledgements

Tremendous thanks to all of the Linux kernel contributors, especially those working to secure Linux.

Thanks to kees, ilja, roddux, all the awesome people from my workplace, family, and friends.


## Background of Involvement

1. User of Linux since 1993, steadily since
2. Vulnerability research and exploit development
3. Kernel chapter author in Android Hacker's Handbook.
4. Developed and reverse-engineered exploits.

No. I have never tried to upstream anything.


## Disclaimer

I try my best to be objective.


## What is the Linux Kernel?

<div class="site-quote">
"The Linux Kernel Organization is a California Public Benefit Corporation established in 2002 to distribute the Linux kernel and other Open Source software to the public without charge. We are recognized by the IRS as a 501(c)3 private operating foundation."
</div>

The low-level OS software in Linux distrubutions, Android, etc.

It runs with high privilege (ring 0) and has direct access to hardware.

<aside class="notes">
Raise your hand if... <br />
 You know what the Linux kernel is <br />
 You used Linux on your own computer <br />
 You have compiled your own kernel <br />
 You have read kernel source code
</aside>

---

<!-- .slide: class="ctitle" -->
# The Linux Foundation
<div class="ctitle-line"></div>

## What is that?


# Linux Foundation I

"Decentralized innovation. Built on trust.

The Linux Foundation is a neutral, trusted hub for developers and organizations to code, manage, and scale open technology projects and ecosystems."

Revenue of 250+ million annually


# Linux Foundation II - Projects

<div class="footnote">
1. <a href="https://www.linuxfoundation.org/projects">Linux Foundation Projects - https://www.linuxfoundation.org/projects</a><br />
<br />
</div>

* Currently 700+ projects listed.
* The Linux kernel is *ONE* of those.

<img height="350px" src="/lib/img/projects-screeny.png" />


# Linux Research I

<div class="footnote">
1. <a href="https://www.linuxfoundation.org/research">Linux Foundation Research - https://www.linuxfoundation.org/research </a><br />
</div>

<div class="site-quote">
"LF Research publishes actionable and decision-useful insights into open source software, hardware, standards, and data based on empirical research methodologies. Through leveraging community networks, project databases, surveys, and qualitative findings, and through its commitment to best practices in primary research, Linux Foundation Research is the definitive home for data-driven insights into open source for the benefit of governments, enterprises, and society at large."
</div>

It's market research.


# Linux Research II

What are they actually researching?

* They are not researching Linux kernel security.
* They're researching ways to get Linux into more things.

I signed up and got LOTS of emails.

Now unsubscribed.


# Linux Foundation Training

<div class="footnote">
1. <a href="https://training.linuxfoundation.org/full-catalog/?_sft_topic_area=cybersecurity">https://training.linuxfoundation.org/full-catalog/?_sft_topic_area=cybersecurity</a><br />
</div>

They have lots of relevant classes!

Costs $0, $995, or $3250

Do contributors take these?

What about maintainers?


# LF Security Investments

<div class="footnote">
1. <a href="https://www.linuxfoundation.org/lf-security">Linux Foundation Security - https://www.linuxfoundation.org/lf-security</a><br />
2. <a href="https://openssf.org/">https://openssf.org/</a><br />
</div>

Best efforts:
* Events (ie Linux Security Summit)
* Alpha Omega
* OpenSSF
  * <div class="site-quote">"seeks to make it easier to sustainably secure the development, maintenance, and consumption of the open source software (OSS) we all depend on."</div>
  * Particpating in Memory Safety SIG
* Do you know others?

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


## Rust for Linux - Takeaways

- Linus and Greg KH are providing fair leadership
- If you want Rust in your kernel by default:
  - Use Asahi Linux on your Mac
  - Use Android (binder) (TODO: CONFIRM)

AFAIK No Rust code in other shipping kernels

:-/

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


# TODO - more slides

---

<!-- .slide: class="ctitle" -->
# A Case Study
<div class="ctitle-line"></div>

## Linux Keys UAF


# TODO - more slides

---

<!-- .slide: class="ctitle" -->
# Conclusion
<div class="ctitle-line"></div>

## Let's wrap up


# Conclusions

TODO: call people to action!


# Recommendations

TODO: call people to action!


# Call to Action I

TODO: call people to action!

---

<!-- .slide: class="discussion" -->
# Thanks for your time!

## Any questions or comments?

Feel free to reach out later:
<div class="contactinfo">
Joshua J. Drake<br />
jduck @ Twitter/Discord/Mastadon/etc<br />
</div>

---

# About these slides

Slides were created in <a href="https://revealjs.com/markdown/">markdown with nreveal.js</a>

You can export by printing the <a href="/?print-pdf">PDF</a>

---

<div class="fin">the real end. really.</div>

