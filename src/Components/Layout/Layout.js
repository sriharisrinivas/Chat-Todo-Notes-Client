import React, { useState } from 'react';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import "./Layout.css";
import { Container } from 'react-bootstrap';
import Feedback from '../Feedback/Feedback';
import FloatButtonComponent from '../LabelBottomNavigation/FloatButtonComponent';

function Layout({ children }) {

    const [showChatModal, setShowChatModal] = useState(false);

    return (
        <div className='layout-container'>

            {showChatModal && <Feedback show={showChatModal} handleClose={() => setShowChatModal(false)} />}

            <Header />

            <div className='d-flex sidebar-and-content-container'>
                <SideBar />
                <Container style={{ height: "calc(100vh - 60px)", width: "100%" }}>
                    {children}
                </Container>
            </div>

            <FloatButtonComponent setShowChatModal={setShowChatModal} />

            {/* <div className={`${window.location.pathname.includes("/chat") ? "d-none" : ""}`} style={{ position: "relative"}} title='Feedback'>
                <i className="fa-solid fa-comments chat-icon-container" onClick={() => setShowChatModal(true)}></i>
            </div> */}

            {/* <div className='footer-main-container' style={{ background: darkModeState ? "black" : "white" }}>
                <Footer />
            </div> */}
        </div>
    );
}

export default Layout;