function IconButton({ children, className = '', ...props }) {
  return (
    <button className={className} type="button" {...props}>
      {children}
    </button>
  );
}

export default IconButton;
