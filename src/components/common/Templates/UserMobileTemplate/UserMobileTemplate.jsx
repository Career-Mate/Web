import { useState } from 'react';
import TemplateCategory from '../../Templates/TemplateCategory/TemplateCategory.jsx';
import MobilePagination from '../../Pagination/MobilePagination/MobilePagination.jsx';
import MobileTextArea from '../../MobileTextarea/MobileTextarea.jsx';
import UnderlineButton from '../../Button/UnderlineButton/UnderlineButton';
import SquareButton from '../../Button/SquareButton/SquareButton.jsx';

const UserMobileTemplate = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <>
            <TemplateCategory />

            <h5>※ 최대 2개까지 작성할 수 있어요.</h5>

            <div style={{ padding: '16px' }}>
                <h2>현재 페이지: {currentPage}</h2>
                <MobileTextArea label={'1. 직무명'} />
            </div>

            <UnderlineButton fontSize="12px">전체 내용 삭제하기</UnderlineButton>

            <SquareButton width="131px" backgroundColor={'deepgreen'}>
                저장
            </SquareButton>

            <MobilePagination totalPages={2} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </>
    );
};

export default UserMobileTemplate;
