import Link from 'next/link';

export default function CTAButton({
  href,
  text,
}: {
  href: string;
  text: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-sjAccent px-8 py-4 text-sm font-normal lowercase !text-[#6A0C16] transition-colors duration-200 ease-out hover:bg-sjAccent hover:!text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sjAccent focus-visible:ring-offset-2"
    >
      {text}
    </Link>
  );
}

