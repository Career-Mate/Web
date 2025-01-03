import React, { useState } from 'react';
import Modal from './components/Modal/Modal';

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const userName = "김단아";

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button onClick={handleOpenModal}>모달 열기</button>
            {isModalOpen && (
                <Modal 
                    text={`${userName} 메이트님의 관심 직무에 맞는 템플릿을 제공해드릴게요!`}
                    onCancel={handleCloseModal}
                />
            )}
        </div>
    );
};

export default App;