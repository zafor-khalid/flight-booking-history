
const Breadcrumb = ({ items = [] }) => {
  return (
    <div>
      <ol id="breadcrumb">
        {items.length > 0 && items.map((item, idx) => (
          <li key={idx} className={`breadcrumb-item ${idx === items.length - 1 ? 'active' : ''}`}>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Breadcrumb;