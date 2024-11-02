import React, { useEffect } from 'react';
import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem } from 'cdbreact';
import { Button, Col, Form, NavLink, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { updateContentContainerHeight } from '../../Redux/Action/SideBarAction';
import { useDispatch, useSelector } from 'react-redux';
import { startLoaderAction, stopLoaderAction } from '../../Redux/Action/LoaderAction';
import { API_END_POINTS, CONSTANTS } from '../../config';
import { REDUX_CONSTANTS } from '../../Redux/reduxConstants';
import { updateSelectedNotes } from '../../Redux/Action/NotesAction';

function SideBar() {

    const userDetails = useSelector(state => state.userDetailsReducer);

    const getProfile = async () => {
        dispatch(startLoaderAction());
        let url = process.env.REACT_APP_SERVER_URL + API_END_POINTS.GET_PROFILE;
        let options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                "Authorization": `Bearer ${sessionStorage.getItem("token")}`
            }
        };
        let response = await fetch(url, options);
        dispatch(stopLoaderAction());
        response = await response.json();
        dispatch({
            type: REDUX_CONSTANTS.UPDATE_USER_DETAILS,
            payload: response
        });
    };


    useEffect(() => {
        getProfile()
    }, []);

    const dispatch = useDispatch();

    const onExpandCollapseSideBar = () => {
        handleOutside();
    };

    const handleOutside = () => {
        let ele = document.getElementById("sidebar");
        if (ele) {
            ele = ele.getAttribute("class");
            if (!ele.includes("toggled")) {
                dispatch(updateContentContainerHeight(95));
            } else {
                dispatch(updateContentContainerHeight(84));
            }
        } else {
            dispatch(updateContentContainerHeight(100));
        }

    };

    const onLeaveFocus = () => { 
        dispatch(updateSelectedNotes({ id: "", title: "Select Notes", description: "" }));
    }

    return (
        <div className='sidebar-todo' style={{ display: 'flex', overflow: 'scroll initial' }}>
            <CDBSidebar textColor="#333" backgroundColor="#f8f9fa" id="sidebar" >
                <CDBSidebarHeader prefix={<i onClick={onExpandCollapseSideBar} className="fa fa-bars fa-large"></i>}>
                    {/* <a href="/home" className="text-decoration-none" style={{ color: 'inherit' }}> */}
                        Todo - CashBook
                    {/* </a> */}
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact as = {Link} onClick={onLeaveFocus} to="/home" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
                        </NavLink>
                        {/* <NavLink exact as = {Link} onClick={onLeaveFocus} to="/addNewTask" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="columns">Add New Task</CDBSidebarMenuItem>
                        </NavLink> */}
                        <NavLink exact as = {Link} onClick={onLeaveFocus} to="/myTasks" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="table">My Tasks</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact as = {Link} onClick={onLeaveFocus} to="/gridView" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="list">Grid View</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact as = {Link} onClick={onLeaveFocus} to="/cashbook" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="book">Cash Book</CDBSidebarMenuItem>
                        </NavLink>
                        {/* <NavLink exact as = {Link} onClick={onLeaveFocus} to="/chat" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user">Chat</CDBSidebarMenuItem>
                        </NavLink> */}
                        <NavLink exact as = {Link} onClick={onLeaveFocus} to="/notes" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="paperclip">Notes</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact as = {Link} onClick={onLeaveFocus} to="/about" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user">About</CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        style={{
                            padding: '20px 5px',
                            "text-transform": "capitalize"
                        }}
                    >
                        {userDetails.firstName} {userDetails.lastName}
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    );
}

export default SideBar;