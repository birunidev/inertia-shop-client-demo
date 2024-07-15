export default function ShippingMethod() {
  return (
    <div className="flex items-start gap-2">
      <div className="flex gap-2">
        <input
          type="radio"
          name="shipping_method"
          className="radio radio-primary radio-sm"
        />
        <div>
          <img className="w-20" src="/assets/images/jne.png" alt="" />
        </div>
      </div>
      <div className="space-y-1">
        <p className="text-sm">JNE Express - REG (Additional Zone)</p>
        <p className="text-sm font-semibold">IDR 20.000</p>
        <div className="text-xs space-y-1">
          <p>4 sampai 5 hari kerja</p>
          <p>Dikirim dari JAKARTA BARAT to Lowokwaru - Kota Malang</p>
        </div>
      </div>
    </div>
  );
}
