"use client";

import { AnimatePresence, motion } from "motion/react";
import { FormEvent, useState } from "react";
import { useSiteMotion } from "./MotionPreferences";

export default function EnquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const { reduced: reduceMotion } = useSiteMotion();

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 650);
  }

  if (status === "sent") {
    return (
      <motion.div className="form-success" role="status" tabIndex={-1} initial={reduceMotion ? { opacity: 0 } : { opacity: 0, transform: "translateY(12px) scale(.985)" }} animate={{ opacity: 1, transform: "translateY(0px) scale(1)" }} transition={{ duration: reduceMotion ? .12 : .42, ease: [0.23, 1, 0.32, 1] }}>
        <span className="success-mark" aria-hidden="true">✓</span>
        <p className="eyebrow">ENQUIRY DRAFTED</p>
        <h3>Thank you for getting in touch.</h3>
        <p>This prototype does not send data yet. Connect the form to the teacher’s confirmed email or enquiry service before launch.</p>
        <button type="button" className="text-button" onClick={() => setStatus("idle")}>Start another enquiry</button>
      </motion.div>
    );
  }

  return (
    <motion.form className="enquiry-form" onSubmit={submit} initial={false} animate={{ opacity: 1, transform: "translateY(0px)" }} transition={{ duration: reduceMotion ? 0 : .42, ease: [0.23, 1, 0.32, 1] }}>
      <div className="field-row">
        <label>Parent or guardian name <input name="parentName" autoComplete="name" required placeholder="Your name" /></label>
        <label>Student name <span>(optional)</span><input name="studentName" autoComplete="off" placeholder="Student’s name" /></label>
      </div>
      <div className="field-row">
        <label>Student’s class <select name="class" required defaultValue=""><option value="" disabled>Select class</option>{Array.from({length: 10}, (_, i) => <option key={i + 1}>Class {i + 1}</option>)}</select></label>
        <label>Class preference <select name="mode" required defaultValue=""><option value="" disabled>Select preference</option><option>Online</option><option>Offline</option><option>No preference yet</option></select></label>
      </div>
      <label>Subject or support needed <input name="subject" required placeholder="For example: all-subject support" /></label>
      <div className="field-row">
        <label>Phone number <input name="phone" type="tel" inputMode="tel" autoComplete="tel" required placeholder="[Contact number]" /></label>
        <label>Email <span>(optional)</span><input name="email" type="email" inputMode="email" autoComplete="email" placeholder="you@example.com" /></label>
      </div>
      <label>Anything else you would like to share? <textarea name="message" rows={4} placeholder="Tell us about the student’s current needs, board, or suitable timings." /></label>
      <label className="consent"><input type="checkbox" required /><span>I agree that these details may be used to respond to my enquiry. See the <a href="/privacy">privacy information</a>.</span></label>
      <button className="button button-light submit-button" type="submit" disabled={status === "sending"}>
        <span className="submit-label">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span key={status} initial={reduceMotion ? { opacity: 0 } : { opacity: 0, transform: "translateY(6px)", filter: "blur(2px)" }} animate={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0px)" }} exit={reduceMotion ? { opacity: 0 } : { opacity: 0, transform: "translateY(-5px)", filter: "blur(2px)" }} transition={{ duration: reduceMotion ? .08 : .18 }}>
              {status === "sending" ? "Preparing enquiry…" : "Send enquiry"}
            </motion.span>
          </AnimatePresence>
        </span>
        <motion.span aria-hidden="true" animate={status === "sending" && !reduceMotion ? { rotate: 360 } : { rotate: 0 }} transition={status === "sending" ? { repeat: Infinity, duration: 1, ease: "linear" } : { duration: .2 }}>{status === "sending" ? "◌" : "↗"}</motion.span>
      </button>
      <p className="form-note">Form shown for design review. Submission service is not connected yet.</p>
    </motion.form>
  );
}
