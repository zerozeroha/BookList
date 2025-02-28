export default function BookFormTitle() {
  return (
    <div className="flex flex-col items-center mb-6 px-10">
      <div className="h-[100px] w-full"></div>
      <span className="font-black font-serif text-[32px] md:text-[60px] lg:text-[80px] text-neutral-800 w-full text-center">
        BOOKFORM
      </span>
      <span className=" text-[12px] font-mono md:text-base lg:text-lg text-neutral-800 w-full text-center mb-2">
        책 정보를 더 자세히 안내해 드릴게요
      </span>
    </div>
  );
}
