import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function SendMessage({ user }) {
  const [isLoading, setLoading] = useState(false);
  const form = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);

      const serviceId = import.meta.env.VITE_SERVICE_ID;
      const templateId = import.meta.env.VITE_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_PUBLIC_KEY;

      const response = await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        {
          publicKey,
        }
      );

      if (!response.text) throw new Error("Send message fail!");
      form.current.reset();
      console.log("SUCCESS!", response);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      ref={form}
      className="mt-6 flex flex-col gap-8"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email của bạn *</label>
        <input
          className="border px-2 py-2 rounded-lg border-gray-600 outline-none"
          type="text"
          id="email"
          name="from_email"
          defaultValue={user?.email ? user.email : "example@email.com"}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message">Tin nhắn *</label>
        <textarea
          className="border px-2 py-2 rounded-lg border-gray-600 outline-none"
          name="message"
          id="message"
          rows={5}
          defaultValue="Tôi cần hỗ trợ!!!"
        ></textarea>
      </div>
      <button
        disabled={isLoading}
        type="submit"
        className="bg-green-600 text-white font-bold py-2 rounded-lg hover:opacity-80 transition-opacity duration-300"
      >
        {isLoading ? "Sending..." : "YÊU CẦU HỖ TRỢ"}
      </button>
    </form>
  );
}

export default SendMessage;
