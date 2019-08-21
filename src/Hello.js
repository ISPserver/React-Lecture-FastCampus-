import React from 'react';

function Hello( {color , name, isSpecial}) {
    return (
        <div style={{
             color
        }}>
            {isSpecial ? <b>*</b> : null}
            {/* {isSpecial && <b>*</b>} 이럴땐 앤드연산자가 더 편함 위에보다*/}
            안녕하세요 {name}
        </div>
    );
}

Hello.defaultProps = {
    name: '이름없음'
};

export default Hello;