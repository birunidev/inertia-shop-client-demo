import "./Shop.css";

export default function CategoryItem({ name, image, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`text-center category-item space-y-2 inline-block ${
        isActive ? "active" : ""
      }`}
    >
      <div>
        <img
          className="w-[120px] h-[50px] rounded-lg md:w-[150px] md:h-[100px] object-center object-cover"
          src={image}
          alt=""
        />
      </div>
      <p className="text-sm xl:text-lg">{name}</p>
    </button>
  );
}
