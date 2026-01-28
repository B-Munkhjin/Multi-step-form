export const Last = () => {
  return (
    <div className="absolute bottom-0 right-0 w-120 h-full rounded-lg p-8 bg-white gap-7">
      <div className="flex flex-col h-32.25 gap-2 justify-start">
        <img src="./pinecone.png" className="w-15 h-15" />
        <h1 className="font-semibold text-6.5 text-[#202124] text-shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
          You're All Set 🔥
        </h1>
        <p className="text-lg text-[#8E8E8E] ">
          We have received your submission. Thank you!
        </p>
      </div>
    </div>
  );
};
