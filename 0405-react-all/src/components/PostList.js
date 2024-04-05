import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function PostList() {
    //작성에 해당하는 PostCreateForm으로 링크
    //게시글 목록 보여줌

    //리덕스 스토어에서 게시글 목록 상태를 조회
    const posts = useSelector(
        (state) => state.posts.postList //name을 posts로 사용해서 그렇게 접근하면된다
    );
    console.log(posts);
    //새로고침하면 다 없어짐 store도 뭐도..
    //새로고침이 되어도 남아있게하려면 다른라이브러리나 react persisted 혹은 뭐시기..
    return (
        <div>
            <h1>게시판</h1>
            <Link to={'/create'}>작성</Link>
            {/* 게시글 목록 */}
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.content}</li>
                ))}
            </ul>
        </div>
    );
}
