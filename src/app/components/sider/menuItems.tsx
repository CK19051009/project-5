import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
interface Menu {
  icon: ReactNode;
  title: string;
  link: Url;
  flag?: Boolean;
}
export default function MenuItems(props: { item: Menu; iShow: Boolean }) {
  const { item, iShow = false } = props;


  const pathname = usePathname();
  return (
    <>
      {iShow && (
        <li className="mb-[30px]">
          <Link
            href={item.link}
            className={
              "flex items-center hover:text-primary " +
              (item.link === pathname ? "text-primary" : "text-white")
            }
          >
            <span className="md:text-[24px] md:mr-[20px] text-[18px] mr-[15px]">
              {item.icon}
            </span>
            <span className="md:font-[700] md:text-[16px] text-[18px] font-[600]">
              {item.title}
            </span>
          </Link>
        </li>
      )}
    </>
  );
}
