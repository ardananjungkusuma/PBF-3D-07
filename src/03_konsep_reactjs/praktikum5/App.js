import profile from "./photo.jpg";
import "./App.css";

function Avatar(props) {
  return (
    <img
      width="77px"
      className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

function Komentar(props) {
  return (
    <div className="Komentar">
      <UserInfo user={props.author} />
      <div className="Komentar-text">{props.text}</div>
      <div className="Komentar-date">{props.date}</div>
    </div>
  );
}

function App() {
  let me = { name: "Ardan Anjung", avatarUrl: profile };
  return (
    <div>
      <Komentar text="1841720041" date="23 Februari 2021" author={me} />
    </div>
  );
}

export default App;
