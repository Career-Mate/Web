import { useState } from 'react';
import MobilePagination from '../../Pagination/MobilePagination/MobilePagination.jsx';
import MobileTextArea from '../../MobileTextarea/MobileTextarea.jsx';
import UnderlineButton from '../../Button/UnderlineButton/UnderlineButton';
import SquareButton from '../../Button/SquareButton/SquareButton.jsx';
import * as S from './styled/styled';

const UserMobileTemplate = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <S.Container>
            <S.TemplateWrapper>
                <MobileTextArea label={'1. 직무명'} />
                <MobileTextArea label={'1. 직무명'} />
            </S.TemplateWrapper>

            <S.ButtonWrapper>
                <UnderlineButton fontSize="12px">전체 내용 삭제하기</UnderlineButton>
            </S.ButtonWrapper>

            <S.SaveButtonWrapper>
                <SquareButton width="100%" backgroundColor={'deepgreen'}>
                    저장
                </SquareButton>
            </S.SaveButtonWrapper>

            <MobilePagination totalPages={2} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </S.Container>
    );
};

export default UserMobileTemplate;
