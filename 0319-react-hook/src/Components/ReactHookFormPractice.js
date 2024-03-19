import { useForm } from 'react-hook-form';

export default function ReactHookFormPractice() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const validData = (data) => {
        console.log('데이터', data);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(validData)}>
                <input
                    type="text"
                    placeholder="이름"
                    {...register('username', {
                        required: '이름은 필수항목입니다.',
                    })}
                />
                <br />
                {errors.username?.message}
                <br />
                <input
                    type="number"
                    placeholder="나이"
                    {...register('age', {
                        min: {
                            message: '0 이상의 숫자만 입력가능 합니다',
                            value: 0,
                        },
                    })}
                />
                <br />
                {errors.age?.message}
                <br />
                <button type="submit">제출</button>
            </form>
        </div>
    );
}
