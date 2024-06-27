import { useAuth0 } from "@auth0/auth0-react";
import SendMessage from "./SendMessage";

function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <p className="text-center">Loading...</p>;

  return (
    isAuthenticated && (
      <div className="container px-10 py-10 mx-auto max-w-[500px] border border-gray-400 rounded-lg shadow-md mt-3">
        {user?.picture && (
          <div className="rounded-full w-[100px] h-[100px] mx-auto overflow-hidden flex justify-center">
            <img src={user.picture} alt={user?.name} />
          </div>
        )}
        <h2 className="text-2xl font-bold text-center">
          Xin chào {user?.name}
        </h2>
        <SendMessage user={user} />
      </div>
    )
  );
}

export default Profile;
