const Category = ({
  icon,
  title,
  description,
  descriptionColor = "yellow",
}) => (
  <div className="category">
    <img src={icon} alt={title} />
    <div className="gradient-cover"></div>
    <h3>{title}</h3>
    <p className={descriptionColor}>{description}</p>
  </div>
);

export default Category;
