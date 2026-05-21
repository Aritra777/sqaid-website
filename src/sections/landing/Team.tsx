import styles from "./Team.module.css";

type Member = {
  name: string;
  role: string;
  bio?: string;
  /** Drop a file into /public/assets and reference it as `/assets/your-headshot.png`. */
  photo?: string;
};

const MEMBERS: Member[] = [
  {
    name: "Team Member One",
    role: "Founder & CEO",
    bio: "Leads product vision and go-to-market.",
  },
  {
    name: "Team Member Two",
    role: "Head of Engineering",
    bio: "Owns platform architecture and delivery.",
  },
  {
    name: "Team Member Three",
    role: "Head of Compliance",
    bio: "Two decades in AML, fraud, and regulatory.",
  },
  {
    name: "Team Member Four",
    role: "Head of Design",
    bio: "Designs the surface every investigator sees.",
  },
];

function MemberCard({ member }: { member: Member }) {
  const initials = member.name
    .split(" ")
    .map((word) => word[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("");

  return (
    <article className={styles.card}>
      <div className={styles.photo}>
        {member.photo ? (
          <img src={member.photo} alt={`${member.name}, ${member.role}`} loading="lazy" />
        ) : (
          <div className={styles.photoPlaceholder} aria-hidden="true">
            <div className={styles.photoGrid} />
            <span className={styles.initials}>{initials}</span>
          </div>
        )}
      </div>
      <div className={styles.body}>
        <div className={styles.name}>{member.name}</div>
        <div className={styles.role}>{member.role}</div>
        {member.bio && <p className={styles.bio}>{member.bio}</p>}
      </div>
    </article>
  );
}

export default function Team() {
  return (
    <section id="team" className="section">
      <div className="container">
        <div className="section--center" style={{ marginBottom: 56 }}>
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            The team
          </div>
          <h2 className="section-title">
            Built by people who&apos;ve <em>lived inside compliance.</em>
          </h2>
          <p className="section-lede">
            A small team of operators, engineers, and designers — combining decades of
            financial-crime expertise with hands-on experience shipping AI products.
          </p>
        </div>

        <div className={styles.grid}>
          {MEMBERS.map((m) => (
            <MemberCard key={m.name} member={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
