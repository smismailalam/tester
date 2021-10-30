import { connect } from "react-redux";
import { posts } from "../redux/actions/dashboard";
import Store from "../redux/Store";
import { Link } from 'react-router-dom'
import { Container ,  Row, Col , Button , Table} from 'react-bootstrap';
import { useEffect } from "react";
const axios = require('axios');
const Home = () => {
    let postz = Store.getState().getPosts.posts;

    const postData = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            Store.dispatch(posts(res.data));
            console.log(res);
        })
        .catch((err) =>{
            console.log(err)
        })
    }
    useEffect(()=>{
        postData();
    },[])
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Button variant="primary">
                        <Link to="/Add">Add</Link>
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>user id</th>
                        <th>title</th>
                        <th>body</th>
                        <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            postz.map((post , i)=>{
                                return (
                                    <tr>
                                        <td>{post.id}</td>
                                        <td>{post.userId}</td>
                                        <td>{post.title}</td>
                                        <td>{post.body}</td>
                                        <button>
                                            <Link to={`/Edit/${post.id}`}>Edit</Link>
                                        </button>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};
const mapStateToProps = state => ({
    getPosts: state.getPosts
})

export default connect(mapStateToProps)(Home);
