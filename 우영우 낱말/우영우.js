function question(str) {
    // 여기에서 코드 작성해주세요!
    str =  str.toLowerCase().replace(/[^a-z]/g,"")
    const reversedStr = str.split("").reverse().join("")
  
    let result = reversedStr === str ? true : false
    return result;
  }
  
  // 여기는 결과값 함수이므로 신경쓰지 않으셔도 됩니다!
  Test(
    question,
    [
      ["A man, a plan, a canal: Panama"],
      ["race a car"],
      ["Was it a car or a cat I saw?"],
      ["No 'x' in Nixon"],
      ["No lemon, no melon"],
      ["A Santa at NASA"],
      ["Palindrome example"],
    ],
    [true, false, true, true, true, true, false]
  );
  
  function Test(question, conditions, results) {
    for (let index in results) {
      const result = question(...conditions[index]) === (results[index] === true);
      console.log(`테스트 ${+index + 1}`, result);
      if (!result) {
        console.log("테스트에 통과하지 못했습니다.");
        return;
      }
    }
  
    console.log("테스트에 통과하셨습니다!");
  }