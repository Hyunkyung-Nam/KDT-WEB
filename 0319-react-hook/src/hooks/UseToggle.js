import { useState } from 'react';
//로직을 분리해서 함수로 사용하면된다
//initValue를 넘겨주면 그냥 그 값사용하고 안념겨줫으면 false를 기본값으로 사용하겠다는 의미
export default function UseToggle(initValue = false) {
    //value : 토글의 상태
    //setValue : 토글 상태 변화 시키는 setter
    //간단한 형태로 훅을 만든다 생각하면된다.
    const [value, setValue] = useState(initValue);

    //토글 상태 스위칭
    const toggleValue = () => {
        setValue(!value);
    };
    return [value, toggleValue];
}
