export default function FAQPage() {
  const questions = [
    "Lorem Ipsum Dummy?",
    "Dummy the printing typesetting industry?",
    "Lorem Ipsum Dummy?",
    "Dummy the printing typesetting industry?",
    "Lorem Ipsum Dummy?",
    "Lorem Ipsum Dummy?",
    "Dummy the printing typesetting industry?",
    "Dummy the printing typesetting industry?",
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-black dark:text-white transition-colors duration-300">
      <div className="text-center">
        <p className="text-red-500 uppercase tracking-widest text-sm mb-2">FAQ</p>
        <h2 className="text-3xl sm:text-4xl font-light">
          Frequently <span className="font-bold">Asked Questions</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
          Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {questions.map((question, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-[#1D2430] rounded-xl px-6 py-5 flex justify-between items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-[#2D333F] transition-all duration-300"
          >
            <span className="text-sm sm:text-base">{question}</span>
            <span className="text-red-500 text-xl sm:text-2xl mt-[-20px]">⌄</span>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button className="bg-red-500 hover:bg-red-600 transition-all text-white font-medium px-6 py-3 rounded-md text-sm sm:text-base">
          Ask More Questions
        </button>
      </div>
    </section>
  );
}
