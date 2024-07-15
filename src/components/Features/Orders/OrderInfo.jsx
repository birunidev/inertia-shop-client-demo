import OrderStatusBadge from "components/UI/Badge/OrderStatusBadge";
import DataLabel from "components/UI/DataLabel";

export default function OrderInfo() {
  return (
    <div className="space-y-2 text-sm md:text-base">
      <DataLabel label="Order Code" value="INV/20221215/MPL/2902281975" />
      <DataLabel label="Order Date" value="15 Desember 2022, 11:55 WIB" />
      <DataLabel
        label="Status"
        value={
          <>
            <OrderStatusBadge value={1} />
          </>
        }
      />
    </div>
  );
}
