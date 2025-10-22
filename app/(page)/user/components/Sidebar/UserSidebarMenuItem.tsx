import Link from "next/link";

export default function UserSidebarMenuItem(Props) {
  return (
    <Link href={Props.link} className="flex items-center gap-x-2.5 py-1.5 group">
      <span className="active-badge block w-0.5 h-5 ml-1 rounded-full"></span>
      <div className="*:size-5 text-black/80 group-hover:text-primary transition-colors">{Props.icon && <Props.icon />}</div>
      <span className="group-hover:text-primary text-sm transition-colors">{Props.title}</span>
    </Link>
  );
}
