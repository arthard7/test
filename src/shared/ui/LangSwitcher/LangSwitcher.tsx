import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
    collapsed?: boolean
}

export const LangSwitcher = ({ className, collapsed }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();


    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
        >
            {collapsed ? t('Короткий') : t('Язык')}
        </Button>
    );
};
