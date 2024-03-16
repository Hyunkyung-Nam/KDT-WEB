import { useState } from 'react';
import ContentBox from './ContentBox';
import Input from './Input';

export default function Container() {
    const [userData, setUserData] = useState([
        { name: '코디', email: 'code@gmail.com' },
        { name: '남현경', email: 'hk_dev@naver.com' },
    ]);
    const addUserData = (obj) => {
        if (obj.name.trim().length === 0 || obj.email.trim().length === 0) {
            alert('이름과 이메일을 모두 작성해 주세요');
            return;
        }
        setUserData((prevData) => {
            return userData.concat({
                name: obj.name,
                email: obj.email,
            });
        });
        alert('등록되었습니다.');
    };
    const removeUserData = (obj) => {
        if (!window.confirm('삭제하시겠습니까?')) {
            return;
        }
        const newUserData = userData.filter((element) => {
            return element !== obj;
        });
        setUserData(newUserData);
    };
    return (
        <div>
            <Input onClick={addUserData} />
            <ContentBox userData={userData} deleteData={removeUserData} />
        </div>
    );
}
