import { portfolio } from "@/data/portfolio";

export default function ContactContent() {
  const { contact } = portfolio;

  return (
    <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 text-sm">
      <dt className="font-bold">Phone</dt>
      <dd>
        <a href={`tel:${contact.phone}`}>{contact.phone}</a>
      </dd>

      <dt className="font-bold">Email</dt>
      <dd>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </dd>

      <dt className="font-bold">LinkedIn</dt>
      <dd className="break-all">
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
          {contact.linkedin.replace(/^https:\/\//, "")}
        </a>
      </dd>

      <dt className="font-bold">GitHub</dt>
      <dd className="break-all">
        <a href={contact.github} target="_blank" rel="noopener noreferrer">
          {contact.github.replace(/^https:\/\//, "")}
        </a>
      </dd>
    </dl>
  );
}
