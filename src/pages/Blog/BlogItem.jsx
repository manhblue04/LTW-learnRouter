import { useParams } from "react-router-dom";
function BlogItem() {

    const { id } = useParams();
    return <h2>Blog Detail for Blog ID: {id}</h2>;

}
export default BlogItem;