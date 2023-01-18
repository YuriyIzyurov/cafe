import React from 'react';
import {CloseIcon, Icon, SidebarBtnWrap, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper} from "./SidebarStyles";

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/' onClick={toggle}>Главная</SidebarLink>
                    <SidebarLink to='menu' onClick={toggle}>Меню</SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>Услуги</SidebarLink>
                    <SidebarLink to='rooms' onClick={toggle}>залы</SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute href='signin'>Войти</SidebarRoute>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;