import {classNames} from 'shared/lib/classNames/classNames';
import {useState} from 'react';
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher';
import {LangSwitcher} from 'shared/ui/LangSwitcher/LangSwitcher';
import {Button, ButtonSize} from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {RoutePath} from 'shared/config/routeConfig/routeConfig';

import AboutIcon from 'shared/assets/icons/about-20-20 (1).svg'
import MainIcon from 'shared/assets/icons/main-20-20 (1).svg'
import {Link} from 'react-router-dom';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {

        setCollapsed((prev) => !prev);

    };


    const check = (bills: number[]) => {


        let cache = 0


        for (let elem of bills) {

            if (elem === 5) {

                cache = cache + 5
            }
            if (elem === 10) {
                cache = cache - 5
            }
            if (elem === 20) {
                cache = cache - 15
            }
        }

        return cache >= 0;



    }

    console.log(check([5, 5, 10, 10, 5]))

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
            <Button
                className={cls.collapsedBtn}
                data-testid="sidebar-toggle"
                onClick={onToggle}
                square
                size={ButtonSize.BIG}
            >
                {collapsed ? '<' : '>'}
            </Button>

            {collapsed ? (

                    <div className={cls.itemsShort}>
                        <Link to={RoutePath.main}>
                            <MainIcon className={cls.iconShort}/>
                        </Link>


                        <Link to={RoutePath.about}>
                            <AboutIcon className={cls.iconShort}/>
                        </Link>
                    </div>

                )
                : (

                    <div className={cls.items}>

                        <AppLink
                            className={cls.link}
                            theme={AppLinkTheme.SECONDARY}
                            to={RoutePath.main}>
                            <MainIcon className={cls.iconFull}/>
                            Главная
                        </AppLink>

                        <AppLink
                            className={cls.link}
                            theme={AppLinkTheme.SECONDARY}
                            to={RoutePath.about}>
                            <AboutIcon className={cls.iconFull}/>
                            О сайте
                        </AppLink>

                    </div>
                )


            }


            <div className={cls.switchers}>
                <ThemeSwitcher className={cls.themeSwitcher}/>
                <LangSwitcher collapsed={collapsed} className={cls.lang}/>
            </div>
        </div>
    );
};
