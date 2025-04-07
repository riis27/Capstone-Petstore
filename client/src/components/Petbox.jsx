const PetBox = ({ pet, onVote }) => {
    const [expanded, setExpanded] = useState(false);
  
    return (
      <div className="pet-box">
        <img src={pet.image} alt={pet.name} />
        <h5>{pet.name} <span className="age">({pet.age})</span></h5>
        <button className="btn btn-light expand-button" onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Hide' : 'Learn More'}
        </button>
  
        {expanded && (
          <div className="pet-info">
            <p><strong>Breed:</strong> {pet.breed}</p>
            <p><strong>Sex:</strong> {pet.sex}</p>
            <p><strong>Disposition:</strong> {pet.disposition}</p>
            <p><strong>Traits:</strong> {pet.traits}</p>
            <p><strong>Votes:</strong> {pet.votes}</p>
            <div className="vote-buttons">
              <button onClick={() => onVote(pet._id, 'upvote')} className="btn btn-success">👍 Upvote</button>
              <button onClick={() => onVote(pet._id, 'downvote')} className="btn btn-danger">👎 Downvote</button>
            </div>
          </div>
        )}
      </div>
    );
  };
  