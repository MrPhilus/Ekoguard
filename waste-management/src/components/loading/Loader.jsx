const Loader = ({ size }) => {
  return (
    <div>
      <span className={`loading loading-bars ${size} bg-olive-500`}></span>
    </div>
  );
};

export default Loader;
