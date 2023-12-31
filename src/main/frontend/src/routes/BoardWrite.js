import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BoardWrite = () => {

    const navigate = useNavigate();

    const [board, setBoard] = useState({
        writer: '',
        title: '',
        contents: '',
    });

    const { writer, title, contents } = board;

    const onChange = (event) => {
        const { value, name } = event.target;
        setBoard({
            ...board,
            [name]: value,
        });
    };

    const saveBoard = async () => {
        await axios.post('http://localhost:8080/board/save', board).then((res) => {
            alert('작성 완료');
            navigate('/board/paging');
        });
    };

    const backToList = () => {
        navigate('/board/paging');
    };

    return (
        <div>
            <div>
                <span>제목</span>
                <input type="text" name="title" value={title} onChange={onChange} />
            </div>
            <br />
            <div>
                <span>작성자</span>
                <input type="text" name="writer" value={writer} onChange={onChange} />
            </div>
            <br />
            <div>
                <span>내용</span>
                <textarea
                    name="contents"
                    cols="30"
                    rows="10"
                    value={contents}
                    onChange={onChange}
                ></textarea>
            </div>
            <br />
            <div>
                <button onClick={saveBoard}>저장</button>
                <button onClick={backToList}>취소</button>
            </div>
        </div>
    );
};

export default BoardWrite;