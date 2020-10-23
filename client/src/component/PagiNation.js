import React, { useState, useEffect } from 'react';
import { postApis } from './db';

const PagiNation = () => {
    const [posts, setPost] = useState(postApis);
    //console.log(postApis);

    const [showPerPage, setShowPerPage] = useState(4);
    const [pagination, setPagination] = useState({
        start: 0,
        end: showPerPage
    })

    return (
        <div className="page m-5">
            <div className="container py-4">
                <div className="row">
                    {
                        posts.slice(pagination.start, pagination.end).map((post) => (
                            <div className="col-md-3 mb-3" key={post.id}>
                                <div className="card">
                                    <div className="card-body">
                                        <h5>#{post.id}{post.title}</h5>
                                        <p>{post.body}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Page showPerPage={showPerPage} />
        </div>
    );
}

const Page = (props) => {
    const { showPerPage } = props;
    const [counter, setCounter] = useState(1);
    useEffect(() => {
        console.log("object");
        const value = showPerPage * counter;

    }, [counter])
    return (
        <div className="d-flex justify-content-between">
            <button className="btn btn-primary"
                onClick={() => setCounter(counter - 1)}>Previous</button>
            <button className="btn btn-primary" onClick={() => setCounter(counter + 1)}>Next</button>
        </div>
    )
}

export default PagiNation;