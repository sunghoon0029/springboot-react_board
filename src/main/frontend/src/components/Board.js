import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Board = ({ id, writer, title, contents, hits, createdTime }) => {

    const navigate = useNavigate();

    const moveToUpdate = () => {
        navigate('/update/' + id);
    };

    const deleteBoard = async () => {
        if (window.confirm('게시글을 삭제하시겠습니까?')) {
            await axios.delete(`http://localhost:8080/board/delete/${id}`).then((res) => {
                alert('삭제 완료');
                navigate('/board/paging');
            });
        };
    };

    const moveToList = () => {
        navigate('/board/paging');
    };

    return (
        <div>
            <div>
                <h2>{title}</h2>
                <h5>{writer}</h5>
                <h5>{createdTime}</h5>
                <h5>{hits}</h5>
                <hr />
                <p>{contents}</p>
            </div>
            <div>
                <button onClick={moveToUpdate}>게시글 수정</button>
                <button onClick={deleteBoard}>게시글 삭제</button>
                <button onClick={moveToList}>게시글 목록</button>
            </div>
        </div>
    );
};

export default Board;