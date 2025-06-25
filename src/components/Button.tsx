export default function Button() {
  const handleClick = () => {
    alert("u clicked me!");
  };
  return <button onClick={handleClick}>click me</button>;
}
