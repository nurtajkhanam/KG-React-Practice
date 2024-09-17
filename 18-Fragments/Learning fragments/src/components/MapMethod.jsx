import Dataprops from "./Dataprops";

const MapMethod = ({ items }) => {
  return (
    <div>
      <ul className="list-group">
        {items.map((item) => (
          <Dataprops key={item} food={item} />
        ))}
      </ul>
    </div>
  );
};

export default MapMethod;
