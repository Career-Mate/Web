import React, { useState } from 'react';
import LogoutModal from './components/Modals/LogoutModal/LogoutModal';

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 모달 열기 함수
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    // 모달 닫기 함수
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    // 로그아웃 함수
    const handleLogout = () => {
        console.log('로그아웃되었습니다.');
        setIsModalOpen(false);
    };

    return (
        <div>
            <button onClick={handleOpenModal}>로그아웃</button>

            {isModalOpen && (
                <LogoutModal onCancel={handleCloseModal} onLogout={handleLogout} />
            )}
        </div>
    );
};

export default App;
