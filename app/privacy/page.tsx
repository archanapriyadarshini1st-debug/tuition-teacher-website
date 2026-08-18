import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <Link className="text-link" href="/">← Return home</Link>
      <p className="eyebrow">PRIVACY</p>
      <h1>Privacy information</h1>
      <p>This is a draft placeholder. Before launch, replace it with the teacher’s confirmed policy covering what enquiry information is collected, why it is needed, how long it is retained, and who can access it.</p>
      <h2>Information submitted</h2>
      <p>The enquiry form may ask for a parent or guardian’s name, the student’s class, subject needs, preferred class mode, contact details, and an optional message.</p>
      <h2>Contact</h2>
      <p>For privacy questions, contact <strong>[Email]</strong>.</p>
    </main>
  );
}
