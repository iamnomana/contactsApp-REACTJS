import PropTypes from "prop-types";

// class Header extends React.Component {
//   render() {
//     return (
//       <header style={{ backgroundColor: this.props.bgColor }}>
//         <h3>{this.props.title}</h3>
//       </header>
//     );
//   }
// }

const Header = ({ title, bgColor }) => {
  return (
    <nav style={{ backgroundColor: bgColor }}>
      <h3>{title}</h3>
    </nav>
  );
};

Header.defaultProps = {
  title: "Contacts",
  bgColor: "blue",
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
};

export default Header;
