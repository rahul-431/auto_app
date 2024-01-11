type logoProps = {
  logoTitle: string;
};
export default function Logo({ logoTitle }: logoProps) {
  return (
    <>
      <img src="logo.jpg" className="sm:h-8 md:h-12" alt="Logo" />
      <span className="text-black text-lg font-semibold">{logoTitle}</span>
    </>
  );
}
