import Dataprops from "./Dataprops";

const MapMethod = ({ items }) => {
  return (
    <div>
      <ul className="list-group">
        {items.map((item) => (
          <Dataprops
            key={item}
            food={item}
            handleBuyButton={() => console.log(`${item} added to the cart`)}
          />
        ))}
      </ul>
    </div>
  );
};

export default MapMethod;
