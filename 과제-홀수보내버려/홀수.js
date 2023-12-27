function question(n) {
    // 여기에서 코드 작성해주세요!
    let result = [];
    for (i = 0; i <= n; i++){
            result.push(i);
    }
    return result;
}

// 여기는 결과값 함수이므로 신경쓰지 않으셔도 됩니다!
Test(
    question,
    [[10], [3], [8], [6], [9]],
    [
        [0, 2, 4, 6, 8, 10],
        [0, 2],
        [0, 2, 4, 6, 8],
        [0, 2, 4, 6],
        [0, 2, 4, 6, 8],
    ]
);

function Test(question, conditions, results) {
    for (let index in results) {
        const result = Array.isArray(results[index])
            ? JSON.stringify(question(...conditions[index])) === JSON.stringify(results[index])
            : question(...conditions[index]) === results[index];
        console.log(`테스트 ${+index + 1}`, result);
        if (!result) {
            console.log('테스트에 통과하지 못했습니다.');
            return;
        }
    }

    console.log('테스트에 통과하셨습니다!');
}