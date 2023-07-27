import { useContext } from "react";
import { AddAddressComponent } from "../../AccountComponent/Address/AddAddressComponent";
import { ShowAddressComponent } from "../../AccountComponent/Address/ShowAddressComponent";
import { AddressContext } from "../../../contexts/AddressContext/AddressContext";
import "./CheckOutAdd.css";

const CheckOutAdd = () => {
  const { hideAddAddress } = useContext(AddressContext);

  return (
    <div className="check-out-add">
      <div>
        <ShowAddressComponent />
      </div>

      {hideAddAddress && <AddAddressComponent />}
    </div>
  );
};

export { CheckOutAdd };
