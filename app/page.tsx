import SiteHeader from "@/components/SiteHeader";
import LearningStory from "@/components/LearningStory";
import FAQ from "@/components/FAQ";
import EnquiryForm from "@/components/EnquiryForm";
import MotionSystem from "@/components/MotionSystem";
import { AnimatedHeadline, SchoolCount, TuitionCount } from "@/components/AnimatedType";
import ScrollRevealQuote from "@/components/ScrollRevealQuote";
import DeskScene from "@/components/DeskScene";
import ModeSwitcher from "@/components/ModeSwitcher";
import WaveChapter from "@/components/WaveChapter";

const Arrow = () => <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18"><path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;

export default function Home() {
  return (
    <>
      <MotionSystem />
      <SiteHeader />
      <main id="main">
        <section className="hero" id="top">
          <div className="hero-grid page-shell">
            <div className="hero-copy">
              <p className="eyebrow reveal r1">SCHOOL TEACHER · PRIVATE TUITION</p>
              <AnimatedHeadline />
              <p className="hero-intro reveal r3">[TEACHER NAME] teaches all subjects for Classes 1–10, with both online and offline classes available.</p>
              <div className="hero-actions reveal r4">
                <a className="button" href="#contact">Enquire about classes <Arrow /></a>
                <a className="text-link" href="#approach">See the teaching approach <span>↓</span></a>
              </div>
              <div className="hero-facts reveal r5" aria-label="Class information">
                <div><span className="fact-number">01—10</span><span>Classes</span></div>
                <div><span className="fact-number">All</span><span>Subjects</span></div>
                <div><span className="fact-number">2</span><span>Ways to learn</span></div>
              </div>
            </div>

            <div className="hero-desk reveal r3"><DeskScene /></div>
          </div>
          <div className="scroll-cue page-shell"><span>Scroll to explore</span><span className="scroll-line" /></div>
        </section>

        <section className="credibility" aria-labelledby="credibility-heading">
          <div className="page-shell credibility-grid" data-stagger>
            <div className="section-kicker"><span>01</span><p id="credibility-heading">EXPERIENCE, SHOWN CLEARLY</p></div>
            <div className="stat" data-reveal="number"><TuitionCount /><p>years of tuition-teaching experience</p></div>
            <div className="stat" data-reveal="number"><SchoolCount /><p>years of school-teaching experience</p></div>
            <div className="stat-note"><span>+</span><p>Classroom perspective,<br />with focused tuition support.</p></div>
          </div>
          <p className="experience-footnote page-shell">Experience figures are approximate and intentionally shown separately.</p>
        </section>

        <section className="thesis-section">
          <div className="page-shell thesis-grid">
            <div className="section-kicker light" data-reveal="down"><span>02</span><p>A SIMPLE TEACHING BELIEF</p></div>
            <div className="thesis-copy" data-reveal="text">
              <p className="opening-mark" aria-hidden="true">“</p>
              <ScrollRevealQuote />
              <div className="thesis-support">
                <p>Learning becomes less intimidating when a difficult concept is slowed down, explained clearly, and practised with purpose.</p>
                <p className="draft-note light-note">Draft philosophy—final wording will be confirmed with the teacher.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="approach-section" id="approach">
          <div className="page-shell">
            <div className="section-heading split-heading" data-reveal="split">
              <div className="section-kicker"><span>03</span><p>THE LEARNING APPROACH</p></div>
              <div><h2>From a question<br />to <em>clarity.</em></h2><p>A clear process gives students room to understand, try, make mistakes, and improve.</p></div>
            </div>
            <LearningStory />
          </div>
        </section>

        <section className="classes-section" id="classes">
          <div className="page-shell">
            <div className="section-heading classes-heading" data-reveal="left">
              <div className="section-kicker light"><span>04</span><p>CLASSES 1–10</p></div>
              <h2>Different stages.<br /><em>One attentive teacher.</em></h2>
              <p>The exact focus for each class band will be shaped around the teacher’s confirmed method, subjects, and boards.</p>
            </div>
            <div className="class-progression" data-stagger>
              <article><span className="band-number">01—05</span><div><p className="eyebrow">CLASSES 1–5</p><h3>Early learning years</h3><p>[Teaching focus, subjects, and class format to be confirmed.]</p></div><span className="band-mark">A</span></article>
              <article><span className="band-number">06—08</span><div><p className="eyebrow">CLASSES 6–8</p><h3>Middle learning years</h3><p>[Teaching focus, subjects, and class format to be confirmed.]</p></div><span className="band-mark">B</span></article>
              <article><span className="band-number">09—10</span><div><p className="eyebrow">CLASSES 9–10</p><h3>Senior school years</h3><p>[Teaching focus, subjects, board coverage, and class format to be confirmed.]</p></div><span className="band-mark">C</span></article>
            </div>
          </div>
        </section>

        <section className="subjects-section">
          <div className="page-shell subjects-grid">
            <div className="section-kicker" data-reveal="left"><span>05</span><p>SUBJECTS</p></div>
            <div data-reveal="right">
              <h2>Connected learning,<br />across <em>all subjects.</em></h2>
              <p className="subjects-intro">Exact class-by-class subject and board coverage will be listed here once confirmed.</p>
              <div className="subject-index" aria-label="Subjects pending confirmation" data-stagger>
                <span>MATHEMATICS<sup>01</sup></span><span>SCIENCE<sup>02</sup></span><span>ENGLISH<sup>03</sup></span><span>SOCIAL SCIENCE<sup>04</sup></span><span>LANGUAGES<sup>05</sup></span><span className="pending">[CONFIRM EXACT COVERAGE]</span>
              </div>
            </div>
          </div>
        </section>

        <WaveChapter />

        <section className="mode-section" data-chapter="class-mode">
          <div className="page-shell mode-world-layout">
            <div className="mode-world-intro" data-reveal="left">
              <div className="section-kicker"><span>06</span><p>TWO WAYS TO LEARN</p></div>
              <h2>One teaching approach.<br /><em>Two settings.</em></h2>
              <p>Choose the setting that works for your family. Practical details will be added once confirmed.</p>
            </div>
            <div data-reveal="right"><ModeSwitcher /></div>
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="page-shell experience-grid">
            <div className="experience-visual" data-reveal="left" data-parallax-media>
              <div className="notebook-page" data-float>
                <span className="notebook-index">LESSON NOTE / 04</span>
                <p>Explain it once.</p><p>Try it together.</p><p>Find the gap.</p><p className="circled">Explain it differently.</p>
                <svg aria-hidden="true" viewBox="0 0 170 70"><path d="M5 45c35-30 94-34 158-12"/><path d="M151 24l12 9-14 6"/></svg>
              </div>
            </div>
            <div className="experience-copy" data-reveal="up">
              <div className="section-kicker light"><span>07</span><p>TEACHING EXPERIENCE</p></div>
              <h2>Classroom perspective.<br /><em>Tuition attention.</em></h2>
              <p>[TEACHER NAME] teaches at a school as well as through private tuition—bringing experience from both learning environments.</p>
              <dl>
                <div><dt>Tuition teaching</dt><dd>Approximately 4.9 years</dd></div>
                <div><dt>School teaching</dt><dd>Approximately 1–2 years</dd></div>
                <div><dt>Qualifications</dt><dd>[QUALIFICATION]</dd></div>
                <div><dt>School</dt><dd>[SCHOOL NAME / WITH PERMISSION]</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section className="faq-section" id="questions">
          <div className="page-shell faq-grid">
            <div className="faq-heading" data-reveal="left"><div className="section-kicker"><span>08</span><p>FOR PARENTS</p></div><h2>Questions before<br /><em>you enquire.</em></h2><p>Clear answers help families decide whether the teaching format is a good fit.</p></div>
            <div data-reveal="right"><FAQ /></div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="page-shell contact-grid">
            <div className="contact-copy" data-reveal="up">
              <div className="section-kicker light"><span>09</span><p>START A CONVERSATION</p></div>
              <h2>Tell us what your child <em>needs help with.</em></h2>
              <p>Share the student’s class, subject needs, and preferred way to learn. [TEACHER NAME] can then confirm whether the current format and availability are suitable.</p>
              <div className="contact-alternatives"><p><span>PHONE</span>[CONTACT NUMBER]</p><p><span>WHATSAPP</span>[WHATSAPP]</p><p><span>LOCATION</span>[LOCATION]</p></div>
            </div>
            <div data-reveal="up"><EnquiryForm /></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-shell footer-grid">
          <div><a className="brand footer-brand" href="#top"><span className="brand-mark">TN</span><span>[TEACHER NAME]</span></a><p>Classroom experience, made personal.</p></div>
          <div><p className="eyebrow">EXPLORE</p><a href="#approach">Approach</a><a href="#classes">Classes</a><a href="#experience">Experience</a><a href="#questions">Questions</a></div>
          <div><p className="eyebrow">CONTACT</p><span>[CONTACT NUMBER]</span><span>[EMAIL]</span><span>[LOCATION]</span></div>
          <div className="footer-note"><span>Classes 1–10</span><span>All subjects</span><span>Online + offline</span></div>
        </div>
        <div className="page-shell footer-bottom"><span>© 2026 [TEACHER NAME]</span><a href="/privacy">Privacy</a><span>Website information pending final verification.</span></div>
      </footer>
    </>
  );
}
