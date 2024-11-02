
import React, { useEffect } from 'react';
import "./home.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../../Redux/Action/TodosAction';
import { Col, Row } from 'react-bootstrap';
import AddTaskComponent from '../AddTaskComponent/AddTaskComponent';
import TaskList from '../TaskList/tasklist';
import { todosInitialState } from '../../Redux/Reducer/todosListReducer';


function Home() {
    let contentDynamicHeight = useSelector(state => state.SideBarReducer.dynamicContentContainerHeight);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos({
            isFetchAll: true
            // ...todosInitialState.searchObj,
            // toDate: new Date(new Date(new Date().setHours(23, 59, 59, 999)).setYear(new Date().getFullYear() + 1))
        }));
    }, []);

    return (
        <Row className="main-content-container">
            <Col className='content-container pt-3'>
                <AddTaskComponent />
                <br />
                <TaskList />
            </Col>
        </Row>

    );
}

export default Home;