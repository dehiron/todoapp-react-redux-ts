import React from 'react';

type FirstComponentProps = {
    message: string
    children: React.ReactNode //チルドレンとして子要素を受け取る
};

const FirstComponent:React.FC<FirstComponentProps> = ({ message, children }) => {
    
    return ( 
        <div >
            <p>ここからFirst component</p>
            <p>{ message }</p>
            <div>
                {children}
            </div>
        </div>
    )
}
export default FirstComponent;