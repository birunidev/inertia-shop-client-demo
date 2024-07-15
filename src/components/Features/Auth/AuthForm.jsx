import Forms from "components/UI/Forms";
import { Link } from "react-router-dom";

export default function AuthForm({ forms, btnText, bottomLink, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <Forms {...{ forms }} />
      <button type="submit" className="btn btn-primary btn-block">
        {btnText}
      </button>
      {bottomLink && (
        <div className="text-center">
          <Link to={bottomLink.link} className="text-primary">
            {bottomLink.label}
          </Link>
        </div>
      )}
    </form>
  );
}
