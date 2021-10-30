import { connect } from "react-redux";
import { Axios } from "axios";
// const api = () => {
function api (){
    Axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{
        console.log(res);
    })
    .catch((err) =>{
        console.log(err)
    })
}
const mapStateToProps = state => ({
    getPosts: state.getPosts
})
export default connect(mapStateToProps)(api);