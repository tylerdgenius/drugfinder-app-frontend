import Button from "../../../../../UI/Button/views/Button";
import HeadingH3 from "../../../../../UI/Heading/views/Heading";
import Text from "../../../../../UI/Text/views/Text";
import classes from "../css/404error.Module.css";
import { Link } from "react-router-dom";
import LinkText from "../../../../../UI/Link/views/LinkIndex";

const NotFoundPage = (props) => {
  return (
    <div className={classes.error404__parent}>
      <div className={classes.error404__child}>
        <HeadingH3
          content="404"
          headingClassName={classes.error404__child__heading}
        />
        <Text
          content="Oops we can't find the page you're looking for"
          paraClassName={classes.error404__child__text}
        />
        <LinkText content="Go To Dashboard" to="/dashboard" />
      </div>
    </div>
  );
};

export default NotFoundPage;
