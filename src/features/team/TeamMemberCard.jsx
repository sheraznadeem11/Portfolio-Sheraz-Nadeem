import TeamContactLinks from './TeamContactLinks.jsx';

function TeamMemberCard({ member, isActive, isAccessible }) {
  return (
    <article
      className={`team-slide ${isActive ? 'is-active' : ''}`}
      tabIndex={isAccessible ? 0 : -1}
      aria-hidden={!isAccessible}
      aria-label={`${member.name}, ${member.role}`}
    >
      <div className="team-card-portrait">
        {member.image ? (
          <img
            src={member.image}
            alt={isActive ? member.name : ''}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="team-member-placeholder">
            <span aria-hidden="true">{member.initials}</span>
          </div>
        )}
      </div>
      <div className="team-card-details">
        <h3>{member.name}</h3>
        <p>{member.role}</p>
      </div>
      <TeamContactLinks contacts={member.contacts} isAccessible={isAccessible} />
    </article>
  );
}

export default TeamMemberCard;
