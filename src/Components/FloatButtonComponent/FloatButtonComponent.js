import React, { useState } from 'react';
import { BookOutlined, CommentOutlined, CustomerServiceOutlined, LogoutOutlined, MoreOutlined, ScheduleOutlined } from '@ant-design/icons';
import { FloatButton, Switch } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Nav } from 'react-bootstrap';
import { updateSelectedNotes } from '../../Redux/Action/NotesAction';
import "./FloatButtonComponent.css";

const FloatButtonComponent = ({ setShowChatModal }) => {

  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };

  const onLeaveFocus = () => {
    dispatch(updateSelectedNotes({ id: "", title: "Select Notes", description: "" }));
    setOpen(false);
};

  return (
    <>
      <FloatButton.Group
        open={open}
        trigger="click"
        onClick={() => setOpen(!open)}
        shape='square'
        style={{
          insetInlineEnd: 24,
        }}
        icon={<MoreOutlined />}
      >
        <Nav.Link eventKey={1} as={Link} onClick={onLeaveFocus} to="/home">
            <FloatButton className='float-button-group-nav'  icon={<ScheduleOutlined />} tooltip="Todo" />
        </Nav.Link>

        <Nav.Link eventKey={2} as={Link} onClick={onLeaveFocus} to="/cashbook">
            <FloatButton className='float-button-group-nav' icon={<BookOutlined />} tooltip="Cashbook" />
        </Nav.Link>

        <Nav.Link eventKey={3} as={Link} onClick={onLeaveFocus} to="/notes">
          <FloatButton className='float-button-group-nav' tooltip="Notes" />
        </Nav.Link>

        <FloatButton tooltip="Feedback" icon={<CommentOutlined />} onClick={() => setShowChatModal(true)} />

        <FloatButton tooltip="Logout" icon={<LogoutOutlined />} onClick={onLogout} />
      </FloatButton.Group>
    </>
  );
};
export default FloatButtonComponent;