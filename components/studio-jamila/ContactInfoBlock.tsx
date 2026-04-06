export default function ContactInfoBlock({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="text-center md:text-left">
      <p className="mb-2 text-sm font-medium uppercase tracking-[-0.02em] text-[#6A0C16] md:text-base">
        {label}
      </p>
      <div className="text-sm font-normal leading-[1.5] tracking-[-0.02em] text-[#6A0C16] md:text-base [&_a]:!text-[#6A0C16]">
        {value}
      </div>
    </div>
  );
}

