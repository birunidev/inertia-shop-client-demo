export default function ProductImageItem({ isActive, image, isGallery }) {
  return (
    <div className={`product-image-item ${isActive ? "active" : ""}`}>
      <img
        src={image}
        className={`object-cover rounded-lg object-center ${
          isGallery ? "md:w-32 md:h-24" : ""
        }`}
        alt=""
      />
    </div>
  );
}
