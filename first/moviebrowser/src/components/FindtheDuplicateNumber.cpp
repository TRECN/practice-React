class Solution {
public:
    int findDuplicate(vector<int>& nums) {
        int result=0;
        int count=0;
        for(auto a:nums){
            for(int i=0;i<nums.size();i++){
                if(a==nums[i]){
                    count++;
                }
            }
            if(count>=2){
                result=a;
                break;
            }
            else{
                count=0;  
            }
        }
        return result;
    }
};