import TemplateCategory from '../../Templates/TemplateCategory/TemplateCategory.jsx';
import MobilePagination from '../../Pagination/MobilePagination/MobilePagination.jsx';

const UserMobileTemplate = () => {
    return (
        <>
            <TemplateCategory />
            <MobilePagination totalPages={2} currentPage={2} setCurrentPage={2} />
        </>
    );
};

export default UserMobileTemplate;
