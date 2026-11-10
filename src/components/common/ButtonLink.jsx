function ButtonLink({ children, href, variant = 'primary', className = '', ...props }) {
  const variantClass = variant === 'custom' ? '' : `button-${variant}`;

  return (
    <a className={`${variantClass} ${className}`.trim()} href={href} {...props}>
      {children}
    </a>
  );
}

export default ButtonLink;
