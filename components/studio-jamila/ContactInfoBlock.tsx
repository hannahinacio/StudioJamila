export default function ContactInfoBlock({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="text-center md:text-left">
      <p className="mb-3 text-[22px] font-normal tracking-wide !text-black lowercase">{label}</p>
      <div className="text-[18px] font-normal leading-[1.7] !text-black">{value}</div>
    </div>
  );
}

