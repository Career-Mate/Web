export const mapJobDetailData = (serverData) => {
    if (!serverData || !serverData.data) {
        console.error("Invalid server data:", serverData);
        return [
            { title: "[기업명]", content: "정보 없음" },
            { title: "[채용 형태]", content: "정보 없음" },
            { title: "[경력 조건]", content: "정보 없음" },
            { title: "[학력 조건]", content: "정보 없음" },
            { title: "[연봉]", content: "정보 없음" },
            { title: "[근무 위치]", content: "정보 없음" }
        ];
    }

    const { companyName, employmentName, experienceLevelName, educationLevelName, salaryName, region } = serverData.data;

    return [
        { title: "[기업명]", content: companyName || "정보 없음" },
        { title: "[채용 형태]", content: employmentName || "정보 없음" },
        { title: "[경력 조건]", content: experienceLevelName || "정보 없음" },
        { title: "[학력 조건]", content: educationLevelName || "정보 없음" },
        { title: "[연봉]", content: salaryName || "정보 없음" },
        { title: "[근무 위치]", content: region || "정보 없음" }
    ];
};
