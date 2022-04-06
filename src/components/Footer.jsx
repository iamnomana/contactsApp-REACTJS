export default function Footer(props) {
  Footer.defaultProps = {
    title: "DIV Contacts",
  };

  return <footer>{props.title}</footer>;
}
