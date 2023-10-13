import { dataItem } from "../../datas/dataItem";
import "../../styles/ItemList.css";
import Item from "./Item";

function ItemList() {
  return (
    <div>
      <h3>Products</h3>
      <div className="container-list">
        {dataItem.map((item, index) => (
          <div className="item" key={index}>
            <Item item={item}  />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;