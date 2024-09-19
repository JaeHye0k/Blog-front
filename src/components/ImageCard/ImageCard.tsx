import gold5 from "../../assets/gold5.png";
import { imageCard, thumbnail } from "./ImageCard.css";
import { useNavigate, useLocation } from "react-router-dom";
import { Post } from "../../types/post.type";

const ImageCard: React.FC<{ post: Post }> = ({ post }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const currentPath = location.pathname;

    return (
        <div className={imageCard} onClick={() => navigate(`${currentPath}/${post.id}`)}>
            <img src={gold5} className={thumbnail}></img>
            <div>
                <div>{post.title}</div>
            </div>
        </div>
    );
};

export default ImageCard;
