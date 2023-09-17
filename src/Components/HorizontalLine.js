export function HorizontalLine() {
  return (
    <div className="inline-flex items-center justify-center w-full">
      <hr className="w-3/4 h-px my-8 bg-gray-200 border-0" />
      <span className="absolute px-3 font-semibold -translate-x-1/2 bg-white left-1/2">Follow me</span>
    </div>
  );
}
