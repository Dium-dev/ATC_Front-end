interface Props {
  className?: string;
  title: string;
  children: React.ReactNode;
}

export default function ListItems({ className, title, children }: Props) {
  return (
    <div className={`whitespace-nowrap space-y-2.5 ${className}`}>
      <h3 className="text-lg sm:text-xl">{title}</h3>
      <div className="text-sm sm:text-base flex flex-col gap-y-2">
        {children}
      </div>
    </div>
  );
}
