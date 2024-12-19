import { getMenu } from "@/api/menu";
import { FirstLevelMenuItem } from "@/interface/menu.interface";
import CoursesIcon from "./icons/courses.svg";
import ServicesIcon from "./icons/services.svg";
import BooksIcon from "./icons/books.svg";
import ProductsIcon from "./icons/product.svg";
import styles from "./Menu.module.css";
import cn from "classnames";

export const Menu = async () => {
  //   console.log(await getMenu(4));
  const firstLevelMenu: FirstLevelMenuItem[] = [
    {
      route: "courses",
      name: "Курси",
      icon: <CoursesIcon />,
      id: await getMenu(0),
    },
    {
      route: "services",
      name: "Сервіси",
      icon: <ServicesIcon />,
      id: await getMenu(1),
    },
    {
      route: "books",
      name: "Книги",
      icon: <BooksIcon />,
      id: await getMenu(2),
    },
    {
      route: "products",
      name: "Товари",
      icon: <ProductsIcon />,
      id: await getMenu(3),
    },
  ];

  // console.log(firstLevelMenu);

  // const buildFirstLevel = () => {
  //   return (
  //     <>
  //       {firstLevelMenu.map((menu, index) => (
  //         <div key={menu.name}>
  //           <a href={`/${menu.route}`}>
  //             <div className={cn(styles.firstLevel, {})}>
  //               {menu.icon}
  //               <span>{menu.name}</span>
  //             </div>
  //           </a>
  //         </div>
  //       ))}
  //     </>
  //   );
  // };
  // const buildSeconfLevel = () => {};
  // const buildThirdLevel = () => {};

  return (
    <div className={styles.menu}>
      {firstLevelMenu.map((menu, index) => {
        console.log(menu.id);

        return (
          <div key={menu.name}>
            <a href={`/${menu.route}`}>
              <div className={cn(styles.firstLevel, {})}>
                {menu.icon}
                <span>{menu.name}</span>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};
