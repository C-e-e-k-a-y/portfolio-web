interface ContactLinkProps {
  address: string;
  label: string;
  className?: string;
}

export default function ContactLink({ address, label, className }: ContactLinkProps) {
  return (
    <a href={`${address}`} className={`text-blue-500 hover:text-blue-700 rounded-full p-2 bg-gray-800 hover:bg-gray-700`}>
        <i className={`fas ${className}`}></i> {label}
    </a>
  );
}