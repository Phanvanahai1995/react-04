import { useAuth0 } from "@auth0/auth0-react";

function LogoutButton() {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="text-center mt-6">
        <button
          onClick={() => logout()}
          className="bg-[#ff5722] uppercase px-3 py-2 w-[500px] text-white font-bold rounded-md hover:opacity-80 transition-opacity duration-300"
          type="button"
        >
          Sign Out
        </button>
      </div>
    )
  );
}

export default LogoutButton;
