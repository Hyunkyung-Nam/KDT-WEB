import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/postSlice';
import { useNavigate } from 'react-router-dom';
export default function PostCreateForm() {
    // 게시글 작성 폼 -> react-hook-form이용예정

    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        const newPost = {
            id: Date.now(),
            title: data.title,
            content: data.content,
        };
        dispatch(addPost(newPost));
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="title">제목</label>
                <input
                    type="text"
                    id="title"
                    {...register('title', { required: '제목은 필수' })}
                />
            </div>
            <div>
                <label htmlFor="content">내용</label>
                <textarea
                    id="content"
                    cols="30"
                    rows="10"
                    {...register('content')}
                ></textarea>
            </div>
            <button>작성</button>
        </form>
    );
}
