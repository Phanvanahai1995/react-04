import { useAuth0 } from "@auth0/auth0-react";

function LoginButton() {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div className="text-center">Vui lòng chờ đợi...</div>;

  return (
    !isAuthenticated && (
      <div className="container mx-auto max-w-[400px] border border-gray-400 px-3 py-5 shadow-md mt-10">
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-xl">Cảm ơn bạn đã sử dụng dịch vụ của F8</h1>
          <p className="text-center">
            Nếu có bất kỳ câu hỏi hay trợ giúp nào, hãy đăng nhập và đặt câu hỏi
            tại đây!
          </p>
          <button
            onClick={() => loginWithRedirect()}
            className="bg-[#ff5722] uppercase w-full px-4 py-2 text-white font-bold rounded-md hover:opacity-80 transition-opacity duration-300"
            type="button"
          >
            Sign In
          </button>
        </div>
      </div>
    )
  );
}

export default LoginButton;
