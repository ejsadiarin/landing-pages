export default function GleamyTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <section className="mx-5 bg-[#000000] text-white">
          {children}
      </section>
  )
}
