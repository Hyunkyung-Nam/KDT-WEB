import React from 'react';
import styles from './styles/cssModule.module.css';

/**CSS Module
 * - 클래스명 중복 방지 // 하나의 페이지 안에서 여러개의 컴포넌트들이 쓰일 때 중복방지
 * - css 파일 확장자 : .module.css로 만들면된다
 * - 리액트 컴포넌트에서 동일한 css를 불러오더라도 고유하게 사용가능
 * - 리액트 컴포넌트 파일에서 해당 파일 css파일을 불러올 때, css파일의 선언한 클래스 이름들이 고유한 값을 가짐
 * - 고유한 css클래스 이름이 만들어지는 과정에서 파일 경로, 파일 이름, 클래스 이름, 해시값 등이 쓰임
 */
export default function CssModuleComponents() {
    console.log(styles);
    return (
        <div className={styles.container}>
            {/* 문자열로 백틱써서 만들어도 되지만 변수두개를 문자열로 만들어서 쓰게하려고 함.
            클래스 이름을 동적으로 사용하고 싶을 때 이렇게 사용할 . 수있다.  */}
            <div className={[styles.box, styles.red].join(' ')}></div>
            <div className={[styles.box, styles.orange].join(' ')}></div>
            <div className={[styles.box, styles.yellow].join(' ')}></div>
        </div>
    );
}
