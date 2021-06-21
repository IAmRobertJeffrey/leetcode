function twoSum(nums, target) 
{ 
    for(i = 0; i < nums.length; i++)
        {
            for(j = i + 1; j < nums.length; j++)
                {
                    const currentSum = nums[i] + nums[j];  
                    if(currentSum === target)
                        {
                            const answerArray = [];
                            answerArray.push(i);
                            answerArray.push(j);
                            return answerArray;
                        }
                }
        }
};