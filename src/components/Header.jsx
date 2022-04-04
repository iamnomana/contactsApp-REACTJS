export default function Header(props) {
  Header.defaultProps = {
    title: "Header",
  };

  return (
    <header className="header">
      <h3>{props.title}</h3>
      <h5>{props.number}</h5>
    </header>
  );
}
