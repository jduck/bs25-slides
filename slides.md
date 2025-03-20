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
   * Reverse-engineered exploits, analyzed bugs
4. Kernel chapter author in Android Hacker's Handbook.

No. I have never tried to upstream anything.


## Disclaimer

The information presented here is the result of off-and-on research over decades.

I will try to be objective, but also share my opinions based on my experience.

I have tried to make sure information is current.

As always, I could have missed something.


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
   * Think sandbox escapes, rootkits...
5. Security features - LSM (SELinux, SMACK, etc), crypto, fscrypt, keyring
   * Can be attack surface too

---

<!-- .slide: class="ctitle" -->
# The Linux Foundation
<div class="ctitle-line"></div>

## $$$


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
2. <a href="https://alpha-omega.dev/">https://alpha-omega.dev/</a><br />
3. <a href="https://openssf.org/">https://openssf.org/</a><br />
<br />
</div>

Relevant projects:
* Events (ie Linux Security Summit)
* Alpha Omega (less Kernel focus)
* OpenSSF
  * <div class="site-quote">"seeks to make it easier to sustainably secure the development, maintenance, and consumption of the open source software (OSS) we all depend on."</div>
  * I am participating in Memory Safety SIG and Slack
* Kernel CI...

<aside class="notes">
We'll come back to Kernel CI...<br />
</aside>

---

<!-- .slide: class="ctitle" -->
# Rust for Linux
<div class="ctitle-line"></div>

## Is it the future?


## Rust for Linux - Drama?

Lots of recent (and past) drama
* Protesting Rust and multi-language codebases
* Maintainers quitting
* Removing selves from subsystems
* Quitting social media

The conspiracy theorist in me raises an eyebrow.

<aside class="notes">
One protest even occurred IRL during a conference talk!
</aside>


## Rust for Linux - Thoughts 1

<div class="footnote">
1. <a href="https://lore.kernel.org/rust-for-linux/2025021954-flaccid-pucker-f7d9@gregkh/">Greg-KH on Rust in Linux</a><br />
<br />
</div>

- A challenging project needs good leaders!
  - Greg KH is providing good leadership
  - Linus is providing fair leadership
- However, if you want Rust in your running kernel, use:
  - Asahi Linux on your Mac
  - Android (binder)

AFAIK No Rust code in other shipping kernels

:-/


## Rust for Linux - Thoughts 2

<div class="footnote">
1. <a href="https://newsletter.pragmaticengineer.com/p/how-linux-is-built-with-greg-kroah">https://newsletter.pragmaticengineer.com/p/how-linux-is-built-with-greg-kroah</a><br />
</div>

- Rust is versatile (low-level *and* high-level)
  - Greg thinks it would've eliminated 50% of past kernel bugs. I think more.
- A focus on Rust bindings for Kernel C APIs
  - Rust drivers use the bindings
- Adoption status is minimal
  - Currently 25,000 / 40,000,000 lines of code are Rust
  - 0.0625%
- Driving improvements in the C code!

<aside class="notes">

- Rust helps eliminate issues through its type system.
- I think the Rust for Linux approach is understandable, but not ideal.
</aside>


## Rust for Linux - Final Thoughts

- Alternatives like Redox OS's micro-kernel

- Sentiment is a mixed bag

- How can we accelerate Rust adoption in Linux?

- Would it be better to fork?

---

<!-- .slide: class="ctitle" -->
# Linux Kernel SDLC
<div class="ctitle-line"></div>

## A path forward


# What is an SDLC?

<div class="footnote">
1. <a href="https://youtu.be/-bFAeTfvMjo">Practical Steps for Securing the entire SDLC - https://youtu.be/-bFAeTfvMjo</a><br />
2. <a href="https://codesigningstore.com/secure-software-development-life-cycle-sdlc">Secure SDLC by CodeSigningStore (digicert)</a><br />
</div>

Secure (Software) Development Life Cycle
* A process design for developing secure code.

<div class="about-logos">
 <img src="/lib/img/ssdlc-process.png"><br />
<div style="font-size: 14pt">Image provided as an example only</div>
</div>


# Linux Development Model I

<div class="footnote">
1. <a href="https://newsletter.pragmaticengineer.com/p/how-linux-is-built-with-greg-kroah">https://newsletter.pragmaticengineer.com/p/how-linux-is-built-with-greg-kroah</a><br />
2. <a href="https://www.linuxfoundation.org/blog/blog/role-of-a-linux-kernel-maintainer">https://www.linuxfoundation.org/blog/blog/role-of-a-linux-kernel-maintainer</a><br />
</div>

* Maintainers all the way down
  * Tree maintainers
  * Subsystem maintainers
  * Driver/feature maintainers
* 80% of developers work on Linux for their employer
* A handful employed by Kernel Org project (guess who)
* Regular release cadence
  * "next", "stable", etc
  * 2 week merge window
  * 7 week regression period (RC)


# Linux Development Model II

* An organization of source trees
  * Varied ownership and practices
  * Often along maintainer lines
* Key metrics are number of contributors and lines of code
* Security knowledge is deprioritized


# Linux Development Model III

TODO: Lifecycle image for Linux


# Threat Modeling

* I am not aware of a Linux Kernel threat model.
* A couple of threat models for parts of the kernel
  - confidential computing and eBPF

I think this should change.


# Testing

<div class="footnote">
1. <a href="https://github.com/linux-test-project/ltp">https://github.com/linux-test-project/ltp</a><br />
2. <a href="https://linux-test-project.readthedocs.io/en/latest/">https://linux-test-project.readthedocs.io/en/latest/</a><br />
3. <a href="https://docs.kernel.org/gpu/automated_testing.html">https://docs.kernel.org/gpu/automated_testing.html</a><br />
</div>

* Test suites
  * kselftest
  * Linux Test Project
  * IGT (Intel Graphics Test?)
  * "Torture tests"
    * RCU, Locking
* Lots of manual testing
  * Does it boot? Does my thing work?
  * Done by developers, maintainers, etc.


# Linux Kernel CI (I)

<div class="footnote">
1. <a href="https://kernelci.org/">https://kernelci.org/</a><br />
2. <a href="https://github.com/kernelci/kcidb">https://github.com/kernelci/kcidb</a><br />
</div>

<div class="site-quote">

"KernelCI is a community-based open source distributed test automation system focused on upstream kernel development. The primary goal of KernelCI is to use an open testing philosophy to ensure the quality, stability and long-term maintenance of the Linux kernel."
</div>

* A separate LF project
  * About scalable, automated kernel testing
    * Basically modern DevOps for the Linux Kernel!
  * KCIDB attempts to glue together CI systems distributed accross company lines


# Linux Kernel CI (II)

<div class="footnote">
1. <a href="https://youtu.be/KD0Hk6PghPw">Kernel CI - How Far Can It Go?</a><br />
2. <a href="https://youtu.be/Gi298Frere0">Mentorship Session: KernelCI: Travel Guide 2024</a><br />
</div>

Two great talks from people from the KernelCI project.

<div class="site-quote">

* "testing happens in a separate space from development" Guillaume Tucker (@ 59:31)
</div>

I think there's room for improvement in testing and CI.
* For example, code coverage is a WIP

There is a new dashboard and cli tooling!!


# Kernel CTF

Google buys exploits for the Linux kernel!

* Goal is to learn from bugs and create mitigations
  * Bonuses for 0day (n-day allowed)
  * Exploits are published
    * Cross-cache attacks are the hotness

Rewards exploits, not fixing bugs :-/

TODO: Is there a table of KCTF submissions/payouts/reports/techniques?


# Security Response

<div class="footnote">
1. <a href="https://www.theregister.com/2017/11/20/security_people_are_morons_says_linus_torvalds/">https://www.theregister.com/2017/11/20/security_people_are_morons_says_linus_torvalds/</a><br />
</div>

* Old mantra: "Security problems are just bugs"
* Linux Kernel became a CNA!
  * Now: All bugs are security bugs and CVEs are assigned to everything.

Lots of top-notch public vulnerability research
* Are any kernel developers studying these??

There's a reason we treat security bugs differently.


# Community Projects

1. Almost all ran by Google employees
2. KSPP / kernel-hardening
    1. Meaningful patches to improve security
    2. KASLR - Argued to be marginally useful.
    3. Lately a bunch of "kcalloc" and "strscpy" changes

---

<!-- .slide: class="ctitle" -->
# Kernel Security Tooling
<div class="ctitle-line"></div>

## Yes, they exist!


# Security Tooling I

* KASAN - https://docs.kernel.org/dev-tools/kasan.html
  * Direct and actionable reports
  * Requires triggering a bug to find it
  * Used by syzkaller and some kernelCI projects
* KCSAN - https://docs.kernel.org/dev-tools/kcsan.html
  * Identify data races -- output often not actionable
  * Doesn't even boot with `CONFIG_KCSAN_STRICT=y`
* KCOV - https://docs.kernel.org/dev-tools/kcov.html
  * Kernel code coverage metrics


# Security Tooling II - syzkaller

<div class="footnote">
1. <a href="https://github.com/google/syzkaller">https://github.com/google/syzkaller</a><br />
</div>

<div class="site-quote">

"syzkaller ([siːzˈkɔːlə]) is an unsupervised coverage-guided kernel fuzzer."
</div>

* Completely open to the public, including PoC

TODO: Bugs found vs. bugs fixed


# Security Tooling III - Coverity

* Quasi-public. Anyone can sign up!
  * 128 members currently
* Defect density - number of bugs per thousand lines
  * Many outstanding "defects"
    * Coverity has a lot of false positives.

<img height="300px" src="/lib/img/linux-coverity.png" />


# Other Tools

<div class="footnote">
1. <a href="https://coccinelle.gitlabpages.inria.fr/website/impact_linux.html">https://coccinelle.gitlabpages.inria.fr/website/impact_linux.html</a><br />
2. <a href="https://github.com/a13xp0p0v/kernel-hardening-checker">https://github.com/a13xp0p0v/kernel-hardening-checker</a><br />
</div>

* Coccinelle Code transformation tool
  * For fixing bug patterns
* Smatch static checker by Dan Carpenter
* Linux Kernel Hardening Checker by Alexander Popov
  * Also Linux Defence Map and other tools
* grsecurity
  * Commercial kernel by OSS Inc

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


# Recommendations for LF

1. Increase focus on the Linux Kernel
2. Fund critical security functions
   * Build a threat model
   * Evaluate bugs for security impact
   * More audits please!
   * Bug bounty? Patch bounty?

Please throw more money at this problem space.


# ... for Linux Kernel Org

1. Embrace secure development processes
2. Accelerate Rust Adoption
3. Developer / Maintainer education
   * Encourage security training
   * Study commonly occurring classes of bugs
   * Learn from bugs and exploits in kernelCTF
     * Fix recurring exploit techniques (cross-cache)
4. Prioritize fixing bugs from syzkaller


# Recommendations for Users

1. Only give access to those you trust
   * Thankfully multi-user systems are less common
2. Limit your attack surface
   * virtual machines, SELinux, grsec, containers, capabilities, permissions


# Conclusion

* Linux kernel concurrency is complicated
* Increased risk due to syzkaller and kernelCTF
  * Lowers the bar for attackers
* Many improvements over the past 5-10 years
* Ongoing efforts look promising
* More progress is needed. Please help!

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

