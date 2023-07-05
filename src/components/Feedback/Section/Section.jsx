export const Section = ({ children, title, className, titleClassName }) => (
  <section className={className}>
    <h1 className={`${titleClassName} global-title`}>{title}</h1>
    {children}
  </section>
);
