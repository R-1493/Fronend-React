const PostcodeStep = () => (
  <div className="h-screen relative flex flex-col items-center justify-center px-4 py-6 sm:py-12">
    <div className="text-center mb-8">
      <h1 className="text-5xl sm:text-7xl font-['Impact'] text-white mb-4">
        SKIP HIRE
      </h1>
      <h2 className="text-2xl sm:text-4xl font-['Arial'] italic text-white opacity-80">
        With A Difference
      </h2>{' '}
    </div>
    <div className="max-w-xl w-full mx-auto">
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Type Your Delivery Postcode Or Address"
          className="pl-10 block  w-full rounded-md border border-[#2A2A2A] bg-[#1C1C1C] text-white shadow-sm focus:border-[#0037C1] focus:outline-none focus:ring-1 focus:ring-[#0037C1] transition-colors h-12"
        />
      </div>
    </div>
  </div>
)
export default PostcodeStep
