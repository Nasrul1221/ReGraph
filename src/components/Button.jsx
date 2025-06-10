function Button({ fun, label, size }) {
  return (
    <button
      onClick={fun}
      className={`bg-primary text-white ${
        size ? "text-" + size : "text-[20xp]"
      } rounded hover:bg-white hover:text-primary transition-all duration-300 p-1`}
    >
      {label}
    </button>
  );
}

export default Button;
