import React from "react";
import ItemStatusService from "../services/itemStatusService";
import AddItemService from "../services/addItemService";


function ItemStatusModel() {


  return (
    <div className="containerItem" >
        <AddItemService/>
        <ItemStatusService/>
    </div>
  );
}

export default ItemStatusModel;
