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

## $$$ ???


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

- Developer sentiment is a mixed bag

- How can we accelerate Rust adoption in Linux?

- Would it be better to fork?

---

<!-- .slide: class="ctitle" -->
# Linux Kernel SDLC
<div class="ctitle-line"></div>

## Where does security happen?


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


# Linux Development Model II

* Regular release cadence
  * "next", "stable", etc
  * 2 week merge window
  * 7 week regression period (RC)
* Key metrics are number of contributors and LoC
* An organization of source trees
  * Varied ownership and practices
  * Often along maintainer lines
* Security knowledge is deprioritized


# Linux SDLC?

<img height="500px" src="/lib/img/kci-flow.png" />


# Threat Modeling

* I am not aware of a Linux Kernel threat model.
* A couple of threat models for parts of the kernel
  - confidential computing and eBPF

I think this should change.


# Community Projects

<div class="footnote">
1. <a href="https://kspp.github.io/">https://kspp.github.io/</a><br />
</div>

**Most** kernel security efforts are **community projects**.

1. Kernel Self-Protection Project (KSPP)
    1. Founded in response to grsec going commerical
    2. Upstream meaningful patches to improve security
       * KASLR, etc
    3. kernel-hardening mailing list
2. syzkaller - more later
3. kernelCTF - more later

These are all ran by Google!


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
  * "Torture tests" (RCU, Locking)
* Lots of manual testing
  * Does it boot? Does my thing work?
  * Done by developers, maintainers, etc.

Looks like a lot, but really isn't.


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

<div class="about-logos">
<img height="100px" src="/lib/img/kernelci.svg" />
</div>


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

This project has a lot of potential!


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


# Kernel CTF

<div class="footnote">
1. <a href="https://google.github.io/security-research/kernelctf/rules.html">https://google.github.io/security-research/kernelctf/rules.html</a><br />
2. <a href="https://youtu.be/dUdU0lp35xU">Cross-CPU Allocation to Exploit Preempt-Disabled Linux - Hexacon 2024 on YouTube</a><br />
</div>

Google buys **exploits** for the Linux kernel!

* Goal is to study exploits to create mitigations
  * Bonuses for 0day (n-day allowed)
  * Exploits are published
    * Cross-cache attacks are the hotness

Rewards exploits, not fixing bugs :-/


# Kernel CTF II

kCTF uses a submission window system

1. Only one winner per release window
2. Only pays out for exploits
3. Even custom mitigations continually bypassed

This project increases public risk.

1. Public tools to help kids bypass KASLR, cross-cache
2. Example exploits to study, copy, train on
3. Doesn't help with getting bugs fixed

---

<!-- .slide: class="ctitle" -->
# Kernel Security Tooling
<div class="ctitle-line"></div>

## Yes, they exist!


# Security Tooling I

* KCOV - https://docs.kernel.org/dev-tools/kcov.html
  * Kernel code coverage metrics
* KASAN - https://docs.kernel.org/dev-tools/kasan.html
  * Direct and actionable reports
  * Requires triggering a bug to find it
  * Used by syzkaller and some kernelCI projects
* KCSAN - https://docs.kernel.org/dev-tools/kcsan.html
  * Identify data races -- output often not actionable
  * Doesn't even boot with `CONFIG_KCSAN_STRICT=y`
* Other sanitizers - https://google.github.io/kernel-sanitizers/


# Security Tooling II - syzkaller

<div class="footnote">
1. <a href="https://github.com/google/syzkaller">https://github.com/google/syzkaller</a><br />
</div>

<div class="site-quote">

"syzkaller ([siːzˈkɔːlə]) is an unsupervised coverage-guided kernel fuzzer."
</div>

* Continuous fuzzing of the Linux Kernel
* Public dashboard (syzbot)
* Features: auto-bisect, mailing list integration, re-check
* Generates programs which look like fork bombs

This project increases public risk.

1. Completely open to the public, including PoC
2. Fixes are significantly slower than findings

<aside class="notes">

* I saw a graph with a slide that showed findings vs fixes.
* Findings at 45deg angle, fixes at 30deg
* I couldn't find it, LMK if you find it.
</aside>


# Security Tooling III - Coverity

* Quasi-public. Anyone can sign up!
  * 128 members currently
* Defect density - number of bugs per thousand lines
  * Many outstanding "defects"
    * Coverity has a lot of false positives.

<div class="about-logos">
<img height="300px" src="/lib/img/linux-coverity.png" />
</div>


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

* Recently decided to dig for kernel CTF
* Honed in on the "keys" subsystem
  * Run `cat /proc/keys` to see if you have it
* Signed up for Coverity access
  * Reviewed 17 different bugs
  * 2 true positives, 6 undecided, 9 false positive
* Tried correlating syzkaller findings
  * Challenging due to fundamental differences


# Technical Details - About the bug

* Race condition leads to UAF
* Takes time to trigger (2-10 min)
* Found by syzkaller

<div class="about-logos">
<img height="300px" src="/lib/img/syz-keys-uaf.png" />
</div>


# Technical details II

Patch that introduces the issue:

```diff
diff --git a/security/keys/key.c b/security/keys/key.c
index 5607900383298f..2a9a769e795e1c 100644
--- a/[security/keys/key.c](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/security/keys/key.c?id=45db3ab70092637967967bfd8e6144017638563c)
+++ b/[security/keys/key.c](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/security/keys/key.c?id=9578e327b2b4935a25d49e3891b8fcca9b6c10c6)
@@ -645,8 +647,18 @@ void key_put(struct key *key)

if (key) {
  key_check(key);
- if (refcount_dec_and_test(&key->usage))
+ if (refcount_dec_and_test(&key->usage)) {
+   unsigned long flags;
+
+   /* deal with the user's key tracking and quota */
+   if (test_bit(KEY_FLAG_IN_QUOTA, &key->flags)) {
+     spin_lock_irqsave(&key->user->lock, flags);
+     key->user->qnkeys--;
+     key->user->qnbytes -= key->quotalen;
+     spin_unlock_irqrestore(&key->user->lock, flags);
+   }
    schedule_work(&key_gc_work);
+ }
 }
}
EXPORT_SYMBOL(key_put);
```

<aside class="notes">

Can anyone see the bug yet?
</aside>


# Technical details III

| Thread 1                                                                      | Thread 2                                        |
| ----------------------------------------------------------------------------- | ----------------------------------------------- |
|                                                                               | `key_put` calls `refcount_dec_and_test`         |
| `key_garbage_collector` runs, deleting the key since there are no references. |                                                 |
|                                                                               | `key_put` accesses `key->flags` and `key->user` |


# Exploitable?

* Introduce a delay after `refcount_dec_and_test` to win more often
* Can we reclaim the freed memory?
  * Cross-cache attack?
  * The code shows a custom memory cache, but doesn't appear in /proc/slabs
* Somewhat controllable writes to `key->user`
* More research is needed

Err on the side of caution, fix the bug


# Timeline

* Commit introduced 2024-01-30
* 2024-07-14 - ships in v6.10.0
* 2024-08-10 - Detected by syzkaller
* 2024-09-15 - ships in v6.11.0
* 2024-11-17 - ships in v6.12.0
* 2024-11-18 - C repro added to syzbot
* 2025-01-20 - ships in v6.13.0
* 2025-03-14 - I reported to security@kernel.org

Discussion ongoing, but no fix landed yet

Once it lands it will take time to propagate...

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
   * Learn from published bugs and exploits
     * Fix recurring exploit techniques (cross-cache)
4. Hire security staff!
5. Prioritize fixing bugs from syzkaller


# Recommendations for Users

1. Only give access to those you trust
   * Thankfully multi-user systems are less common
   * Be very careful which apps you install on Android
2. Limit your attack surface
   * Try to minimize as much as possible!
       * virtual machines, SELinux, seccomp, containers, capabilities, permissions


# Conclusion

## Kernel Org needs to improve security.

* The Linux kernel is very complicated
  * Especially concurrency
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

