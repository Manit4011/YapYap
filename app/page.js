import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="bg-gradient-to-br from-blue-500 to-purple-600 min-h-screen text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold">
          Welcome to <span className="text-yellow-300">YapYap</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mt-4 max-w-2xl">
          The fastest, most secure, and fun way to chat with your friends, family, and teams!
        </p>
        <Link
          href="/forums"
          className="mt-6 px-6 py-3 bg-yellow-300 text-gray-900 font-semibold text-lg rounded-full shadow-md hover:bg-yellow-400 transition-all"
        >
          Get Started for Free
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white text-gray-900 text-center">
        <h2 className="text-4xl font-bold">Why Choose YapYap?</h2>
        <div className="grid md:grid-cols-3 gap-10 mt-10 max-w-5xl mx-auto">
          <div className="p-6 shadow-lg rounded-lg bg-gray-100">
            <h3 className="text-2xl font-semibold">🔒 Secure Messaging</h3>
            <p className="mt-3 text-gray-600">End-to-end encryption ensures your chats stay private.</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg bg-gray-100">
            <h3 className="text-2xl font-semibold">⚡ Instant Chat</h3>
            <p className="mt-3 text-gray-600">Send messages in real-time with lightning-fast speed.</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg bg-gray-100">
            <h3 className="text-2xl font-semibold">🎨 Custom Themes</h3>
            <p className="mt-3 text-gray-600">Personalize your chat with custom themes and emojis.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-10 mt-10 max-w-5xl mx-auto">
          <div className="p-6 shadow-lg rounded-lg bg-gray-800">
            <h3 className="text-2xl font-semibold">🚀 Free Plan</h3>
            <p className="mt-3 text-gray-300">Basic chat features with up to 3 group chats.</p>
            <p className="mt-4 text-2xl font-bold">$0/month</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg bg-yellow-400 text-gray-900">
            <h3 className="text-2xl font-semibold">🔥 Pro Plan</h3>
            <p className="mt-3">Unlimited chats, custom themes, and cloud backup.</p>
            <p className="mt-4 text-2xl font-bold">$9.99/month</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg bg-gray-800">
            <h3 className="text-2xl font-semibold">🏢 Business Plan</h3>
            <p className="mt-3 text-gray-300">Team collaboration, admin controls, and priority support.</p>
            <p className="mt-4 text-2xl font-bold">$29.99/month</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className=" flex flex-col py-16 px-6 bg-yellow-300 text-gray-900 text-center justify-center items-center">
        <h2 className="text-4xl font-bold">Start Chatting Today!</h2>
        <p className="mt-3 text-lg">Join thousands of users on YapYap.</p>
        <a
          href="/signup"
          className="mt-6 px-6 py-3 bg-gray-900  text-white font-semibold text-lg rounded-full shadow-md hover:bg-gray-700 transition-all"
        >
          Sign Up Now
        </a>
      </section>
    </main>
  );
}


export const metadata = {
  title: "Home - YapYap",
  description: "YapYap is a modern chat application designed for seamless conversations. Stay connected with friends, family, and teams with real-time messaging, secure encryption, and a sleek, user-friendly interface. Whether it's casual chats or important discussions, YapYap makes communication effortless and fun. 🚀💬"
}