import './Avatar.css';

function Avatar({ response, responseType }) {
  return (
    <div className="avatar">
      <img src={`avatar-${responseType}.png`} alt="Aise" className="avatar-image" />
      <div className="response">{response}</div>
    </div>
  );
}

export default Avatar;
