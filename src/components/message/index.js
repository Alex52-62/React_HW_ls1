import "../message/App.css";

export const Msg = (props) => {
  console.log(props);
  return (
    <div>
      <h4>this is just message from</h4>
      <h3 id="blink">{props.name}!</h3>
    </div>
  );
};
