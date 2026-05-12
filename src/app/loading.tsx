export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505]">
      {/* Pulsing ASAP Logo */}
      <h1 className="text-6xl md:text-8xl font-black italic tracking-widest text-[#E62020] animate-pulse drop-shadow-[0_0_20px_rgba(230,32,32,0.5)]">
        ASAP
      </h1>
      {/* Loading Bar */}
      <div className="mt-8 w-48 h-[2px] bg-[#1a1a1a] rounded-full overflow-hidden">
        <div className="h-full bg-[#E62020] animate-[loading_1.5s_ease-in-out_infinite]"></div>
      </div>
    </div>
  );
}