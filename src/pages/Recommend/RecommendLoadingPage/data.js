export const data = [
    {
        title: '1. 인턴 경험',
        items: [
            { label: '직무명', content: '프론트엔드 개발자', type: 'text' },
            {
                label: '근무기간',
                startDate: new Date('2021-03-01'),
                endDate: new Date('2022-01-01'),
                type: 'date',
            },
            { label: '회사명', content: 'Kakao Bank', type: 'text' },
            {
                label: '주요 성과 및 역할',
                content: 'JavaScript와 React를 사용하여 웹 애플리케이션 개발 및 성능 최적화',
                type: 'text',
            },
        ],
    },
    {
        title: '2. 프로젝트 경험',
        items: [
            { label: '프로젝트명', content: '집꾸 서비스 개발', type: 'text' },
            {
                label: '기간',
                startDate: new Date('2024-07-01'),
                endDate: new Date('2024-08-31'),
                type: 'date',
            },
            {
                label: '설명',
                content: 'AI 인테리어 컨설팅 및 매거진 제공 웹 사이트',
                type: 'text',
            },
        ],
    },
    {
        title: '3. 기타 활동',
        items: [
            { label: '활동명', content: '창업 동아리 팀장', type: 'text' },
            {
                label: '기간',
                startDate: new Date('2022-03-01'),
                endDate: new Date('2022-04-01'),
                type: 'date',
            },
            {
                label: '설명',
                content: '한양대 ERICA 창업 동아리 활동',
                type: 'text',
            },
        ],
    },
    {
        title: '4. 보유 기술 및 업무 성향',
        items: [
            { label: '보유 기술', content: 'JavaScript, React, Python', type: 'text' },
            {
                label: '강점',
                content: 'UI/UX 구현 능력 및 성능 최적화 경험',
                type: 'text',
            },
        ],
    },
];

export const textTemplateData = [
    {
        label: '위에 기술한 경험들을 통해 내가 성장한 부분은 무엇인가요?',
        content: '문제 해결 능력, 협업과 커뮤니케이션 능력 향상',
    },
    {
        label: '다양한 경험을 통해 발견한 나의 성향이나 강점은 무엇인가요?',
        content: '팀워크와 높은 신뢰도, 성실함과 책임감',
    },
    {
        label: '다양한 경험을 통해 발견한 나의 단점은 무엇이고, 이를 어떻게 보완할 계획인가요?',
        content: '선택과 집중을 잘하지 못함. 포기해야 하는 연습을 지속적으로 하겠습니다.',
    },
    {
        label: '앞으로 어떤 모습의 웹 개발자로 성장하고 싶나요?',
        content: '다양한 문제를 해결하며 성장하는 개발자',
    },
];
