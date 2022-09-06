import classes from './Notification.module.css';

const Notification = props => {
  const cssClasses = `${classes.notification} ${classes[props.status]}`;

  return (
    <section className={cssClasses}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
};

export default Notification;
