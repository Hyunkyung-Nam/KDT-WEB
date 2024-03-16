import React from 'react';

export default function ContentBox(props) {
    const { userData, deleteData } = props;
    return (
        <div>
            {userData.map((element, idx) => {
                return (
                    <h1
                        onDoubleClick={() => {
                            deleteData(element);
                        }}
                    >{`${element.name} : ${element.email}`}</h1>
                );
            })}
        </div>
    );
}
