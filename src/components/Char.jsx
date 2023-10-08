const Char = ({ tile }) => {
  return (
    <div
      className='main-character'
      style={{
        width: `${tile}px`,
        height: `${tile}px`,
      }}
    >
      <div className='placeholder'>🧙‍♂️</div>
    </div>
  );
};
export default Char;
