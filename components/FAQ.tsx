"use client";

import { useState } from "react";

const faqs = [
  ["Which classes and subjects are taught?", "[TEACHER NAME] teaches students from Classes 1–10 across all subjects. Exact subject and board coverage for each class will be confirmed here before launch."],
  ["Are classes available online and offline?", "Yes. Both online and offline classes are available. The online platform, offline location, service area, and current timetable are yet to be confirmed."],
  ["Are classes individual or group-based?", "The available class formats and maximum group size have not yet been supplied. Please include your preference in the enquiry."],
  ["How is a student’s progress supported?", "The detailed approach to practice, revision, homework, testing, and parent updates will be added after it has been confirmed with the teacher."],
  ["Which boards or curricula are supported?", "Board and curriculum coverage has not yet been specified. Please mention the student’s board in your enquiry so suitability can be confirmed."],
  ["How can I ask about fees and timings?", "Send a short enquiry with the student’s class, subject needs, and preferred class mode. [TEACHER NAME] can then share the relevant availability and fee information."],
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="faq-list">
      {faqs.map(([question, answer], index) => {
        const isOpen = open === index;
        return (
          <div className={`faq-item ${isOpen ? "is-open" : ""}`} key={question}>
            <h3>
              <button type="button" aria-expanded={isOpen} aria-controls={`faq-${index}`} onClick={() => setOpen(isOpen ? null : index)}>
                <span className="faq-count">0{index + 1}</span>
                <span>{question}</span>
                <span className="faq-icon" aria-hidden="true">{isOpen ? "−" : "+"}</span>
              </button>
            </h3>
            <div className="faq-answer" id={`faq-${index}`} aria-hidden={!isOpen}><div><p>{answer}</p></div></div>
          </div>
        );
      })}
    </div>
  );
}
