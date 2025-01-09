import styled from 'styled-components';
import React, { useState } from 'react';
import LogoutPopup from '../components/Popups/LogoutPopup/LogoutPopup';

const Test = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // 모달 열기 함수
    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    // 모달 닫기 함수
    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    // 로그아웃 함수
    const handleLogout = () => {
        console.log('로그아웃되었습니다.');
        setIsPopupOpen(false);
    };

    return (
        <div>
            <button onClick={handleOpenPopup}>로그아웃</button>

            {isPopupOpen && <LogoutPopup onCancel={handleClosePopup} onLogout={handleLogout} />}
        </div>
    );
};
export default Test;
