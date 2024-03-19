import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
    const {
        register, //input 할당, value 변경 감지
        handleSubmit, // form submit될 때 호출
        formState: { errors }, // 폼상태 객체, errors값이 들어있음
        watch, // 특정한 폼 필드의 값을 실시간으로 사용
    } = useForm();

    const onValid = (data) => {
        //form안에있는 값을 넘겨준다
        console.log('onValid', data);
    };
    const onInvalid = (data) => {
        console.log('onInValid', data);
    };
    console.log('errors', errors);
    console.log('watch', watch('username'));
    return (
        <div>
            <h1>react-hook-form Library Demo</h1>
            {/* 
            handleSubmit(funcA[, funcB]) : 두개의 함수를 받음
            funcA는 필수, 유효할 때 실행
            funcB는 선택, 유요하지 않을 때 실행
             */}
            <form onSubmit={handleSubmit(onValid, onInvalid)}>
                <input
                    type="text"
                    placeholder="username"
                    //name="username"으로 썼었는데 이걸 register에 명시해주는것
                    //뒤에는 객체형태로 옵션넣어주면된다
                    //입력안했을 때 나타낼 메세지도 지정가능
                    {...register('username', {
                        required: '이름을 입력해주세요.',
                        minLength: {
                            message: '이름은 최소 2글자 이상 작성해주세요.',
                            value: 2,
                        },
                    })}
                />
                <br />
                {/* 에러메세지 */}
                {/* ?는 있으면 하고 없으면 만다 */}
                {errors.username?.message}
                <br />
                <input
                    type="email"
                    placeholder="email (gmail)"
                    {...register('email', {
                        required: '이메일을 입력해주세요.',
                        validate: {
                            //직접만드는거
                            useGmail: (value) => {
                                // 임의의 key
                                return (
                                    value.includes('gmail.com') ||
                                    'gmail로만 가입 가능합니다. ' //에러메세지
                                );
                            },
                        },
                    })}
                />
                <br />
                {errors.email?.message}
                <br />
                <input
                    type="password"
                    placeholder="password"
                    {...register('password')}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
