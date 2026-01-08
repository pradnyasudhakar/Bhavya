export default function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
      <h3 className="font-[var(--font-newsreader)] font-semibold text-lg mb-2">
        {title}
      </h3>
      <p className="font-[var(--font-manrope)] text-gray-600">{children}</p>
    </div>
  );
}
